import { Search } from "lucide-react"

const DataPacksPage = () => {
    return (
        <main className="pt-10 pb-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight">NTC Mobile Packs</h1>
                        <div className="flex items-center gap-2 mt-2 text-on-surface-variant">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-[10px] text-white font-bold">NT</div>
                            <span className="text-sm font-medium">Nepal Telecom • Prepaid &amp; Postpaid</span>
                        </div>
                    </div>
                    <div className="relative">
                        <input className="bg-white border border-outline-variant rounded-xl pl-10 pr-4 py-2.5 w-full md:w-64 text-sm focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Search for a pack..." type="text" />
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-xl" data-icon="search"><Search className="h-5 w-5" /></span>
                    </div>
                </div>
                <div className="flex border-b border-outline-variant overflow-x-auto no-scrollbar">
                    <button className="px-6 py-4 text-sm font-bold tab-active whitespace-nowrap">Data Packs</button>
                    <button className="px-6 py-4 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Voice Packs</button>
                    <button className="px-6 py-4 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">SMS Packs</button>
                    <button className="px-6 py-4 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Special Offers</button>
                </div>
                <div className="space-y-4">
                    <div className="group bg-white border-2 border-primary rounded-2xl p-5 shadow-sm transition-all flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0">
                            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Best Seller</span>
                        </div>

                        <div className="flex-grow">
                            <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                <h3 className="text-lg font-extrabold">7 GB All Time Data</h3>
                                <span className="text-xs font-bold text-on-surface-variant px-2 py-0.5 bg-slate-100 rounded">Any Network</span>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">Large volume data for consistent users. High-speed 4G connectivity across Nepal.</p>
                        </div>
                        <div className="md:text-right flex flex-row md:flex-col justify-between items-center md:items-end gap-1 md:w-32">
                            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">Validity: 28 Days</span>
                            <span className="text-xl font-black text-primary">NPR 499.99</span>
                        </div>
                        <button className="flex-shrink-0 bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
                            Selected
                        </button>
                    </div>
                    <div className="group bg-white border border-outline-variant hover:border-primary/50 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6">

                        <div className="flex-grow">
                            <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                <h3 className="text-lg font-extrabold">1GB / Day Data</h3>
                                <span className="text-xs font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">Recommended</span>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">Perfect for daily scrolling and video streaming. Resets every 24 hours.</p>
                        </div>
                        <div className="md:text-right flex flex-row md:flex-col justify-between items-center md:items-end gap-1 md:w-32">
                            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">Validity: 1 Day</span>
                            <span className="text-xl font-black text-on-surface group-hover:text-primary transition-colors">NPR 45.00</span>
                        </div>
                        <button className="flex-shrink-0 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-bold text-sm transition-all active:scale-95">
                            Choose
                        </button>
                    </div>
                    <div className="group bg-white border border-outline-variant hover:border-primary/50 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6">

                        <div className="flex-grow">
                            <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                <h3 className="text-lg font-extrabold">2GB Night Pack</h3>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">Super fast data available between 11:00 PM and 6:00 AM.</p>
                        </div>
                        <div className="md:text-right flex flex-row md:flex-col justify-between items-center md:items-end gap-1 md:w-32">
                            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">Validity: 1 Night</span>
                            <span className="text-xl font-black text-on-surface group-hover:text-primary transition-colors">NPR 15.00</span>
                        </div>
                        <button className="flex-shrink-0 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-bold text-sm transition-all active:scale-95">
                            Choose
                        </button>
                    </div>
                    <div className="group bg-white border border-outline-variant hover:border-primary/50 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6">

                        <div className="flex-grow">
                            <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                <h3 className="text-lg font-extrabold">Social Media Pack</h3>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">Unlimited access to Facebook, WhatsApp, TikTok and Messenger.</p>
                        </div>
                        <div className="md:text-right flex flex-row md:flex-col justify-between items-center md:items-end gap-1 md:w-32">
                            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">Validity: 7 Days</span>
                            <span className="text-xl font-black text-on-surface group-hover:text-primary transition-colors">NPR 120.00</span>
                        </div>
                        <button className="flex-shrink-0 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-bold text-sm transition-all active:scale-95">
                            Choose
                        </button>
                    </div>
                </div>
            </div>
            <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                    <div className="bg-primary p-6 rounded-3xl text-white shadow-xl shadow-primary/20 overflow-hidden relative">
                        <div className="relative z-10">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Available Balance</p>
                            <p className="text-3xl font-black">NPR 4,250.00</p>
                        </div>
                        <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-white/10 text-9xl pointer-events-none" data-icon="account_balance_wallet">account_balance_wallet</span>
                    </div>
                    <div className="bg-white border border-outline-variant rounded-3xl p-8">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-8">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                                <div>
                                    <p className="text-sm font-bold">7 GB All Time Data</p>
                                    <p className="text-xs text-on-surface-variant">Validity: 28 Days • NTC Prepaid</p>
                                </div>
                            </div>
                            <div className="space-y-3 pt-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-on-surface-variant">Base Package Price</span>
                                    <span className="font-semibold">NPR 442.47</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-on-surface-variant">Tax &amp; Fees (13%)</span>
                                    <span className="font-semibold">NPR 57.52</span>
                                </div>
                                <div className="h-px bg-dashed border-t border-outline-variant my-2"></div>
                                <div className="flex justify-between items-baseline">
                                    <span className="font-bold">Total Payable</span>
                                    <span className="text-2xl font-black text-primary">NPR 499.99</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg transition-all hover:bg-primary-hover active:scale-[0.98] shadow-lg shadow-primary/25">
                                Confirm &amp; Pay
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors py-2">
                                <span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
                                Change Recipient Number
                            </button>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <span className="material-symbols-outlined text-sm" data-icon="verified_user">verified_user</span>
                            </div>
                            <p className="text-[11px] text-on-surface-variant leading-tight">
                                Payments are secured with industry-standard 256-bit encryption.
                            </p>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
    )
}

export default DataPacksPage