import Geld from "@/images/Geld"

const Currency = () => {
    return (
        <div className="flex flex-col mx-auto w-[400px] gap-36">
            <div className="flex flex-col w-3/5 mx-auto gap-3">
                <Geld />
                <div className="steps">
                    <div className="step step-neutral">Currency</div>
                    <div className="step step-neutral">Balance</div>
                    <div className="step">Finish</div>                    
                </div>
            </div>
            <div className="flex flex-col justify-center mx-auto gap-7">
                <div className="flex flex-col mx-auto">
                    <h1>Select base currency</h1>
                </div>
                <div className="flex flex-col mx-auto gap-6">
                    <div className="flex flex-col gap-3">
                        <select className="p-3 rounded-xl" name="" id="">
                            <option value="">MNT - Mongolian Tugrik</option>
                        </select>
                        <p className="text-[#475569]">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one</p>
                    </div>
                    <button className="btn btn-primary rounded-3xl">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Currency