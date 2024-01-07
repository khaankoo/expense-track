"use client";
import Done from "@/images/Done"
import Geld from "@/images/Geld"
import { useRouter } from "next/navigation"

const Finish = () => {
    const router = useRouter();
    const moveHome = () => {
        router.push("/home")
    }
    return (
        <div className="flex flex-col mx-auto w-[400px] gap-16 h-[100vh] justify-center">
            <div className="flex flex-col w-3/5 mx-auto gap-3">
                <Geld />
                <div className="steps">
                    <div className="step step-neutral">Currency</div>
                    <div className="step step-neutral">Finish</div>                    
                </div>
            </div>
            <div className="flex flex-col justify-center mx-auto gap-7">
                <div className="flex flex-col mx-auto">
                    <Done />
                    <h1>Select base currency</h1>
                </div>
                <div className="flex flex-col mx-auto gap-6">
                    <div className="flex flex-col gap-3">
                        <select className="p-3 rounded-xl" name="" id="">
                            <option value="">MNT - Mongolian Tugrik</option>
                            <option value="">USD - US Dollar</option>
                        </select>
                        <p className="text-[#475569]">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one</p>
                    </div>
                    <button className="btn bg-blue-600 text-white rounded-3xl" onClick={moveHome}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Finish