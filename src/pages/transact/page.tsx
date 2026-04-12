import EnterAmount from "@/components/enterAmount/EnterAmount";
import FailureResponse from "@/components/failureResponse/failure";
import TransactionComplete from "@/components/transactionComplete/complete";
import { AccountContext } from "@/context/account-context";
import authSvc, { UserType } from "@/services/auth.service";
import transactSvc from "@/services/transaction.service";
import { ChevronRight, CreditCard, LoaderCircle, PlusCircle, Search, ShieldCheck, UserSearch } from "lucide-react"
import { useCallback, useContext, useEffect, useRef, useState } from "react";


export interface Transaction {
    _id: string,
    createdAt: string,
    amount: number,
    from: UserType,
    to: UserType,
    idempotencyKey: string

}

const TransactPage = () => {


    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState("");
    const [selectedRecipient, setSelectedRecipient] = useState<UserType>();
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(false)
    const [transaction, setTransaction] = useState<Transaction>()
    const [userLoading, setUserLoading] = useState(false)
    const [search, setSearch] = useState<string>("")
    const [sliderX, setSliderX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [txStatus, setTxStatus] = useState<"idle" | "success" | "failure">("idle")

    const { getAccountInfo } = useContext(AccountContext) as { getAccountInfo: Function }
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const canGoNext = () => {
        if (step === 1) return !!selectedRecipient
        if (step === 2) return !!amount && Number(amount) > 0
        return true
    }
    const nextStep = () => {
        if (!canGoNext()) return
        setStep((prev) => Math.min(prev + 1, 3))
    }
    const cancelTransaction = () => {
        setStep(1)
        setAmount("")
        setSelectedRecipient(undefined)
    }

    const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !sliderRef.current) return

        const rect = sliderRef.current.getBoundingClientRect()

        const clientX =
            "touches" in e ? e.touches[0].clientX : e.clientX

        let newX = clientX - rect.left - 32 // center knob

        const max = rect.width - 90 // knob width

        if (newX < 0) newX = 0
        if (newX > max) newX = max

        setSliderX(newX)
    }
    const handleEnd = () => {
        setIsDragging(false)

        if (!sliderRef.current) return

        const max = sliderRef.current.offsetWidth - 90

        if (sliderX > max * 0.8) {
            setSliderX(max)
            setIsCompleted(true)
            if (navigator.vibrate) navigator.vibrate(40)


        } else {
            setSliderX(0)
        }
    }

    const handleConfirmPayment = async () => {
        if (loading) return;
        setLoading(true)
        try {

            const generateId = () => {
                if (typeof crypto !== "undefined" && crypto.randomUUID) {
                    return crypto.randomUUID()
                }
                return `${Date.now()}-${Math.random().toString(16).slice(2)}`
            }
            const payload = {
                to: selectedRecipient?._id || '',
                amount: Number(amount),
                idempotencyKey: generateId()
            }

            const response = await transactSvc.create(payload)
            setTransaction(response?.data?.detail)
            if (response?.data?.status === 'TRANSACTION_SUCCESS') {
                setTxStatus('success')
            } else {
                setTxStatus('failure')
            }
            if (response?.message === 'Transaction failed') {
                setTxStatus('failure')
            }
            getAccountInfo()
        } catch (exception) {
            console.log(exception)
        }
        finally {
            setLoading(false)
            setSliderX(0)
            setIsCompleted(false)
        }
    }
    const resetAll = () => {
        setTxStatus("idle")
        cancelTransaction()
    }

    const fetchUsers = useCallback(
        async ({ page = 1 }) => {
            setUserLoading(true)
            try {
                const response = await authSvc.fetchUsers(page, 3, search)
                setUsers(response?.detail)
            } catch (exception) {
                console.log(exception)
            }
            finally {
                setUserLoading(false)
            }
        }, [search]
    )


    useEffect(() => {
        fetchUsers({ page: 1 })
    }, [])
    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchUsers({ page: 1 })
        }, 1500)
        return () => {
            clearTimeout(timeout)
        }
    }, [fetchUsers])

    const isSearching = search.trim().length > 0;

    const UserSkeleton = () => {
        return (
            <div className="flex flex-col items-center p-6 rounded-2xl bg-surface animate-pulse">
                <div className="w-16 h-16 rounded-full bg-gray-300 mb-4" />
                <div className="h-3 w-20 bg-gray-300 rounded mb-2" />
                <div className="h-2 w-24 bg-gray-200 rounded" />
            </div>
        )
    }




    return (
        <div className="pt-10 pb-32 max-w-[1200px] mx-auto px-4 md:px-8 ">
            {
                !(step === 3) && (
                    <div className="mb-12">
                        <h1 className="text-4xl font-extrabold  text-gray-700 mb-2">Send Money</h1>
                        <p className="text-on-surface-variant max-w-2xl">Transfer funds instantly to any contact or bank account across the globe with zero fees for e-wallet transfers.</p>

                    </div>
                )
            }
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">

                <div className="lg:col-span-12 space-y-8  ">

                    {
                        txStatus === 'success' ? (<TransactionComplete onClose={resetAll} data={transaction} />) : txStatus === 'failure' ? (<FailureResponse onRetry={resetAll} data={selectedRecipient} amount={amount} />) : (<>
                            {
                                (step === 1) && (
                                    <section className="bg-surface-container-lowest  p-8 shadow-sm rounded-3xl">
                                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary" data-icon="person_search"><UserSearch className="h-5 w-5" /></span>
                                            Select Recipient
                                        </h2>
                                        <div className="relative mb-10">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search"><Search className="h-5 w-5" /></span>

                                            <input onChange={(e) => {
                                                setSearch(e.target.value)
                                            }} className="w-full bg-surface-container-low border-none rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-container text-on-surface placeholder:text-on-surface-variant" placeholder="Search name, or email..." type="text" />
                                        </div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">
                                            {isSearching ? "Search Results" : "Recent Contacts"}
                                        </p>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {userLoading
                                                ? Array.from({ length: 3 }).map((_, i) => <UserSkeleton key={i} />)
                                                :
                                                users.length === 0 ? (
                                                    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                                                        <UserSearch className="h-10 w-10 text-gray-400 mb-3" />
                                                        <p className="text-on-surface font-semibold">
                                                            {isSearching ? "No users found" : "No recent contacts"}
                                                        </p>
                                                        <p className="text-sm text-on-surface-variant mt-1">
                                                            {isSearching
                                                                ? "Try searching with a different name or email."
                                                                : "Start by adding a new contact."}
                                                        </p>
                                                    </div>
                                                )
                                                    : users.map((contact) => (
                                                        <button
                                                            key={contact?._id}
                                                            onClick={() => { setSelectedRecipient(contact); nextStep(); }}
                                                            className="flex flex-col items-center p-6 rounded-2xl bg-surface hover:bg-surface-container-high transition-all group"
                                                        >
                                                            <img src={contact?.image || '/images/profile-placeholder.svg'} alt={contact.name} className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-transparent group-hover:ring-primary" />
                                                            <span className="font-bold text-on-surface text-sm">{contact.name}</span>
                                                            <span className="text-xs text-on-surface-variant break-all text-center">{contact.email}</span>
                                                        </button>
                                                    ))}

                                            {
                                                !isSearching && users.length > 0 && (
                                                    <button className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-outline-variant hover:border-primary hover:bg-primary/5 transition-all text-on-surface-variant hover:text-primary">
                                                        <span className="material-symbols-outlined text-3xl mb-2" data-icon="add_circle"><PlusCircle className="h-6 w-6" /></span>
                                                        <span className="font-bold text-sm">New</span>
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </section>
                                )
                            }
                            {
                                step === 2 && (
                                    <EnterAmount
                                        amount={amount}
                                        setAmount={setAmount}
                                        primaryAction={nextStep}
                                        cancelAction={cancelTransaction}
                                        primaryActionLabel="Next Step"
                                        loading={loading}

                                    />

                                )
                            }

                            {step === 3 && (
                                <section className="pt-0 pb-10 px-0 md:px-6 flex flex-col items-center max-w-lg mx-auto min-h-screen">
                                    <div className="mb-8 animate-fade-in">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full">
                                            <span className="material-symbols-outlined text-[18px] text-primary" data-icon="shield_lock" ><ShieldCheck className="h-5 w-5" /></span>
                                            <span className="font-label text-xs text-primary font-semibold tracking-wider uppercase">Secure Transaction</span>
                                        </div>
                                    </div>
                                    <div className="text-center mb-10">
                                        <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Review &amp; Confirm</h2>
                                        <p className="text-on-surface-variant font-body">Authorize the payment to {selectedRecipient?.name}.</p>
                                    </div>
                                    <div className="w-full bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_40px_60px_-15px_rgba(25,28,30,0.06)] mb-8 relative overflow-hidden">
                                        <div className="flex flex-col items-center mb-10 relative">
                                            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4 overflow-hidden">
                                                <img alt={selectedRecipient?.name} className="w-full h-full object-cover" data-alt="Recipient Alex Rivera profile portrait"
                                                    src={selectedRecipient?.image || '/images/profile-placeholder.svg'}
                                                />
                                            </div>
                                            <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-1">Sending To</span>
                                            <h3 className="font-headline text-xl font-bold text-on-surface">{selectedRecipient?.name || "Recipient"}</h3>
                                            <p className="text-secondary font-medium text-sm">{selectedRecipient?.email}</p>
                                        </div>
                                        <div className="space-y-4 pt-6 border-t border-outline-variant/20">
                                            <div className="flex justify-between items-center">
                                                <span className="text-on-surface-variant font-body">Amount</span>
                                                <span className="font-headline text-lg font-bold text-on-surface">Rs {amount}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-on-surface-variant font-body">Transaction Fee</span>
                                                <span className="font-body text-secondary font-semibold">Free</span>
                                            </div>
                                            <div className="pt-4 mt-4 border-t border-dashed border-outline-variant/40 flex justify-between items-center">
                                                <span className="font-headline text-xl font-extrabold text-on-surface">Total Amount</span>
                                                <span className="font-headline text-2xl font-black text-primary">Rs {amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-surface-container-low rounded-2xl p-4 flex items-center gap-4 mb-10">
                                        <div className="bg-primary/80 text-on-tertiary-container w-12 h-10 rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined" data-icon="credit_card"><CreditCard className="h-7 w-7" /></span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-label text-on-surface-variant uppercase tracking-tighter">Funding Source</p>
                                            <p className="font-body font-semibold text-on-surface">PayU Wallet •••• 8829</p>
                                        </div>
                                        <button className="text-primary font-bold text-sm hover:underline">Edit</button>
                                    </div>
                                    <div className="w-full relative group">
                                        <div className="w-full relative">
                                            <div
                                                ref={sliderRef}
                                                className="h-20 bg-primary/80 rounded-full p-2 flex items-center relative overflow-hidden shadow-lg"
                                                onMouseMove={handleDrag}
                                                onMouseUp={handleEnd}
                                                onMouseLeave={handleEnd}
                                                onTouchMove={handleDrag}
                                                onTouchEnd={handleEnd}
                                            >
                                                {/* Background fill */}
                                                <div
                                                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-secondary-container to-primary opacity-20 transition-all"
                                                    style={{ width: sliderX + 64 }}
                                                />

                                                {/* Text */}
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <span className="text-on-primary font-bold text-sm tracking-widest opacity-50 uppercase">
                                                        {isCompleted ? "Authorized" : "Slide to Authorize"}
                                                    </span>
                                                </div>

                                                {/* Knob */}
                                                <div
                                                    onMouseDown={() => setIsDragging(true)}
                                                    onTouchStart={() => setIsDragging(true)}
                                                    className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl absolute z-10 cursor-pointer"
                                                    style={{ transform: `translateX(${sliderX}px)` }}
                                                >
                                                    <ChevronRight className="h-6 w-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            disabled={!isCompleted}
                                            onClick={() => {
                                                handleConfirmPayment()
                                            }} className="mt-12 w-full py-5 bg-primary text-center text-on-primary font-headline font-extrabold rounded-2xl shadow-xl active:scale-95 transition-all duration-200">
                                            {loading ? (<LoaderCircle className="h-6 w-6 animate-spin flex justify-self-center" />) : "Confirm Payment"}
                                        </button>
                                    </div>
                                    <button
                                        onClick={cancelTransaction}
                                        className="mt-8 text-on-surface-variant font-label text-sm font-semibold hover:text-error transition-colors">
                                        Cancel
                                    </button>
                                </section>
                            )}


                            {
                                step === 1 && (
                                    <div className="flex justify-end gap-4">
                                        <button
                                            onClick={prevStep}
                                            className="px-8 py-4 rounded-lg font-bold text-secondary hover:bg-surface-container-high transition-all">Cancel</button>
                                        <button
                                            onClick={nextStep}
                                            disabled={!canGoNext()}
                                            className={`px-12 py-4 rounded-lg font-bold transition-all
    ${canGoNext()
                                                    ? "bg-gradient-to-br from-primary to-primary-container text-on-primary"
                                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                }`}
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                )
                            }
                        </>)
                    }









                </div>
            </div>

        </div>
    )
}









export default TransactPage