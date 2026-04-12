const WasteManagementPaymentPage = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 py-10">
            <div className="mb-12">
                <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-2">Waste Management</h1>
                <p className="text-on-surface-variant font-medium text-lg">Clean Nepal Kathmandu Service Portal</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-10">
                    <section className="bg-surface-container-low rounded-[2rem] p-8 transition-all">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">1</div>
                            <h2 className="text-2xl font-bold text-on-surface">Customer Verification</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="kinetic-input border-b-2 border-outline-variant py-2 transition-all">
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Customer Card No</label>
                                <input className="w-full bg-transparent border-none p-0 text-xl font-bold text-primary focus:ring-0" readOnly type="text" value="CNK-2024-9841" />
                            </div>
                            <div className="kinetic-input border-b-2 border-outline-variant py-2 transition-all">
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Mobile Number</label>
                                <input className="w-full bg-transparent border-none p-0 text-xl font-bold text-primary focus:ring-0" readOnly type="text" value="9841******" />
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded-3xl p-6 border border-primary/10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary mb-1 block">Account Verified</span>
                                    <h3 className="text-3xl font-extrabold tracking-tight text-on-surface">Chiri Mai Maharjan</h3>
                                    <p className="text-on-surface-variant text-sm font-medium">Subscription: Premium Residential Flow</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Standard Rate</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-extrabold text-on-surface">NPR 450</span>
                                        <span className="text-sm font-bold text-on-surface-variant">/mo</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Payment History</h4>
                                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                                    <div className="flex-shrink-0 bg-surface-container p-4 rounded-2xl w-32">
                                        <span className="block text-[10px] font-bold text-on-surface-variant">JAN 2024</span>
                                        <span className="block text-sm font-bold text-tertiary">PAID</span>
                                    </div>
                                    <div className="flex-shrink-0 bg-surface-container p-4 rounded-2xl w-32">
                                        <span className="block text-[10px] font-bold text-on-surface-variant">FEB 2024</span>
                                        <span className="block text-sm font-bold text-tertiary">PAID</span>
                                    </div>
                                    <div className="flex-shrink-0 border-2 border-dashed border-outline-variant p-4 rounded-2xl w-32">
                                        <span className="block text-[10px] font-bold text-on-surface-variant">MAR 2024</span>
                                        <span className="block text-sm font-bold text-error">PENDING</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-surface-container-low rounded-[2rem] p-8 transition-all">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">2</div>
                            <h2 className="text-2xl font-bold text-on-surface">Select Billing Period</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">From Period</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase">Month</label>
                                        <select className="w-full bg-surface-container-lowest border-none rounded-xl font-bold text-on-surface focus:ring-2 focus:ring-primary/20">
                                            <option>March</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase">Year</label>
                                        <select className="w-full bg-surface-container-lowest border-none rounded-xl font-bold text-on-surface focus:ring-2 focus:ring-primary/20">
                                            <option>2024</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">To Period</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase">Month</label>
                                        <select className="w-full bg-surface-container-lowest border-none rounded-xl font-bold text-on-surface focus:ring-2 focus:ring-primary/20">
                                            <option>April</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase">Year</label>
                                        <select className="w-full bg-surface-container-lowest border-none rounded-xl font-bold text-on-surface focus:ring-2 focus:ring-primary/20">
                                            <option>2024</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 p-6 bg-secondary-container/30 rounded-3xl flex items-center justify-between border border-secondary-container">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary scale-125">calendar_month</span>
                                <div>
                                    <p className="text-sm font-bold text-on-secondary-container">Duration Calculated</p>
                                    <p className="text-xs text-on-secondary-container/70">2 Months (March - April)</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-black text-primary">NPR 900.00</span>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="lg:col-span-4">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-surface-container-highest rounded-[2.5rem] p-8 shadow-sm">
                            <h2 className="text-xl font-bold text-on-surface mb-8">Payment Summary</h2>
                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between items-center">
                                    <span className="text-on-surface-variant font-medium">Service Amount</span>
                                    <span className="text-on-surface font-bold">NPR 900.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-on-surface-variant font-medium">Late Fine</span>
                                    <span className="text-on-surface font-bold">NPR 0.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-on-surface-variant font-medium">Service Charge</span>
                                    <span className="text-tertiary font-bold">+ NPR 5.00</span>
                                </div>
                                <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-end">
                                    <div>
                                        <span className="block text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Total Payable</span>
                                        <span className="text-3xl font-black text-primary tracking-tighter">NPR 905.00</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary-container text-on-primary py-5 rounded-full font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 group">
                                <span>Proceed to Pay</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">
                                <span className="material-symbols-outlined text-xs">lock</span>
                                Secure encrypted transaction
                            </div>
                        </div>
                        <div className="relative bg-tertiary rounded-[2rem] p-8 overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-on-tertiary text-xl font-bold mb-2">Sustainable Kathmandu</h3>
                                <p className="text-on-tertiary/70 text-sm">Your timely payments help us maintain a cleaner, greener city for everyone.</p>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-on-tertiary/10 rotate-12">eco</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WasteManagementPaymentPage