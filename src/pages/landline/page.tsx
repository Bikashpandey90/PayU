const LandLinePage = () => {
    return (
        <main className="min-h-screen max-w-6xl mx-auto px-8 pt-10 pb-24">
            <header className="mb-12">
              
                <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Landline Recharge</h1>
                <p className="text-on-surface-variant mt-2 max-w-xl">Instant bill payment and recharges for traditional landline services. Experience the Kinetic Vault speed.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-8">
                    <section className="bg-surface-container-low p-10 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                        <div className="flex items-start gap-6 mb-10">
                            <div className="w-16 h-16 kinetic-gradient rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <span className="material-symbols-outlined text-3xl" >deskphone</span>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-bold mb-1">Enter Connection Details</h2>
                                <p className="text-on-surface-variant text-sm">Please provide your landline number and amount.</p>
                            </div>
                        </div>
                        <form className="space-y-10">
                            <div className="relative group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 px-1">Landline Number</label>
                                <div className="flex items-center">
                                    <div className="text-2xl font-semibold text-on-surface-variant pr-4 border-r-2 border-outline-variant/30">0</div>
                                    <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-2xl font-bold py-3 px-4 placeholder:text-outline-variant/50" placeholder="15522942" type="number" />
                                </div>
                                <div className="mt-4 flex items-center gap-2 text-on-surface-variant bg-surface-container-highest/30 p-3 rounded-xl border border-outline-variant/10">
                                    <span className="material-symbols-outlined text-sm">info</span>
                                    <span className="text-xs">Enter 8 digits (Area code without leading 0 + number)</span>
                                </div>
                                <div className="absolute right-0 top-12 flex items-center gap-2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></div>
                                    <span className="text-xs text-tertiary font-medium">Verifying Number...</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 px-1">Recharge Amount</label>
                                <div className="relative">
                                    <span className="absolute left-0 bottom-3 text-2xl font-bold text-on-surface-variant">Rs.</span>
                                    <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-4xl font-extrabold py-3 pl-12 placeholder:text-outline-variant/30" max="10000" min="10" placeholder="0.00" type="number" />
                                </div>
                                <div className="flex flex-wrap gap-3 mt-6">
                                    <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-semibold hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm" type="button">Rs. 100</button>
                                    <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-semibold hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm" type="button">Rs. 200</button>
                                    <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-semibold hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm" type="button">Rs. 500</button>
                                    <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-semibold hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm" type="button">Rs. 1000</button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-surface-container rounded-3xl p-6 flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary" >verified_user</span>
                            <div>
                                <p className="text-sm font-bold">Secure Transactions</p>
                                <p className="text-xs text-on-surface-variant leading-tight">Encryption-backed vault payments</p>
                            </div>
                        </div>
                        <div className="bg-surface-container rounded-3xl p-6 flex items-center gap-4">
                            <span className="material-symbols-outlined text-tertiary" >speed</span>
                            <div>
                                <p className="text-sm font-bold">Instant Credit</p>
                                <p className="text-xs text-on-surface-variant leading-tight">Updated within seconds on your line</p>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="lg:col-span-5 sticky top-28">
                    <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-[0_16px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10">
                        <h3 className="text-xl font-bold mb-8">Transaction Summary</h3>
                        <div className="space-y-6 mb-10">
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant text-sm">Service Type</span>
                                <span className="font-bold text-on-surface flex items-center gap-1">
                                    PSTN Landline
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant text-sm">Account Number</span>
                                <span className="font-mono font-medium text-on-surface tracking-wider">015522942</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant text-sm">Processing Fee</span>
                                <span className="font-bold text-tertiary">FREE</span>
                            </div>
                            <div className="pt-6 border-t border-surface-container">
                                <div className="flex justify-between items-end">
                                    <span className="text-on-surface-variant text-sm mb-1">Total Amount</span>
                                    <div className="text-right">
                                        <span className="text-3xl font-extrabold text-primary">Rs. 500.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                            Confirm &amp; Pay
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <div className="mt-8 pt-8 border-t border-surface-container-high text-center">
                            <img alt="classNameic retro telephone" className="w-32 h-32 mx-auto rounded-full object-cover mb-4 opacity-80 grayscale hover:grayscale-0 transition-all" data-alt="vintage rotary telephone on a minimalist wooden desk with soft cinematic side lighting and clean modern aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIR01u9HhuXR5ZWjCdjnvFv52QTNRKaNLupwBMflpTsFxeLPiRXPLVBFu-HnvCypa4N4NUGniXSFuKM6KPbtCYIH-M3CB5SjEYVxeZmfIuH6LgUTVU6RkIdZOhsX3mulKzx01TYFNFzKMw0rGZQuPuNWJVXl-ELrHbH_eNx6pi5D5q3seknPsd3OK3Od49JnJRAOzrctRgMzDrKtpdfruw4n1okYMM5CgaIE4W2135w3WaLaWpie8-BA8ZQcJxBzkpp3S4Kss0uA" />
                            <p className="text-xs text-on-surface-variant italic">Keeping classNameic connections alive with modern velocity.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default LandLinePage