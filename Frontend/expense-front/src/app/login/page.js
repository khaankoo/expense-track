"use client";
import Geld from "@/images/Geld";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const api = "http://localhost:8000/users"

const Email = () => {
  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");
  const router = useRouter();
  const moveRegis = async () => {
    router.push("/register");
    try {
      const res = await axios.get(api, {name, password})
      console.log(res.data);
    } catch (error) {
      console.error("error", error);
    }
  }
  return (
    <div className="flex mx-auto justify-between w-full">
      <div className="flex flex-col gap-4 mx-auto w-fit text-center h-[100vh] justify-center">
        <Geld />
        <h1 className="text-black font-semibold">Welcome Back</h1>
        <p>Welcome back, Please enter your details</p>
        <div className="flex flex-col gap-2">
          <input className="p-2 rounded-lg border-2 border-gray-300" type="email" id="" placeholder="Email" value={name} onChange={(e) => setName(e.target.value)}/>
          <input className="p-2 rounded-lg border-2 border-gray-300" type="password" id="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className="btn bg-blue-600 text-white rounded-3xl btn-primary" onClick={moveRegis}>Log in</button>
        </div>
        <div className="flex gap-2 mx-auto">
          <p>Don’t have account?</p>
          <Link href={"/signup"}>
            <button className="text-blue-500">Sign up</button>
          </Link>
        </div>
      </div>
      <div className="bg-blue-600 w-1/2"></div>
    </div>  
  );
};

export default Email;