import { AccountContext } from "@/context/account-context"
import { AuthContext } from "@/context/auth-context"
import { formatNumber } from "@/lib/utils"
import authSvc, { UserType } from "@/services/auth.service"
import transactSvc from "@/services/transaction.service"
import { ArrowDown, ArrowUp, ChevronRight, CircleCheck, Download, FileText, LoaderCircle, Plus, PlusCircle, QrCode, Send, Share2, ShieldCheck, TrendingDown, Verified, Wallet, WalletMinimal } from "lucide-react"
import { useContext, useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import { Html5QrcodeScanner } from "html5-qrcode"
import qrSvc from "@/services/qr.service"

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
    const [analyticsType, setAnalyticsType] = useState<"week" | "month">("week");
    const [spendingData, setSpendingData] = useState<any[]>([]);
    const [analyticsError, setAnalyticsError] = useState("");
    const [users, setUsers] = useState<UserType[]>([])
    const qrRef = useRef<HTMLDivElement | null>(null);
    const [creating, setCreating] = useState(false)
    const [qrError, setQrError] = useState("");


    const currentAccountId = account?.accountinfo?._id


    const [openScanner, setOpenScanner] = useState(false);
    const navigate = useNavigate();

    const scannerRef = useRef<Html5QrcodeScanner | null>(null);
    const scannedRef = useRef(false);

    const cleanupScanner = async () => {
        try {
            await scannerRef.current?.clear();
        } catch (e) {
        }

        scannerRef.current = null;
        scannedRef.current = false;

        const reader = document.getElementById("reader");
        if (reader) reader.innerHTML = "";
    };

    useEffect(() => {
        if (!openScanner) return;

        if (scannerRef.current) return; // prevent double init

        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox: { width: 280, height: 280 },
                aspectRatio: 1.0,
            },
            false
        );

        scannerRef.current = scanner;

        scanner.render(
            async (decodedText) => {
                if (scannedRef.current) return;
                scannedRef.current = true;

                try {
                    const url = new URL(decodedText);
                    console.log(url)
                    const userId = url.searchParams.get("user");

                    if (userId) {
                        await cleanupScanner(); // 🔥 stop camera properly
                        setOpenScanner(false);
                        navigate(`/send?user=${userId}`);
                    }
                } catch (err) {
                    console.log("Invalid QR");
                }
            },
            () => {
                // ignore scan errors
            }
        );

        return () => {
            cleanupScanner();
        };
    }, [openScanner]);

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



    const createMyQr = async () => {
        setQrError("");
        setCreating(true);

        try {
            if (!user || !qrRef.current) {
                setCreating(false);
                return;
            }

            await new Promise(requestAnimationFrame);

            const qr = await qrSvc.createSelfQr(user);

            qrRef.current.innerHTML = "";
            qr.append(qrRef.current);

        } catch (e) {
            console.log(e);
            setQrError("Failed to generate QR");
        } finally {
            setCreating(false);
        }
    };
    useEffect(() => {
        fetchRecentTransactions()
        fetchUsers()
    }, [])
    useEffect(() => {
        createMyQr()
    }, [user])

    const getAnal = async () => {
        setAnalyticsError("");

        try {
            const response = await transactSvc.getSpendingAnal(analyticsType)
            console.log(response)
            setSpendingData(response?.detail)

        } catch (exception) {
            setAnalyticsError("Failed to load analytics");

            console.log(exception)
        }
    }
    useEffect(() => {
        getAnal()
    }, [analyticsType])

    const fetchUsers = async () => {
        try {
            const response = await authSvc.fetchUsers(1, 5)
            setUsers(response?.detail)
            console.log(users)


        } catch (exception) {
            console.log(exception)
        }
    }


    const max = Math.max(...spendingData.map(i => i.amount || 0), 1);
    const containerHeight = 200;


    const handleDownloadQR = () => {
        const canvas = qrRef.current?.querySelector("canvas");

        if (!canvas) {
            alert("QR not ready");
            return;
        }

        const url = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = url;
        link.download = "payuwallet-qr.png";
        link.click();
    };
    const handleShareQR = async () => {
        try {
            const canvas = qrRef.current?.querySelector("canvas");

            if (!canvas) {
                alert("QR not ready");
                return;
            }

            const blob = await new Promise<Blob | null>((resolve) =>
                canvas.toBlob(resolve, "image/png")
            );

            if (!blob) {
                alert("Failed to prepare QR");
                return;
            }

            const file = new File([blob], "payuwallet-qr.png", {
                type: "image/png",
            });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: "PayuWallet QR",
                    text: "Scan to pay me",
                    files: [file],
                });
            } else {
                // fallback
                alert("Sharing not supported on this device");
            }
        } catch (err) {
            console.log(err);
        }
    };


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
                        <NavLink to={'/load'} className="bg-surface-container text-base sm:text-base text-on-secondary-container px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-all active:scale-95">
                            <span className="material-symbols-outlined"><PlusCircle className="h-5 w-5" /></span>
                            Load Wallet
                        </NavLink>
                        <button onClick={() => {
                            setOpenScanner(true)
                        }} className="w-14 h-14 bg-surface-container-lowest flex items-center justify-center rounded-2xl shadow-xl shadow-on-surface/5 active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl" ><QrCode className="h-6 w-6" /></span>
                        </button >
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
                    <div className="md:col-span-8 bg-surface-container-low p-8 md:p-12 rounded-[2rem] flex flex-col justify-between">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="relative">
                                <img className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover" data-alt="Portrait"
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
                                        <span className="material-symbols-outlined text-primary"><FileText className="h-5 w-5" /></span>
                                        <span className="font-bold text-on-surface">Statement</span>
                                    </div>
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-y-0.5 transition-transform"><ChevronRight className="h-5 w-5" /></span>
                                </NavLink >
                                <NavLink to={'/security'} className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-tertiary"><Verified className="h-5 w-5" /></span>
                                        <span className="font-bold text-on-surface">Security Audit</span>
                                    </div>
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-y-0.5 transition-transform"><Download className="h-4 w-4" /></span>
                                </NavLink >
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
                                {
                                    ['week', 'month'].map((type) => {
                                        const active = analyticsType === type;

                                        return (

                                            <button
                                                key={type}
                                                onClick={() => {
                                                    setAnalyticsType(type as "week" | "month")
                                                }} className={`px-3 py-1 rounded-full text-xs font-bold
                                                
                                                ${active ? 'bg-primary text-white ' : 'bg-surface-container-highest'}`}>
                                                {type.toUpperCase()}
                                            </button >
                                        )

                                    })
                                }

                            </div>

                        </div>
                        <div className="h-64 flex items-end gap-3 w-full">
                            {analyticsError && (
                                <div className="w-full flex flex-col items-center justify-center text-center">
                                    <p className="text-red-500 text-sm mb-2">{analyticsError}</p>
                                    <button
                                        onClick={getAnal}
                                        className="text-xs bg-primary text-white px-3 py-1 rounded-full"
                                    >
                                        Retry
                                    </button>
                                </div>
                            )}
                            {!analyticsError && spendingData.length === 0 && (
                                <div className="w-full flex items-center justify-center text-sm text-gray-400">
                                    No spending data available
                                </div>
                            )}
                            {!analyticsError && spendingData.length > 0 &&
                                spendingData.map((item, index) => {
                                    const height = (item.amount / max) * containerHeight;

                                    return (
                                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                            <div
                                                className={`w-full rounded-t-lg md:rounded-t-xl transition-all duration-700 ease-out ${index === spendingData.length - 1
                                                    ? "bg-primary"
                                                    : "bg-surface-container-high hover:bg-primary-fixed-dim"
                                                    }`}
                                                style={{
                                                    height: `${height}px`,
                                                    transform: `translateY(${loading ? "20px" : "0"})`,
                                                    opacity: loading ? 0 : 1,
                                                    transitionDelay: `${index * 80}ms`,

                                                }}
                                            />
                                            <span className="text-xs text-on-surface-variant">{item.label}</span>
                                        </div>
                                    );
                                })}

                        </div>

                    </div>
                    <div className="md:col-span-4 bg-surface-container-low rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
                        <div className="w-full aspect-square bg-surface-container-lowest rounded-3xl p-6 flex items-center justify-center mb-6 shadow-sm relative">

                            {/* QR always mounted */}
                            <div
                                ref={qrRef}
                                className={`w-[200px] h-[200px] flex items-center justify-center transition-opacity duration-200 ${creating || qrError ? "opacity-20" : "opacity-100"
                                    }`}
                            />

                            {/* Loading overlay */}
                            {creating && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-3xl">
                                    <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
                                </div>
                            )}

                            {/* Error overlay */}
                            {!creating && qrError && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-3xl">
                                    <p className="text-red-500 text-sm mb-3">{qrError}</p>
                                    <button
                                        onClick={createMyQr}
                                        className="text-xs bg-primary text-white px-3 py-1 rounded-full"
                                    >
                                        Retry
                                    </button>
                                </div>
                            )}
                        </div>
                        <h3 className="font-bold text-lg mb-2">My Vault ID</h3>
                        <p className="text-on-surface-variant text-sm mb-6">Scan to receive kinetic payments instantly</p>
                        <div className="flex gap-4">
                            <button
                                onClick={handleDownloadQR}
                                className="text-primary font-bold flex items-center gap-2">
                                Download  <span className="material-symbols-outlined text-sm"><Download className="h-4 w-4" /></span>
                            </button>
                            <button
                                onClick={handleShareQR}
                                className="text-primary font-bold flex items-center gap-2">
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
                            {/* {
                                users.map((user) => (
                                    <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                                            <img alt="Friend" className="w-full h-full object-cover" data-alt="Portrait of a woman with red glasses" src={user?.image ?? '/images/profile-placeholder.svg'} />
                                        </div>
                                        <span className="text-label-md font-medium">{user?.name.split(' ')[0]} </span>
                                    </div>
                                ))
                            } */}
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
                                    const isReceived = txn?.to?._id === currentAccountId

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
                                                        <span className="text-xs hidden md:block text-on-surface-variant font-medium"> {new Date(txn.createdAt).toLocaleTimeString()} • P2P Transfer</span>
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


            {openScanner && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-end md:items-center justify-center">
                    <div className="bg-white w-full md:w-[420px] rounded-t-3xl md:rounded-2xl p-5">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-bold text-lg">Scan QR</h2>

                            <button
                                onClick={() => {
                                    setOpenScanner(false);
                                    cleanupScanner(); // 🔥 important
                                }}
                                className="text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* SCANNER */}
                        <div className="relative">
                            <div
                                id="reader"
                                className="rounded-2xl overflow-hidden"
                            />
                        </div>

                        {/* HELP TEXT */}
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Align QR inside the frame
                        </p>
                    </div>
                </div>
            )}



        </>


    )
}
export default DashPage