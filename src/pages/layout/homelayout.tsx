import { LogoutModal } from "@/components/LogoutModal/modal"
import { AuthContext } from "@/context/auth-context"
import { UserType } from "@/services/auth.service"
import { ChevronDown, Globe, LayoutDashboard, LogOut, Settings, Share2, User } from "lucide-react"
import { useContext, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

const HomeLayout = () => {
    const { loggedInUser } = useContext(AuthContext) as { loggedInUser: UserType }
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)


    const user = loggedInUser
    return (
        <>
            <div className="text-on-background bg-[#F7F9FB]">
                <nav className=" sticky justify-self-center  w-full z-50 bg-[#f7f9fb] dark:bg-slate-900 max-w-[1200px]">
                    <div className="flex justify-between items-center px-6 py-4 w-full max-w-[1440px] mx-auto">

                        <NavLink to={'/'} className="text-2xl gap-3 flex font-extrabold tracking-tight text-[#3F95EC] dark:text-[#2e5bff]">
                            <svg
                                width="40"
                                height="auto"
                                viewBox="0 0 50 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-primary"
                            >
                                <path
                                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                                    stopColor="#000000"
                                ></path>
                                <path
                                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                                    stopColor="#000000"
                                ></path>
                            </svg>
                            <span className="font-extrabold text-2xl">
                                PayU
                            </span>
                        </NavLink>
                        <div className="hidden md:flex items-center gap-8">
                            <NavLink to={'/'} className="text-[#3F95EC] font-bold border-b-2 border-[#3F95EC] font-manrope text-sm py-1" >Home</NavLink>
                            <NavLink to={'/services'} className="text-[#434656] dark:text-slate-400 font-manrope text-sm hover:bg-[#e0e3e5] dark:hover:bg-slate-700 transition-colors px-3 py-1 rounded" >Services</NavLink>
                            <NavLink to={''} className="text-[#434656] dark:text-slate-400 font-manrope text-sm hover:bg-[#e0e3e5] dark:hover:bg-slate-700 transition-colors px-3 py-1 rounded" >Security</NavLink>
                            <NavLink to={''} className="text-[#434656] dark:text-slate-400 font-manrope text-sm hover:bg-[#e0e3e5] dark:hover:bg-slate-700 transition-colors px-3 py-1 rounded" >Pricing</NavLink>
                        </div>
                        

                        <div className="flex items-center gap-4 relative">
                            {!user ? (
                                <NavLink
                                    to="/login"
                                    className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:scale-95 transition-transform duration-200"
                                >
                                    Login
                                </NavLink>
                            ) : (
                                <div className="relative">
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex items-center gap-2 border border-gray-300 dark:border-slate-700 rounded-full px-3 py-1 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        <img
                                            src={user?.image || '/images/profile-placeholder.svg'}
                                            alt="avatar"
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <span className="font-manrope font-medium">{user.name}</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 shadow-lg rounded-2xl py-4 flex flex-col">
                                            <NavLink
                                                to="/settings"
                                                className="flex items-center gap-2 px-6 mx-2 rounded-2xl py-3 text-base text-[#434656] dark:text-slate-300 hover:bg-[#e0e3e5] dark:hover:bg-slate-700 transition-colors"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                <Settings className="w-5 h-5" /> Settings
                                            </NavLink>
                                            {
                                                loggedInUser?.role === 'admin' && (
                                                    <NavLink
                                                        to="/admin"
                                                        className="flex items-center gap-2 px-6 mx-2 rounded-2xl py-3 text-base text-[#434656] dark:text-slate-300 hover:bg-[#e0e3e5] dark:hover:bg-slate-700 transition-colors"
                                                        onClick={() => setDropdownOpen(false)}
                                                    >
                                                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                                                    </NavLink>
                                                )
                                            }
                                            <NavLink
                                                to="/profile"
                                                className="flex items-center gap-2 px-6 mx-2 rounded-2xl py-3 text-base text-[#434656] dark:text-slate-300 hover:bg-[#e0e3e5] dark:hover:bg-slate-700 transition-colors"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                <User className="w-5 h-5" /> Profile
                                            </NavLink>
                                            { }
                                            <button
                                                onClick={() => {
                                                    setIsOpen(true)
                                                    setDropdownOpen(false)
                                                }}
                                                className="flex items-center gap-2 px-6 mx-2 rounded-2xl py-3 text-base text-red-500 hover:bg-[#fee2e2] dark:hover:bg-red-900 transition-colors"
                                            >
                                                <LogOut className="w-5 h-5" /> Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </nav>


                <Outlet />
                <footer className="justify-self-center w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#f2f4f6] dark:bg-slate-800">
                    <div className="text-[#434656] dark:text-slate-400 font-manrope text-sm">
                        © 2024 PayU Editorial Experience. Secure &amp; Kinetic.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <NavLink to={''} className="text-[#434656] dark:text-slate-500 hover:text-[#3F95EC] transition-colors font-manrope text-sm" >Privacy Policy</NavLink>
                        <NavLink to={''} className="text-[#434656] dark:text-slate-500 hover:text-[#3F95EC] transition-colors font-manrope text-sm" >Terms of Service</NavLink>
                        <NavLink to={''} className="text-[#434656] dark:text-slate-500 hover:text-[#3F95EC] transition-colors font-manrope text-sm" >Security Audit</NavLink>
                        <NavLink to={''} className="text-[#434656] dark:text-slate-500 hover:text-[#3F95EC] transition-colors font-manrope text-sm" >Regulatory Disclosure</NavLink>
                    </div>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="share"><Share2 className="h-5 w-5" /></span>
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="language"><Globe className="h-5 w-5" /></span>
                    </div>

                </footer>
            </div>

            <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

export default HomeLayout