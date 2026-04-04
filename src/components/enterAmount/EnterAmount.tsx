import { AccountContext } from "@/context/account-context"
import { formatNumber } from "@/lib/utils"
import { LoaderCircle, Receipt } from "lucide-react"
import { useContext } from "react"


interface AmountInputSectionProps {
    amount: string
    setAmount: (val: string) => void
    stepLabel?: string,
    primaryAction?: () => void
    primaryActionLabel?: string
    loading?: boolean,
    cancelAction?: () => void


}

const EnterAmount = ({
    amount,
    setAmount,
    stepLabel = "",
    primaryAction,
    primaryActionLabel,
    loading = false,
    cancelAction
}: AmountInputSectionProps) => {

    const account = useContext(AccountContext) as { accountinfo: any }

    return (
        <section className="bg-surface-container-low my-0 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6 mx-6 opacity-60">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" data-icon="payments"><Receipt className="h-5 w-5" /></span>
                    Enter Amount
                </h2>
                <div className="px-3 py-1 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface-variant">
                    {stepLabel}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-10 opacity-60">
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-extrabold text-on-surface-variant">Rs </span>
                    <input
                        className="text-6xl font-black text-on-surface bg-transparent border-0 text-center w-full max-w-md focus:ring-0 focus:outline-none no-spinner"
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        autoFocus
                    />
                    {/* <input className="text-6xl font-black text-on-surface bg-transparent border-none text-center w-full max-w-md focus:ring-0" disabled type="text" value="0.00" /> */}
                </div>
                <p className="text-on-surface-variant font-medium">Available balance: Rs {account?.accountinfo?.balance ? formatNumber(account?.accountinfo?.balance) : "0.00"}
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 opacity-60">

                {['50', '100', '500', '1000'].map(val => (
                    <button
                        key={val}
                        onClick={() => setAmount(val)}
                        className="px-6 py-2 rounded-full bg-surface-container-high hover:bg-primary hover:text-white transition-colors text-on-surface font-bold text-sm"
                    >
                        Rs {val}
                    </button>
                ))}
            </div>

            <div className="flex justify-end mt-8 gap-6">
                <button
                    onClick={cancelAction}
                    className="bg-gray-200 text-center text-gray-600 px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-transform disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={primaryAction}
                    disabled={loading}
                    className="bg-primary text-center text-white px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-transform disabled:opacity-50"
                >
                    {loading ? (<LoaderCircle className="h-5 w-5 animate-spin" />) : primaryActionLabel || "Load Wallet"}
                </button>
            </div>
        </section>
    )
}

export default EnterAmount