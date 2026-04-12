import { CircleCheck, Fingerprint, Laptop, Lightbulb, Lock, RectangleEllipsis, ShieldCheckIcon, Smartphone, TriangleAlert, UserPlus } from "lucide-react"

const SecurityPage = () => {
    return (

        <div className="p-6 md:p-6 max-w-6xl justify-self-center space-y-10">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-surface-container-low rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-10">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-width="12"></circle>
                            <circle className="text-primary transition-all duration-1000" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552.92" stroke-dashoffset="82.93" stroke-width="12"></circle>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-extrabold text-on-surface">85</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Secure</span>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <h3 className="text-2xl font-bold">Your Security Health is Strong</h3>
                        <p className="text-on-surface-variant leading-relaxed">Most of your security measures are up to date. Complete the remaining steps to reach a perfect 100/100 score and unlock VIP vault protection.</p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]" ><CircleCheck className="h-5 w-5" /></span> 2FA Active
                            </span>
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]" ><CircleCheck className="h-5 w-5" /></span> Biometrics Enabled
                            </span>
                            <span className="px-4 py-2 bg-error-container/50 text-error rounded-full text-xs font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]"><TriangleAlert className="h-5 w-5" /></span> Weak Password
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10">
                    <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary"><Lightbulb className="h-6 w-6" /></span>
                        Quick Fixes
                    </h4>
                    <div className="space-y-6">
                        <div className="flex gap-4 group cursor-pointer">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined"><RectangleEllipsis className="h-5 w-5" /></span>
                            </div>
                            <div>
                                <p className="font-bold text-sm">Update Password</p>
                                <p className="text-xs text-on-surface-variant mt-1">Your password is 8 months old. Change it to stay safe.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 group cursor-pointer">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined"><Fingerprint className="h-5 w-5" /></span>
                            </div>
                            <div>
                                <p className="font-bold text-sm">Setup FaceID</p>
                                <p className="text-xs text-on-surface-variant mt-1">Enable biometrics for faster and safer transfers.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 group cursor-pointer">
                            <div className="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined"><ShieldCheckIcon className="h-5 w-5" /></span>
                            </div>
                            <div>
                                <p className="font-bold text-sm">Identity Verification</p>
                                <p className="text-xs text-on-surface-variant mt-1">Submit your ID to increase transaction limits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">Recent Login Activity</h3>
                        <button className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="bg-surface-container-low rounded-[2rem] overflow-hidden">
                        <div className="divide-y divide-outline-variant/10">
                            <div className="p-6 flex items-center justify-between hover:bg-surface-container transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-on-surface-variant"><Smartphone className="h-5 w-5" /></span>
                                    </div>
                                    <div>
                                        <p className="font-bold">iPhone 13 Pro</p>
                                        <p className="text-xs text-on-surface-variant">San Francisco, USA • 192.168.1.1</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-on-surface">Today, 10:45 AM</p>
                                    <span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full font-bold uppercase tracking-wider">Current</span>
                                </div>
                            </div>
                            <div className="p-6 flex items-center justify-between hover:bg-surface-container transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-on-surface-variant"><Laptop className="h-5 w-5" /></span>
                                    </div>
                                    <div>
                                        <p className="font-bold">Chrome on macOS</p>
                                        <p className="text-xs text-on-surface-variant">London, UK • 84.23.11.90</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-on-surface-variant">Oct 24, 08:22 PM</p>
                                </div>
                            </div>
                            <div className="p-6 flex items-center justify-between hover:bg-surface-container transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-error">
                                        <span className="material-symbols-outlined"><TriangleAlert className="h-5 w-5" /></span>
                                    </div>
                                    <div>
                                        <p className="font-bold">Unknown Device</p>
                                        <p className="text-xs text-on-surface-variant">Moscow, RU • 103.45.2.11</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-error">Failed Attempt</p>
                                    <p className="text-[10px] text-on-surface-variant">Oct 22, 03:15 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">Authorized Devices</h3>
                        <button className="text-primary text-sm font-bold hover:underline">Manage All</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-surface-container-lowest p-6 rounded-[1.5rem] border border-outline-variant/15 flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-6">
                                <span className="material-symbols-outlined p-3 bg-secondary-container text-primary rounded-xl"><Smartphone className="h-5 w-5" /></span>
                                <button className="text-error font-bold text-[10px] uppercase tracking-widest hover:bg-error/10 px-3 py-1 rounded-full transition-colors">Remove</button>
                            </div>
                            <div>
                                <p className="font-bold">Personal iPhone</p>
                                <p className="text-xs text-on-surface-variant mt-1">Last active: Just now</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-[1.5rem] border border-outline-variant/15 flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-6">
                                <span className="material-symbols-outlined p-3 bg-surface-container text-on-surface-variant rounded-xl"><Laptop className="h-5 w-5" /></span>
                                <button className="text-error font-bold text-[10px] uppercase tracking-widest hover:bg-error/10 px-3 py-1 rounded-full transition-colors">Remove</button>
                            </div>
                            <div>
                                <p className="font-bold">Work Station - Dell</p>
                                <p className="text-xs text-on-surface-variant mt-1">Last active: 2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-outline-variant/20">
                        <h3 className="text-xl font-bold mb-6">Security Action History</h3>
                        <div className="space-y-8 relative before:content-[''] before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container">
                            <div className="relative pl-12">
                                <div className="absolute left-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-10 border-4 border-surface">
                                    <span className="material-symbols-outlined text-sm"><Lock className="h-5 w-5" /></span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">2FA Enabled via SMS</p>
                                    <p className="text-xs text-on-surface-variant">October 15, 2024 • 11:30 AM</p>
                                </div>
                            </div>
                            <div className="relative pl-12">
                                <div className="absolute left-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-10 border-4 border-surface">
                                    <span className="material-symbols-outlined text-sm"><RectangleEllipsis className="h-5 w-5" /></span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Password Changed Successfully</p>
                                    <p className="text-xs text-on-surface-variant">September 28, 2024 • 04:15 PM</p>
                                </div>
                            </div>
                            <div className="relative pl-12">
                                <div className="absolute left-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center z-10 border-4 border-surface">
                                    <span className="material-symbols-outlined text-sm"><UserPlus className="h-5 w-5" /></span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">New Trusted Contact Added</p>
                                    <p className="text-xs text-on-surface-variant">August 12, 2024 • 09:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="bg-primary rounded-[2.5rem] p-10 relative overflow-hidden text-white">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-xl text-center md:text-left">
                        <h2 className="text-3xl font-extrabold">Next-Gen Vault Protection</h2>
                        <p className="text-primary-fixed/80 leading-relaxed">Upgrade to Kinetic Shield™ for real-time monitoring of all global transactions and zero-liability fraud protection.</p>
                        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform active:opacity-90">Activate Now</button>
                    </div>
                    <div className="hidden md:block w-48 h-48 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                        <div className="w-full h-full border-2 border-dashed border-white/40 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl opacity-50"><ShieldCheckIcon className="h-16 w-16" /></span>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
            </section>
        </div>

    )
}

export default SecurityPage