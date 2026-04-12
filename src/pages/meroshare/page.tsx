import { Search } from "lucide-react"

const MeroSharePage = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-12">
                <section>
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight">Meroshare &amp; Demat</h1>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-label-md font-bold text-on-surface-variant block ml-1">Select Depository Participant (DP)</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"><Search className="h-5 w-5" /></span>
                            <input className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all duration-300 py-4 pl-12 pr-4 text-title-lg font-medium rounded-xl" placeholder="Search your bank or capital..." type="text" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <button className="flex items-center gap-3 p-4 bg-surface-container-lowest border-2 border-primary rounded-xl text-left group transition-all duration-200">
                                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center overflow-hidden">
                                    <img className="w-full h-full object-cover" data-alt="minimalist bank logo icon abstract blue geometric shape white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2aG8yIgvSoLEZDKq7z644PpSWnpoMt7DKsRFCTBuCGy595-EZSyZq1A5YATInr8Uxmu5yK-NB5khmxcXRcpj5sQQ7nfQ45LahKP1UgHulePq8Gy3Ihy97yheM02yztkj1CD3A0xvQXQUsZ8esUmPcI0LRgPz8QY58hgfhfGxK_ihViCOSc4dig74zIBc91aEVuDbYZCAVi0-ndqImk-LpRzmMOcSHfhCfGU38_jiUb3lk8k90bmECpkh19cXMKIFhvvCg83URaw" />
                                </div>
                                <div>
                                    <p className="text-body-lg font-bold text-primary">Global IME Capital</p>
                                    <p className="text-label-sm text-on-surface-variant">Recommended</p>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 p-4 bg-surface-container-low border-2 border-transparent hover:border-outline-variant rounded-xl text-left transition-all duration-200">
                                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
                                    <img className="w-full h-full object-cover" data-alt="corporate bank logo red and blue emblem minimalist style clean design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJRUpQU6BgxPDTmnB9SFX9MH-PH_Qjz8sOgo_7biXGzprUCTdATwFMK_4cFde3Z9kHV06GtL0EaUQ0i9ldyJFCY1oJblTHJ6FM9pjOrTT-mQk1npcQ_HUHfQcp2GNb6UPTFTPewEqA9D4tPPgzskn-RWZTf7wIuFwkjwLRWD2AuTa-GupSBjThfAl30IoG3guzxWKKW5dXek_MI9LoLf0vYeFbwFdplVxgzDUBrxUqqFr3DNYlPLzHnMrrRvflBBKmqHNyMnONA" />
                                </div>
                                <div>
                                    <p className="text-body-lg font-bold">NIC Asia Bank</p>
                                    <p className="text-label-sm text-on-surface-variant">Active Provider</p>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 p-4 bg-surface-container-low border-2 border-transparent hover:border-outline-variant rounded-xl text-left transition-all duration-200">
                                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
                                    <img className="w-full h-full object-cover" data-alt="modern financial institution logo green and gold geometric icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVQVLrzDYd10Qov0AXvkTvlhZKGWrfRQSyNXTS0I-d-We_MDV8tvo5_KmHXSBLa04R-EKUiryF5HqV7STqW1_OPGYW8otCxyBsLqsbteMXDC1lxfN8g8awQiugK4NEUoGJ11mzrOtPHM-M4pDWfcC1dFBTS3Nmcj7shfbHMm0nt-J0jNMlEOO1qvXeLqVTz8w4RcO_GDsBhxSNKl2EayvCugvQ6jTy6lkR23v_BWKiSDWmiwFPjwRjMRGqZKxmj7sYQYnItBErvw" />
                                </div>
                                <div>
                                    <p className="text-body-lg font-bold">Sanima Bank</p>
                                    <p className="text-label-sm text-on-surface-variant">Partner Bank</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="mt-16">
                    <h2 className="text-xl font-bold mb-6">Choose Payment Type</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative cursor-pointer group">
                            <input className="peer hidden" id="meroshare" name="payment_type" type="radio" />
                            <label className="block p-8 bg-surface-container-low rounded-[2rem] border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all duration-300" >
                                <h3 className="text-xl font-bold mb-2">Meroshare</h3>
                                <p className="text-label-md text-on-surface-variant">Renew only Meroshare portfolio portal.</p>
                                <div className="mt-4 text-2xl font-extrabold text-primary">Rs. 50</div>
                            </label>
                        </div>
                        <div className="relative cursor-pointer group">
                            <input className="peer hidden" id="demat" name="payment_type" type="radio" />
                            <label className="block p-8 bg-surface-container-low rounded-[2rem] border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all duration-300" >
                                <h3 className="text-xl font-bold mb-2">Demat</h3>
                                <p className="text-label-md text-on-surface-variant">Annual maintenance charge for Demat.</p>
                                <div className="mt-4 text-2xl font-extrabold text-primary">Rs. 100</div>
                            </label>
                        </div>
                        <div className="relative cursor-pointer group">
                            <input checked className="peer hidden" id="both" name="payment_type" type="radio" />
                            <label className="block p-8 bg-surface-container-low rounded-[2rem] border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all duration-300" >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tertiary text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Popular</div>
                                <h3 className="text-xl font-bold mb-2">Both</h3>
                                <p className="text-label-md text-on-surface-variant">Renew both services for a full year.</p>
                                <div className="mt-4 text-2xl font-extrabold text-primary">Rs. 150</div>
                            </label>
                        </div>
                    </div>
                </section>
            </div>
            <aside className="lg:col-span-4 lg:sticky lg:top-24 mb-10 h-fit">
                <div className="bg-surface-container-low rounded-[2.5rem] p-8 space-y-8">
                    <div>
                        <h3 className="text-label-md font-bold text-on-surface-variant uppercase tracking-widest mb-4">Balance Summary</h3>
                        <div className="bg-primary p-8 rounded-[2rem] text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-label-sm opacity-80 mb-1">Available Funds</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-extrabold">Rs. 45,280.50</span>
                                    <span className="text-label-sm bg-white/20 px-2 py-0.5 rounded-full">+2.4%</span>
                                </div>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10">
                                <span className="material-symbols-outlined text-[120px]" data-icon="shield">shield</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-label-md font-bold text-on-surface-variant uppercase tracking-widest">Order Details</h3>
                        <div className="bg-surface-container-lowest p-6 rounded-2xl space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant">Selected DP</span>
                                <span className="font-bold">Global IME Capital</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant">Renewal Type</span>
                                <span className="font-bold">Meroshare &amp; Demat</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-on-surface-variant">Platform Fee</span>
                                <span className="font-bold">Rs. 0.00</span>
                            </div>
                            <div className="border-t border-outline-variant/30 pt-4 flex justify-between items-center">
                                <span className="font-bold text-lg">Total Amount</span>
                                <span className="text-2xl font-extrabold text-primary">Rs. 150.00</span>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg shadow-[0_16px_40px_rgba(0,64,224,0.15)] active:scale-95 transition-transform">
                        Proceed to Payment
                    </button>
                    <p className="text-center text-label-sm text-on-surface-variant">Secure 256-bit encrypted transaction</p>
                </div>
            </aside>
        </main>
    )
}

export default MeroSharePage