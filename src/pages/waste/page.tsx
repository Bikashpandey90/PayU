const WasteManagementPage = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 pt-8 pb-24">
            <header className="mb-12">
               
                <h1 className="text-[2.5rem] font-extrabold leading-tight tracking-tighter text-on-surface mb-2">Waste Management</h1>
                <p className="text-on-surface-variant text-lg max-w-xl">Select your local service provider to pay monthly bills or schedule a rapid collection.</p>
            </header>
            <section className="mb-16">
                <div className="relative max-w-2xl">
                    <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                    <input className="w-full bg-transparent border-b-2 border-outline-variant py-4 pl-10 focus:border-primary focus:ring-0 transition-all text-xl font-medium outline-none" placeholder="Search provider or location..." type="text" />
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-surface-container-low p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-surface-container-high transition-all duration-300">
                    <div className="flex justify-between items-start mb-12">
                        <div className="p-4 bg-surface-container-lowest rounded-2xl">
                            <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">delete_sweep</span>
                        </div>
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Primary Partner</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Clean Nepal Kathmandu</h3>
                        <p className="text-on-surface-variant mb-8 max-w-md">Authorized metropolitan waste handler serving Central Kathmandu and surrounding districts.</p>
                        <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-3 w-fit scale-95 active:scale-100 transition-all">
                            Select Provider
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col justify-between border border-outline-variant/10 shadow-[0_16px_40px_rgba(25,28,30,0.06)] hover:translate-y-[-4px] transition-all">
                    <div>
                        <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">recycling</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">Action Waste Baneshwor</h3>
                        <p className="text-on-surface-variant text-sm mb-6">Specialized in recyclable segregation and Baneshwor area collection.</p>
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                        SELECT <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col justify-between border border-outline-variant/10 shadow-[0_16px_40px_rgba(25,28,30,0.06)] hover:translate-y-[-4px] transition-all">
                    <div>
                        <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">compost</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">Active Nepal Boudha</h3>
                        <p className="text-on-surface-variant text-sm mb-6">Serving the Boudha and Jorpati corridors with organic waste solutions.</p>
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                        SELECT <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col justify-between border border-outline-variant/10 shadow-[0_16px_40px_rgba(25,28,30,0.06)] hover:translate-y-[-4px] transition-all">
                    <div>
                        <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">cleaning_services</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">Creative Sarsafai</h3>
                        <p className="text-on-surface-variant text-sm mb-6">Focused on residential waste management in Patan and Lalitpur areas.</p>
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                        SELECT <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col justify-between border border-outline-variant/10 shadow-[0_16px_40px_rgba(25,28,30,0.06)] hover:translate-y-[-4px] transition-all">
                    <div>
                        <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">restore_from_trash</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">Green Circle Nepal</h3>
                        <p className="text-on-surface-variant text-sm mb-6">Pioneering sustainable disposal for commercial complex and malls.</p>
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                        SELECT <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
            <section className="mt-24 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="cinematic shot of colorful trash bins lined up against a clean minimalist urban wall with soft morning sunlight casting gentle shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe1Rm_XtK1a8M09MTfcjt24wsflOPJhWUs-nT0qTApH3SMB8dOIWUGiZmjnQJYLutxhSbNM9XJ-l0guQXo4rT42vctAWdDqKyRiDf6bZlBo6h-q1VSxPI9cpkdGvITIPMR8eLUiMAZByq0FmfE6XRzWRzAnd8tFQx0Rq5cGTVd8Mr2TYv-CWfCriHjAAOjSzXu6vU5JaTNiiTfK95D5bonYQSJQGvABGlEodKfzc9UBSw70LK_2zWT3gmKSV9lDbMTQ5RzWC_m8g" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div>
                    <h2 className="text-4xl font-extrabold mb-6">Keep your surroundings clean with VaultPay.</h2>
                    <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">By digitizing waste management payments, we help local providers optimize their routes and ensure timely collections across the Kathmandu Valley. Pay for individual pickups or monthly subscriptions seamlessly.</p>
                    <div className="flex gap-4">
                        <div className="bg-surface-container-low px-6 py-4 rounded-2xl">
                            <div className="text-tertiary font-bold text-2xl">24/7</div>
                            <div className="text-on-surface-variant text-xs font-bold uppercase tracking-tighter">Support</div>
                        </div>
                        <div className="bg-surface-container-low px-6 py-4 rounded-2xl">
                            <div className="text-tertiary font-bold text-2xl">Instant</div>
                            <div className="text-on-surface-variant text-xs font-bold uppercase tracking-tighter">Receipts</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WasteManagementPage