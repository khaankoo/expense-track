'use client';
import Geld from "@/images/Geld";
import { useRouter } from "next/navigation";

const Loading = () => {
    const router = useRouter()
    setTimeout(() => {
        router.push("/currency")
    }, 4000);
    return (
        <div className="flex flex-col mx-auto gap-8 items-center justify-center h-[100vh]">
            <Geld />
            <div className="flex flex-col gap-5">
                <span className="loading mx-auto text-blue-600"></span>
                <p>Түр хүлээнэ үү...</p>
            </div>
        </div>
    )
}

export default Loading