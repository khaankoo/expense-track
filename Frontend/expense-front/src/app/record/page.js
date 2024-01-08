import Plus from "@/images/Plus"
import Maped from "@/utils/Down"
import Plussed from "@/images/Plussed"
import Left from "@/images/Left"

const { default: Navbar } = require("@/components/Navbar")


const Record = () => {
    return (
        <div className="bg-[#eff0f2] h-screen">
            <Navbar />
            <div className="flex max-w-screen-xl mx-auto my-10 gap-12">
                <div className="flex flex-col w-2/6 h-[500] rounded-xl bg-white py-3 px-3 gap-3">
                    <h1 className="font-semibold mb-3 text-xl">Records</h1>
                    <div className="flex flex-col gap-6">
                        <button className="flex bg-blue-600 p-1 rounded-3xl text-white w-full justify-center items-center gap-2">
                            <Plus /> Add
                        </button>
                        <input type="search" className="border-2 border-gray-400 p-1 rounded-lg" placeholder=" Search"/>
                    </div>
                    <div className="flex flex-col my-3 gap-5">
                        <h1 className="font-semibold text-lg">Types</h1>
                        <div className="flex flex-col gap-3 pl-4">
                            <div className="flex gap-3">
                                <input type="checkbox" className="rounded-3xl"/>
                                <p>All</p>
                            </div>
                            <div className="flex gap-3">
                                <input type="checkbox" className="rounded-3xl"/>
                                <p>Income</p>
                            </div>
                            <div className="flex gap-3">
                                <input type="checkbox" className="rounded-3xl"/>
                                <p>Expense</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between">
                            <h1 className="font-semibold text-lg">Category</h1>
                            <button className="text-gray-400 hover:text-blue-600">Clear</button>
                        </div>
                        <div className="flex flex-col gap-5 pl-4">
                            <Maped />
                            <button className="flex items-center gap-3"><Plussed /> Add Category</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="font-semibold text-lg">Amount Range</h1>
                        <div className="flex steps justify-between">
                            <p className="step">0</p>
                            <p className="step">1000</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <button className="border-none bg-gray-300 rounded-xl h-10 w-10">zu</button>
                            <p>Last 30 Days</p>
                            <button className="border-none bg-gray-300 rounded-xl h-10 w-10">ba</button>
                        </div>
                        <button className="p-3 bg-white rounded-lg font-medium border-2">Newest First</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Record