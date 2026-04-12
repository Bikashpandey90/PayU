import { ChevronRight } from "lucide-react"
import { NavLink } from "react-router-dom";

const CommunityElectricityPage = () => {

    const providers = [
        {
            key: "himchuli",
            name: "Himchuli Electricity",
            desc: "Regional mountain grid supplier",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaElhZjo14-aF6OTNT80qp2GpnoFvPfJbeJE-U4LUQuJHJfOXJQBYsqMk5IRf_Yk982GFxgbCDcYGAGR0C4Tu0VxNIRrCpRrzNkrdOp8z8-BRrQYylcC2zKCb2P8HQGzdzpu_CtGdNcAqqTuUThE6TocaJBlqffLQCHKwVckwXskYwtMiwKJyaTKkv9R9ptdX5zjJL78Nr8x_5WmT1gR-44f21cUbBdUCNC4xg1UgjBJXH1wxvfDZX4zTx8r2lb5RoNnKqdkxrFA",
        },
        {
            key: "watermark",
            name: "Watermark",
            desc: "Urban residential energy partner",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaydwTYcYUpxRRwHC2kVExEEgssppugWdwj_guIV0vfWcjKSIRpqQB6FQefoWVNs50mR0bRDQeJBrgmD91LhjRCKk-VkzhcmIALQouIRgsagHUr8jSG3hzjOGxZPvLOU7U3gC3A0fl6gZ8RgLKvivfhcu9Ak9lNiVBMqRK7nobnRAgkI13oGzuW3y-ISc5aDoPLXkM-dcim2NhMt688U8cnGS9uq5N7UcksXK4camMs9dTMOInWJxf9lEc378jqzRFHfiaa_T7ww",
        },
        {
            key: "dreamer",
            name: "Dreamer",
            desc: "Clean renewable energy solutions",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8L2ljnN5RQc1TasIYJrZwGFEZFkOBWNNhDr-D7hKrS7dRMxCa06PwvvsYn41tdCesUZ34a8fzzvod6phy67ILEcZ6hYS7GFmzup-eiGj-pPYk_xnxt80SmKPQ8Bbv9qzS0Y68_eBiKy3ypPsBpQtjVyavN4QdP9a9YlOprbQWRgKJ7RvuRd_SISpzN-9IpvUd5hXigE82XuJkN_hOkS5-n16NzzxdzdrJYBjVtkaGd99YoF6djXOU_P6XNuQwq6dm14iaKuQTeA",
        },
        {
            key: "softlab",
            name: "Softlab",
            desc: "Industrial power and automation",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPvqzOFO9Y7nKzgDZk2nO9hR3mIHlFS45Eqrh2zpSnDF49R3dJf1ev_ffDR2Y46-sifRki-0bfAh_T8QpA7uNqxNvGuRCP5x8AxAqRec6jnWPrgdIqQduVVajRcVKOxfmBCrccgxCS4kgB4ijdutQCiNkEEHGKsLqyTjCLFwAjvKz3LNNBjf6BVwgjZ_q3w8EtwHIk9jmEAKjIABPzmpf3VNMJp2yigsJwHv_ey96RpQM9I1Vw5ozwI1NWCqxaHPrfzoRWmL2ZlQ",
        },
        {
            key: "bpc",
            name: "BPC",
            desc: "National power corporation",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcPPuiLFQ8FkExQeA0MG3_hXeRSFDasBX8jw_YGQ1pgm3p50DUn3qVXEZ5mjFsGn7QnfRmC93hTukrEfqbKfYajpVgJ1s8Zyt7HuFU9o3o3CZoQGHilZXSsxigDACpf0GGFluRLb4EXxSiYZ7UQfIEMgbNVe-oe1PSxxgAaCzQRgn0ww-8zDWhAbtT7a4um8ZbLW6Mpv4odnjwEDAygPWQpzW6HJCslgYR8DNRCNeRrKieinSCktpF1NIMQoM6U5Td-d9cSinbmA",
        },
    ];

    return (
        <main className="max-w-6xl mx-auto px-6 py-12 pb-12">
            <header className="mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">Electricity Provider</h1>
                <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Choose your provider to view and settle your bill instantly.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    providers.map((provider) => (
                        <NavLink to={provider.key} className="group relative overflow-hidden bg-surface-container-low rounded-[2rem] p-8 transition-all duration-300 hover:bg-surface-container-lowest hover:shadow-[0_16px_40px_rgba(25,28,30,0.06)] cursor-pointer">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                    <img className="w-10 h-10 object-contain" data-alt="minimalist logo for Himchuli electricity with stylized mountain peak in cobalt blue on white background" src={provider?.img} />
                                </div>
                                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors"><ChevronRight className="h-6 w-6" /></span>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-2">{provider?.name}</h3>
                            <p className="text-on-surface-variant text-sm mb-6">{provider?.desc}</p>

                        </NavLink>
                    ))
                }


            </div>
            <section className="mt-24 bg-primary rounded-[3rem] p-12 relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h2 className="text-4xl font-extrabold mb-6">Need assistance with your utility payments?</h2>
                        <p className="text-primary-fixed-dim text-lg mb-8 leading-relaxed">Our 24/7 support team is here to help you with payment discrepancies, bill tracking, or provider connectivity issues.</p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Contact Support</button>
                            <button className="bg-primary-container text-white px-8 py-4 rounded-full font-bold hover:bg-primary-container/80 transition-colors">View FAQs</button>
                        </div>
                    </div>
                    <div className="hidden md:block relative">
                        <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
                        <img className="rounded-[2rem] w-full h-[300px] object-cover relative z-10 shadow-2xl" data-alt="high-quality lifestyle shot of a modern office space with glowing screens and focused energy, professional atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAad-k530wdSXUuQHNZ_GKfJpVKSD87NcXcWrjlJOwZD06b5Jgnp-E_EM7Aih_KDtpLNCCjniel-neHmqC5g0BLaHinCjzRveEmMF1CmyscB4f1wtKPnwhIGNuwluynf37bpj3E0IAvUmcsY_D0SjBNETt3IMRUDK7IsgZShNjHEBc5wPZvEE7cV-N8A4-GXEVsPtiOcAOVpCn8yZLE4Y_NF5Miyy9R5K1HXXa-iJhoeFGCZGq2pd0BciHZbjz2-FOzuuqz6wPGSA" />
                    </div>
                </div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"></div>
            </section>
        </main>
    )
}

export default CommunityElectricityPage