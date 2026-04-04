import transactSvc from "@/services/transaction.service"
import { Check, ChevronRight, Search, Star } from "lucide-react"
import { useEffect, useState } from "react"

export const generateSeats = () => {
    return Array.from({ length: 32 }, (_, i) => ({
        id: `seat_${i + 1}`,
        number: i + 1,
        isBooked: Math.random() > 0.7,
        price: 1500,
    }))
}

export interface Bus {
    id: string,
    operator: string,
    bus_type: string,
    departure_time: string,
    arrival_time?: string,
    journey_hour: string,
    shift: "Day" | "Night",
    ticket_price: number,
    rating?: number,
    amenities: string[],
    is_tourist_bus: boolean,
    commission: number,


}



const TravelPage = () => {
    const [form, setForm] = useState({
        from: "",
        to: "",
        date: ""
    })

    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)
    const [expandedIndex, setExpandedIndex] = useState(0)
    const [buses, setBuses] = useState<Bus[]>([])

    const [routes, setRoutes] = useState<any[]>([])
    const [session, setSession] = useState<String>('')

    const [seats, setSeats] = useState<any[]>([])
    const [selectedSeat, setSelectedSeat] = useState<string[]>([])

    const [showFromDropdown, setShowFromDropdown] = useState(false)
    const [showToDropdown, setShowToDropdown] = useState(false)


    const filteredFromRoutes = routes.filter(r =>
        r.label.toLowerCase().includes(form.from.toLowerCase())
    )

    const filteredToRoutes = routes.filter(r =>
        r.label.toLowerCase().includes(form.to.toLowerCase())
    )


    const isValid = form.from && form.to && form.date



    const setQuickDate = (offset: number) => {
        const d = new Date();
        d.setDate(d.getDate() + offset);
        setForm({ ...form, date: d.toISOString().split("T")[0] });
    };

    console.log(form.date)

    const fetchRoutes = async () => {
        try {
            const response = await transactSvc.fetchRoutes()
            setRoutes(response?.data?.routes)

        } catch (exception) {
            console.log(exception)
        }
    }

    const fetchBuses = async () => {
        setLoading(true)
        try {
            let data = {
                from: form.from,
                to: form.to,
                date: form.date
            }
            const response = await transactSvc.getBuses(data)
            console.log(response)
            setSearched(true)
            setBuses(response?.data?.buses)
            setSession(response?.data?.session_id as string)


        } catch (exception) {
            console.log(exception)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchRoutes()
    }, [])


    const fetchSeats = async (bus: Bus) => {
        try {
            let payload = {
                bus_id: bus.id,
                session_id: session
            }
            const response = await transactSvc.getSeats(payload)
            setSeats(response?.data?.seat_layout)

        } catch (exception) {
            console.log(exception)
        }
    }






    const TravelSkeleton = () => (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 animate-pulse">

            {/* FILTER SKELETON */}
            <aside className="lg:col-span-3 space-y-8">
                <div className="bg-surface-container-low rounded-3xl p-6 space-y-6">

                    <div className="h-6 w-28 bg-gray-300/40 rounded-full" />

                    {[1, 2, 3].map(i => (
                        <div key={i} className="space-y-3">
                            <div className="h-3 w-24 bg-gray-300/40 rounded" />
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-gray-300/30 rounded" />
                                <div className="h-4 w-5/6 bg-gray-300/30 rounded" />
                            </div>
                        </div>
                    ))}

                </div>
            </aside>

            {/* BUS CARD SKELETON */}
            <div className="lg:col-span-9 space-y-6">

                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-surface-container-low rounded-3xl overflow-hidden">

                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">

                            {/* LEFT */}
                            <div className="flex-1 space-y-6">

                                {/* TITLE */}
                                <div className="flex justify-between items-start">
                                    <div className="space-y-3">
                                        <div className="h-5 w-40 bg-gray-300/40 rounded" />
                                        <div className="h-4 w-28 bg-gray-300/30 rounded" />
                                    </div>
                                    <div className="h-6 w-12 bg-gray-300/40 rounded-full" />
                                </div>

                                {/* TIME SECTION */}
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <div className="h-6 w-16 bg-gray-300/40 rounded" />
                                        <div className="h-4 w-20 bg-gray-300/30 rounded" />
                                    </div>

                                    <div className="flex-1 px-6">
                                        <div className="h-[2px] w-full bg-gray-300/30 rounded" />
                                    </div>

                                    <div className="space-y-2 text-right">
                                        <div className="h-6 w-16 bg-gray-300/40 rounded ml-auto" />
                                        <div className="h-4 w-20 bg-gray-300/30 rounded ml-auto" />
                                    </div>
                                </div>

                            </div>

                            {/* DIVIDER */}
                            <div className="hidden md:block w-px bg-gray-300/20"></div>

                            {/* RIGHT */}
                            <div className="flex flex-col justify-between items-end md:w-40 space-y-6">

                                <div className="space-y-2 text-right">
                                    <div className="h-3 w-24 bg-gray-300/30 rounded ml-auto" />
                                    <div className="h-8 w-20 bg-gray-300/40 rounded ml-auto" />
                                </div>

                                <div className="h-10 w-full bg-gray-300/40 rounded-2xl" />

                            </div>
                        </div>

                        {/* SEAT / EXTRA SECTION SKELETON */}
                        <div className="bg-surface-container-lowest border-t border-outline-variant/10 p-8 grid grid-cols-1 md:grid-cols-2 gap-12">

                            <div className="space-y-4">
                                <div className="h-4 w-24 bg-gray-300/40 rounded" />
                                <div className="grid grid-cols-4 gap-3">
                                    {[...Array(12)].map((_, idx) => (
                                        <div key={idx} className="w-8 h-8 bg-gray-300/30 rounded-md"></div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-surface-container rounded-2xl p-6 space-y-4">
                                <div className="h-4 w-32 bg-gray-300/40 rounded" />
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-gray-300/30 rounded" />
                                    <div className="h-4 w-5/6 bg-gray-300/30 rounded" />
                                    <div className="h-4 w-2/3 bg-gray-300/30 rounded" />
                                </div>
                                <div className="h-10 w-full bg-gray-300/40 rounded-xl mt-4" />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
    return (
        <main className="pt-24 min-h-[75svh] pb-12 px-6 max-w-[1200px] mx-auto">
            <section
                className={`w-full h-full transition-all duration-700  
                ${searched ? "translate-y-[-80px]" : "translate-y-0"}`}
            >
                <div className="bg-primary rounded-3xl p-8 md:p-12 text-on-primary-container relative overflow">

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Where to ?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl">
                        <div className="space-y-1 relative">
                            <label className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">From</label>
                            <div className="relative ">
                                <input
                                    value={form.from}
                                    onChange={(e) => {
                                        setForm({ ...form, from: e.target.value })
                                        setShowFromDropdown(true)
                                    }}
                                    className="w-full kinetic-input border-0 border-b-2 border-outline-variant bg-transparent py-2 text-lg font-semibold text-on-surface focus:ring-0 focus:border-primary transition-all" type="text"
                                    placeholder="Kathmandu"
                                />

                                {showFromDropdown && (
                                    <div className="absolute z-100 bg-white w-full shadow-lg rounded-xl max-h-60 overflow-x-hidden overflow-y-auto"
                                        style={{
                                            scrollbarWidth: "none"
                                        }}>
                                        {filteredFromRoutes.map((route) => (
                                            <div
                                                key={route.value}
                                                onClick={() => {
                                                    if (route.value === form.to) return
                                                    setForm({ ...form, from: route.value })
                                                    setShowFromDropdown(false)
                                                }}
                                                className={`px-4 text-gray-500 py-2 cursor-pointer hover:bg-gray-100
            ${route.value === form.to ? " cursor-not-allowed" : ""}
          `}
                                            >
                                                {route.label}
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="space-y-1 relative">
                            <label className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">To</label>
                            <div className="relative">
                                <input
                                    value={form.to}
                                    onChange={(e) => {
                                        setForm({ ...form, to: e.target.value })
                                        setShowToDropdown(true)
                                    }}
                                    className="w-full kinetic-input border-0 border-b-2 border-outline-variant bg-transparent py-2 text-lg font-semibold text-on-surface focus:ring-0 focus:border-primary transition-all" placeholder="Enter destination" />

                                {showToDropdown && (
                                    <div className="absolute z-100 bg-white w-full shadow-lg rounded-xl max-h-60 overflow-x-hidden overflow-y-auto"
                                        style={{
                                            scrollbarWidth: "none"
                                        }}>
                                        {filteredToRoutes.map((route) => (
                                            <div
                                                key={route.value}
                                                onClick={() => {
                                                    if (route.value === form.from) return
                                                    setForm({ ...form, to: route.value })
                                                    setShowToDropdown(false)
                                                }}
                                                className={`px-4 text-gray-500 py-2 cursor-pointer hover:bg-gray-100
            ${route.value === form.to ? "opacity-40 cursor-not-allowed" : ""}
          `}
                                            >
                                                {route.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className="space-y-1">

                            <div className="flex items-center justify-between">
                                <label className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">
                                    Date
                                </label>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setQuickDate(0)}
                                        className="px-2 py-1 text-xs bg-primary text-white rounded-lg font-bold hover:opacity-90 transition"
                                    >
                                        Today
                                    </button>
                                    <button
                                        onClick={() => setQuickDate(1)}
                                        className="px-2 py-1 text-xs bg-primary text-white rounded-lg font-bold hover:opacity-90 transition"
                                    >
                                        Tomorrow
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={form.date}
                                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                                    className="w-full kinetic-input border-0 border-b-2 border-outline-variant bg-transparent py-2 text-lg font-semibold text-on-surface focus:ring-0 focus:border-primary transition-all" />
                            </div>


                        </div>


                        <div className="flex items-end">
                            <button
                                onClick={fetchBuses}
                                disabled={!isValid || loading}
                                className={`w-full h-14 rounded-full font-bold flex items-center justify-center gap-2 transition-all
                                ${isValid ? "bg-primary text-white" : "bg-gray-300 cursor-not-allowed"}
                                ${loading ? "animate-pulse" : ""}`}
                            // className="w-full h-14 bg-primary text-on-primary rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                            >
                                <Search className="h-5 w-5" />
                                {loading ? "Searching..." : "Search"}

                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {loading && (
                <TravelSkeleton />
            )}

            {searched && !loading && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <aside className="lg:col-span-3 space-y-8">
                        <div className="bg-surface-container-low rounded-3xl p-6">
                            <h3 className="text-lg font-bold mb-6">Filters</h3>
                            <div className="space-y-8">
                                <div>
                                    <label className="text-sm font-bold text-on-surface-variant block mb-4">Bus Type</label>
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-5 h-5 rounded border-2 border-outline group-hover:border-primary flex items-center justify-center">
                                                <div className="w-2.5 h-2.5 bg-primary rounded-sm opacity-0 group-hover:opacity-100"></div>
                                            </div>
                                            <span className="text-sm">AC Sleeper</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center bg-primary">
                                                <span className="material-symbols-outlined text-white text-[16px] font-bold"><Check className="h-4 w-4" /></span>
                                            </div>
                                            <span className="text-sm font-medium">Non-AC Sleeper</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-5 h-5 rounded border-2 border-outline group-hover:border-primary"></div>
                                            <span className="text-sm">Luxury AC Seater</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-on-surface-variant block mb-4">Price Range</label>
                                    <input className="w-full accent-primary h-1.5 bg-surface-container-highest rounded-full appearance-none" type="range" />
                                    <div className="flex justify-between mt-2 text-[0.6875rem] font-bold text-on-surface-variant">
                                        <span>$20</span>
                                        <span>$150</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-on-surface-variant block mb-4">Departure Time</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="px-3 py-2 rounded-xl bg-surface-container-highest text-[0.6875rem] font-bold hover:bg-primary hover:text-white transition-all">Before 6 AM</button>
                                        <button className="px-3 py-2 rounded-xl bg-surface-container-highest text-[0.6875rem] font-bold hover:bg-primary hover:text-white transition-all">6 AM - 12 PM</button>
                                        <button className="px-3 py-2 rounded-xl bg-primary text-white text-[0.6875rem] font-bold">12 PM - 6 PM</button>
                                        <button className="px-3 py-2 rounded-xl bg-surface-container-highest text-[0.6875rem] font-bold hover:bg-primary hover:text-white transition-all">After 6 PM</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="lg:col-span-9 space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">24 Buses Available</h2>
                            <div className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
                                <span>Sort by:</span>
                                <select className="bg-transparent border-0 focus:ring-0 font-bold text-primary">
                                    <option>Cheapest First</option>
                                    <option>Earliest First</option>
                                    <option>Top Rated</option>
                                </select>
                            </div>
                        </div>
                        {
                            buses.map((bus, index) => {
                                const isExpanded = index === expandedIndex

                                return (<div className="bg-surface-container-low rounded-3xl overflow-hidden transition-all hover:shadow-lg">
                                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                                        <div className="flex-1 space-y-6">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl font-bold">{bus?.operator}</h3>
                                                    <p className="text-sm text-on-surface-variant">{bus?.bus_type}</p>
                                                </div>
                                                <div className="flex items-center gap-1 px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-sm font-bold">
                                                    <span className="material-symbols-outlined text-[18px]" ><Star className="h-5 w-5" /></span>
                                                    {bus?.rating}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-center md:text-left">
                                                    <div className="text-2xl font-bold">{bus?.departure_time}</div>
                                                    <div className="text-sm text-on-surface-variant font-medium">Kathmandu</div>
                                                </div>
                                                <div className="flex-1 flex flex-col items-center px-8 relative">
                                                    <div className="w-full h-px border-t-2 border-dashed border-outline-variant"></div>
                                                    <div className="absolute top-1/2 -translate-y-1/2 bg-surface-container-low px-3 text-[10px] font-bold uppercase text-outline tracking-[0.2em]">{bus?.journey_hour}</div>
                                                </div>
                                                <div className="text-center md:text-right">
                                                    <div className="text-2xl font-bold">{bus?.arrival_time}</div>
                                                    <div className="text-sm text-on-surface-variant font-medium">Pokhara</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-px md:h-32 bg-outline-variant/30"></div>
                                        <div className="flex flex-col justify-between items-end md:w-48">
                                            <div className="text-right">
                                                <div className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest">Starting from</div>
                                                <div className="text-3xl font-extrabold text-primary">  NRs {bus?.ticket_price}<span className="text-sm font-medium">.00</span></div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setExpandedIndex(index)
                                                    fetchSeats(bus)
                                                }}
                                                className="w-full py-3 bg-on-surface text-surface rounded-2xl font-bold text-sm hover:bg-primary transition-colors">Select Seats</button>
                                        </div>
                                    </div>
                                    {
                                        isExpanded && (
                                            <div className="bg-surface-container-lowest border-t border-outline-variant/10 p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                                                <div>
                                                    <div className="flex items-center justify-between mb-6">
                                                        <h4 className="font-bold text-sm">Lower Deck</h4>
                                                        <div className="flex gap-4 text-[10px] font-bold text-on-surface-variant">
                                                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 border border-outline-variant rounded-sm"></div> Available</div>
                                                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-surface-variant rounded-sm"></div> Booked</div>
                                                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-primary rounded-sm"></div> Selected</div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="seat-grid gap-3">
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div></div>
                                                        <div className="w-8 h-8 rounded-md bg-surface-variant cursor-not-allowed"></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-white text-[16px]"><Check className="h-4 w-4" /></span></div>
                                                        <div></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                        <div className="w-8 h-8 rounded-md border border-outline-variant hover:border-primary cursor-pointer transition-all"></div>
                                                    </div> */}
                                                    <div className="grid grid-cols-4 gap-3">
                                                        {seats.map((seat) => {
                                                            const isBooked = seat.status !== "AVAILABLE"
                                                            const isSelected = selectedSeat.includes(seat.seat_number)

                                                            return (
                                                                <div
                                                                    key={seat.seat_number}
                                                                    onClick={() => {
                                                                        if (isBooked) return

                                                                        if (isSelected) {
                                                                            setSelectedSeat(prev =>
                                                                                prev.filter(s => s !== seat.seat_number)
                                                                            )
                                                                        } else {
                                                                            setSelectedSeat(prev => [...prev, seat.seat_number])
                                                                        }
                                                                    }}
                                                                    className={`w-8 h-8 rounded-md flex items-center justify-center text-xs cursor-pointer
                    ${isBooked && "bg-gray-300 cursor-not-allowed"}
                    ${!isBooked && !isSelected && "border hover:border-primary"}
                    ${isSelected && "bg-primary text-white"}
                `}
                                                                >
                                                                    {seat.seat_number}
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                {/* <div>
                                                    <h4 className="font-bold mb-4">Select Seats</h4>

                                                    <div className="grid grid-cols-4 gap-3">
                                                        {generateSeats().map((seat) => (
                                                            <div
                                                                key={seat.id}
                                                                className={`w-8 h-8 rounded-md flex items-center justify-center text-xs
                                    ${seat.isBooked
                                                                        ? "bg-gray-300 cursor-not-allowed"
                                                                        : "border hover:border-primary cursor-pointer"
                                                                    }`}
                                                            >
                                                                {!seat.isBooked && seat.number}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div> */}
                                                <div className="bg-surface-container rounded-2xl p-6 space-y-4">
                                                    <h4 className="font-bold">Trip Summary</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-on-surface-variant">Selected Seat</span>
                                                            <span className="font-bold">L14 (Sleeper)</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-on-surface-variant">Boarding</span>
                                                            <span className="font-bold">SF Transbay @ 21:15</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-on-surface-variant">Amount</span>
                                                            <span className="font-bold">$84.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 border-t border-outline-variant/30">
                                                        <button className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2">
                                                            Proceed to Checkout
                                                            <span className="material-symbols-outlined"><ChevronRight className="h-5 w-5" /></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>)
                            })
                        }

                    </div>
                </div>
            )}

            <style>{`
                .fade-in {
    animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
            `}</style>
        </main>
    )
}

export default TravelPage