import { AccountContext } from "@/context/account-context"
import { formatDateTOYMD, formatNumber } from "@/lib/utils"
import transactSvc from "@/services/transaction.service"
import { BadgeCheck, CircleCheck, Copy, Download, List, LoaderCircle, Lock, MessageSquareWarning, Share2 } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const TransactionDetail = () => {
    const { id } = useParams()
    const [transaction, setTransaction] = useState<any>()
    const account = useContext(AccountContext) as { accountinfo: any }
    const currentAccountId = account?.accountinfo?._id
    const [loading, setLoading] = useState(true)
    const [downloading, setDownloading] = useState(false)


    const fetchTransactionDetail = async () => {
        if (!id) return
        setLoading(true)
        try {
            const response = await transactSvc.fetchDetail(id as string)
            setTransaction(response?.detail)

        } catch (exception) {
            console.log(exception)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchTransactionDetail()
    }, [id])

    const handleDownload = async () => {
        setDownloading(true)
        try {
            const response = await transactSvc.download(id as string)
            console.log(response)
            if (response) {
                const fileUrl = `http://localhost:9005${response.data.receiptUrl}`;
                window.open(fileUrl, "_blank");
            }
        } catch (exception) {
            console.log(exception)
        } finally {
            setDownloading(false)
        }
    }

    const isReceived = transaction?.to?._id === currentAccountId

    const counterParty = isReceived
        ? transaction?.from?.user
        : transaction?.to?.user


    const Skeleton = () => (
        <main className="max-w-4xl mx-auto px-6 pt-12 pb-32 animate-pulse">
            <div className="bg-surface-container-low rounded-[2.5rem] p-1 md:p-2">
                <div className="bg-surface-container-lowest rounded-[2rem] px-8 py-12 md:px-16 md:py-20">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-20">
                        <div className="space-y-4">
                            <div className="h-8 w-40 bg-gray-300/40 rounded-full" />
                            <div className="h-16 w-48 bg-gray-300/40 rounded-xl" />
                            <div className="h-4 w-32 bg-gray-300/40 rounded" />
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-300/40" />
                            <div className="space-y-2">
                                <div className="h-3 w-24 bg-gray-300/40 rounded" />
                                <div className="h-5 w-32 bg-gray-300/40 rounded" />
                                <div className="h-3 w-40 bg-gray-300/40 rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-8 bg-gray-300/30 rounded-2xl space-y-3">
                                <div className="h-3 w-24 bg-gray-300/40 rounded" />
                                <div className="h-5 w-full bg-gray-300/40 rounded" />
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <div className="h-12 w-40 bg-gray-300/40 rounded-full" />
                        <div className="h-12 w-40 bg-gray-300/40 rounded-full" />
                    </div>
                </div>
            </div>
        </main>
    )

    if (loading) return <Skeleton />

    return (


        <main className="max-w-4xl mx-auto px-6 pt-12 pb-32">
            <div className="bg-surface-container-low rounded-[2.5rem] p-1 md:p-2">
                <div className="bg-surface-container-lowest rounded-[2rem] px-8 py-12 md:px-16 md:py-20 relative overflow-hidden shadow-[0_16px_40px_rgba(25,28,30,0.04)]">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary/10 text-tertiary rounded-full">
                                <span className="material-symbols-outlined text-[18px]" ><CircleCheck className="h-5 w-5" /></span>
                                <span className="text-sm font-bold tracking-wide uppercase">Payment Successful</span>
                            </div>
                            <div className="relative inline-block">
                                <h1 className="text-[4rem] md:text-[5rem] font-extrabold leading-none tracking-tighter text-on-surface">
                                    {formatNumber(transaction?.amount) || '0.00'}
                                </h1>
                                <span className="absolute -top-2 -right-12 font-bold text-lg text-primary">NRs</span>
                            </div>
                            <p className="text-on-surface-variant font-medium">{formatDateTOYMD(transaction?.createdAt)} • 14:32 PM</p>
                        </div>
                        <div className="flex items-center gap-4 bg-surface-container p-4 pr-8 rounded-3xl">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-surface-container-lowest">
                                <img className="object-cover h-full w-full" alt="Recipient Avatar" data-alt="professional portrait of a creative director in a stylish studio with soft turquoise and indigo backlighting"
                                    src={(counterParty?.image) || '/images/profile-placeholder.svg'}
                                />
                            </div>
                            <div>
                                <span className="block text-label-sm uppercase tracking-widest text-on-surface-variant font-bold mb-1">{isReceived ? "Received From" : "Sent To"}</span>
                                <h3 className="text-xl font-bold">{counterParty?.name}</h3>
                                <p className="text-sm text-on-secondary-container">{counterParty?.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 rounded-3xl overflow-hidden mb-16">
                        <div className="bg-surface-container-lowest p-8">
                            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest block mb-2">Transaction ID</span>
                            <div className="flex items-center justify-between">
                                <code className="text-lg font-semibold font-mono text-on-surface">VP-9823-XLL-010</code>
                                <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                                    <span className="material-symbols-outlined"><Copy className="h-5 w-5" /></span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-8">
                            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest block mb-2">Funding Source</span>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white" data-icon="lock" ><Lock className="h-5 w-5" /></span>
                                </div>
                                <span className="text-lg font-bold text-on-surface"> Wallet balance</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-8">
                            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest block mb-2">Category</span>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary" data-icon="category"><List className="h-5 w-5" /></span>
                                <span className="text-lg font-bold text-on-surface">Transfer</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-8">
                            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest block mb-2">Service Fee</span>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-on-surface">0.00 NRs</span>
                                <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-black uppercase rounded-full">Waived</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={
                                handleDownload
                            }

                            className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-all">
                            {downloading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : (<>
                                <span className="material-symbols-outlined text-xl"><Download className="h-5 w-5" /></span>
                                Download Receipt
                            </>
                            )
                            }
                        </button>
                        <button className="bg-secondary-container text-on-secondary-fixed-variant px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-secondary-fixed transition-colors active:scale-95">
                            <span className="material-symbols-outlined"><Share2 className="h-5 w-5" /></span>
                            Share Transaction
                        </button>
                        <button className="flex items-center gap-2 text-error font-bold px-6 py-4 hover:bg-error/5 rounded-full transition-colors ml-auto">
                            <span className="material-symbols-outlined"><MessageSquareWarning className="h-5 w-5" /></span>
                            Report an Issue
                        </button>
                    </div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute top-24 -left-12 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -z-10"></div>
                </div>
            </div>
            <div className="mt-12 flex items-center justify-center gap-3 text-on-surface-variant/60">
                <span className="material-symbols-outlined text-sm" ><BadgeCheck className="h-4 w-4" /></span>
                <span className="text-sm font-medium tracking-wide">End-to-end encrypted by PayU Protocol</span>
            </div>
        </main>

    )
}
export default TransactionDetail