import { LoaderCircle, Phone } from "lucide-react"

interface EnterPhoneNumberProps {
    phone: string
    setPhone: (val: string) => void
    primaryAction?: () => void
    primaryActionLabel?: string
    loading?: boolean
    cancelAction?: () => void
}

const EnterPhoneNumber = ({
    phone,
    setPhone,
    primaryAction,
    primaryActionLabel,
    loading = false,
    cancelAction
}: EnterPhoneNumberProps) => {

    const handleChange = (val: string) => {
        const cleaned = val.replace(/\D/g, "").slice(0, 10)
        setPhone(cleaned)
    }

    const isValid = phone.length === 10

    return (
        <section className="bg-surface-container-low my-0 rounded-3xl p-8">

            <div className="flex justify-between items-center mb-6 mx-6 opacity-60">
                <h2 className="text-xl font-bold flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    Enter Phone Number
                </h2>

            </div>

            <div className="flex flex-col items-center justify-center py-10">
                <div className="flex items-center gap-2 mb-4">

                    <span className="text-5xl font-bold text-on-surface-variant">
                        +977
                    </span>

                    <input
                        className="text-5xl font-black text-on-surface bg-transparent border-0 text-center w-full max-w-md focus:ring-0 focus:outline-none tracking-widest"
                        type="tel"
                        placeholder="98XXXXXXXX"
                        value={phone}
                        onChange={(e) => handleChange(e.target.value)}
                        autoFocus
                    />
                </div>

                <p className="text-on-surface-variant font-medium text-sm">
                    Enter a valid NTC or Ncell number
                </p>
            </div>



            {/* ACTIONS */}
            <div className="flex justify-end mt-8 gap-6">
                <button
                    onClick={cancelAction}
                    className="bg-gray-200 text-gray-600 px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-transform"
                >
                    Cancel
                </button>

                <button
                    type="button"
                    onClick={primaryAction}
                    disabled={!isValid || loading}
                    className="bg-primary text-white px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-transform disabled:opacity-50"
                >
                    {loading
                        ? <LoaderCircle className="h-5 w-5 animate-spin" />
                        : primaryActionLabel || "Continue"}
                </button>
            </div>

        </section>
    )
}

export default EnterPhoneNumber