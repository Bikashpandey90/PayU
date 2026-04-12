const SocialSecurityPage = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 pb-32">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
                <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Home</a>
                <span className="material-symbols-outlined text-sm text-outline-variant">chevron_right</span>
                <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Government</a>
                <span className="material-symbols-outlined text-sm text-outline-variant">chevron_right</span>
                <span className="text-label-sm text-primary font-bold">SSF</span>
            </nav>
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">Social Security Fund</h2>
                <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Securely access your SSF account. Enter your official credentials to fetch your contribution details and status.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7 bg-surface-container-low rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <form className="relative z-10 space-y-10">
                        <div className="group">
                            <label className="block text-label-sm font-bold text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary uppercase tracking-widest" >Submission Number</label>
                            <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-2xl font-medium px-0 py-3 transition-all placeholder:text-outline-variant/50" id="submission-number" name="submission-number" placeholder="Enter 12-digit number" type="text" />
                            <p className="mt-2 text-label-sm text-outline">Format: SSF-XXXX-XXXX-XXXX</p>
                        </div>
                        <div className="group">
                            <label className="block text-label-sm font-bold text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary uppercase tracking-widest" >Employee ID</label>
                            <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-2xl font-medium px-0 py-3 transition-all placeholder:text-outline-variant/50" id="employee-id" name="employee-id" placeholder="Official Employee Identifier" type="text" />
                            <p className="mt-2 text-label-sm text-outline">Found on your corporate ID card</p>
                        </div>
                        <div className="pt-6">
                            <button className="group relative w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all active:scale-95" type="submit">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    Fetch Details
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:col-span-5 space-y-6">
                    <div className="bg-surface-container-lowest rounded-[2rem] p-8 border-outline-variant/10 border shadow-[0_16px_40px_rgba(25,28,30,0.06)] relative overflow-hidden group">
                        <div className="mb-6 flex justify-between items-start">
                            <div className="p-3 bg-tertiary/10 rounded-2xl">
                                <span className="material-symbols-outlined text-tertiary" >verified_user</span>
                            </div>
                            <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Secure Link</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Direct Integration</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">VaultPay connects directly with the Social Security portal to provide real-time updates on your savings and retirement fund status.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                                End-to-end Encrypted
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                                Instant Validation
                            </div>
                        </div>
                    </div>
                    <div className="relative h-48 rounded-[2rem] overflow-hidden group">
                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Person hand signing official financial documents with a fountain pen on a clean desk with soft professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSIp5-8xFGTbC3steMhrfGpvTpQUJubPoxFypjoW5De2OsNa9YjPph8M9BhCzwPdLo-KV4VM1PuwL_RNwype1Y4FXxzzxLFsph5LsZzKmXipx72r49aDWBcDfhRhK8qXiJ15Dwq7YQNneTHcBdOKztwbgYnsy8bs8LfL1Hvs_yv1v51CQWjS6nKAz9Ynpblu3mfCME2RHH5QlltBMwp8dh5kWk5CyaWTSmmvlP5x1tPDZ8B-xj98CO1UBOJG96JG20IUBJuRKSQ" />
                        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Financial Wellness</span>
                            <h4 className="text-white font-bold text-lg leading-tight">Plan for the future with confidence.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SocialSecurityPage