import { ChevronLeft, LockOpen, MessageCircleQuestion } from "lucide-react"
import { NavLink } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 relative">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-tertiary/5 blur-[100px]"></div>
            </div>
            <div className="w-full max-w-3xl flex flex-col items-center text-center z-10">
                <div className="relative mb-12">
                    <div className="bg-surface-container-low p-12 rounded-[3rem] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            <div className="absolute w-full h-full border-2 border-dashed border-outline-variant/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute w-4/5 h-4/5 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-[8rem] md:text-[10rem] font-extrabold leading-none tracking-tighter bg-clip-text text-transparent bg-primary">
                                    404
                                </span>
                                <div className="mt-[-10px] bg-surface-container-lowest shadow-xl px-6 py-2 rounded-full border border-outline-variant/10">
                                    <span className="text-sm font-bold tracking-widest uppercase text-on-surface-variant flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-base" data-icon="lock_open"><LockOpen className="h-5 w-5" /></span>
                                        Page Not Found
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xl space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
                        Lost in the Vault?
                    </h1>
                    <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium opacity-80">
                        We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps it never existed in this ledger.
                    </p>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
                    <NavLink to={'/'} className="group flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20" >
                        <span className="material-symbols-outlined" data-icon="dashboard"><ChevronLeft className="h-6 w-6" /></span>
                        Back to Home
                    </NavLink>
                    <NavLink to={'/'} className="flex items-center gap-3 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors" >
                        <span className="material-symbols-outlined" data-icon="contact_support"><MessageCircleQuestion className="h-6 w-6" /></span>
                        Contact Support
                    </NavLink>
                </div>

            </div>
        </main>
    )
}

export default NotFoundPage