import { AccountContext } from "@/context/account-context"
import { formatNumber } from "@/lib/utils"
import transactSvc from "@/services/transaction.service"
import { ChevronRight, Clock, Minus, PlaneTakeoff, Plus, Ticket, Users } from "lucide-react"
import { useContext, useEffect, useState } from "react"

const ZooPage = () => {
    const { accountinfo } = useContext(AccountContext) as { accountinfo: any }

    const [tickets, setTickets] = useState<any[]>([])
    const [counts, setCounts] = useState<{ [key: number]: number }>({})

    const fetchZooDetails = async () => {
        try {
            const response = await transactSvc.fetchZooDetails()
            const details = response?.data?.details || []
            setTickets(details)

            // initialize counts
            const initialCounts: any = {}
            details.forEach((item: any) => {
                initialCounts[item.id] = 0
            })
            setCounts(initialCounts)


        } catch (exception) {
            console.log(exception)
        }
    }

    const increment = (id: number) => {
        setCounts(prev => ({
            ...prev,
            [id]: prev[id] + 1
        }))
    }

    const decrement = (id: number) => {
        setCounts(prev => ({
            ...prev,
            [id]: Math.max(0, prev[id] - 1)
        }))
    }
    useEffect(() => {
        fetchZooDetails()
    }, [])

    const total = tickets.reduce((sum, item) => {
        return sum + (counts[item.id] || 0) * item.rate
    }, 0)

    const totalTickets = Object.values(counts).reduce((a, b) => a + b, 0)
    console.log(decrement, increment, total, totalTickets)


    return (
        <main className="max-w-6xl mx-auto px-6 py-8 md:py-12 mb-24 md:mb-0">
            <section className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-2">Central Zoo</h1>
                        <p className="text-lg text-on-surface-variant max-w-xl">Experience wildlife in the heart of the city. Secure your entry with VaultPay's seamless kinetic booking.</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Your Wallet</span>
                        <div className="text-4xl font-black text-primary">NRs {formatNumber(accountinfo?.balance)}</div>
                    </div>
                </div>
            </section>



            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">






                <div className="md:col-span-8 bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden">


                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-primary" ><Ticket className="h-6 w-6" /></span>
                            <h2 className="text-2xl font-bold tracking-tight">Standard Admission</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-surface-container-lowest p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">Adult</h3>
                                        <p className="text-sm text-on-surface-variant">General entry 18+</p>
                                    </div>
                                    <span className="text-lg font-black text-primary">150</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Minus className="h-4 w-4" /></span></button>
                                    <span className="text-xl font-bold font-mono">0</span>
                                    <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">Children</h3>
                                        <p className="text-sm text-on-surface-variant">Ages 5 - 12 years</p>
                                    </div>
                                    <span className="text-lg font-black text-primary">50</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Minus className="h-4 w-4" /></span></button>
                                    <span className="text-xl font-bold font-mono">0</span>
                                    <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">Student</h3>
                                        <p className="text-sm text-on-surface-variant">Valid Student ID req.</p>
                                    </div>
                                    <span className="text-lg font-black text-primary">90</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Minus className="h-4 w-4" /></span></button>
                                    <span className="text-xl font-bold font-mono">0</span>
                                    <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">Elderly Citizen</h3>
                                        <p className="text-sm text-on-surface-variant">Ages 65+ with ID</p>
                                    </div>
                                    <span className="text-lg font-black text-primary">90</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Minus className="h-4 w-4" /></span></button>
                                    <span className="text-xl font-bold font-mono">0</span>
                                    <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-transform"><span className="material-symbols-outlined text-sm"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 rounded-[2.5rem] bg-secondary-container relative overflow-hidden min-h-[300px]">
                    <img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" data-alt="Cinematic close-up of a majestic leopard resting on a rock with soft tropical foliage and atmospheric morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjFT8fl0E8mkmwcKSLCKgLS6wdF-ptoaVwf-4yuE8wmXny1V-sfqWnxtEiXU8JRn-tn2cPLnNjMTYmoMq7rO3C1HTjcu0uxj7ti4tSvO_vQSmVEmFPYay9jb-DUr3r3GXeEwMZRD_Dp0q2lFtBsBpDV73FE6S6dAEIEztS2-SVZmSWHXISSYHuRVllVLrV2LunUeaa8YJ0cScpeH2pqqY7JHFtVLAAzdUCC3mO0wTRaj-PEwlKjFlS5Bvq8S5XxS8g5LgT80cAVQ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-container via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 p-8">
                        <span className="inline-block px-3 py-1 bg-surface-container-lowest text-primary text-[10px] font-black uppercase tracking-tighter rounded-full mb-3">Live Status: Open</span>
                        <h3 className="text-2xl font-bold text-on-secondary-fixed leading-tight mb-2">Jawalakhel, Lalitpur</h3>
                        <p className="text-on-secondary-fixed-variant text-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-base"><Clock className="h-4 w-4" /></span>
                            10:00 AM — 5:00 PM
                        </p>
                    </div>
                </div>
                <div className="md:col-span-6 bg-surface-container-low p-8 rounded-[2.5rem]">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-primary"><Users className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-bold tracking-tight">SAARC Nationals</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-3xl">
                            <div>
                                <h4 className="font-bold">SAARC Adult</h4>
                                <p className="text-xs text-on-surface-variant">Passport/ID required</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-black text-primary">250</span>
                                <div className="flex items-center bg-surface-container rounded-full p-1 gap-4">
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-xs"><Minus className="h-4 w-4" /></span></button>
                                    <span className="font-bold text-sm w-4 text-center">0</span>
                                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-xs"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-3xl">
                            <div>
                                <h4 className="font-bold">SAARC Children</h4>
                                <p className="text-xs text-on-surface-variant">Under 12 years</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-black text-primary">125</span>
                                <div className="flex items-center bg-surface-container rounded-full p-1 gap-4">
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-xs"><Minus className="h-4 w-4" /></span></button>
                                    <span className="font-bold text-sm w-4 text-center">0</span>
                                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-xs"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-6 bg-surface-container-low p-8 rounded-[2.5rem]">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-primary"><PlaneTakeoff className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-bold tracking-tight">International</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-3xl border-2 border-transparent hover:border-primary/10 transition-colors">
                            <div>
                                <h4 className="font-bold">Non-SAARC Adult</h4>
                                <p className="text-xs text-on-surface-variant">International tourists</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-black text-primary">750</span>
                                <div className="flex items-center bg-surface-container rounded-full p-1 gap-4">
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-xs"><Minus className="h-4 w-4" /></span></button>
                                    <span className="font-bold text-sm w-4 text-center">0</span>
                                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-xs"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-3xl border-2 border-transparent hover:border-primary/10 transition-colors">
                            <div>
                                <h4 className="font-bold">Non-SAARC Children</h4>
                                <p className="text-xs text-on-surface-variant">Under 12 years</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-black text-primary">375</span>
                                <div className="flex items-center bg-surface-container rounded-full p-1 gap-4">
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-xs"><Minus className="h-4 w-4" /></span></button>
                                    <span className="font-bold text-sm w-4 text-center">0</span>
                                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-xs"><Plus className="h-4 w-4" /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sticky bottom-6 z-50">
                <div className="bg-surface-container-lowest/80 backdrop-blur-2xl p-6 rounded-[2rem] shadow-[0_16px_40px_rgba(25,28,30,0.12)] border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-primary-container flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary" ><Ticket className="h-6 w-6" /></span>
                            </div>
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-surface-container-high flex items-center justify-center text-xs font-bold">
                                +0
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Estimated Total</p>
                            <p className="text-3xl font-black text-on-surface leading-tight">NRs 0.00</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-12 py-4 rounded-full bg-primary text-on-primary font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 flex items-center justify-center gap-2">
                            Proceed to Pay
                            <span className="material-symbols-outlined"><ChevronRight className="h-5 w-5" /></span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ZooPage