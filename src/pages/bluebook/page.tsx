const BlueBookPage = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 py-10">
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full kinetic-gradient flex items-center justify-center text-white font-bold">1</div>
                        <div>
                            <p className="text-label-sm font-bold text-primary">Step 1</p>
                            <h2 className="text-headline-sm font-medium">Calculate Fees</h2>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 mx-8 h-[2px] bg-surface-container-high relative">
                        <div className="absolute left-0 top-0 h-full w-1/3 bg-primary"></div>
                    </div>
                    <div className="hidden md:flex items-center gap-3 opacity-40">
                        <div className="w-10 h-10 rounded-full border-2 border-outline-variant flex items-center justify-center font-bold">2</div>
                        <p className="text-label-sm font-medium">Payment</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8">
                    <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-10 border border-transparent">
                        <h3 className="text-headline-sm font-medium mb-8">Vehicle Details</h3>
                        <form className="space-y-8">
                            <div>
                                <label className="block text-label-sm font-semibold text-on-surface-variant mb-4">Vehicle Type</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <label className="cursor-pointer group">
                                        <input checked className="hidden peer" name="vehicle_type" type="radio" />
                                        <div className="p-4 rounded-2xl bg-surface-container-lowest border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-container/10 transition-all text-center">
                                            <span className="material-symbols-outlined block text-primary mb-2">directions_car</span>
                                            <span className="text-label-sm font-medium">4W (Petrol)</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="hidden peer" name="vehicle_type" type="radio" />
                                        <div className="p-4 rounded-2xl bg-surface-container-lowest border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-container/10 transition-all text-center">
                                            <span className="material-symbols-outlined block text-primary mb-2">motorcycle</span>
                                            <span className="text-label-sm font-medium">2W (Petrol)</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="hidden peer" name="vehicle_type" type="radio" />
                                        <div className="p-4 rounded-2xl bg-surface-container-lowest border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-container/10 transition-all text-center">
                                            <span className="material-symbols-outlined block text-primary mb-2">electric_moped</span>
                                            <span className="text-label-sm font-medium">2W EV</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="hidden peer" name="vehicle_type" type="radio" />
                                        <div className="p-4 rounded-2xl bg-surface-container-lowest border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-container/10 transition-all text-center">
                                            <span className="material-symbols-outlined block text-primary mb-2">electric_car</span>
                                            <span className="text-label-sm font-medium">4W EV</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-label-sm font-semibold text-on-surface-variant">Capacity (CC / Wattage)</label>
                                    <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 px-0 text-headline-sm font-medium placeholder:text-surface-variant" placeholder="e.g. 150 or 2000" type="number" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-label-sm font-semibold text-on-surface-variant">Manufacture Year (AD)</label>
                                    <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 px-0 text-headline-sm font-medium placeholder:text-surface-variant" placeholder="e.g. 2023" type="number" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-label-sm font-semibold text-on-surface-variant">Tax Valid Start Date (BS)</label>
                                    <div className="relative">
                                        <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 px-0 text-headline-sm font-medium placeholder:text-surface-variant" placeholder="YYYY-MM-DD" type="text" />
                                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_month</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-label-sm font-semibold text-on-surface-variant">Tax Valid End Date (BS)</label>
                                    <div className="relative">
                                        <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 px-0 text-headline-sm font-medium placeholder:text-surface-variant" placeholder="YYYY-MM-DD" type="text" />
                                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_month</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-3xl border border-outline-variant/10">
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-tertiary">verified_user</span>
                                    <div>
                                        <p className="font-bold">Third-party Insurance</p>
                                        <p className="text-label-sm text-on-surface-variant">Include renewal fee for third-party insurance</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" value="" />
                                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <button className="w-full kinetic-gradient text-white font-bold py-5 rounded-full text-headline-sm shadow-xl active:scale-95 duration-150 flex items-center justify-center gap-3" type="button">
                                <span className="material-symbols-outlined">calculate</span>
                                Calculate Fees
                            </button>
                        </form>
                    </div>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2 text-on-surface-variant opacity-70">
                            <span className="material-symbols-outlined text-sm">shield_lock</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest">Secure TLS 1.3</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant opacity-70">
                            <span className="material-symbols-outlined text-sm">gpp_good</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest">DOTM Verified</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant opacity-70">
                            <span className="material-symbols-outlined text-sm">payments</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest">Instant Receipt</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant opacity-70">
                            <span className="material-symbols-outlined text-sm">support_agent</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest">24/7 Support</span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/10 shadow-[0_16px_40px_rgba(25,28,30,0.06)] overflow-hidden relative">
                            <h4 className="text-headline-sm font-medium mb-6 relative z-10">Fee Summary</h4>
                            <div className="space-y-6 min-h-[300px] flex flex-col justify-center items-center text-center px-4">
                                <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-30">pending_actions</span>
                                </div>
                                <p className="text-on-surface-variant font-medium">Enter details to calculate your renewal fees</p>
                                <p className="text-label-sm text-on-surface-variant/60">We will fetch real-time data from DOTM servers for accurate breakdown.</p>
                            </div>
                            <div className="mt-10 pt-6 border-t border-dashed border-outline-variant opacity-10">
                                <div className="flex justify-between mb-4">
                                    <span className="text-label-sm">Unpaid Tax</span>
                                    <span className="text-label-sm font-bold">Rs. 0.00</span>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span className="text-label-sm">Total Amount</span>
                                    <span className="text-headline-sm font-extrabold">Rs. 0.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h5 className="font-bold text-lg mb-2">Need Help?</h5>
                                <p className="text-white/80 text-label-sm mb-4">Chat with our experts for bluebook queries or legal assistance.</p>
                                <button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-label-sm hover:scale-105 transition-transform">Start Chat</button>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">contact_support</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlueBookPage