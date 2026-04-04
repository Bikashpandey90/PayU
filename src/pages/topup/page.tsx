import EnterAmount from "@/components/enterAmount/EnterAmount"
import EnterPhoneNumber from "@/components/enterNumber/enterNumber"
import transactSvc from "@/services/transaction.service"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TopUpPage = () => {

    const [selectedMethod, setSelectedMethod] = useState<string>('')
    const [amount, setAmount] = useState("")
    const [phone, setPhone] = useState("")
    const [step, setStep] = useState(1)

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const topup = async () => {
        if (loading) return
        setLoading(true)

        try {
            const payload = {
                service: selectedMethod,
                amount: amount,
                number: phone,
            }

            const response = await transactSvc.topupBalance(payload)
            console.log(response)

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }


    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

    const onCancel = () => {
        if (step === 1) {
            setSelectedMethod('')
            navigate('/topup')
        } else {
            prevStep()
        }
    }

    return (
        <main className="max-w-6xl mx-auto px-6 py-10 min-h-[75svh]">

            <header>
                <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">
                    Mobile Top-Up
                </h1>
                <p className="text-on-surface-variant font-medium">
                    Recharge your prepaid or postpaid connection instantly.
                </p>
            </header>

            <section className="w-full justify-self-center mt-14 lg:max-w-4xl space-y-10">



                {
                    step === 1 && !selectedMethod && (
                        <div className="flex flex-col items-center space-y-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mx-auto">

                                <label
                                    onClick={() => {
                                        setSelectedMethod('ncell')
                                        nextStep()
                                    }} className="relative cursor-pointer group">
                                    <input className="peer sr-only" name="operator" type="radio" value="ncell" />
                                    <div className="operator-card bg-surface-container-low p-8 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 peer-checked:bg-white peer-checked:shadow-[0_16px_40px_rgba(0,0,0,0.06)] peer-checked:ring-2 peer-checked:ring-primary h-64 border-2 border-transparent hover:border-outline-variant/30">
                                        <div className="w-24 h-24 mb-6 relative">
                                            <img src="/images/ncell.png" draggable="false" className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-headline-sm font-bold text-on-surface">Ncell</span>
                                        <div className="absolute top-6 right-6 opacity-0 peer-checked:opacity-100 transition-opacity bg-primary text-white rounded-full p-1">
                                            <span className="material-symbols-outlined text-lg">check</span>
                                        </div>
                                    </div>
                                </label>

                                <label
                                    onClick={() => {
                                        setSelectedMethod('ntc')
                                        nextStep()
                                    }} className="relative cursor-pointer group">
                                    <input className="peer sr-only" name="operator" type="radio" value="ntc" />
                                    <div className="operator-card bg-surface-container-low p-8 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 peer-checked:bg-white peer-checked:shadow-[0_16px_40px_rgba(0,0,0,0.06)] peer-checked:ring-2 peer-checked:ring-primary h-64 border-2 border-transparent hover:border-outline-variant/30">
                                        <div className="w-24 h-24 mb-6 relative">
                                            <img src="/images/ntc.png" draggable="false" className="w-full h-full object-cover rounded-xl" />
                                        </div>
                                        <span className="text-headline-sm font-bold text-on-surface">Namaste (NTC)</span>
                                        <div className="absolute top-6 right-6 opacity-0 peer-checked:opacity-100 transition-opacity bg-primary text-white rounded-full p-1">
                                            <span className="material-symbols-outlined text-lg">check</span>
                                        </div>
                                    </div>
                                </label>

                            </div>



                        </div>
                    )
                }

                {
                    step == 2 && (
                        <EnterAmount
                            amount={amount}
                            setAmount={setAmount}
                            primaryActionLabel="Next Step"
                            primaryAction={nextStep}
                            cancelAction={onCancel}

                        />
                    )
                }

                {
                    step == 3 && (
                        <EnterPhoneNumber
                            loading={loading}
                            phone={phone}
                            setPhone={setPhone}
                            primaryActionLabel="Continue"
                            cancelAction={onCancel}
                            primaryAction={topup}

                        />
                    )
                }

            </section>

        </main>
    )
}

export default TopUpPage