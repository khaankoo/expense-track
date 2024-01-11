"use client" 
import Doll from "@/images/Dollar"
import Geld from "@/images/Geld"
import Link from "next/link"
import { useState } from "react"

const Currency = () => {
    const [ valiut, setValiut ] = useState('');
    const includeValiut = () => {
        try {
            let data = JSON.parse(window.localStorage.getItem("data"));
            window.localStorage.setItem(
                'data',
                JSON.stringify({ ...data, currency: valiut })
            )
            console.log(valiut);
            console.log(data);
        } catch (error) {
            console.log(error, 'error');
        }
    }
    return (
        <div className="flex flex-col mx-auto w-[400px] gap-36 h-[100vh] my-20">
            <div className="flex flex-col w-3/5 mx-auto gap-3">
                <Geld />
                <div className="steps">
                    <div className="step step-primary">Currency</div>
                    <div className="step">Finish</div>                    
                </div>
            </div>
            <div className="flex flex-col justify-center mx-auto gap-7">
                <div className="flex flex-col mx-auto gap-6">
                    <Doll />
                    <h1>Select base currency</h1>
                </div>
                <div className="flex flex-col mx-auto gap-6">
                    <div className="flex flex-col gap-3">
                        <select className="p-3 rounded-xl border-gray-300 border" name="" id="">
                            <option value="MNT" onChange={(e) => (e.target.value)}>MNT - Mongolian Tugrik</option>
                            <option value="USD" onChange={(e) => (e.target.value)}>USD - USA Dollar</option>
                        </select>
                        <p className="text-[#475569]">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one</p>
                    </div>
                    <Link href={"/finish"}>
                        <button className="btn bg-blue-600 text-white rounded-3xl w-full btn-primary">Confirm</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Currency