import { BookOpenText, Bus, CableCar, Car, ChartNoAxesCombined, CreditCard, Dog, Droplet, Landmark, Phone, PiggyBank, PlaneTakeoff, QrCode, Shield, ShieldPlus, Signal, Smartphone, Trash, Tv, Users, UtilityPole, Wifi, Zap } from "lucide-react"
import { NavLink } from "react-router-dom"

const ServicesPage = () => {

    return (
        <main className="max-w-[1200px] mx-auto px-6 py-10 pb-20">
            <section className="mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-2">Explore<br />Services</h1>
                        <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">Liquid finance at your fingertips. From utilities to travel, manage everything in one kinetic ecosystem.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 kinetic-gradient shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            <span className="material-symbols-outlined"><QrCode className="h-5 w-5" /></span>
                            Quick Scan
                        </button>
                    </div>
                </div>
            </section>
            <section className="mb-14">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-on-surface">Popular Services</h2>
                    <span className="text-primary font-semibold text-sm cursor-pointer hover:underline">View All</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <NavLink to={'/topup'} className="col-span-2 row-span-2 bg-primary-fixed rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group cursor-pointer">
                        <div className="z-10">
                            <span className="material-symbols-outlined text-4xl text-on-primary-fixed mb-4"><Signal className="h-6 w-6" /></span>
                            <h3 className="text-2xl font-bold text-on-primary-fixed">Mobile TopUp</h3>
                            <p className="text-on-primary-fixed-variant mt-2 text-sm max-w-[150px]">Recharge any network instantly.</p>
                        </div>
                        <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-[12rem]"><Smartphone className="h-72 w-72" /></span>
                        </div>
                        <div className="z-10 mt-6">
                            <button className="bg-on-primary-fixed text-white px-4 py-2 rounded-full text-xs font-bold">RECHARGE NOW</button>
                        </div>
                    </NavLink>
                    <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl"><Wifi className="h-6 w-6" /></span>
                        </div>
                        <span className="font-bold text-sm">Internet</span>
                    </div>
                    <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl"><Zap className="h-6 w-6" /></span>
                        </div>
                        <span className="font-bold text-sm">Electricity</span>
                    </div>
                    <NavLink to={'/flights'} className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl"><PlaneTakeoff className="h-6 w-6" /></span>
                        </div>
                        <span className="font-bold text-sm">Flights</span>
                    </NavLink >
                    <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl"><Shield className="h-6 w-6" /></span>
                        </div>
                        <span className="font-bold text-sm">Insurance</span>
                    </div>
                    <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl"><Tv className="h-6 w-6" /></span>
                        </div>
                        <span className="font-bold text-sm">TV</span>
                    </div>
                    <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl"><Car className="h-6 w-6" /></span>
                        </div>
                        <span className="font-bold text-sm">Ride</span>
                    </div>
                </div>
            </section>
            <div className="space-y-16">
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <h2 className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">Utilities</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="aspect-square bg-surface-container-low rounded-3xl flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl"><Droplet className="h-6 w-6" /></span>
                            </div>
                            <span className="text-sm font-semibold px-2">Khanepani</span>
                        </div>
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="aspect-square bg-surface-container-low rounded-3xl flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl"><Signal className="h-6 w-6" /></span>
                            </div>
                            <span className="text-sm font-semibold px-2">Data Packs</span>
                        </div>
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="aspect-square bg-surface-container-low rounded-3xl flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl"><UtilityPole className="h-6 w-6" /></span>
                            </div>
                            <span className="text-sm font-semibold px-2">Community Electricity</span>
                        </div>
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="aspect-square bg-surface-container-low rounded-3xl flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl"><Trash className="h-6 w-6" /></span>
                            </div>
                            <span className="text-sm font-semibold px-2">Waste Management</span>
                        </div>
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="aspect-square bg-surface-container-low rounded-3xl flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl"><Phone className="h-6 w-6" /></span>
                            </div>
                            <span className="text-sm font-semibold px-2">PSTN (Landline)</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-8 bg-tertiary"></div>
                        <h2 className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">Finance &amp; Insurance</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-surface-container-lowest p-6 rounded-[2.5rem] border border-outline-variant/10 hover:shadow-xl hover:shadow-on-surface/5 transition-all flex items-center gap-6 group cursor-pointer">
                            <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-on-primary"><CreditCard className="h-6 w-6" /></span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">EMI Payments</h3>
                                <p className="text-on-surface-variant text-sm">Pay your loan installments instantly.</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-[2.5rem] border border-outline-variant/10 hover:shadow-xl hover:shadow-on-surface/5 transition-all flex items-center gap-6 group cursor-pointer">
                            <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-on-primary"><ChartNoAxesCombined className="h-6 w-6" /></span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Meroshare &amp; Demat</h3>
                                <p className="text-on-surface-variant text-sm">Renew your share accounts easily.</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-[2.5rem] border border-outline-variant/10 hover:shadow-xl hover:shadow-on-surface/5 transition-all flex items-center gap-6 group cursor-pointer">
                            <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-on-primary"><PiggyBank className="h-6 w-6" /></span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">SIP</h3>
                                <p className="text-on-surface-variant text-sm">Systematic Investment Plan payments.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <h2 className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">Travel &amp; Lifestyle</h2>
                    </div>
                    <div className="flex flex-nowrap overflow-x-auto gap-6 no-scrollbar pb-4">
                        <NavLink to={'/travel'} className="min-w-[200px] bg-surface-container-low p-6 rounded-[2.5rem] flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors">
                            <span className="material-symbols-outlined text-4xl mb-4 text-on-surface-variant group-hover:text-primary"><Bus className="h-6 w-6" /></span>
                            <h4 className="font-bold">Bus Tickets</h4>
                            <p className="text-xs text-on-surface-variant mt-2">Nationwide routes</p>
                        </NavLink>
                        <NavLink to={'/cable-car'} className="min-w-[200px] bg-surface-container-low p-6 rounded-[2.5rem] flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors">
                            <span className="material-symbols-outlined text-4xl mb-4 text-on-surface-variant group-hover:text-primary"><CableCar className="h-6 w-6" /></span>
                            <h4 className="font-bold">Cable Car</h4>
                            <p className="text-xs text-on-surface-variant mt-2">Chandragiri &amp; more</p>
                        </NavLink>
                        <NavLink to={'/zoo'} className="min-w-[200px] bg-surface-container-low p-6 rounded-[2.5rem] flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors">
                            <span className="material-symbols-outlined text-4xl mb-4 text-on-surface-variant group-hover:text-primary"><Dog className="h-6 w-6" /></span>
                            <h4 className="font-bold">Central Zoo</h4>
                            <p className="text-xs text-on-surface-variant mt-2">Entry tickets</p>
                        </NavLink>
                        <NavLink to={'/anti-virus'} className="min-w-[200px] bg-surface-container-low p-6 rounded-[2.5rem] flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors">
                            <span className="material-symbols-outlined text-4xl mb-4 text-on-surface-variant group-hover:text-primary"><ShieldPlus className="h-6 w-6" /> </span>
                            <h4 className="font-bold">Antivirus</h4>
                            <p className="text-xs text-on-surface-variant mt-2">Digital security</p>
                        </NavLink>
                    </div>
                </section>
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-8 bg-on-surface"></div>
                        <h2 className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">Government Services</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 rounded-3xl flex items-center gap-4 hover:border-primary transition-colors cursor-pointer group">
                            <span className="material-symbols-outlined text-primary"><Landmark className="h-6 w-6" /></span>
                            <span className="font-bold text-sm">Govt. Payments</span>
                        </div>
                        <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 rounded-3xl flex items-center gap-4 hover:border-primary transition-colors cursor-pointer group">
                            <span className="material-symbols-outlined text-primary"><BookOpenText className="h-6 w-6" /></span>
                            <span className="font-bold text-sm">Bluebook</span>
                        </div>
                        <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 rounded-3xl flex items-center gap-4 hover:border-primary transition-colors cursor-pointer group">
                            <span className="material-symbols-outlined text-primary"><Users className="h-6 w-6" /></span>
                            <span className="font-bold text-sm">Social Security Fund</span>
                        </div>
                    </div>
                </section>
            </div >
        </main >

    )
}

export default ServicesPage