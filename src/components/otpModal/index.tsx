"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import authSvc from "@/services/auth.service"

interface OTPModalProps {
    resend: boolean,
    isOpen: boolean
    email: string
    onVerify: (otp: string) => Promise<void>
    onResend: () => Promise<void>
    onClose?: () => void
    isLoading?: boolean
    type?: 'reset' | 'verify'
}

export const OTPModal = ({
    resend,
    isOpen,
    email,
    onVerify,
    onClose,
    isLoading = false,
    type = 'verify'
}: OTPModalProps) => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])
    const [timeLeft, setTimeLeft] = useState<number>(60)
    const [canResend, setCanResend] = useState<boolean>(false)
    const [isVerifying, setIsVerifying] = useState(false)
    const [error, setError] = useState("")
    const [status, setStatus] = useState<"idle" | "success" | "failure">("idle")
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    // Timer for resend
    useEffect(() => {
        if (!isOpen) return

        if (timeLeft === 0) {
            setCanResend(true)
            return
        }

        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        return () => clearTimeout(timer)
    }, [timeLeft, isOpen])

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return

        const newOtp = [...otp]
        newOtp[index] = value.replace(/[^0-9]/g, "")
        setOtp(newOtp)
        setError("")

        // Move to next input
        if (newOtp[index] && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleBackspace = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleVerify = async () => {
        const otpString = otp.join("")
        if (otpString.length !== 6) {
            setError("Please enter all 6 digits")
            return
        }

        try {
            setIsVerifying(true)
            setError("")
            await onVerify(otpString)
            setStatus("success")
            setTimeout(() => {
                onClose?.()
                setStatus("idle")
                setOtp(["", "", "", "", "", ""])
            }, 2000)
        } catch (err) {
            setStatus("failure")
            setError("Invalid OTP. Please try again.")
            setOtp(["", "", "", "", "", ""])
            setTimeout(() => {
                setStatus("idle")
            }, 2000)
        } finally {
            setIsVerifying(false)
        }
    }

    const handleResend = async () => {
        try {
            setCanResend(false)
            setTimeLeft(60)
            setOtp(["", "", "", "", "", ""])
            setError("")
            await authSvc.resendOtp({ email: email })
        } catch (err) {
            setError("Failed to resend OTP. Try again.")
        }
    }

    const hasAutoResentRef = useRef(false)

    useEffect(() => {
        if (!isOpen) return
        if (!resend) return
        if (hasAutoResentRef.current) return

        hasAutoResentRef.current = true

            ; (async () => {
                try {
                    setCanResend(false)
                    setTimeLeft(60)
                    setOtp(["", "", "", "", "", ""])
                    setError("")
                    await authSvc.resendOtp({ email })
                } catch (err) {
                    setError("Failed to resend OTP. Try again.")
                }
            })()
    }, [resend, isOpen, email])



    if (!isOpen) return null

    const maskedEmail = `${email.substring(0, 3)}***${email.substring(email.lastIndexOf("@") - 2)}`

    const isSuccess = status === "success"
    const isFailure = status === "failure"

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-3 sm:p-4 z-50">
            <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-sm p-6 sm:p-8 shadow-lg">
                {/* Success State */}
                {isSuccess && (
                    <div className="text-center py-8 sm:py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <Icon icon="mage:check-circle" className="text-4xl text-green-600" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{type === 'reset' ? 'Code Verified' : 'Account Activated'}</h2>
                        <p className="text-gray-600 text-sm">{type === 'reset' ? 'Your can now proceed to change password!' : 'Your account has been successfully verified!'}</p>
                    </div>
                )}

                {/* Failure State */}
                {isFailure && (
                    <div className="text-center py-8 sm:py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <Icon icon="mage:alert-circle" className="text-4xl text-red-600" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Verification Failed</h2>
                        <p className="text-gray-600 text-sm">The OTP you entered is invalid. Please try again.</p>
                    </div>
                )}

                {/* Idle State */}
                {status === "idle" && (
                    <>
                        {/* Header */}
                        <div className="text-center mb-6 sm:mb-8">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 sm:mb-4">
                                <Icon icon="mage:email" className="text-2xl text-primary" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{type === 'reset' ? 'Verify Reset Code' : 'Verify Your Email'}</h2>
                            <p className="text-gray-600 text-xs sm:text-sm">
                                We've sent a 6-digit code to <br />
                                <span className="font-medium text-gray-900">{maskedEmail}</span>
                            </p>
                        </div>

                        {/* OTP Input Fields */}
                        <div className="mb-6">
                            <div className="flex gap-1.5 sm:gap-2 justify-center mb-4">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => {
                                            inputRefs.current[index] = el
                                        }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleBackspace(index, e)}
                                        className="w-10 h-12 sm:w-12 sm:h-14 border-2 border-gray-200 rounded-lg sm:rounded-xl text-center text-lg sm:text-xl font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        disabled={isVerifying || isLoading}
                                    />
                                ))}
                            </div>

                            {error && (
                                <div className="flex items-center justify-center gap-2 text-red-500 text-xs sm:text-sm mt-3 sm:mt-4">
                                    <Icon icon="mage:alert-circle" className="text-base sm:text-lg flex-shrink-0" />
                                    {error}
                                </div>
                            )}
                        </div>

                        {/* Verify Button */}
                        <button
                            onClick={handleVerify}
                            disabled={isVerifying || isLoading || otp.join("").length !== 6}
                            className="w-full bg-primary hover:bg-primary disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl text-sm transition-colors mb-3 sm:mb-4"
                        >
                            {isVerifying || isLoading ? "Verifying..." : "Verify Email"}
                        </button>

                        {/* Resend OTP */}
                        <div className="text-center">
                            <p className="text-xs sm:text-sm text-gray-600 mb-2">
                                {canResend ? (
                                    <>
                                        Didn't receive the code?{" "}
                                        <button
                                            onClick={handleResend}
                                            className="text-primary font-semibold hover:underline"
                                            disabled={isVerifying || isLoading}
                                        >
                                            Resend OTP
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Resend code in{" "}
                                        <span className="font-semibold text-gray-900">
                                            {timeLeft}s
                                        </span>
                                    </>
                                )}
                            </p>
                        </div>

                        {/* Info Text */}
                        <p className="text-xs text-gray-500 text-center mt-4 sm:mt-6">
                            We're keeping your account secure. Please don't share this code with anyone.
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}
