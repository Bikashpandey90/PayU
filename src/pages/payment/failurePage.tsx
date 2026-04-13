import FailureResponse from "@/components/failureResponse/failure"

const FailurePage = () => {
    let transaction;
    let amount;
    // const onRetry = () => {

    // }
    return (
        <>
            <div className="pt-10 pb-32 max-w-7xl mx-auto px-8 ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
                    <div className="lg:col-span-12 space-y-8  ">
                        <FailureResponse amount={amount} data={transaction} onRetry={() => { }} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default FailurePage