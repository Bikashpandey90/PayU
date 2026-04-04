"use client"


import { AccountContext } from "@/context/account-context"
import { AuthContext } from "@/context/auth-context"
import { UserType } from "@/services/auth.service"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

interface OTPModalProps {
    isOpen: boolean,
    setIsOpen: Function

}

export const LogoutModal = ({
    isOpen,
    setIsOpen
}: OTPModalProps) => {
    const navigate = useNavigate()
    const { setLoggedInUser } = useContext(AuthContext) as { loggedInUser: UserType; setLoggedInUser: Function }
    const { setAccountInfo } = useContext(AccountContext) as { setAccountInfo: Function }

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refToken');
        setLoggedInUser(null)
        setAccountInfo(null)
        navigate('/')
        setIsOpen(false)
    };


    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-3 sm:p-4 z-50">
            <div className="bg-white rounded-3xl sm:rounded-3xl w-full max-w-sm p-6 sm:p-8 shadow-lg">


                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 sm:mb-4">
                        <Icon icon="majesticons:door-exit" className="text-2xl text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">Logout?</h2>
                    <p className="text-gray-600 text-xs sm:text-sm">
                        Are you sure you want to logout? <br />
                        <span className="font-medium text-gray-900"></span>
                    </p>
                </div>


                <div className='flex flex-row gap-3'>
                    <button
                        onClick={() => {
                            setIsOpen(false)
                        }}
                        className="w-full bg-gray-200 hover:bg-blue-400 disabled:bg-blue-400 disabled:cursor-not-allowed text-gray-600 hover:text-white font-medium py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl text-sm transition-colors mb-3 sm:mb-4"
                    >
                        Cancel
                    </button>
                    {/* Verify Button */}
                    <button
                        className="w-full bg-primary hover:bg-primary disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl text-sm transition-colors mb-3 sm:mb-4"
                        onClick={handleLogout}
                    >
                        Yes, Logout
                    </button>
                </div>


                {/* Info Text */}
                <p className="text-xs text-gray-500 text-center mt-4 sm:mt-6">
                    We're keeping your account secure. Please don't share this code with anyone.
                </p>


            </div>
        </div >
    )
}
