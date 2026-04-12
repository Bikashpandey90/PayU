const BlueBookPaymentPage = () => {
    return (
        <main className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-12">
                <div className="flex items-center justify-between max-w-md mx-auto relative">
                    <div className="flex flex-col items-center z-10">
                        <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white mb-2">
                            <span className="material-symbols-outlined text-sm">check</span>
                        </div>
                        <span className="text-[0.6875rem] font-medium text-on-surface-variant">Tax Calculation</span>
                    </div>
                    <div className="absolute top-5 left-0 w-full h-0.5 bg-secondary-container -z-0">
                        <div className="h-full bg-primary" style={{ width: "50%" }}></div>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mb-2 font-bold">2</div>
                        <span className="text-[0.6875rem] font-bold text-primary">Payment &amp; Details</span>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant mb-2">3</div>
                        <span className="text-[0.6875rem] font-medium text-on-surface-variant">Confirmation</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                    <section className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_16px_40px_rgba(25,28,30,0.04)]">
                        <h2 className="text-xl font-medium font-headline mb-8 text-on-surface">Vehicle &amp; Delivery Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="relative">
                                <label className="absolute -top-3 left-0 text-[0.6875rem] text-on-surface-variant font-medium">Full Name</label>
                                <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all pt-2 pb-1 text-lg font-medium text-on-surface placeholder:text-outline-variant/50" placeholder="John Doe" type="text" />
                            </div>
                            <div className="relative">
                                <label className="absolute -top-3 left-0 text-[0.6875rem] text-on-surface-variant font-medium">Contact Number</label>
                                <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all pt-2 pb-1 text-lg font-medium text-on-surface placeholder:text-outline-variant/50" placeholder="+977 98XXXXXXXX" type="tel" />
                            </div>
                            <div className="relative">
                                <label className="absolute -top-3 left-0 text-[0.6875rem] text-on-surface-variant font-medium">Email Address</label>
                                <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all pt-2 pb-1 text-lg font-medium text-on-surface placeholder:text-outline-variant/50" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="relative">
                                <label className="absolute -top-3 left-0 text-[0.6875rem] text-on-surface-variant font-medium">Vehicle Number</label>
                                <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all pt-2 pb-1 text-lg font-medium text-on-surface placeholder:text-outline-variant/50" placeholder="BA 1 PA 1234" type="text" />
                            </div>
                            <div className="relative">
                                <label className="absolute -top-3 left-0 text-[0.6875rem] text-on-surface-variant font-medium">City</label>
                                <select className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all pt-2 pb-1 text-lg font-medium text-on-surface appearance-none cursor-pointer">
                                    <option>Kathmandu</option>
                                    <option>Lalitpur</option>
                                    <option>Bhaktapur</option>
                                    <option>Pokhara</option>
                                </select>
                            </div>
                            <div className="relative">
                                <label className="absolute -top-3 left-0 text-[0.6875rem] text-on-surface-variant font-medium">Pick-up Location</label>
                                <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all pt-2 pb-1 text-lg font-medium text-on-surface placeholder:text-outline-variant/50" placeholder="Street or Landmark" type="text" />
                            </div>
                        </div>
                    </section>
                    <section className="bg-surface-container-low p-8 rounded-[2rem]">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-medium font-headline text-on-surface">Document Upload</h2>
                            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[0.6875rem] font-bold">MANDATORY</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group relative aspect-[3/2] rounded-[1.5rem] border-2 border-dashed border-outline-variant bg-surface-container-lowest flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors overflow-hidden">
                                <img alt="Document placeholder" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" data-alt="Abstract smooth flowing blue and white digital art texture representing clean document background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgOcLuxxYIBxnh-J2GyzVnYYj4QQfKgkZ2k3IGT9xq-9jBbBC2XC4HweZ3ykcB3I_kvBiCKCiO6u5I-qj0mHo6lH6lIuVtH22PR8_cHa1_kwXhxN4EOYlBGScSXh4OrnNIvdjT5RTGIAqT2-2D0vl0oh4yW7IfCII5EI7_39BEpK0EkSgVLkJJxQrDvPRziURao3LbJCU2BmcFnKe3htGU3j9wx8EASA2Ld8N0D1biMJHM2iAe4XJxS5rgFmMLXPeSMqpD9Tz_Ng" />
                                <div className="relative z-10 flex flex-col items-center text-center px-4">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-3">upload_file</span>
                                    <span className="font-bold text-on-surface">Bluebook Front</span>
                                    <span className="text-[0.6875rem] text-on-surface-variant mt-1">Click to upload or drag image</span>
                                </div>
                            </div>
                            <div className="group relative aspect-[3/2] rounded-[1.5rem] border-2 border-dashed border-outline-variant bg-surface-container-lowest flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors overflow-hidden">
                                <img alt="Document placeholder" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" data-alt="Minimal geometric background with soft blue hues and textured paper feel for document upload area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJLe1ZCmREIilouK53u5Xd1cSMZMsnHZ6J2jwV_EiFpBqxuh5hIHXYj5SW9JSm8QyLgoQW20BpyDHbQlHHhauGuIS0yCTRCTIEog234CfTJ57CrfONHvAH2f70vT5JHKZyTfrWcRWrcjnGC7S8X43wwG1RkY8z2BFDavPGUftQ--DThEou65LVug-zWkRCKm-11SX88ISYfldHfAR0vYiV5vGpWNHBYsF4MUF-B6pWF-j_VJ240CNob--lgDQuho0vyc_KA8U5PQ" />
                                <div className="relative z-10 flex flex-col items-center text-center px-4">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-3">file_upload</span>
                                    <span className="font-bold text-on-surface">Bluebook Back</span>
                                    <span className="text-[0.6875rem] text-on-surface-variant mt-1">Click to upload or drag image</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                            <span className="material-symbols-outlined text-primary" data-weight="fill">verified_user</span>
                            <div>
                                <h4 className="text-sm font-bold text-primary">Confidential &amp; Secure</h4>
                                <p className="text-[0.75rem] text-on-surface-variant leading-relaxed">Your documents are encrypted and only used for tax processing. We never share your personal data with third parties.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="lg:col-span-4">
                    <div className="sticky top-8 space-y-6">
                        <div className="bg-primary text-white p-8 rounded-[2rem] overflow-hidden relative">
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-secondary-container/10 rounded-full blur-3xl"></div>
                            <span className="text-[0.6875rem] font-bold uppercase tracking-widest opacity-80">Total Tax Due</span>
                            <div className="mt-2 flex items-baseline gap-2">
                                <span className="text-4xl font-extrabold font-headline">NPR 22,605</span>
                                <span className="text-xs opacity-70">Incl. Fees</span>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-70">Annual Vehicle Tax</span>
                                    <span className="font-medium">NPR 18,500</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-70">Insurance Premium</span>
                                    <span className="font-medium">NPR 3,500</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-70">Service Charge</span>
                                    <span className="font-medium">NPR 605</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-high p-8 rounded-[2rem] space-y-6">
                            <button className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 active:scale-95 duration-150 shadow-lg shadow-primary/20">
                                Proceed to Pay
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-tertiary text-sm" data-weight="fill">lock</span>
                                    <span className="text-[0.75rem] font-medium text-on-surface-variant">256-bit SSL Secured Payment</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-tertiary text-sm" data-weight="fill">shield</span>
                                    <span className="text-[0.75rem] font-medium text-on-surface-variant">Government Approved Aggregator</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-outline-variant/30 text-center">
                                <p className="text-[0.6875rem] text-on-surface-variant italic">By proceeding, you agree to VaultPay's Terms of Service and Privacy Policy regarding document handling.</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-[1.5rem] bg-surface-container-lowest border border-outline-variant/10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">support_agent</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-on-surface">Need help?</p>
                                <p className="text-[0.6875rem] text-on-surface-variant">Chat with a VaultPay Assistant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlueBookPaymentPage