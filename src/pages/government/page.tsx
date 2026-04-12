import { FileText, Globe, GraduationCap, Landmark, OctagonMinus, Plane, Receipt } from "lucide-react"

const GovernmentPage = () => {
    return (
        <main className="pt-10 pb-32 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12 space-y-12">
                <section className="relative overflow-hidden rounded-[2.5rem] bg-primary h-64 flex items-center px-12 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90 z-10"></div>
                    <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-700">
                        <img alt="" className="w-full h-full object-cover" data-alt="Modern abstract architecture with high contrast shadows and clean blue geometric shapes reflecting financial security" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdbzjpBUaNgYqCrRouUnWQEZ5AzWc09iH21Hh5QrZM-SA6kC6tPYgQFkQlft8qrAg4TImnYi8s5EyTItNZ6uJkoYsgm5duGLZx-Tv4TV3fyfz_PhXf1F5irZPQwJzmPzgBgHYjCNF0Q0VSYJ3zZ7jRvfEX20_Y34BBOjS1vgE3FnpWdF5bH9AEv1Ww_mqk_XtOab2YwVw8XZ-kvFkzwlTSZ3TUo_RUufUcgHV-rlVmRuLPTcby2HbusXXfHtFiexP2zcdM1e4ZDg" />
                    </div>
                    <div className="relative z-20 text-on-primary">
                        <p className="text-label-sm font-semibold uppercase tracking-widest opacity-80 mb-2">Public Sector</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight">Government <br />Payments Hub</h1>
                    </div>
                </section>
                <section>
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Available Services</h2>
                            <p className="text-on-surface-variant text-sm mt-1">Direct integration with official portals</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-container-high transition-all duration-300 group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" data-icon="traffic"><OctagonMinus className="h-5 w-5" /></span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">eChalan</h3>
                            <p className="text-on-surface-variant text-xs leading-relaxed">Traffic Fines &amp; Clearances</p>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-container-high transition-all duration-300 group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" data-icon="account_balance"><Landmark className="h-5 w-5" /></span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Inland Revenue</h3>
                            <p className="text-on-surface-variant text-xs leading-relaxed">Income &amp; Property Tax</p>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-container-high transition-all duration-300 group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" data-icon="passport"><Plane className="h-5 w-5" /></span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Passport Dept</h3>
                            <p className="text-on-surface-variant text-xs leading-relaxed">Renewal &amp; Expedited Fees</p>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-container-high transition-all duration-300 group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" data-icon="public"><Globe className="h-5 w-5" /></span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Consular Services</h3>
                            <p className="text-on-surface-variant text-xs leading-relaxed">Document Attestation</p>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-container-high transition-all duration-300 group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" data-icon="school"><GraduationCap className="h-5 w-5" /></span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Loksewa Exam</h3>
                            <p className="text-on-surface-variant text-xs leading-relaxed">Application &amp; Exam Fees</p>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-container-high transition-all duration-300 group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" data-icon="payments"><Receipt className="h-5 w-5" /></span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Gov Revenue</h3>
                            <p className="text-on-surface-variant text-xs leading-relaxed">Miscellaneous State Dues</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-xl font-bold tracking-tight text-on-surface mb-6">Recently Paid</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-3xl border border-outline-variant/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined" data-icon="receipt_long"><Receipt className="h-5 w-5" /></span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Traffic Fine Payment</p>
                                    <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-0.5">Reference: CH-99021-X</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-primary">-$45.00</p>
                                <p className="text-on-surface-variant text-xs">Yesterday, 4:12 PM</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-3xl border border-outline-variant/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-tertiary">
                                    <span className="material-symbols-outlined" data-icon="description"><FileText className="h-5 w-5" /></span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Tax Certificate Renewal</p>
                                    <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-0.5">Reference: TX-2024-811</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-primary">-$120.00</p>
                                <p className="text-on-surface-variant text-xs">Oct 24, 11:30 AM</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )
}
export default GovernmentPage