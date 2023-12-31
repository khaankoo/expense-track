'use client';
import Link from "next/link";
import Geld from "@/images/Geld";
import axios from "axios";
import { useState } from "react";

const api = "http://localhost:8000/users"

const Create = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ rePassword, setRePassword ] = useState("")
    const axiosing = async () => {
      try {
        const res = await axios.post(api, {name, email, password, rePassword})
        console.log(res.data);
      } catch (error) {
        console.error("signup error", error);
      }
    }
    return ( 
        <div className="flex justify-between w-full h-[100vh]">
            <div className="flex flex-col gap-4 justify-center text-center mx-auto">
                <Geld />
                <h1>Create Geld account</h1>
                <p>Sign up below to create your Wallet account</p>
                <div className="flex flex-col gap-3">
                    <input className="border-2 rounded-xl border-gray-300 p-2" type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                    <input className="border-2 rounded-xl border-gray-300 p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <input className="border-2 rounded-xl border-gray-300 p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    <input className="border-2 rounded-xl border-gray-300 p-2" type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} placeholder="Re-Password"/>
                </div>
                <Link href={"/currency"}>
                    <button className="btn btn-primary bg-blue-600 rounded-3xl text-white w-full" onClick={axiosing}>Sign up</button>
                </Link>
                <div className="flex justify-center gap-3">
                    <p>Already have account?</p>
                    <Link href={"/login"}>
                        <button className="text-blue-500">Log in</button>
                    </Link>
                </div>
            </div>
            <div className="bg-blue-600 w-1/2"></div>
        </div>
    )
}

export default Create