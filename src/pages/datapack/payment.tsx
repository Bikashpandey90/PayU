const DataPacksPaymentPage = () => {
    return (
        <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-2/3 space-y-8">
                    <header className="space-y-2">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                            <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
                            <span className="label-md">Back to Services</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Confirm Payment</h1>
                        <p className="text-on-surface-variant max-w-lg">Complete your Ncell data pack purchase securely through the VaultPay kinetic engine.</p>
                    </header>
                    <section className="bg-surface-container-low rounded-3xl p-8 transition-all hover:bg-surface-container-high">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                    <span className="material-symbols-outlined text-primary" data-icon="person">person</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Account Details</h3>
                                    <p className="text-on-surface-variant text-sm">Recipient mobile number</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold uppercase tracking-wider">Step 1</span>
                        </div>
                        <div className="relative group">
                            <input className="w-full bg-transparent border-b-2 border-outline-variant py-4 text-2xl font-bold text-on-surface focus:outline-none focus:border-primary transition-all" readOnly type="text" value="9809399558" />
                            <div className="absolute right-0 bottom-4 text-on-surface-variant flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm" data-icon="verified" data-weight="fill" >verified</span>
                                <span className="text-xs font-medium">Verified Ncell User</span>
                            </div>
                        </div>
                    </section>
                    <section className="bg-surface-container-low rounded-3xl p-8 transition-all hover:bg-surface-container-high">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                    <span className="material-symbols-outlined text-primary" data-icon="cell_tower">cell_tower</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Package Details</h3>
                                    <p className="text-on-surface-variant text-sm">Active selection</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold uppercase tracking-wider">Step 2</span>
                        </div>
                        <div className="flex items-center justify-between bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
                            <div className="flex gap-4 items-center">
                                <div className="w-14 h-14 rounded-xl bg-[#6a1b9a] flex items-center justify-center text-white font-black text-xl italic shadow-lg">N</div>
                                <div>
                                    <h4 className="font-bold text-xl text-on-surface">Ncell 1 Day Voice Pack</h4>
                                    <p className="text-on-surface-variant font-medium">Unlimited voice within Ncell network</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-tighter">Price</span>
                                <div className="text-2xl font-black text-primary">NPR 10</div>
                            </div>
                        </div>
                    </section>
                </div>
                <aside className="w-full lg:w-1/3 sticky top-32">
                    <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_32px_64px_rgba(0,64,224,0.08)] border border-outline-variant/10">
                        <h3 className="text-xl font-extrabold mb-8 tracking-tight">Payment Summary</h3>
                        <div className="space-y-6 mb-10">
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant font-medium">Base Amount</span>
                                <span className="font-bold text-on-surface">NPR 10.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant font-medium">Service Fee</span>
                                <span className="text-tertiary font-bold">NPR 0.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant font-medium">Govt. Tax</span>
                                <span className="font-bold text-on-surface">Included</span>
                            </div>
                            <div className="pt-6 border-t border-dashed border-outline-variant/30 flex justify-between items-end">
                                <div>
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Total Payable</span>
                                    <div className="text-4xl font-black tracking-tighter text-on-surface mt-1">NPR 10</div>
                                </div>
                                <div className="bg-tertiary/10 p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-tertiary" data-icon="security" data-weight="fill" >security</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <button className="kinetic-gradient w-full py-5 rounded-full text-white font-bold text-lg shadow-[0_8px_20px_rgba(0,64,224,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3">
                                Confirm &amp; Pay
                                <span className="material-symbols-outlined" data-icon="bolt" data-weight="fill" >bolt</span>
                            </button>
                            <button className="w-full py-4 rounded-full bg-secondary-container text-on-secondary-container font-semibold hover:bg-secondary-container/80 transition-all">
                                Cancel Transaction
                            </button>
                        </div>
                        <div className="mt-8 flex items-center gap-3 bg-surface-container/50 p-4 rounded-2xl">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-primary text-xl" data-icon="verified_user">verified_user</span>
                            </div>
                            <p className="text-[0.7rem] text-on-surface-variant leading-relaxed font-medium">
                                Payments are secured with 256-bit encryption. By clicking 'Confirm &amp; Pay' you agree to VaultPay's transaction terms.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 relative overflow-hidden rounded-[2rem] h-40 group cursor-pointer">
                        <img alt="Promo background" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="abstract vibrant purple and blue wave patterns with soft lighting and digital futuristic texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_f5g7-2nWtuSZzj9jineiZyXVAnPHodEKMtGbJ1Exthg_3QS9wWaXLsY9NEt9Pgz_vzVNfCah2yhfuhJ2J8c1ZD1cXtwrXTV5pu2dBx9wjI-r2djXILVsoxpCg2qM-jxSFsTTlZXKikKCf_bsTU88BAnRzFSwRd_d08ORxoDXPuf3-BeecG7tsTe8kbVPN8aKqv4k3uBt9muDx86djngIdXLmjvca-Vrx8vAThACMo9HsGwt0hVID9Vea41RQNZgSEnXn60yAhA" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001356] to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white uppercase font-bold tracking-widest">Promotion</span>
                            <h4 className="text-white font-bold mt-2">Get 5% cashback on all Ncell packs this weekend.</h4>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default DataPacksPaymentPage