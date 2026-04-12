import { ChevronRight, CircleCheck, Info, Receipt, VerifiedIcon, Zap } from "lucide-react"
import { useParams } from "react-router-dom"

const ElecPayPage = () => {
    const { provider } = useParams() as { provider: "himchuli" | "watermark" | "dreamer" | "softlab" | "bpc" }

    const providers: Record<string, { name: string; flow: string }> = {
        himchuli: {
            name: "Himchuli Electricity",
            flow: "normal",
        },
        dreamer: {
            name: "Dreamer",
            flow: "normal",
        },
        softlab: {
            name: "Softlab",
            flow: "normal",
        },
        
        bpc: {
            name: "BPC",
            flow: "bpc",
        },
        watermark: {
            name: "Watermark",
            flow: "watermark",
        },
    };

    if (!provider || !providers[provider]) {
        return <p>Invalid provider</p>;
    }
    return (
        <main className="max-w-6xl mx-auto px-6 pt-12">
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>

                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-tight">
                        {providers[provider]?.name}
                    </h1>
                    <p className="mt-4 text-on-surface-variant max-w-md text-lg">
                        Secure and rapid bill settlement for your regional power services.
                    </p>
                </div>

            </header>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
                <div className="md:col-span-7 space-y-8">
                    <section className="bg-surface-container-low p-8 rounded-[32px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="material-symbols-outlined text-[120px]"><Zap className="h-16 w-16" /></span>
                        </div>
                        <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Enter Customer Number</label>
                        <div className="relative group">
                            <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-3xl md:text-4xl font-bold py-4 transition-all outline-none" id="customer_number" placeholder="000" type="text" value="356" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                <span className="text-tertiary font-bold text-sm bg-tertiary/10 px-3 py-1 rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm" ><CircleCheck className="h-5 w-5" /></span>
                                    Validated
                                </span>
                            </div>
                        </div>
                        <p className="mt-6 text-on-surface-variant text-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg"><Info className="h-4 w-4" /></span>
                            Check your physical bill for the 3-digit ID.
                        </p>
                    </section>
                    <section className="bg-primary/20 border border-tertiary/10 p-6 rounded-[24px] flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-on-primary">
                            <span className="material-symbols-outlined" ><VerifiedIcon className="h-5 w-5" /></span>
                        </div>
                        <div>
                            <h4 className="font-bold text-on-surface">Bill Found Successfully</h4>
                            <p className="text-sm text-on-surface-variant">Systems sync complete. Verification status: <span className="text-primary font-bold">Active</span></p>
                        </div>
                    </section>
                </div>
                <div className="md:col-span-5">
                    <div className="bg-surface-container-lowest rounded-[40px] shadow-[0_16px_40px_rgba(25,28,30,0.06)] overflow-hidden flex flex-col h-full border border-surface-container-high">
                        <div className="bg-primary p-8 text-on-primary relative">
                            <div className="absolute top-10 right-8 opacity-20">
                                <span className="material-symbols-outlined text-4xl"><Receipt className="h-16 w-16" /></span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Payment Due</span>
                            <div className="flex items-start justify-between mt-2">
                                <div className="flex flex-row items-baseline gap-1">
                                    <span className="text-lg font-medium">NPR</span>
                                    <h2 className="text-5xl font-extrabold tracking-tighter">1708.00</h2>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 space-y-6 flex-grow">
                            <div className="flex justify-between items-center group">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Customer Name</span>
                                    <span className="text-lg font-bold text-on-surface">Gyan bahadur majhi</span>
                                </div>
                            </div>
                            <div className="h-px bg-surface-container"></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Customer ID</span>
                                    <span className="text-md font-semibold text-on-surface">567</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Area Code</span>
                                    <span className="text-md font-semibold text-on-surface">03-7430</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Capacity</span>
                                    <span className="text-md font-semibold text-on-surface">15A</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Due Date</span>
                                    <span className="text-md font-semibold text-error">Oct 24, 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 pt-0">
                            <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-full flex items-center justify-center gap-3 active:scale-95 transition-all duration-200 shadow-xl shadow-primary/20">
                                Proceed to Pay
                                <span className="material-symbols-outlined"><ChevronRight className="h-5 w-5" /></span>
                            </button>
                            <p className="text-center mt-4 text-[11px] text-outline font-medium px-4">
                                By clicking proceed, you agree to our terms of utility payment service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
export default ElecPayPage