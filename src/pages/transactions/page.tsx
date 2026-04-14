import { AccountContext } from "@/context/account-context"
import transactSvc from "@/services/transaction.service"
import { ArrowDown, ArrowUp, Calendar, CircleCheck, Download, ListFilter, LoaderCircle, Plus, ShieldCheck, Star, TrendingUp, Wallet } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const TransacitonPage = () => {
    const [transactions, setTransactions] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [limit] = useState(20)
    const [type, setType] = useState<"sent" | "received" | "utility" | "">("")
    const navigate = useNavigate()
    const [downloading, setDownloading] = useState(false)


    const account = useContext(AccountContext) as { accountinfo: any }
    const currentAccountId = account?.accountinfo?._id

    const fetchTransactions = async () => {
        setLoading(true)
        try {
            const response = await transactSvc.listTransactions(page, limit, type)
            setTransactions(response.detail)
        } catch (exception) {
            console.log(exception)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchTransactions()
    }, [type, page])

    const handleStatement = async () => {
        setDownloading(true)
        try {
            const response = await transactSvc.statement()
            console.log(response)
            if (response) {
                const fileUrl = `${import.meta.env.VITE_APP_BACKEND_URL}${response.data.statementUrl}`;
                window.open(fileUrl, "_blank");
            }

        } catch (exception) {
            console.log(exception)
        }
        finally {
            setDownloading(false)
        }
    }

    const filterBtn = (label: any, value: any) => (
        <button
            onClick={() => setType(value)}
            className={`px-6 py-2 rounded-xl text-sm transition-all ${type === value
                ? "bg-primary text-on-primary font-semibold"
                : "text-on-surface-variant hover:bg-surface-container-high font-medium"
                }`}
        >
            {label}
        </button>
    )
    const Skeleton = () => (
        <div className="animate-pulse bg-surface-container-lowest rounded-[2rem] p-5 flex justify-between items-center">
            <div className="flex gap-5 items-center">
                <div className="w-14 h-14 bg-gray-300/30 rounded-2xl"></div>
                <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-300/30 rounded"></div>
                    <div className="h-3 w-28 bg-gray-300/20 rounded"></div>
                </div>
            </div>
            <div className="space-y-2 text-right">
                <div className="h-4 w-16 bg-gray-300/30 rounded"></div>
                <div className="h-3 w-12 bg-gray-300/20 rounded"></div>
            </div>
        </div>
    )


    return (


        <main className="max-w-6xl mx-auto px-6 pt-10 pb-10">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-2">Activity</h1>
                    <p className="text-on-surface-variant body-lg">Review and manage your global transaction flow.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        disabled={downloading}
                        onClick={handleStatement} className="bg-secondary-container text-center text-on-secondary-container px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2">
                        {downloading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : (<>
                            <span className="material-symbols-outlined text-xl"><Download className="h-5 w-5" /></span>
                            Export
                        </>
                        )
                        }
                    </button>
                    <NavLink to={'/send'} className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl"><Plus className="h-5 w-5" /></span>
                        New Transfer
                    </NavLink >
                </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex bg-surface-container-lowest p-1.5 rounded-2xl gap-1">
                    {filterBtn("All", "")}
                    {filterBtn("Sent", "sent")}
                    {filterBtn("Received", "received")}
                    {filterBtn("Utility", "utility")}
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2.5 rounded-2xl border border-outline-variant/10">
                        <span className="material-symbols-outlined text-on-surface-variant text-lg"><Calendar className="h-4 w-4" /></span>
                        <span className="text-sm font-medium text-on-surface-variant">Aug 01 - Aug 31, 2023</span>
                    </div>
                    <button className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2.5 rounded-2xl border border-outline-variant/10 hover:bg-surface-container-high transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant text-lg"><ListFilter className="h-4 w-4" /></span>
                        <span className="text-sm font-medium text-on-surface">Filters</span>
                    </button>
                </div>
            </div>
            <div className="space-y-4">
                {/* <div className="flex items-center gap-4 px-2 py-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Today, August 24</span>
                    <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
                </div> */}

                {!loading && transactions.length === 0 && (
                    <div className="text-center py-48">
                        <Wallet className="mx-auto h-10 w-10 text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold text-on-surface mb-2">
                            You don’t have any transactions
                        </h3>
                        <p className="text-on-surface-variant">
                            Start by sending or receiving money.
                        </p>
                    </div>
                )}
                {loading ? Array.from({ length: 10 }).map((_, i) => <Skeleton key={i} />)
                    :
                    transactions.map((txn) => {
                        // const isSent = txn.from._id === currentAccountId
                        const isReceived = txn.to._id === currentAccountId

                        return (
                            <div key={txn._id} onClick={() => {
                                navigate(txn._id)
                            }} className="group bg-surface-container-lowest hover:bg-surface-container transition-all duration-300 rounded-[2rem] p-5 flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                        ${isReceived ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-primary-fixed text-on-primary-fixed-variant"}`}>

                                        {isReceived ? (
                                            <ArrowDown className="h-5 w-5 -rotate-45" />
                                        ) : (
                                            <ArrowUp className="h-5 w-5 rotate-[-45deg]" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-on-surface">{isReceived ? `Received from ${txn?.from?.user?.name} ` : `Sent to ${txn?.to?.user?.name}`}   </h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[10px]" data-weight="fill" ><CircleCheck className="h-3 w-3" /></span>
                                                {txn.status}
                                            </span>
                                            <span className="text-xs hidden md:block text-on-surface-variant font-medium"> {new Date(txn.createdAt).toLocaleTimeString()} • P2P Transfer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className={`text-xl font-extrabold tracking-tight 
                        ${isReceived ? "text-gray-500" : "text-gray-500"}`}>

                                        {isReceived ? "+" : "-"} Rs {txn.amount}
                                    </div>
                                    <div className="text-xs text-on-surface-variant/70 font-medium">
                                        ID: #{txn._id.slice(-6)}
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }


                <div className="flex justify-center gap-4 mt-10">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="px-4 py-2 rounded-xl bg-surface-container-low disabled:opacity-40"
                    >
                        Prev
                    </button>

                    <span className="px-4 py-2 text-gray-600 font-semibold">Page {page}</span>

                    <button
                        onClick={() => setPage((p) => p + 1)}
                        className="px-4 py-2 rounded-xl text-gray-600 bg-surface-container-low"
                    >
                        Next
                    </button>
                </div>


            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary p-8 rounded-[2rem] text-on-primary">
                    <span className="material-symbols-outlined text-4xl mb-4"><TrendingUp className="h-6 w-6" /></span>
                    <h4 className="text-xl font-bold mb-2">Spending Insight</h4>
                    <p className="text-primary-fixed-dim font-medium mb-6">Your utility payments increased by 12% this month.</p>
                    <a className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold transition-all" href="#">View Report</a>
                </div>
                <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4"><ShieldCheck className="h-6 w-6" /></span>
                    <h4 className="text-xl font-bold mb-2">Security Audit</h4>
                    <p className="text-on-surface-variant font-medium mb-6">All transactions are secured with 256-bit AES encryption.</p>
                    <a className="inline-block text-primary text-sm font-bold hover:underline transition-all" href="#">Manage Security</a>
                </div>
                <div className="bg-tertiary p-8 rounded-[2rem] text-on-tertiary relative overflow-hidden">
                    <span className="material-symbols-outlined text-4xl mb-4"><Star className="h-6 w-6" /></span>
                    <h4 className="text-xl font-bold mb-2">Vault Rewards</h4>
                    <p className="text-on-tertiary-container font-medium mb-6">You earned 450 points from utility payments.</p>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary-fixed opacity-10 rounded-full"></div>
                    <a className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold transition-all" href="#">Claim Points</a>
                </div>
            </div>
        </main>
    )
}

export default TransacitonPage