import transactSvc from "@/services/transaction.service"
import { ArrowRightLeft, BadgeCheck, ChevronDown, ChevronRight, Minus, Mountain, Plus, Receipt } from "lucide-react"
import { useEffect, useState } from "react"

const CableCarPage = () => {
    const [service, setService] = useState<String>('manakamana-cable-car')
    const [tripType, setTripType] = useState("Two Way")
    const [trips, setTrips] = useState<any[]>([])
    const [sessionId, setSessionId] = useState<number | null>(null)
    const [counts, setCounts] = useState<Record<string, number>>({})

    const services = [
        {
            id: "manakamana-cable-car",
            name: "Manakamana Cable Car",
            location: "Kurintar, Gorkha",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYf3DU-mQja_2saUTFxHz1PF1NdG6KQjuhLrrYfLwVwsWkqGme_t5Hbj0nKN9iMFIC2SjANLXTod14YBqXdLoFsBFpD4KMWHl-SkK975Ly2gCxDk7uBb3c3MHGfFuEM09HT9vwJsyUtrchVTGvvZR6emy-OmBPvMAI4P-GcXCN3_xeqs3JsRAA8xDUZofMM_D2IwGQGYYMoDDovh4TP9WXcsWHqM8GnuHUd4dsQXM476r9RP4a7K2S4oBjFroYGByVGj19cVQKow"
        },
        {
            id: "annapurna-cable-car",
            name: "Annapurna Cable Car",
            location: "Sarangkot, Pokhara",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_jGJZvZWhzsKE1dr5B1mGF2kBfTo9I8Xdm7gyijUruWTVkeH-y-byWSHDEzOh3ANMryiRfUYhGwbWvULdIrw6MJwv0XIVaM1UF3LCVLt4orPreKH9q8UcGgImq4Ajm9W8xR_zld10DSZA86dZ41w9vNuuCRy8atNhWCOhWfKXTcNmltHHuuhkUz2pwgGBAFaaMVoOLZv3Ldd8UV_Vb6JchN3or9TG5a0tahkzqqO1lSg4yEjBZGNmJCQEGGzE8ubOJLU9vrRpDA"
        }
    ]

    const MOCK_TRIPS: Record<string, any[]> = {
        "manakamana-cable-car": [
            {
                passenger_type: "adult",
                passenger_type_desc: "Adult",
                price: 700,
            },
            {
                passenger_type: "child",
                passenger_type_desc: "Child",
                price: 400,
            },
            {
                passenger_type: "foreigner",
                passenger_type_desc: "Foreigner",
                price: 1000,
            },
        ],
        "annapurna-cable-car": [
            {
                passenger_type: "adult",
                passenger_type_desc: "Adult",
                price: 500,
            },
            {
                passenger_type: "child",
                passenger_type_desc: "Child",
                price: 300,
            },
            {
                passenger_type: "student",
                passenger_type_desc: "Student",
                price: 350,
            },
        ],
    }

    const fetchCableCarDetails = async () => {
        if (!service) return

        try {
            const response = await transactSvc.fetchCableCarDetails({
                service,
                trip_type: tripType,
            })

            if (response?.status) {
                setTrips(response?.data?.trips)
                setSessionId(response?.data?.session_id)

                // initialize counts
                const initialCounts: any = {}
                response?.data?.trips.forEach((t: any) => {
                    initialCounts[t.passenger_type] = 0
                })
                setCounts(initialCounts)
            }
        } catch (err) {
            console.log("API failed → using mock data", err)

            const mockTrips = MOCK_TRIPS[service as string] || []

            setTrips(mockTrips)
            setSessionId(999999)

            const initialCounts: any = {}
            mockTrips.forEach((t: any) => {
                initialCounts[t.passenger_type] = 0
            })
            setCounts(initialCounts)
        }
    }
    useEffect(() => {
        if (service) fetchCableCarDetails()
    }, [service, tripType])

    const updateCount = (type: string, delta: number) => {
        setCounts((prev) => ({
            ...prev,
            [type]: Math.max(0, (prev[type] || 0) + delta),
        }))
    }

    const totalAmount = trips.reduce((sum, trip) => {
        const count = counts[trip.passenger_type] || 0
        return sum + trip.price * count
    }, 0)

    const handlePayment = async () => {
        try {
            const tickets = Object.entries(counts)
                .filter(([_, count]) => count > 0)
                .map(([type, count]) => ({
                    passenger_type: type,
                    passenger_count: count,
                }))

            const response = await transactSvc.commitCableCar({
                session_id: sessionId,
                trip_type: tripType,
                tickets,
                amount: totalAmount,
                contact_name: "Test User",
                mobile_number: "98XXXXXXXX",
            })

            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    

    return (
        <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-8 md:grid md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8 space-y-12">
                <section>
                    <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-4">Cable Car </h1>
                    <p className="text-on-surface-variant max-w-xl">Experience the kinetic beauty of Nepal from above. Secure your passage through the clouds with VaultPay's instant confirmation.</p>
                </section>
                <section className="space-y-6">
                    <h2 className="text-xl font-bold headline-sm">Choose Service</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((s) => {
                            const isActive = service === s.id

                            return (
                                <button
                                    key={s.id}
                                    onClick={() => setService(s.id)}
                                    className={`group relative flex items-center gap-6 p-6 rounded-3xl border-2 transition-all duration-300 text-left
                ${isActive
                                            ? "border-primary bg-white shadow-lg scale-[1.02]"
                                            : "border-transparent bg-surface-container-low hover:bg-surface-container-high hover:scale-[1.01]"
                                        }`}
                                >
                                    {/* glow */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-3xl ring-4 ring-primary/10 pointer-events-none" />
                                    )}

                                    <div className="w-16 h-16 rounded-2xl overflow-hidden">
                                        <img src={s.img} className="w-full h-full object-cover" />
                                    </div>

                                    <div>
                                        <p className={`font-bold text-lg ${isActive ? "text-primary" : ""}`}>
                                            {s.name}
                                        </p>
                                        <p className="text-sm text-on-surface-variant">{s.location}</p>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </section>
                <section className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold headline-sm">Trip Journey</h2>
                        <div className="bg-surface-container-low p-1 rounded-full flex gap-1 w-fit">
                            {["Two Way", "One Way"].map((type) => {
                                const active = tripType === type

                                return (
                                    <button
                                        key={type}
                                        onClick={() => setTripType(type)}
                                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200
                ${active
                                                ? "bg-primary text-white shadow"
                                                : "text-on-surface-variant hover:text-on-surface"
                                            }`}
                                    >
                                        {type}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className="space-y-6">
                    <div className="flex items-end justify-between border-b-2 border-outline-variant/15 pb-4">
                        <h2 className="text-xl font-bold headline-sm">Passenger Types</h2>
                        <span className="text-on-surface-variant label-sm italic">Fares in NPR</span>
                    </div>

                    {trips.length === 0 && (
                        <div className="text-center text-on-surface-variant py-10">
                            Error Loading Tickets Prices
                        </div>
                    )}
                    <div className="space-y-4">
                        {trips.map((trip) => (
                            <div className="flex items-center gap-3 bg-surface-container-low px-3 py-2 rounded-full">
                                <button
                                    onClick={() => updateCount(trip.passenger_type, -1)}
                                    disabled={!counts[trip.passenger_type]}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow disabled:opacity-30"
                                >
                                    <Minus className="h-4 w-4" />
                                </button>

                                <span className="w-6 text-center font-bold">
                                    {counts[trip.passenger_type] || 0}
                                </span>

                                <button
                                    onClick={() => updateCount(trip.passenger_type, 1)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white shadow"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                        <button className="w-full flex items-center justify-center gap-2 py-4 text-primary font-bold">
                            <span>Show More Types (Elderly, Diff-Able...)</span>
                            <span className="material-symbols-outlined"><ChevronDown className="h-5 w-5" /></span>
                        </button>
                    </div>
                </section>
            </div>
            <div className="md:col-span-4 mt-12 md:mt-0">
                <div className="sticky top-28 space-y-6">
                    <div className="bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                        <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary"><Receipt className="h-6 w-6" /></span>
                            Booking Summary
                        </h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="label-sm text-on-surface-variant uppercase tracking-wider">Service</p>
                                    <p className="font-bold">
                                        {service === "manakamana-cable-car"
                                            ? "Manakamana Cable Car"
                                            : "Annapurna Cable Car"}
                                    </p>
                                </div>
                                <span className="material-symbols-outlined text-primary-container"><Mountain className="h-5 w-5" /></span>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="label-sm text-on-surface-variant uppercase tracking-wider">Journey</p>
                                    <p className="font-bold">{tripType} Trip</p>
                                </div>
                                <span className="material-symbols-outlined text-primary-container"><ArrowRightLeft className="h-5 w-5" /></span>
                            </div>
                            <div className="pt-6 border-t border-outline-variant/20">
                                <p className="label-sm text-on-surface-variant uppercase tracking-wider mb-4">Fare Breakdown</p>
                                <div className="space-y-2">
                                    {trips.map((trip) => {
                                        const count = counts[trip.passenger_type]
                                        if (!count) return null

                                        return (
                                            <div key={trip.passenger_type} className="flex justify-between text-sm">
                                                <span>{trip.passenger_type_desc} (x{count})</span>
                                                <span>NPR {trip.price * count}</span>
                                            </div>
                                        )
                                    })}
                                    <div className="flex justify-between text-sm text-on-surface-variant">
                                        <span>Taxes &amp; Fees</span>
                                        <span>Included</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 border-t-2 border-primary/10">
                                <div className="flex items-baseline justify-between">
                                    <p className="font-bold text-lg">Estimated Total</p>
                                    <div className="text-right">
                                        <p className="text-3xl font-black text-primary">
                                            NPR {totalAmount}
                                        </p>
                                        <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mt-1">Instant Settlement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handlePayment}
                        disabled={totalAmount === 0}
                        className={`w-full py-6 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all
    ${totalAmount === 0
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-primary hover:bg-primary-container text-white shadow-xl"
                            }`}
                    >                        Proceed to Pay
                        <span className="material-symbols-outlined"><ChevronRight className="h-6 w-6" /></span>
                    </button>
                    <div className="flex items-center justify-center gap-4 py-2 opacity-60">
                        <span className="material-symbols-outlined text-sm"><BadgeCheck className="h-4 w-4" /></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">PCI-DSS Compliant Payment</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CableCarPage