const MeroSharePayment = () => {
    return (
        <main className="flex-1 p-4 md:p-8 lg:p-12 mb-24 md:mb-0">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">Demat &amp; Meroshare</h1>
                        <p className="text-on-surface-variant font-medium">Account Details for Client Code: <span className="text-on-surface">00063951</span></p>
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-[2rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary mb-1 block">Account Holder</label>
                                <div className="text-2xl font-bold leading-tight">BAL SHANKER THAPA RESHMI</div>
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary mb-1 block">Depository Participant (DP)</label>
                                <div className="text-2xl font-bold leading-tight">NIBL ACE CAPITAL LIMITED</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 bg-secondary-container rounded-2xl flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">autorenew</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] uppercase font-bold text-outline">Expires</div>
                                        <div className="text-sm font-extrabold text-error">2024-07-15</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Meroshare Renewal</h3>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 font-bold text-on-surface focus:ring-2 focus:ring-primary appearance-none">
                                            <option>1 Year (Rs. 50)</option>
                                            <option>2 Years (Rs. 100)</option>
                                            <option>3 Years (Rs. 150)</option>
                                            <option>4 Years (Rs. 200)</option>
                                            <option>5 Years (Rs. 250)</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                                <span className="text-label-md text-on-surface-variant">Selected Period</span>
                                <span className="text-headline-sm font-bold text-primary">Rs. 50</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 bg-tertiary-container/10 rounded-2xl flex items-center justify-center text-tertiary">
                                        <span className="material-symbols-outlined text-3xl">account_balance</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] uppercase font-bold text-outline">Expires</div>
                                        <div className="text-sm font-extrabold text-tertiary">2025-07-15</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Demat Renewal</h3>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 font-bold text-on-surface focus:ring-2 focus:ring-primary appearance-none">
                                            <option>1 Year (Rs. 100)</option>
                                            <option selected>2 Years (Rs. 200)</option>
                                            <option>5 Years (Rs. 500)</option>
                                            <option>10 Years (Rs. 1,000)</option>
                                            <option>20 Years (Rs. 2,000)</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                                <span className="text-label-md text-on-surface-variant">Selected Period</span>
                                <span className="text-headline-sm font-bold text-primary">Rs. 200</span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[2.5rem] h-48 relative overflow-hidden flex items-center p-12 text-white">
                        <img alt="Financial growth background" className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" data-alt="Modern abstract 3D financial charts and data points flowing in deep blue and indigo space with atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc3hqt0it41v2BpvXIQMXAVSegPg847ZFqybAM5pEdEEmHpYAyqb-UXTWFVHtcl7mKp8ZOUxWnFctEq_hqZpmjzc-yFjVVbMl9fQbRwFiYdY1GsrXhi19joR7u41vRqt_JJSzIsA__8DgqvT--liz5YpZbA8m5hsxtO7p9PQW4mxBkwEeq4DDwP-EjSaqsj3IQNwAVRZJrAoiRLV0oNMw4BSYYbRlLjJ0edgJQ63uCn63VMTEVvt2gD9CwjNzaWO1U-N9oxeCs6A" />
                        <div className="relative z-10 max-w-md">
                            <h4 className="text-2xl font-extrabold mb-2">Secure Future Investments</h4>
                            <p className="text-sm text-white/70">Regular renewal of your Demat account ensures uninterrupted trading and dividend collection.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 sticky top-28 space-y-6">
                    <div className="bg-surface-container-high p-8 rounded-[2.5rem] shadow-xl shadow-on-surface/5">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-primary font-bold">receipt_long</span>
                            <h2 className="text-xl font-extrabold tracking-tight">Order Summary</h2>
                        </div>
                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant font-medium">Meroshare (1 Year)</span>
                                <span className="font-bold">Rs. 50.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant font-medium">Demat (2 Years)</span>
                                <span className="font-bold">Rs. 200.00</span>
                            </div>
                            <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
                                <div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-outline">Total Payable</span>
                                    <div className="text-4xl font-extrabold text-primary tracking-tighter">Rs. 250</div>
                                </div>
                                <span className="text-label-sm text-on-surface-variant mb-1">NPR</span>
                            </div>
                        </div>
                        <button className="w-full bg-primary py-6 rounded-full text-white font-extrabold text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 transition-transform">
                            Renew Now
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <p className="text-center mt-6 text-[11px] text-on-surface-variant px-4">
                            By clicking 'Renew Now', you agree to VaultPay's terms of service and transaction policies.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 px-6 py-4 bg-surface-container-low rounded-3xl border border-white">
                        <div className="w-10 h-10 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
                            <span className="material-symbols-outlined" >verified_user</span>
                        </div>
                        <div>
                            <div className="text-xs font-extrabold uppercase tracking-tight">Bank-Grade Security</div>
                            <div className="text-[10px] text-on-surface-variant">PCI-DSS Compliant Encryption</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MeroSharePayment