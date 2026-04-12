import { ArrowRight, Globe, Menu, QrCode, ScanQrCode, ShoppingCart } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
const HomePage = () => {

    const navigate = useNavigate()
    return (

        <div className="pt-2">
            <section className="flex justify-center px-6 md:px-20 pt-16 pb-32 overflow-hidden">
                <div className="max-w-[1440px] xl:ml-32 mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="z-10 ">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight leading-[1.1] mb-8">
                            The Future of Your <br />
                            <span className="text-primary italic">Money is Digital.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                            Experience banking at the velocity of light. Secure, fluid, and designed for the kinetic generation. No physical cards, just pure digital freedom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => {
                                    navigate('/login')
                                }}
                                className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                                Start Banking Now
                                <span className="material-symbols-outlined" data-icon="arrow_forward"><ArrowRight className='h-5 w-5 -rotate-45' /></span>
                            </button>
                            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all">
                                See How it Works
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full -z-10"></div>
                        <div className="relative w-[320px] h-[640px] bg-surface-container-lowest rounded-[3rem] shadow-2xl p-4 border-[8px] border-surface-container-highest">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-container-highest rounded-b-2xl"></div>
                            <div className="mt-8 space-y-6">
                                <div className="flex justify-between items-center px-2">
                                    <span className="material-symbols-outlined text-primary" data-icon="menu"><Menu className='h-5 w-5' /></span>
                                    <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                                        <img alt="User Profile" data-alt="User avatar for mobile app profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBngdUubf4ZFUmkN2np35zamy5UyNAwsbCgqWoa5owhNo4KL0xQuYpcfKZeG3eQiZi1hvWD_VwKJ8s_N5NBVF3zN-mwVGOnZyuUmiTxNnPLFCmpFm7CF59QlzdcG5Tw3Agqa2xlsHe07wXZvx_hVS0TByMZwPoWG02QsXkLhuh6NT7CkUA4LOcI-nC8nhb6Nb9dZXX6IM9fHCl79hR0Cajy3Ao4vCt50h6WfAMDKBZwDV4f8etkoJ1zd3RA49hRqTgsvfUjI0I2FA" />
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-3xl text-white shadow-xl">
                                    <p className="text-xs opacity-80 mb-1">Total Available Balance</p>
                                    <h2 className="text-3xl font-extrabold">$12,480.00</h2>
                                    <div className="mt-8 flex justify-between items-end">
                                        <span className="text-xs font-mono tracking-widest">**** 9012</span>
                                        <div className="w-10 h-6 bg-white/20 rounded-md"></div>
                                    </div>
                                </div>
                                <div className="bg-surface-container-low p-6 rounded-3xl flex flex-col items-center gap-4">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-6xl" data-icon="qr_code_2" ><QrCode className='h-16 w-16' /></span>
                                    </div>
                                    <p className="text-sm font-bold text-on-surface">Scan to Pay Instantly</p>
                                </div>
                                <div className="space-y-4 px-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary text-sm" data-icon="shopping_bag"><ShoppingCart className='h-4 w-4' /></span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">Apple Store</p>
                                                <p className="text-[10px] text-on-surface-variant">Today, 2:45 PM</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-bold">-$1,299</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-6 bg-surface-container-low">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-headline-sm font-extrabold text-primary mb-2">Kinetic Features</h2>
                            <h3 className="text-4xl font-bold tracking-tight">Built for the Digital Vanguard.</h3>
                        </div>
                        <p className="max-w-md text-on-surface-variant leading-relaxed">
                            We've removed every friction point from modern banking. No paperwork, no queues, just seamless capital flow.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                        <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group cursor-default">
                            <div>
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-white text-3xl" data-icon="qr_code_scanner"><ScanQrCode className='h-8 w-8' /></span>
                                </div>
                                <h4 className="text-3xl font-bold mb-4">Zero-Touch Payments</h4>
                                <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                                    Pay anything, anywhere, by simply glancing at a QR code. Our kinetic encryption ensures every cent is secured by biometric protocols.
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                <span className="text-primary font-bold">Learn about Secure QR</span>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform" data-icon="arrow_right_alt"><ArrowRight className='h-4 w-4' /></span>
                            </div>
                        </div>
                        <div className="md:col-span-5 bg-gradient-to-br from-secondary-container to-surface-container-high p-10 rounded-[2rem] flex flex-col items-center justify-center text-center">
                            <div className="flex -space-x-4 mb-8">
                                <img alt="User 1" className="w-16 h-16 rounded-full border-4 border-white" data-alt="User profile photo for bill splitting demo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3RUzcMrnjAWY8IULsKylaIA6VwOqOVvpMaFKnJOxRWjA8v2TopZbB2ml0VFPhLfwKlzGK1DxOK7sOemXtlhrgyMwg5FtqPlHUHoZPvdDGt_A-Ju8UClm0-Q38hGQCsVcxJYUvMk7J9d70JpJ30Jk2jJarq2AJqY7OuTQyIVacNavpYvW_KiCCLDG7gfTkVzSb21qMU38nhn4G4JIGRqibTENt3EoCDwt4ZGXVA9iCyuyJBhjajBelQ7Xu8KVkP_G8_rj0n2CJAg" />
                                <img alt="User 2" className="w-16 h-16 rounded-full border-4 border-white" data-alt="User profile photo for bill splitting demo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV0cXa7Om7rOcJVB6NGC8_yQPxqNyeEluX1DWUpfmIjkj4iSMwo-mksbwFZkVmNbQQWdbvbq8KeDyWmwFM5yH1lgpTAbDCzMEUalOFbIHimOrpxQm3pJY9KLPwM1LnkuLLWWBZqxkzypsPhP9J6uJAdt-5nPhPj8nq-BmjEFM3mts06bg0bhbAy2pC2l4ZeYUfdErmqiTX79Tibgk2lUW-9gYfjSkD-lemz93EN4BqMReBdgZk7-HlBmdDZdbp75Wh4JwWqzdwwA" />
                                <img alt="User 3" className="w-16 h-16 rounded-full border-4 border-white" data-alt="User profile photo for bill splitting demo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLuKUEKKKFC90bX3DDsE12w3fTYvV0FrC3hvcg7jACqEc11gr9qHDRkKvpcdPTizDPd2n_tfZ0hRvGzM9n9EEZjvDZXJSNUPSqm5hIeTfRfTVTP_cVX6ActJs3KXY1rdbNDq7rwrAHCIrpXvtL-EseRshRou-CtV-tBrLkpvUsY2yyJhTox417FukZgooqWkXIdPfi3_DCYroxrxm8BtisijrGaIxB0vZN71JHybi_gKO_euKOfNlo0WjOjOT9X_7EeoixOGx2Dg" />
                            </div>
                            <h4 className="text-2xl font-bold mb-3">Fluid Split Bills</h4>
                            <p className="text-on-surface-variant text-sm mb-6">Dinner, travel, or rent? Split instantly with one tap. No more "who owes who" awkwardness.</p>
                            <button className="bg-white text-primary px-6 py-2 rounded-full font-bold shadow-sm">Invite Friends</button>
                        </div>
                        <div className="md:col-span-5 bg-[#191c1e] text-white p-10 rounded-[2rem] flex flex-col justify-between">
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Global Transfers</h4>
                                <p className="text-slate-400 text-sm">Send capital across 180+ countries with mid-market rates and zero hidden fees. Kinetic speed, global reach.</p>
                            </div>
                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-bold">0.05%</span>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">Fee Floor</span>
                                </div>
                                <span className="material-symbols-outlined text-tertiary-fixed text-4xl" data-icon="public"><Globe className='h-8 w-8' /></span>
                            </div>
                        </div>
                        <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
                            <div className="flex-1">
                                <h4 className="text-2xl font-bold mb-2">Growth Tracker</h4>
                                <p className="text-on-surface-variant text-sm mb-4">Visualize your wealth momentum with non-linear kinetic graphs.</p>
                                <div className="h-24 w-full flex items-end gap-1">
                                    <div className="w-full h-1/3 bg-tertiary/20 rounded-t-sm"></div>
                                    <div className="w-full h-1/2 bg-tertiary/40 rounded-t-sm"></div>
                                    <div className="w-full h-2/3 bg-tertiary/60 rounded-t-sm"></div>
                                    <div className="w-full h-3/4 bg-tertiary/80 rounded-t-sm"></div>
                                    <div className="w-full h-[90%] bg-tertiary rounded-t-sm"></div>
                                </div>
                            </div>
                            <div className="bg-tertiary-container/10 p-6 rounded-2xl">
                                <p className="text-tertiary text-xs font-bold mb-1">Weekly Momentum</p>
                                <p className="text-2xl font-extrabold text-tertiary">+12.4%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 px-6">
                <div className="max-w-[1200px] mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/30 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                            Ready to join the <br /> future of capital?
                        </h2>
                        <p className="text-primary-fixed text-xl mb-12 max-w-xl mx-auto opacity-90">
                            Open your PayU account in less than 2 minutes. No paperwork, just your phone and your vision.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <NavLink to={'/sign-in'} className="bg-white text-primary px-10 py-5 rounded-full font-extrabold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
                                Open Your Account
                            </NavLink >
                            <button className="bg-primary-container text-white px-10 py-5 rounded-full font-bold text-xl border border-white/20 hover:bg-white/10 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default HomePage