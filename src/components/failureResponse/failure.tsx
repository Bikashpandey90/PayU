import { CircleX, Lightbulb, RotateCcw, ShieldCheck, User } from "lucide-react"

const FailureResponse = ({ onRetry, data, amount }: any) => {
    return (
        <main className="flex-grow flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <div className="bg-surface-container-lowest rounded-3xl shadow-[0_40px_60px_rgba(25,28,30,0.06)] overflow-hidden receipt-jagged relative">
                    <div className="pt-10 pb-6 flex flex-col items-center text-center px-6">
                        <div className="w-20 h-20 bg-error-container rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-error text-5xl" ><CircleX className="h-8 w-8" /></span>
                        </div>
                        <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Payment Failed</h1>
                        <p className="text-on-surface-variant text-base">Insufficient Balance</p>
                    </div>
                    <div className="px-8 pb-12 space-y-6">
                        <div className="bg-surface-container-low rounded-xl p-6 text-center">
                            <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-1 block">Attempted Amount</span>
                            <div className="font-headline text-4xl font-extrabold text-primary flex items-baseline justify-center gap-1">
                                <span className="text-2xl">Rs</span>
                                <span>{amount}</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
                                <span className="text-on-surface-variant text-sm">Recipient</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xs text-on-secondary-fixed" ><User className="h-4 w-4"></User></span>
                                    </div>
                                    <span className="text-on-surface font-semibold text-sm">{data?.name}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
                                <span className="text-on-surface-variant text-sm">Reference ID</span>
                                <span className="text-on-surface font-mono text-sm">#TXN-99201-DV</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
                                <span className="text-on-surface-variant text-sm">Wallet Source</span>
                                <span className="text-on-surface font-semibold text-sm">Primary Vault Card</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-on-surface-variant text-sm">Date &amp; Time</span>
                                <span className="text-on-surface font-semibold text-sm">Oct 24, 2023 • 14:32</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pt-4">
                            <button onClick={onRetry} className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold rounded-lg shadow-lg active:scale-95 transition-transform hover:brightness-110 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-xl"><RotateCcw className="h-6 w-6" /></span>
                                Try Again
                            </button>
                            <button onClick={onRetry} className="w-full py-4 bg-surface-container-highest text-on-surface font-semibold rounded-lg hover:bg-surface-variant active:scale-95 transition-all text-center">
                                Back to Home
                            </button>
                        </div>
                    </div>
                    <div className="bg-surface-container-high/30 py-4 px-8 flex justify-center">
                        <div className="flex items-center gap-2 opacity-40">
                            <span className="material-symbols-outlined text-sm"><ShieldCheck className="h-5 w-5" /></span>
                            <span className="text-[10px] uppercase font-bold tracking-widest">End-to-End Encrypted</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 bg-tertiary-fixed-dim/20 backdrop-blur-sm p-4 rounded-xl border border-outline-variant/10 flex gap-4">
                    <div className="bg-tertiary text-on-tertiary p-2 rounded-lg h-fit">
                        <span className="material-symbols-outlined"><Lightbulb className="h-5 w-5" /></span>
                    </div>
                    <div>
                        <h4 className="font-bold text-on-surface text-sm">Quick Tip</h4>
                        <p className="text-on-surface-variant text-xs leading-relaxed">You can top up your vault instantly using a linked bank account to proceed with this payment.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default FailureResponse