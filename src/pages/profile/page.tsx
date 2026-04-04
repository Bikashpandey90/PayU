import { AuthContext } from "@/context/auth-context"
import { UserType } from "@/services/auth.service"
import { ChevronRight, CircleCheck, Eye, File, Landmark, Mail, MapPin, Shield, ShieldCheck, User } from "lucide-react"
import { useContext } from "react"

const ProfilePage = () => {
    const auth = useContext(AuthContext) as { loggedInUser: UserType }
    return (
        <main className="flex-grow max-w-[1200px] mx-auto w-full px-6 md:px-12 py-12">
            <section className="mb-16">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative group">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden  border-surface-container-lowest shadow-xl">
                                <img alt={auth?.loggedInUser?.name} className="w-full h-full object-cover" data-alt="Detailed studio portrait of Adrian Rivera, professional attire, soft natural light, premium photography style"
                                    src={auth?.loggedInUser?.image || "/images/profile-placeholder.svg"}
                                />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-xl" data-icon="verified" ><ShieldCheck className="h-6 w-6" /></span>
                            </div>
                        </div>
                        <div className="text-center md:text-left space-y-2">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">{auth?.loggedInUser?.name}</h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-sm font-bold tracking-wide">Platinum Flow</span>
                                <span className="text-on-surface-variant text-sm font-medium flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm" data-icon="location_on"><MapPin className="h-4 w-4" /></span> Kathmandu, Nepal
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold hover:opacity-90 active:scale-95 transition-all">Change Password</button>
                        <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold  hover:opacity-90 active:scale-95 transition-all">Edit Profile</button>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-primary" data-icon="person"><User className="h-5 w-5" /></span>
                            <h2 className="text-xl font-bold tracking-tight">Personal Information</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Full Name</p>
                                <p className="text-lg font-medium">{auth?.loggedInUser?.name}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Gender</p>
                                <p className="text-lg font-medium">Male</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Date of Birth</p>
                                <p className="text-lg font-medium">October 24, 1992</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Nationality</p>
                                <p className="text-lg font-medium">Nepali</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-primary" data-icon="contact_mail"><Mail className="h-5 w-5" /></span>
                            <h2 className="text-xl font-bold tracking-tight">Contact Details</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Email Address</p>
                                <p className="text-lg font-medium">{auth?.loggedInUser?.email}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Phone Number</p>
                                <p className="text-lg font-medium text-on-surface-variant italic">Not provided</p>

                            </div>
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Alternative Phone</p>
                                <p className="text-lg font-medium text-on-surface-variant italic">Not provided</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Primary Address</p>
                                <p className="text-lg font-medium">Jhamsikhel-3, Lalitpur, Nepal</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-primary" data-icon="description"><File className="h-5 w-5" /></span>
                            <h2 className="text-xl font-bold tracking-tight">Account Documents</h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                <div className="space-y-1">
                                    <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">KYC Status</p>
                                    <div className="flex items-center gap-2 text-tertiary">
                                        <span className="material-symbols-outlined text-sm" data-icon="check_circle" ><CircleCheck className="h-5 w-5" /></span>
                                        <p className="text-lg font-bold">Verified</p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Document ID</p>
                                    <p className="text-lg font-medium">CIT-8821092</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Issue Date</p>
                                    <p className="text-lg font-medium">Jan 12, 2021</p>
                                </div>
                            </div>
                            <button className="bg-surface-container-lowest text-primary border border-outline-variant/20 px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary hover:text-on-primary transition-all">
                                <span className="material-symbols-outlined text-sm" data-icon="visibility"><Eye className="h-4 w-4" /></span> View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-[2rem] p-8 shadow-sm">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary" data-icon="account_balance"><Landmark className="h-5 w-5" /></span>
                            Linked Accounts
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low group hover:bg-primary-container/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                                        <span className="material-symbols-outlined text-on-surface-variant" data-icon="account_balance"><Landmark className="h-5 w-5" /></span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Kumari Bank</p>
                                        <p className="text-xs text-on-surface-variant">Checking •••• 8821</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right"><ChevronRight className="h-5 w-5" /></span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low group hover:bg-primary-container/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                                        <span className="material-symbols-outlined text-on-surface-variant" data-icon="account_balance"><Landmark className="h-5 w-5" /></span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Nabil Bank</p>
                                        <p className="text-xs text-on-surface-variant">Savings •••• 4492</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right"><ChevronRight className="h-5 w-5" /></span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low group hover:bg-primary-container/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                                        <span className="material-symbols-outlined text-on-surface-variant" data-icon="account_balance_wallet"><Landmark className="h-5 w-5" /></span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">eSewa</p>
                                        <p className="text-xs text-on-surface-variant">Wallet • 980****000</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right"><ChevronRight className="h-5 w-5" /></span>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-3 border-2 border-dashed border-outline-variant rounded-2xl text-on-surface-variant font-bold text-sm hover:border-primary hover:text-primary transition-all">
                            + Add New Account
                        </button>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-[2rem] p-8 pb-20 shadow-sm">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary" data-icon="security"><Shield className="h-5 w-5" /></span>
                            Security Status
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                                    <p className="text-sm font-medium">2FA Authentication</p>
                                </div>
                                <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Enabled</span>
                            </div>
                            <div className="p-4 bg-surface-container rounded-2xl space-y-2">
                                <p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-bold">Last Login</p>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="font-medium">Kathmandu, NP</span>
                                    <span className="text-on-surface-variant">Today, 10:24 AM</span>
                                </div>
                            </div>
                            <button className="w-full text-primary text-sm font-bold hover:underline">Manage Login Sessions</button>
                        </div>
                    </div>
                    {/* <div className="bg-primary-container p-8 rounded-[2rem] text-on-primary-container relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined" data-icon="bolt">bolt</span>
                                Account Limits
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                                        <span>Daily Limit</span>
                                        <span>Rs. 45,000 / 100,000</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white w-[45%] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                                        <span>Monthly Limit</span>
                                        <span>Rs. 120,000 / 500,000</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white w-[24%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-8 text-xs font-bold uppercase tracking-widest bg-white/10 hover:bg-white/20 py-2 px-4 rounded-lg transition-colors">Request Limit Increase</button>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                    </div> */}
                </div>
            </div>
        </main>
    )
}

export default ProfilePage