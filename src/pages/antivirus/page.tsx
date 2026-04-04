import { formatNumber } from "@/lib/utils"
import transactSvc from "@/services/transaction.service"
import { ChevronRight, Verified } from "lucide-react"
import { useEffect, useState } from "react"

const AntiVirusPage = () => {
    const [anti, setAnti] = useState('eset-antivirus')
    const [packages, setPackages] = useState<any[]>([])
    const [selectedPackage, setSelectedPackage] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    



    console.log(selectedPackage)


    const ANTIVIRUSES = [
        {
            id: "kaspersky",
            name: "Kaspersky",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT-xQDwhXfKOyvixOP3VlEFbnRzgxM90MWyWtKWfHXhS6mP4mFXvdfObB4piiU55Fnm9dbK0Re7BQa3NplonLvBsoR6GrLP5Eowi-bGdbB8HtNY0PkObDoVucUMMyw2ahumiFtq77N6GDY7LaoCQGZEz0pVddUEZNGvXDnv6mf9PCpyQu66TsfZJq6HcXBqILFsx0cAKSKSa6KleFF06F9v9_rSxxSGZhvj8rQ3m_CLEsumPbz06g0d3lL9sOIC_3SM7bhGYyoQQ"
        },
        {
            id: "eset-antivirus",
            name: "ESET",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFvsuI9efciMbqyR-3g8YysaN8Ieq3bxhBmVjskSz00z93JcAjNde2SawH8suB_V2W5Z2-AQEzxIQGEBfyy3Do-5KZs-MH5ZFzXhsrHVwPpgLNBvFIJLjh3PwgsfmUhWEv8f2ocVT7AjqqB0m_5wL3zTUrsarSFJavI7QqDqfnEd7PvKkl20iuZHSkl_wJIv7dc2l5zrIeE5cMy71G82LugNsw8D8AeLrGJv2TOdAEEcSW4WpoQlj7KMs8O_OFQn5CYjFl4D-8_Q"
        },
        {
            id: "k7-antivirus",
            name: "K7 Security",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwM3r6rezDAtMAakkcov9ZC7grUiv0EiOEg-LxTfjzpvRk_RA02fXTg86yCP2rkqhqUeBXlwuYCFmd4TAmKi6gWH1OR_MFVsUDIMuzSvpOce_9yjULJfSNttwdU-ylUyrpvfxaS7wKrCqhRlsMZM8577_eEdIndwT7J8arSXjGpbdGiPr02POaCjGKlcfqJBf1Odjf2ezTevTMdrnOd5_BUdVebmibH52YpFe8PeYk-CC50vHiRY4fwdQCAz_BqZLiJn53rCOIrA"
        },
        {
            id: "wardwiz-antivirus",
            name: "Wardwiz",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuer1eSuJDQOR4YWqamLxR31tUorBhRJ2_MZq_0eqElrTKAhhAkknJHEiZPyVT1Q9ps2ODHMxJlNpAP0dbEvO3N4Lq40U7D_E-3IYz_ybPwBy0LZpHsGu9dE54R8jFHAPhl0_hoHIGMipDaTFARlB3qbgyQNPE3XnWrd52OvepvvPWH4TdiFE8PoJtPcHim_KjmoEyru72CO--aXVPLCNDtCEw8lDlPTK9aInmU1wYCte1gTOlV3I_xdz7zTk_F9kYkqz9NQwR3Q"
        },
        {
            id: "mcafee-antivirus",
            name: "McAfee",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UhOwBJWoRim-zhvVOxCLtsxBsEK-ekDCmeTcB0S8OD3C0bOlMPucE9Ju5ArP_pqr9LNNzX4r2MnwbmkwcYPuqEkEpqFOeY5hH0zOlxA73PsYp5T2QSutSNhxeTODu4dh76yQjldWL643eokGcdVn2PRrxZJ2lYY2bX-41fcvR0yW1DPnUtUVfHb71ktAiA6bToiwNRFQLS78QKeDGJlZbXp8VJ9zzxEVfZJ7NNz6BhDOc3ucw3yoYXnXsY9AIWlh-qEtq6JCSQ"
        }
    ]


    const fetchAntiVirusDetails = async () => {
        setLoading(true)
        try {
            const payload = {
                antivirus: anti
            }

            const response = await transactSvc.fetchAntiDetails(payload)

            let normalized: any[] = []
            console.log(response)

            if (response?.data?.detail) {
                normalized = response?.data.detail.map((item: any) => ({
                    name: item.name,
                    code: item.product_code,
                    price: item.price,
                    validity: "1 Year",
                }))
            }

            else if (response?.data?.data) {
                normalized = response.data.data.map((item: any) => ({
                    name: item.name,
                    code: item.value,
                    price: item.amount,
                    validity: "1 Year",
                }))
            }

            setPackages(normalized)
            setSelectedPackage(normalized[0]) // default select
        } catch (err) {
            console.log("API failed → using mock")

            const mock = [
                {
                    name: "Standard Protection",
                    code: "MOCK-STD",
                    price: 700,
                    validity: "1 Year",
                },
                {
                    name: "Plus Security",
                    code: "MOCK-PLUS",
                    price: 1400,
                    validity: "1 Year",
                },
            ]

            setPackages(mock)
            setSelectedPackage(mock[0])
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchAntiVirusDetails()
    }, [anti])

    const handlePayment = async () => {
        try {
            const payload = {
                product_code: selectedPackage.code,
                name: "",
                email: "",
                mobile: "",
                product_name: selectedPackage.name ?? ''
            }
            const response = await transactSvc.purchaseItem(payload)
            console.log(response)

        } catch (exception) {
            console.log(exception)
        }
    }

    const selectedAntivirus = ANTIVIRUSES.find(a => a.id === anti)

    const subtotal = selectedPackage?.price || 0
    const total = subtotal



    return (
        <main className="flex-grow max-w-6xl w-full mx-auto px-8 py-10">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-grow space-y-12">
                    <section>
                        <div className="mb-6">
                            <h1 className="text-[3.5rem] leading-none font-extrabold tracking-tighter text-on-surface">Antivirus</h1>
                            <p className="text-on-surface-variant text-body-lg mt-2 font-medium">Select your preferred security provider to secure your digital vault.</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {ANTIVIRUSES.map((item) => {
                                const isActive = anti === item.id

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setAnti(item.id)}
                                        className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all
                ${isActive
                                                ? "bg-surface-container-lowest border-primary ring-4 ring-primary/10"
                                                : "bg-surface-container-low hover:bg-surface-container-lowest"
                                            }`}
                                    >
                                        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-surface-container-low overflow-hidden">
                                            <img
                                                src={item.logo}
                                                className={`w-full h-full  transition-all ${isActive ? "" : "grayscale"}`}
                                            />
                                        </div>

                                        <span className={`text-sm font-bold ${isActive ? "text-primary" : "text-on-surface-variant"}`}>
                                            {item.name}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </section>
                    <section className="space-y-6">
                        <div className="flex items-end gap-2">
                            <h2 className="text-headline-sm font-bold text-on-surface">Select Package</h2>
                            <div className="h-[2px] flex-grow bg-surface-container mb-2"></div>
                        </div>
                        <div className="space-y-4">
                            {loading
                                ? Array.from({ length: 3 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="p-6 rounded-xl bg-surface-container-low animate-pulse"
                                    >
                                        <div className="flex justify-between">
                                            <div className="space-y-2">
                                                <div className="h-4 w-40 bg-surface-container-high rounded"></div>
                                                <div className="h-3 w-24 bg-surface-container-high rounded"></div>
                                            </div>
                                            <div className="h-4 w-16 bg-surface-container-high rounded"></div>
                                        </div>
                                    </div>
                                ))
                                :
                                packages.map((pkg) => {
                                    const active = selectedPackage?.code === pkg.code

                                    return (
                                        <label
                                            key={pkg.code}
                                            className={`flex items-center justify-between p-6 rounded-xl cursor-pointer transition-all
                ${active
                                                    ? "bg-primary/5 border-2 border-primary"
                                                    : "bg-surface-container-low hover:bg-surface-container-high"
                                                }`}
                                        >
                                            <div className="flex items-center gap-6">
                                                <input
                                                    type="radio"
                                                    hidden
                                                    checked={active}
                                                    onChange={() => setSelectedPackage(pkg)}
                                                    className="w-5 h-5"
                                                />

                                                <div>
                                                    <h3 className={`font-bold text-lg ${active ? "text-primary" : ""}`}>
                                                        {pkg.name}
                                                    </h3>
                                                    <p className="text-sm text-on-surface-variant">
                                                        {pkg.validity}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <p className={`font-black ${active ? "text-primary" : ""}`}>
                                                    NPR {pkg.price}
                                                </p>
                                            </div>
                                        </label>
                                    )
                                })}
                        </div>
                    </section>
                </div>
                <aside className="lg:w-[380px] shrink-0">
                    <div className="sticky top-44 bg-surface-container-lowest rounded-[2rem] p-8 shadow-2xl shadow-primary/5 border border-surface-container-high">
                        <div className="mb-8">
                            <h2 className="text-headline-sm font-black text-on-surface tracking-tight">Booking Summary</h2>
                            <div className="w-12 h-1 kinetic-gradient mt-2 rounded-full"></div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-label-sm text-on-surface-variant font-bold uppercase tracking-wider mb-1">Service</p>
                                    <p className="text-body-lg font-extrabold text-on-surface">{selectedAntivirus?.name} Antivirus</p>
                                </div>
                                <span className="material-symbols-outlined text-tertiary" data-icon="verified" data-weight="fill" ><Verified className="h-5 w-5" /></span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-label-sm text-on-surface-variant font-bold uppercase tracking-wider mb-1">Package</p>
                                    <p className="text-body-lg font-bold text-on-surface">    {selectedPackage?.name || "-"}</p>
                                </div>
                                <div>
                                    <p className="text-label-sm text-on-surface-variant font-bold uppercase tracking-wider mb-1">Validity</p>
                                    <p className="text-body-lg font-bold text-on-surface">    {selectedPackage?.validity || "-"}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-6 mt-6 border-t border-dashed border-outline-variant">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-label-sm text-on-surface-variant font-medium">Subtotal</p>
                                    <p className="text-label-sm font-bold">NPR {formatNumber(subtotal)}
                                    </p>
                                </div>
                                {/* <div className="flex justify-between items-center mb-4">
                                    <p className="text-label-sm text-on-surface-variant font-medium">VAT (13%)</p>
                                    <p className="text-label-sm font-bold">NPR 161.06</p>
                                </div> */}
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-black text-on-surface">Total Amount</p>
                                    <p className="text-2xl font-black text-primary">NPR {formatNumber(total)}</p>
                                </div>
                            </div>
                            <div className="pt-8">
                                <button
                                    disabled={!selectedPackage || loading}
                                    onClick={handlePayment}
                                    className="w-full bg-primary text-white py-5 rounded-full font-extrabold text-lg shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                                    <span>Proceed to Pay</span>
                                    <span className="material-symbols-outlined text-white" data-icon="arrow_forward"><ChevronRight className="h-6 w-6" /></span>
                                </button>
                                <p className="text-center text-[0.65rem] text-on-surface-variant/60 mt-4 font-medium px-4">By clicking "Proceed to Pay", you agree to the VaultPay Subscription Terms.</p>
                            </div>
                        </div>
                    </div>

                </aside>
            </div>
        </main>
    )
}

export default AntiVirusPage