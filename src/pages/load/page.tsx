import EnterAmount from "@/components/enterAmount/EnterAmount"
import { AccountContext } from "@/context/account-context"
import { formatNumber } from "@/lib/utils"
import transactSvc from "@/services/transaction.service"
import { Building2, ChevronRight, CreditCard, Ellipsis, Globe, Landmark, Link, Network, Plus, Wallet } from "lucide-react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const LoadPage = () => {

    const [selectedMethod, setSelectedMethod] = useState<string>('')
    const [amount, setAmount] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const account = useContext(AccountContext) as { accountinfo: any }


    const submitEsewa = (url: string, formData: Record<string, any>) => {
        const form = document.createElement("form");
        form.method = "POST";
        form.action = url;

        Object.keys(formData).forEach((key) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = formData[key];
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    };

    const loadfromWallet = async () => {
        if (!amount || Number(amount) <= 0) {
            alert("Enter a valid amount")
            return
        }

        if (!selectedMethod) {
            alert("Select a payment method")
            return
        }
        try {
            setLoading(true)

            const generateId = () => {
                if (typeof crypto !== "undefined" && crypto.randomUUID) {
                    return crypto.randomUUID()
                }
                return `${Date.now()}-${Math.random().toString(16).slice(2)}`
            }
            const payload = {
                amount: Number(amount),
                provider: selectedMethod,
                transaction_uuid: generateId()
            }
            const response = await transactSvc.loadWallet(payload)
            console.log(response)

            if (response?.data?.detail?.url) {
                submitEsewa(response.data.detail.url, response.data.detail.formData
                );
            }

        } catch (exception) {
            console.log(exception)
        } finally {
            setLoading(false)
        }
    }

    const onCancel = () => {
        setSelectedMethod('')
        navigate('/load')
    }



    return (
        <div className="pt-4 px-6 max-w-5xl mx-auto">
            {!selectedMethod && (
                <>
                    <section className="mb-12 mt-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <p className="text-on-surface-variant font-medium tracking-wide label-sm mb-2 uppercase">Current Balance</p>
                                <div className="flex items-start gap-2">
                                    <span className="text-primary font-bold text-xl mt-2">NPR</span>
                                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-700">                                {account?.accountinfo?.balance ? formatNumber(account?.accountinfo?.balance) : "0.00"}
                                        {/* .<span className="text-4xl opacity-40">00</span> */}
                                    </h1>
                                </div>
                            </div>
                            <div className="bg-surface-container-low p-6 rounded-3xl max-w-md border-l-4 border-primary">
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Funds loaded into your Vault are instantly available for domestic transfers, utility payments, and merchant scans. Most methods reflect in <span className="text-primary font-bold">real-time</span>.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <section className="md:col-span-8">
                            <h2 className="text-xl font-bold mb-6 text-on-surface-variant flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary"><Wallet className="h-5 w-5" /></span>
                                E-Wallets
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <button
                                    onClick={() => {
                                        setSelectedMethod('esewa')
                                    }}
                                    className="group bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-primary/60 hover:text-white cursor-pointer shadow-sm">
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center ">
                                        <img src="/images/esewa.webp" className="h-full w-full oject-cover"></img>
                                    </div>
                                    <span className="font-bold tracking-tight">eSewa</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedMethod('khalti')
                                    }}
                                    className="group bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-primary/60 hover:text-white cursor-pointer shadow-sm">
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center ">
                                        <img src="/images/khalti.png" className="h-full w-full oject-cover"></img>
                                    </div>
                                    <span className="font-bold tracking-tight">Khalti</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedMethod('imepay')
                                    }}
                                    className="group bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-primary/60 hover:text-white cursor-pointer shadow-sm">
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center ">
                                        <img src="/images/ime.png" className="h-full w-full rounded-xl oject-cover"></img>
                                    </div>
                                    <span className="font-bold tracking-tight">IME Pay</span>
                                </button>
                            </div>
                        </section>
                        <section className="md:col-span-4">
                            <h2 className="text-xl font-bold mb-6 text-on-surface-variant flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary"><Link className="h-5 w-5" /></span>
                                Linked Banks
                            </h2>
                            <div className="flex flex-col gap-4">
                                <div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 hover:bg-surface-container transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined"><Building2 className="h-5 w-5 text-white" /></span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-on-surface">Kumari Bank</p>
                                        <p className="text-xs text-on-surface-variant uppercase tracking-widest">**** 8829</p>
                                    </div>
                                    <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight className="h-5 w-5" /></span>
                                </div>
                                <div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 hover:bg-surface-container transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                                        <span className="material-symbols-outlined"><Landmark className="h-5 w-5" /></span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-on-surface">Nabil Bank</p>
                                        <p className="text-xs text-on-surface-variant uppercase tracking-widest">**** 1042</p>
                                    </div>
                                    <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight className="h-5 w-5" /></span>
                                </div>
                                <button className="w-full py-4 rounded-2xl border-2 border-dashed border-outline-variant text-on-surface-variant font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                                    <span className="material-symbols-outlined"><Plus className="h-5 w-5" /></span> Link New Bank
                                </button>
                            </div>
                        </section>
                        <section className="md:col-span-12">
                            <h2 className="text-xl font-bold mb-6 text-on-surface-variant flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary"><Ellipsis className="h-5 w-5" /></span>
                                Other Methods
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-primary"><Network className="h-5 w-5" /></span>
                                    <div>
                                        <p className="text-xl font-bold">ConnectIPS</p>
                                        <p className="text-sm text-on-surface-variant">Real-time interbank engine</p>
                                    </div>
                                </div>
                                <div className="bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-primary"><CreditCard className="h-5 w-5" /></span>
                                    <div>
                                        <p className="text-xl font-bold">Debit/Credit Card</p>
                                        <p className="text-sm text-on-surface-variant">Visa, Mastercard, UnionPay</p>
                                    </div>
                                </div>
                                <div className="bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-primary"><Globe className="h-5 w-5" /></span>
                                    <div>
                                        <p className="text-xl font-bold">Wire Transfer</p>
                                        <p className="text-sm text-on-surface-variant">For large international loads</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="my-16 bg-primary p-8 rounded-3xl text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-2xl font-black mb-2">Secure Rapid Funding</h3>
                            <p className="text-white/80 max-w-xl">
                                Every transaction is protected by VaultPay's multi-layer encryption and 2FA. Experience the fastest way to move liquidity across your financial ecosystem.
                            </p>
                        </div>
                        <button className="relative z-10 bg-white text-primary px-6 py-4 rounded-full font-bold text-sm tracking-widest uppercase whitespace-nowrap hover:scale-105 transition-transform">
                            Read Security Whitepaper
                        </button>
                    </section>
                </>
            )
            }

            {
                selectedMethod && (
                    <div className="my-20">
                        <EnterAmount
                            amount={amount}
                            setAmount={setAmount}
                            primaryAction={loadfromWallet}
                            loading={loading}
                            cancelAction={onCancel}
                        />
                    </div>
                )
            }
        </div>
    )
}
export default LoadPage