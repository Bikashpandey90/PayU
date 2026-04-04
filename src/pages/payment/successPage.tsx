import TransactionComplete from "@/components/transactionComplete/complete";
import transactSvc from "@/services/transaction.service";
import { useEffect, useState } from "react";

const SuccessPage = () => {
    const [transaction, setTransaction] = useState(null)

    const verify = async () => {
        try {
            const params = new URLSearchParams(window.location.search);
            const data = params.get("data");
            if (data) {
                const response = await transactSvc.verifyEsewa({ data })
                console.log(response)
                setTransaction(response.detail)
            }

        } catch (exception) {
            console.log(exception)
        }
    }

    useEffect(() => {
        verify()
    }, []);
    return (
        <>
            <div className="pt-10 pb-32 max-w-7xl mx-auto px-8 ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
                    <div className="lg:col-span-12 space-y-8  ">
                        <TransactionComplete data={transaction} onClose={() => { }} />
                    </div>
                </div>
            </div>



        </>
    )
}
export default SuccessPage