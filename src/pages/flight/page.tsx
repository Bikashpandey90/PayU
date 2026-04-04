import { ArrowRightLeft, Calendar, PlaneLanding, PlaneTakeoff, Users } from "lucide-react"

const FlightPage = () => {
    return (
        <div className="pt-16 pb-20 px-6 max-w-7xl mx-auto">
            <section className="mb-12">
                <div className="mb-8">
                    <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-2">Find your next flow.</h1>
                    <p className="text-on-surface-variant body-lg">Seamless travel bookings powered by VaultPay Kinetic.</p>
                </div>
                <div className="bg-surface-container-low p-1 rounded-full w-fit mb-6 flex items-center">
                    <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-medium text-sm transition-all shadow-lg shadow-primary/20">Round-trip</button>
                    <button className="px-6 py-2 rounded-full text-on-surface-variant font-medium text-sm hover:text-primary transition-colors">One-way</button>
                    <button className="px-6 py-2 rounded-full text-on-surface-variant font-medium text-sm hover:text-primary transition-colors">Multi-city</button>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                            <div className="flex flex-col gap-1">
                                <span className="label-sm text-on-surface-variant px-1 font-semibold uppercase tracking-wider">From</span>
                                <div className="flex items-center gap-3 py-3 border-b-2 border-outline-variant focus-within:border-primary transition-all">
                                    <span className="material-symbols-outlined text-primary"><PlaneTakeoff className="h-5 w-5" /></span>
                                    <input className="w-full bg-transparent border-none p-0 text-lg font-bold focus:ring-0" type="text" value="San Francisco (SFO)" />
                                </div>
                            </div>
                            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-surface-container-lowest border border-outline-variant p-2 rounded-full shadow-md hover:scale-110 active:scale-95 transition-all hidden md:block">
                                <span className="material-symbols-outlined text-sm"><ArrowRightLeft className="h-4 w-4" /></span>
                            </button>
                            <div className="ml-4 flex flex-col gap-1">
                                <span className="label-sm text-on-surface-variant px-1 font-semibold uppercase tracking-wider">To</span>
                                <div className="flex items-center gap-3 py-3 border-b-2 border-outline-variant focus-within:border-primary transition-all">
                                    <span className="material-symbols-outlined text-primary"><PlaneLanding className="h-5 w-5" /></span>
                                    <input className="w-full bg-transparent border-none p-0 text-lg font-bold focus:ring-0" placeholder="Where to?" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="label-sm text-on-surface-variant px-1 font-semibold uppercase tracking-wider">Dates</span>
                            <div className="flex items-center gap-3 py-3 border-b-2 border-outline-variant focus-within:border-primary transition-all">
                                <span className="material-symbols-outlined text-primary"><Calendar className="h-4 w-4" /></span>
                                <input className="w-full bg-transparent border-none p-0 text-lg font-bold focus:ring-0" type="text" value="Oct 24 - Oct 31" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="label-sm text-on-surface-variant px-1 font-semibold uppercase tracking-wider">Travelers</span>
                            <div className="flex items-center gap-3 py-3 border-b-2 border-outline-variant focus-within:border-primary transition-all">
                                <span className="material-symbols-outlined text-primary"><Users className="h-4 w-4" /></span>
                                <input className="w-full bg-transparent border-none p-0 text-lg font-bold focus:ring-0" type="text" value="1 Adult, Economy" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all">
                            Search Flights
                        </button>
                    </div>
                </div>
            </section>
            <div className="flex flex-col lg:flex-row gap-10">
                <aside className="w-full lg:w-72 flex flex-col gap-8">
                    <div>
                        <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-6">Stops</h3>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input checked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">Non-stop</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">1 Stop</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">2+ Stops</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Price Range</h3>
                            <span className="text-xs font-bold text-primary">$400 - $1.2k</span>
                        </div>
                        <div className="h-1 bg-surface-container-highest rounded-full relative">
                            <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
                            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-4 border-surface-container-lowest rounded-full shadow-lg cursor-pointer"></div>
                            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-4 border-surface-container-lowest rounded-full shadow-lg cursor-pointer"></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-6">Airlines</h3>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input checked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">Delta Air Lines</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input checked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">United Airlines</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">American Airlines</span>
                            </label>
                        </div>
                    </div>
                </aside>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex items-center justify-between py-2 border-b border-outline-variant/20">
                        <p className="text-on-surface-variant text-sm font-medium">Showing <span className="text-on-surface font-bold">128 flights</span> to Tokyo</p>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="text-on-surface-variant">Sort by:</span>
                            <select className="bg-transparent border-none text-primary font-bold focus:ring-0 cursor-pointer p-0">
                                <option>Cheapest Price</option>
                                <option>Shortest Duration</option>
                                <option>Earliest Departure</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-[2rem] hover:shadow-xl transition-all duration-300 group border border-outline-variant/10">
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-on-surface-variant"><PlaneTakeoff className="h-5 w-5" /></span>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-on-surface">08:45</span>
                                    <span className="text-on-surface-variant font-medium">SFO · San Francisco</span>
                                </div>
                                <div className="flex flex-col items-center justify-center relative">
                                    <span className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-tighter">11h 20m</span>
                                    <div className="w-full h-[2px] bg-outline-variant relative">
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10"></div>
                                    </div>
                                    <span className="text-xs font-bold text-primary mt-1 uppercase tracking-tighter">Non-stop</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-2xl font-black text-on-surface">13:05</span>
                                    <span className="text-on-surface-variant font-medium">HND · Tokyo</span>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-outline-variant/20 pt-4 md:pt-0 md:pl-8 gap-1">
                                <div className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Fastest</div>
                                <span className="text-3xl font-black text-on-surface">$842</span>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-4">Round trip</span>
                                <button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary px-6 py-2 rounded-full font-bold text-sm transition-all active:scale-95">Select</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-[2rem] hover:shadow-xl transition-all duration-300 group border border-outline-variant/10">
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-on-surface-variant">airlines</span>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-on-surface">11:20</span>
                                    <span className="text-on-surface-variant font-medium">SFO · San Francisco</span>
                                </div>
                                <div className="flex flex-col items-center justify-center relative">
                                    <span className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-tighter">14h 45m</span>
                                    <div className="w-full h-[2px] bg-outline-variant relative">
                                        <div className="absolute -top-1 left-1/3 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary ring-4 ring-secondary/10"></div>
                                    </div>
                                    <span className="text-xs font-bold text-on-surface-variant mt-1 uppercase tracking-tighter">1 stop (SEA)</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-2xl font-black text-on-surface">17:05</span>
                                    <span className="text-on-surface-variant font-medium">HND · Tokyo</span>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-outline-variant/20 pt-4 md:pt-0 md:pl-8 gap-1">
                                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Best Value</div>
                                <span className="text-3xl font-black text-on-surface">$590</span>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-4">Round trip</span>
                                <button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary px-6 py-2 rounded-full font-bold text-sm transition-all active:scale-95">Select</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-[2rem] hover:shadow-xl transition-all duration-300 group border border-outline-variant/10">
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-on-surface-variant">flight</span>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-on-surface">06:15</span>
                                    <span className="text-on-surface-variant font-medium">SFO · San Francisco</span>
                                </div>
                                <div className="flex flex-col items-center justify-center relative">
                                    <span className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-tighter">11h 15m</span>
                                    <div className="w-full h-[2px] bg-outline-variant relative">
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <span className="text-xs font-bold text-primary mt-1 uppercase tracking-tighter">Non-stop</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-2xl font-black text-on-surface">10:30</span>
                                    <span className="text-on-surface-variant font-medium">NRT · Tokyo</span>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-outline-variant/20 pt-4 md:pt-0 md:pl-8 gap-1">
                                <span className="text-3xl font-black text-on-surface">$725</span>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-4">Round trip</span>
                                <button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary px-6 py-2 rounded-full font-bold text-sm transition-all active:scale-95">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightPage