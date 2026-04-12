const SocialSecurityPaymentPage = () => {
    return (
        <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
            <div className="mb-8 flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span className="text-sm font-medium">Back to SSF Portal</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant mb-4">
                            <span className="material-symbols-outlined text-[18px]" >check_circle</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Details Verified</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">Social Security Fund</h1>
                        <p className="text-on-surface-variant text-lg">Payment Review &amp; Confirmation</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px]">
                            <span className="text-on-surface-variant font-medium text-sm">Employer Name</span>
                            <h2 className="text-xl font-bold text-on-surface mt-2">Amarjyoti Saving &amp; Credit Co-operative Limited</h2>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px]">
                            <span className="text-on-surface-variant font-medium text-sm">Employee ID</span>
                            <h2 className="text-xl font-bold font-mono tracking-tight text-on-surface mt-2">330704J1130004604</h2>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between">
                            <span className="text-on-surface-variant font-medium text-sm">Contribution Period</span>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-3xl font-extrabold text-on-surface">Year 2076</span>
                                <span className="text-lg font-bold text-primary">Month 7</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between">
                            <span className="text-on-surface-variant font-medium text-sm">Status</span>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-tertiary"></div>
                                <span className="text-lg font-bold text-tertiary">Pending Payment</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-48 rounded-[2rem] overflow-hidden bg-primary-container">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-tertiary opacity-40 mix-blend-overlay"></div>
                        <img alt="Financial Flow" className="w-full h-full object-cover" data-alt="abstract fluid shapes with deep blue and cobalt gradients reflecting light like liquid metal with soft neon accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY_tTz_wqF1NtXiLiMKy-ITzgF6UKelGX8VTPYubV2hVyI9gm5NucAsfzOU6kRJDbI7qb6S469u-ouAMba4ggJmMh3pSXTUtcZH3srOCK8LOVy6y7tjdAmmzO0IFOYnvhVQ20TIydQ6C3rdGqwDaLFKaYXtQ2am0if8taQy71MppPuYOWZ42lheSA0FwMybmUiiwFKFySwc-v2MhKQbjX00pTkcFme8zCVr6c8xYkaQ9yf61h2kWnCMgThxMlZ2O_LLr9O5B0wVw" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <p className="text-white/80 text-sm font-medium">Verified by VaultPay Encryption Shell</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="sticky top-28">
                        <div className="bg-surface-container-lowest p-8 rounded-[3rem] shadow-[0_16px_40px_rgba(25,28,30,0.06)] relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <p className="text-on-surface-variant text-sm font-medium mb-1">Total Due Amount</p>
                                        <div className="flex items-start gap-1">
                                            <span className="text-lg font-bold text-on-surface mt-2">NPR</span>
                                            <h3 className="text-5xl font-black tracking-tighter text-on-surface">18,872.80</h3>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                                </div>
                                <div className="space-y-4 mb-10">
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-on-surface-variant">Base Contribution</span>
                                        <span className="font-bold text-on-surface">NPR 18,200.00</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-t border-outline-variant/15">
                                        <span className="text-on-surface-variant">Service Charge</span>
                                        <span className="font-bold text-on-surface">NPR 672.80</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 bg-surface-container-low rounded-2xl px-4">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-tertiary">verified_user</span>
                                            <span className="font-semibold text-on-surface">Processing Fee</span>
                                        </div>
                                        <span className="font-bold text-tertiary">Waived</span>
                                    </div>
                                </div>
                                <button className="w-full py-6 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                                    Proceed to Pay
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <p className="text-center mt-6 text-on-surface-variant text-xs px-8 leading-relaxed">
                                    By clicking proceed, you agree to VaultPay's terms of service and the SSF transaction protocol.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-surface-container-low rounded-[2rem]">
                            <p className="text-sm font-bold text-on-surface-variant mb-4 uppercase tracking-widest">Recent Payees</p>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                        <img className="w-full h-full object-cover rounded-full" data-alt="portrait of a young professional woman with a warm smile and dark hair, soft lighting, creative agency background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrS2uXtzPAvJzGoGu74CSvScL4Y4rmKsfV4je8SBPx7UuXYv1R9FW6MM9rC341b_2fEAHgYXnTiHxIk_r115kfI-J0PDuTfJKu9Kw6svF6cFmTK9cRbv9QrPZ6k67iStWy2DqKq9uCQk6iTfZfedI1rTwKrSDy1IBGjSjDzMq5XmvDbRPmTuisF6iUhLXXKKapWRpo-jAJJjvo2_gNDClPudpo95QTj74BALuQVf2SxtvvyTs2rXlJFZoFXcYoSD1wHNjOHzhAtQ" />
                                    </div>
                                    <span className="text-[10px] font-bold text-on-secondary-fixed-variant">Sita M.</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                        <img className="w-full h-full object-cover rounded-full" data-alt="portrait of a confident man in a suit, soft daylight, minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkYYJ6lAaMqT-OacECIETKvD3ANIoVZD4IoQOcPQJPHUFS2FHAqLGj6AOPKxeUM-lgFavAML-r-KOosvWNrXHrwob5CJ9kQZL_f3Q8KBQkw3Tj3eLXXfZ4i9hPIkceGrJdl6ii4T_I2Rp0xd50TktUQh7V5PUhcRVjsOX5XKZgP2-wvQf7U_90gUdwxcITrtsaZN0Ftsfi-mQldhOo2_I1fHRnACHK1-QMR7TrpPD2Gqc-LkLrlS86PIX4IU4GjL51E_SkPHd9Pg" />
                                    </div>
                                    <span className="text-[10px] font-bold text-on-secondary-fixed-variant">Rajesh K.</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                        <span className="material-symbols-outlined text-outline-variant group-hover:text-white">add</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-on-secondary-fixed-variant">New</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SocialSecurityPaymentPage