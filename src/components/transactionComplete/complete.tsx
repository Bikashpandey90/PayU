import { formatDateTOYMD } from "@/lib/utils"
import { CheckCircle, ChevronLeft, Copy, Share } from "lucide-react"

const TransactionComplete = ({ onClose, data }: any) => {
    return (

        <div className="flex-grow flex items-center justify-center px-0 md:px-4 py-8">
            <div className="max-w-md w-full">
                <div className="bg-surface-container-lowest rounded-3xl shadow-[0_20px_50px_rgba(25,28,30,0.06)] overflow-hidden relative">
                    <div className="pt-12 pb-8 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-5xl font-bold" ><CheckCircle className="h-8 w-8" /></span>
                        </div>
                        <h1 className="font-headline font-extrabold text-2xl text-on-surface tracking-tight mb-2">Payment Successful!</h1>
                        <p className="text-on-surface-variant font-medium">Your transaction has been processed.</p>
                    </div>
                    <div className="bg-surface-container-low mx-6 py-6 rounded-2xl text-center mb-8">
                        <span className="text-on-surface-variant font-headline font-bold text-sm tracking-widest uppercase">AMOUNT PAID</span>
                        <div className="text-4xl font-headline font-extrabold text-primary tracking-tighter mt-1">Rs {data?.amount}</div>
                    </div>
                    <div className="px-8 pb-10 space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="text-on-surface-variant text-sm font-medium">Recipient</span>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                                    <span className="text-primary font-bold text-xs">AR</span>
                                </div>
                                <span className="text-on-surface font-semibold">{data?.to?.user?.name}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-y-6">
                            <div>
                                <span className="block text-on-surface-variant text-xs font-bold tracking-wider uppercase mb-1">Date</span>
                                <span className="text-on-surface font-semibold">{formatDateTOYMD(data?.createdAt)}</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-on-surface-variant text-xs font-bold tracking-wider uppercase mb-1">Time</span>
                                <span className="text-on-surface font-semibold">02:45 PM</span>
                            </div>
                            <div className="col-span-2">
                                <span className="block text-on-surface-variant text-xs font-bold tracking-wider uppercase mb-1">Transaction ID</span>
                                <div className="flex items-center justify-between bg-surface-container p-3 rounded-lg border border-outline-variant/10">
                                    <code className="text-primary font-mono text-sm">DV-9920-441-XPR</code>
                                    <span className="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:text-primary"><Copy className="h-4 w-4" /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-8 space-y-4">
                    <button className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-xl"><Share className="h-6 w-6" /></span>
                        Share Receipt
                    </button>
                    <button onClick={onClose} className="w-full bg-surface-container-lowest text-secondary font-headline font-bold py-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-xl"><ChevronLeft className="h-6 w-6" /></span>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TransactionComplete