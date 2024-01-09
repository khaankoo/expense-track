"use client";
import Profile from "@/images/Profile"
import Plus from "@/images/Plus"
import Geldii from "@/images/Geldi"
import Link from "next/link"
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
    const alerting = () => {
        router.push("/home")
    }
    return (
        <div className="w-full h-16 bg-white">
            <div className="flex max-w-screen-xl justify-between mx-auto items-center h-16">
                <div className="flex gap-6 items-center">
                    <Geldii />
                    <button className="font-semibold" onClick={alerting}>Dashboard</button>
                    <Link href={"/record"}>
                        <button>Records</button>
                    </Link>
                </div>
                <div className="flex gap-6 items-center leading-none">
                    <button className="flex bg-blue-600 rounded-3xl text-white p-2 px-3 gap-2 items-center"><Plus /> Record</button>
                    <button className="avatar online"><Profile /></button>
                </div>
            </div>
        </div>
    )    
}

export default Navbar