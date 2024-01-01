import Profile from "@/images/Profile"
import Plus from "@/images/Plus"
import Geldii from "@/images/Geldi"

const Navbar = () => {
    return (
        <div className="w-full h-16 bg-white">
            <div className="flex max-w-screen-xl justify-between mx-auto items-center h-16">
                <div className="flex gap-6">
                    <Geldii />
                    <button className="font-semibold">Dashboard</button>
                    <button>Records</button>
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