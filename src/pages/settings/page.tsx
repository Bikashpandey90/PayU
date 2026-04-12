import { Fingerprint, Gauge } from "lucide-react"

const SettingsPage = () => {
    return (
        <div className="min-h-screen flex justify-center">
            <main className="pt-10 pb-20  max-w-6xl mx-auto w-full">
                <header className="mb-12 lg:px-10">
                    <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Security &amp; Control</h1>
                    <p className="text-on-surface-variant text-lg">Manage your digital vault's boundaries and privacy.</p>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:px-10">

                    <div className=" lg:col-span-12 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-primary/30 p-3 rounded-lg">
                                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="fingerprint"><Fingerprint className="h-12 w-12" /></span>
                                    </div>
                                    <div className="relative inline-flex items-center cursor-pointer">
                                        <input checked className="sr-only peer" type="checkbox" />
                                        <div className="w-12 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Biometric Login</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">Use FaceID or TouchID to quickly and securely unlock your vault without a password.</p>
                            </section>
                            <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-primary/30 p-3 rounded-lg">
                                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="speed"><Gauge className="h-12 w-12" /></span>
                                    </div>
                                    <button className="text-secondary font-bold text-sm hover:underline transition-all">Edit Limits</button>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Transaction Limits</h3>
                                <div className="mt-4 space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-on-surface-variant">Daily Limit</span>
                                        <span className="font-bold">$5,000.00</span>
                                    </div>
                                    <div className="w-full bg-surface-container-low rounded-full h-1.5">
                                        <div className="bg-secondary h-1.5 rounded-full" style={{ width: "45%" }}></div>
                                    </div>
                                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">$2,250 used today</p>
                                </div>
                            </section>
                            <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 md:col-span-2">
                                <h3 className="text-xl font-bold mb-6">Privacy &amp; Visibility</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold text-on-surface">Public Profile Visibility</p>
                                            <p className="text-sm text-on-surface-variant">Allow other VaultPay users to find you by your @handle</p>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input className="sr-only peer" type="checkbox" />
                                            <div className="w-12 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                                        <div>
                                            <p className="font-semibold text-on-surface">Stealth Mode</p>
                                            <p className="text-sm text-on-surface-variant">Hide your transaction history from analytical aggregators</p>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input checked className="sr-only peer" type="checkbox" />
                                            <div className="w-12 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 md:col-span-2">
                                <h3 className="text-xl font-bold mb-6">Notification Preferences</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                                            <tr>
                                                <th className="pb-4">Notification Type</th>
                                                <th className="pb-4 text-center">Push</th>
                                                <th className="pb-4 text-center">Email</th>
                                                <th className="pb-4 text-center">SMS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="border-t border-outline-variant/10">
                                                <td className="py-4 font-medium">Large Transactions (&gt;$500)</td>
                                                <td className="py-4 text-center text-secondary"><span className="material-symbols-outlined" data-icon="check_circle" >check_circle</span></td>
                                                <td className="py-4 text-center text-secondary"><span className="material-symbols-outlined" data-icon="check_circle" >check_circle</span></td>
                                                <td className="py-4 text-center text-outline-variant"><span className="material-symbols-outlined" data-icon="radio_button_unchecked">radio_button_unchecked</span></td>
                                            </tr>
                                            <tr className="border-t border-outline-variant/10">
                                                <td className="py-4 font-medium">New Device Login</td>
                                                <td className="py-4 text-center text-secondary"><span className="material-symbols-outlined" data-icon="check_circle" >check_circle</span></td>
                                                <td className="py-4 text-center text-secondary"><span className="material-symbols-outlined" data-icon="check_circle" >check_circle</span></td>
                                                <td className="py-4 text-center text-secondary"><span className="material-symbols-outlined" data-icon="check_circle" >check_circle</span></td>
                                            </tr>
                                            <tr className="border-t border-outline-variant/10">
                                                <td className="py-4 font-medium">Monthly Reports</td>
                                                <td className="py-4 text-center text-outline-variant"><span className="material-symbols-outlined" data-icon="radio_button_unchecked">radio_button_unchecked</span></td>
                                                <td className="py-4 text-center text-secondary"><span className="material-symbols-outlined" data-icon="check_circle" >check_circle</span></td>
                                                <td className="py-4 text-center text-outline-variant"><span className="material-symbols-outlined" data-icon="radio_button_unchecked">radio_button_unchecked</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 md:col-span-2">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold">Account Activity</h3>
                                    <button className="bg-surface-container-low text-on-surface px-4 py-2 rounded-lg text-sm font-semibold hover:bg-surface-container-high transition-all">Download Log</button>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-lg bg-surface">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
                                            <span className="material-symbols-outlined text-secondary" data-icon="laptop_mac">laptop_mac</span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-bold text-on-surface">MacBook Pro 14"</p>
                                            <p className="text-xs text-on-surface-variant">London, UK • Chrome Browser</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-secondary">Current Session</p>
                                            <p className="text-[10px] text-on-surface-variant uppercase font-bold">Just now</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface transition-colors cursor-pointer group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary" data-icon="smartphone">smartphone</span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-bold text-on-surface">iPhone 15 Pro</p>
                                            <p className="text-xs text-on-surface-variant">Paris, France • VaultPay App v4.2</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-on-surface">Logged Out</p>
                                            <p className="text-[10px] text-on-surface-variant uppercase font-bold">2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface transition-colors cursor-pointer group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
                                            <span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-bold text-on-surface">Unknown Device</p>
                                            <p className="text-xs text-on-surface-variant">Berlin, Germany • Safari Browser</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-error">Failed Attempt</p>
                                            <p className="text-[10px] text-on-surface-variant uppercase font-bold">Yesterday, 11:42 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}
export default SettingsPage