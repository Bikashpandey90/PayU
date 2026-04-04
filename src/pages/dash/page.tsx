import { AccountContext } from "@/context/account-context"
import { AuthContext } from "@/context/auth-context"
import { formatNumber } from "@/lib/utils"
import { UserType } from "@/services/auth.service"
import transactSvc from "@/services/transaction.service"
import { ArrowDown, ArrowUp, ChevronRight, CircleCheck, Download, File, Plus, PlusCircle, QrCode, Send, Share2, ShieldCheck, TrendingDown, Verified, Wallet, WalletMinimal } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export interface Account {

    status: string,
    user: string,
    _id: string,
    balance: number
}

const DashPage = () => {

    const auth = useContext(AuthContext) as { loggedInUser: UserType }
    const user = auth.loggedInUser
    const account = useContext(AccountContext) as { accountinfo: any }
    const [transactions, setTransactions] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const currentAccountId = account?.accountinfo?._id

    const fetchRecentTransactions = async () => {
        setLoading(true)
        try {
            const page = 1;
            const limit = 3
            const response = await transactSvc.listTransactions(page, limit)
            setTransactions(response?.detail)

        } catch (exception) {
            console.log(exception)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchRecentTransactions()
    }, [])

    const Skeleton = () => (
        <div className="animate-pulse bg-surface-container-lowest rounded-[2rem] p-5 flex justify-between items-center">
            <div className="flex gap-5 items-center">
                <div className="w-14 h-14 bg-gray-300/30 rounded-2xl"></div>
                <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-300/30 rounded"></div>
                    <div className="h-3 w-28 bg-gray-300/20 rounded"></div>
                </div>
            </div>
            <div className="space-y-2 text-right">
                <div className="h-4 w-16 bg-gray-300/30 rounded"></div>
                <div className="h-3 w-12 bg-gray-300/20 rounded"></div>
            </div>
        </div>
    )


    return (
        <>
            <div className="pt-10 pb-12 px-6 max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-on-surface-variant font-medium label-md"> Wallet Balance</span>
                            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        </div>
                        <div className="flex items-start">
                            <h1 className="text-[3rem] md:text-[5rem] font-semibold tracking-tight leading-none text-gray-600">
                                {account?.accountinfo?.balance ? formatNumber(account?.accountinfo?.balance) : "0.00"}
                            </h1>
                            <span className="text-xl font-bold text-primary mt-2 ml-2">NRs</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <NavLink to={'/send'} className="bg-primary text-base sm:text-base text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
                            <span className="material-symbols-outlined"><Send className="h-5 w-5" /></span>
                            Send Money
                        </NavLink>
                        <NavLink to={'/load'} className="bg-secondary-container text-base sm:text-base text-on-secondary-container px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-all active:scale-95">
                            <span className="material-symbols-outlined"><PlusCircle className="h-5 w-5" /></span>
                            Load Wallet
                        </NavLink>
                        <NavLink to={'/'} className="w-14 h-14 bg-surface-container-lowest flex items-center justify-center rounded-2xl shadow-xl shadow-on-surface/5 active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl" ><QrCode className="h-6 w-6" /></span>
                        </NavLink >
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
                    <div className="md:col-span-8 bg-surface-container-low p-8 md:p-12 rounded-[2rem] flex flex-col justify-between">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="relative">
                                <img className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] object-cover" data-alt="Portrait of a young woman with a friendly expression"
                                    src={auth?.loggedInUser?.image || '/images/profile-placeholder.svg'}
                                />
                                <div className="absolute -bottom-2 -right-2 bg-primary/60  text-white p-3 rounded-full shadow-xl">
                                    <span className="material-symbols-outlined text-2xl"><ShieldCheck className="h-6 w-6" /></span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-3xl font-bold ts text-on-surface">{user?.name || "Lucy Kahenai"}</h2>
                                    <p className="text-primary font-medium text-lg">{user?.email}</p>
                                </div>
                                <p className="text-on-surface-variant max-w-sm">
                                    Welcome {auth?.loggedInUser?.name.split(' ')[0] || ''} ! Manage your payments, track activity, and stay in control.

                                </p>
                                <div className="flex gap-2">
                                    <span className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-bold">Active</span>
                                    <span className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-bold">Verifed</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-12 border-t border-outline-variant/20 grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Joined</p>
                                <p className="font-bold text-lg text-on-surface">Oct 24, 2024</p>
                            </div>
                            <div>
                                <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">This Month</p>
                                <p className="font-bold text-lg text-on-surface">Rs 12,450</p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Wallet Status</p>
                                <p className="font-bold text-lg text-on-surface">Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 space-y-6">
                        <div className="bg-primary-container p-8 rounded-[2rem] text-white">
                            <p className="text-on-primary-container/80 text-xs uppercase tracking-widest mb-6">My Wallet</p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white"><WalletMinimal className="h-6 w-6" /></span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl">Main Vault</p>
                                        <p className="text-on-primary-container/70 text-sm">**** 8829</p>
                                    </div>
                                </div>
                                <div className="pt-4 flex justify-between items-end">
                                    <div>
                                        <p className="text-on-primary-container/60 text-xs">Wallet Balance</p>
                                        <p className="text-2xl font-bold">Rs {account?.accountinfo?.balance ? formatNumber(account?.accountinfo?.balance) : "0.00"}
                                        </p>
                                    </div>
                                    <span className="material-symbols-outlined text-4xl opacity-40"><TrendingDown className="h-6 w-6" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
                            <h3 className="font-bold text-xl mb-6">Documents</h3>
                            <div className="space-y-4">
                                <NavLink to={'/transactions'} className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary"><File className="h-5 w-5" /></span>
                                        <span className="font-bold text-on-surface">Statement</span>
                                    </div>
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-y-0.5 transition-transform"><ChevronRight className="h-5 w-5" /></span>
                                </NavLink >
                                <button className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-tertiary"><Verified className="h-5 w-5" /></span>
                                        <span className="font-bold text-on-surface">Security Audit</span>
                                    </div>
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-y-0.5 transition-transform"><Download className="h-4 w-4" /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-12 h-[300px] rounded-[2rem] overflow-hidden relative group">
                        <img className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" data-alt="Stylized map showing city grid" data-location="New York" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqPAAV7Corgcj7RZkDuOPuZUuVWyBShU_Nl8bNu0y6REJgiKaqB6ceznFMcRGCMdYQohiFqM5aJkPHCLkcPCjY75LovuVSd-nHl4NoTeSMrdq3VI4ZCIaK4zR51IiGvuAIcd3HBan8Vwh3chsAm9skXzmZOshNkCVypEcxrjk7UyFOpyyytbqGqW6Fnote7FJsFJHHg9jsV92BkvBKGwmqiOyduOoIcA-inksJQ5N1O_3tJSrWt7gYhPyERQ4ugXce67b4eydM7A" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 bg-surface-container-lowest/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
                            <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Transaction Location</p>
                            <p className="font-bold text-lg">Via App • New York, NY</p>
                        </div>
                    </div>
                </div>





                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
                    <div className="md:col-span-8 bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <h3 className="text-headline-sm font-bold text-on-surface mb-1">Monthly Spending</h3>
                                <p className="text-on-surface-variant text-sm">You spent 12% less than last month</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs font-bold">Week</span>
                                <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold">Month</span>
                            </div>
                        </div>
                        <div className="h-64 flex items-end gap-3 w-full">
                            <div className="flex-1 bg-surface-container-high rounded-t-xl h-[40%] hover:bg-primary-fixed-dim transition-colors cursor-pointer"></div>
                            <div className="flex-1 bg-surface-container-high rounded-t-xl h-[65%] hover:bg-primary-fixed-dim transition-colors cursor-pointer"></div>
                            <div className="flex-1 bg-surface-container-high rounded-t-xl h-[35%] hover:bg-primary-fixed-dim transition-colors cursor-pointer"></div>
                            <div className="flex-1 bg-surface-container-high rounded-t-xl h-[80%] hover:bg-primary-fixed-dim transition-colors cursor-pointer"></div>
                            <div className="flex-1 bg-primary rounded-t-xl h-[95%] shadow-lg shadow-primary/20"></div>
                            <div className="flex-1 bg-surface-container-high rounded-t-xl h-[50%] hover:bg-primary-fixed-dim transition-colors cursor-pointer"></div>
                            <div className="flex-1 bg-surface-container-high rounded-t-xl h-[60%] hover:bg-primary-fixed-dim transition-colors cursor-pointer"></div>
                        </div>
                        <div className="absolute bottom-24 left-0 w-full h-[2px] bg-tertiary/20">
                            <div className="h-full bg-tertiary w-3/4 shadow-[0_0_15px_#006242]"></div>
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-surface-container-low rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
                        <div className="w-full aspect-square bg-surface-container-lowest rounded-3xl p-6 flex items-center justify-center mb-6 shadow-sm">
                            <div className="w-full h-full border-4 border-dashed border-primary-container/30 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-[8rem] text-primary" ><QrCode className="h-32 w-32" /></span>
                            </div>
                        </div>
                        <h3 className="font-bold text-lg mb-2">My Vault ID</h3>
                        <p className="text-on-surface-variant text-sm mb-6">Scan to receive kinetic payments instantly</p>
                        <div className="flex gap-4">
                            <button className="text-primary font-bold flex items-center gap-2">
                                Download  <span className="material-symbols-outlined text-sm"><Download className="h-4 w-4" /></span>
                            </button>
                            <button className="text-primary font-bold flex items-center gap-2">
                                Share  <span className="material-symbols-outlined text-sm"><Share2 className="h-4 w-4" /></span>
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-12 py-4">
                        <div className="flex items-center justify-between mb-6 px-2">
                            <h3 className="text-headline-sm font-bold">Friends &amp; Contacts</h3>
                            <button className="text-primary font-bold text-sm">View All</button>
                        </div>
                        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                            <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
                                <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-dashed border-outline-variant group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined"><Plus className="h-5 w-5" /></span>
                                </div>
                                <span className="text-label-md font-medium">Add New</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                                    <img alt="Friend" className="w-full h-full object-cover" data-alt="Portrait of a woman with red glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9tGOs69-b0S8joSUyCKi6o4vwZ7_NFegJW5nNC4q9jj6JfMO2Ebn4NvdqkL-lqkKn1MtDoXHWUqCpqar8Ou-IUHRzLrihEyxqS6MD8h-CJmVgcmalr-WYhRJl-vEAuM2ApcOiqNmHS-okNpbFNZSEuTg_TOsWncGwCnEKc7G3PupCtRfNqTY9LXJjmQKTyBe4dTLoEXwJauOQCXg0Fq_LOchS2BU2yBRMuZCrii_j-omHxkYfgxwNWbN4lh70dJrWolbK9oKGAw" />
                                </div>
                                <span className="text-label-md font-medium">Sarah L.</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                                    <img alt="Friend" className="w-full h-full object-cover" data-alt="Young man with short curly hair smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMzG7F2pZ7hofUkADXabUfiGWL4W3CgXCaolccPCBqQYAm0vbC7oB_71sKXMd6yzITVdJ-ZSwqFJzLU9u6ifmoWdPLqulGzojd49QiKIvs1GnFLaOimvvhVFD_oiPeDcYi9QQX3hb9kbBj6XfzpbyfmUFcMWyz0onpCHm35_nsUjQZPCDZNeTAqKpY8OxOi_FyiDHhjXOrLuFw1oogMfixytrdl4ix2_Sxb8vb-0WJmHnskyo2WmkVvn8K6AWSi54Fo_JPNIddXw" />
                                </div>
                                <span className="text-label-md font-medium">Marcus T.</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                                    <img alt="Friend" className="w-full h-full object-cover" data-alt="Woman with professional attire and bun hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb3qIxLSjFDpPctfJL6OJ-XZnSb5Cy3_cpAfLNCYpKY2973JJ6inT-ZvHNTk0zRhMTGjHQLTR9iw6v21hUnXE79qBNwQJtosAE8D8Eb8Ve9z3-zrm3fGCQ-gNBvPxUIgxTgirVa5GCtwOdo0uwLIi8rb0gyqE4y-kjE42sMyVwHDJazbi5DHfeMapbwECORwK2wZCEtUdnX5k2iz3A66laOZ6q1g8b2aOAr4rO4jx4f-tyS8ue5kfVnGmKf5XGcKWZAEG9qwEpxw" />
                                </div>
                                <span className="text-label-md font-medium">Elena R.</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                                    <img alt="Friend" className="w-full h-full object-cover" data-alt="Person with a colorful beanie hat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_Wxx6ARLnjewAfSg0Q42UfQS1Wh2JrKa5vYDZVzH9SNb8t8_d5__Xs7Onow7rKkTGn1rdA1kwL-WhZLEAWnoJE83xg6Wq8KJIn64ZPBPApWc8Kq9__a0OsYYdU0WsowcnXG9hu8iXBSLEutAp2DLlHlD2sjoTilVKI0qdRCvjz_9b7MGl6wEcn-MGgvsZQGI0PvFab0T88iuGg_hgSJLUVUnanwss4WhJAZsOXibbHIEBBu3d0gjpMq_jXHAsD08rzpfb0NcZQ" />
                                </div>
                                <span className="text-label-md font-medium">Jordan K.</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                                    <img alt="Friend" className="w-full h-full object-cover" data-alt="Older gentleman with white beard smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLuI3gOOp4xSXRZcAgZYTQEPsZ9jGDdOgz1mjZxi2QSh-GOMaQEP2Jz_I_N0hjKcrfeARkbeVajLAoUXIoIYK4WbiEI1r6XG5S5Xuu0MOpWJWfcfqJ6rInYxFI09PS2dBfn5gHl36VUw0752Rjz3VhXkOcjFdZHopPmNXpBDgnTL2_g22zPtJIZ4ZM-BTEVrB-VBCn1AFYwC54ZMD12mWNZZPlIpFm_moe2cna4OkAsX2gO6DJJS5TW7DP_2fMA56Q5ILNtPv0fQ" />
                                </div>
                                <span className="text-label-md font-medium">David W.</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-12">
                        <h3 className="text-headline-sm font-bold mb-6">Recent Transactions</h3>
                        <div className="space-y-4">
                            {!loading && transactions.length === 0 && (
                                <div className="text-center py-48">
                                    <Wallet className="mx-auto h-10 w-10 text-gray-400 mb-4" />
                                    <h3 className="text-xl font-bold text-on-surface mb-2">
                                        You don’t have any transactions
                                    </h3>
                                    <p className="text-on-surface-variant">
                                        Start by sending or receiving money.
                                    </p>
                                </div>
                            )}
                            {loading ? Array.from({ length: 10 }).map((_, i) => <Skeleton key={i} />)
                                :
                                transactions.map((txn) => {
                                    const isReceived = txn.to._id === currentAccountId

                                    return (
                                        <div key={txn._id} onClick={() => {
                                            navigate('/transactions/' + txn._id)
                                        }} className="group bg-surface-container-lowest hover:bg-surface-container transition-all duration-300 rounded-[2rem] p-5 flex items-center justify-between">
                                            <div className="flex items-center gap-5">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                        ${isReceived ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-primary-fixed text-on-primary-fixed-variant"}`}>

                                                    {isReceived ? (
                                                        <ArrowDown className="h-5 w-5 -rotate-45" />
                                                    ) : (
                                                        <ArrowUp className="h-5 w-5 rotate-[-45deg]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-on-surface">{isReceived ? `Received from ${txn?.from?.user?.name} ` : `Sent to ${txn?.to?.user?.name}`}   </h3>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary flex items-center gap-1">
                                                            <span className="material-symbols-outlined text-[10px]" data-weight="fill" ><CircleCheck className="h-3 w-3" /></span>
                                                            {txn.status}
                                                        </span>
                                                        <span className="text-xs text-on-surface-variant font-medium"> {new Date(txn.createdAt).toLocaleTimeString()} • P2P Transfer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className={`text-xl font-extrabold tracking-tight 
                        ${isReceived ? "text-gray-500" : "text-gray-500"}`}>

                                                    {isReceived ? "+" : "-"} Rs {txn.amount}
                                                </div>
                                                <div className="text-xs text-on-surface-variant/70 font-medium">
                                                    ID: #{txn._id.slice(-6)}
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >



        </>


    )
}
export default DashPage