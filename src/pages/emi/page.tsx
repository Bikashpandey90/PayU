import { ChevronRight } from "lucide-react"

const EMIPage = () => {
    return (
        <main className="pt-14 pb-32 px-6 max-w-6xl mx-auto">
            <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7">
                    <h1 className="text-display-lg text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
                        Fluid <span className="text-primary italic">Financing.</span>
                    </h1>
                    <p className="text-headline-sm text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed">
                        Settle your monthly installments with the velocity of digital currency. One vault, infinite possibilities.
                    </p>
                </div>
                <div className="lg:col-span-5 flex justify-end">
                    <div className="bg-surface-container-low p-6 rounded-3xl w-full flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
                        <div className="flex flex-col">
                            <span className="text-label-sm font-bold uppercase tracking-widest text-primary mb-1">VaultPay Value</span>
                            <span className="text-lg font-bold">Zero-Latency Transfers</span>
                            <span className="text-sm text-on-surface-variant">Instant receipt for all EMI providers.</span>
                        </div>
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined" data-icon="speed">speed</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden bg-surface-container-lowest rounded-[2.5rem] p-8 min-h-[400px] flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-primary/5 border border-transparent hover:border-primary-container/20">
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-8">
                            <span className="material-symbols-outlined text-primary text-3xl" data-icon="apartment">apartment</span>
                        </div>
                        <span className="text-label-sm font-bold text-on-surface-variant tracking-widest uppercase mb-2 block">Code Himalayan</span>
                        <h2 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight">Hulas Fin Serve</h2>
                        <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-6">
                            Automotive and industrial equipment financing with streamlined monthly settlements.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-tertiary">
                            <span className="material-symbols-outlined text-sm" data-icon="verified" data-weight="fill" >verified</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Instant Approval Partner</span>
                        </div>
                        <button className="w-full kinetic-gradient py-4 rounded-full text-on-primary font-bold tracking-tight active:scale-95 transition-all">
                            Pay Installment
                        </button>
                    </div>
                </div>
                <div className="relative group overflow-hidden bg-surface-container-lowest rounded-[2.5rem] p-8 min-h-[400px] flex flex-col justify-between text-white lg:scale-105 z-10 shadow-xl">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        {/* <img alt="Abstract finance texture" className="w-full h-full object-cover grayscale" data-alt="abstract architectural close-up of glass and steel with deep shadows and high contrast, dark and moody financial aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7IyqG3pdJRWXie9MvvWTcXLzARxvT4WTbDukG21qJHvYRyI4zkU-SSFsOplMRerWEB845utokK7e6Qd8G8du6xweUGDLi2DxSuFL1vLS1IwLMTnkH9m9xSxIJ0Rhm2k9_H4FWVl5zttEDCU9na26PQYZO7qYF8Sm5CIewy5QmV1M93JVw9ulF265M6fjfVmt-YPxd-Wi-1MtbEcjNFf01ArE115L9FNI7PgBnTJT78AZ9cz5HIuuxqfCxvqdrljXW-r52o7dDsQ" /> */}
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary-fixed text-3xl" data-icon="electric_car">electric_car</span>
                            </div>
                            <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">Popular</span>
                        </div>
                        <span className="text-label-sm font-bold text-outline-variant tracking-widest uppercase mb-2 block">Synergy</span>
                        <h2 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight">Batas Hire <br />Purchase</h2>
                        <p className="text-outline-variant text-sm font-medium leading-relaxed mb-6">
                            Leading provider for commercial and private vehicle financing solutions.
                        </p>
                    </div>
                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-2 text-primary-fixed-dim">
                            <span className="material-symbols-outlined text-sm" data-icon="bolt" data-weight="fill" >bolt</span>
                            <span className="text-xs font-bold uppercase tracking-wider">No Transaction Fees</span>
                        </div>
                        <button className="w-full bg-white text-on-background py-4 rounded-full font-bold tracking-tight active:scale-95 transition-all hover:bg-primary-fixed">
                            Connect Account
                        </button>
                    </div>
                </div>
                <div className="relative group overflow-hidden bg-surface-container-lowest rounded-[2.5rem] p-8 min-h-[400px] flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-primary/5 border border-transparent hover:border-primary-container/20">
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-tertiary/5 rounded-tl-full -mr-5 -mb-5 group-hover:scale-125 transition-transform"></div>
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-8">
                            <span className="material-symbols-outlined text-tertiary text-3xl" data-icon="smartphone">smartphone</span>
                        </div>
                        <span className="text-label-sm font-bold text-on-surface-variant tracking-widest uppercase mb-2 block">Mobile Phones</span>
                        <h2 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight">MAW EMI</h2>
                        <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-6">
                            Smart consumer electronics and smartphone installment plans made accessible.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-secondary">
                            <span className="material-symbols-outlined text-sm" data-icon="history">history</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Flexible Cycles</span>
                        </div>
                        <button className="w-full border-2 border-outline-variant hover:border-primary hover:text-primary py-4 rounded-full font-bold tracking-tight active:scale-95 transition-all">
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>
            <section className="mt-24 mb-16 p-10 bg-surface-container-low rounded-[3rem] relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-extrabold tracking-tight mb-6 leading-tight">Can't find your <br />provider?</h3>
                        <p className="text-on-surface-variant mb-8 text-lg font-medium">
                            We are rapidly expanding our kinetic network. Link your bank account directly or request a new provider integration.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-bold text-sm tracking-tight hover:brightness-95 transition-all">
                                Add Custom Loan
                            </button>
                            <button className="flex items-center gap-2 text-primary font-bold text-sm px-4 py-3 rounded-full hover:bg-primary/5 transition-all">
                                Contact Support <span className="material-symbols-outlined text-lg" data-icon="arrow_forward"><ChevronRight className="h-5 w-5" /></span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-outline-variant/10">
                                <span className="material-symbols-outlined text-primary mb-4" data-icon="security">security</span>
                                <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Encrypted</div>
                                <div className="font-bold text-sm">Vault-Grade Security</div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-outline-variant/10 mt-8">
                                <span className="material-symbols-outlined text-tertiary mb-4" data-icon="auto_awesome">auto_awesome</span>
                                <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Automated</div>
                                <div className="font-bold text-sm">Smart Reminders</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default EMIPage