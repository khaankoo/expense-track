"use client";
import Plus from "@/images/Plus"
import Maped from "@/utils/Down"
import Plussed from "@/images/Plussed"
import Left from "@/images/Left"
import DownTwo from "@/images/DownTwo"
import Homie from "@/images/Home";
import Close from "./../../images/X"
import { useState } from "react"

const { default: Navbar } = require("@/components/Navbar")


const Record = () => {
    const [ modal, setModal ] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
        console.log(modal);
    }
    return (
        <div className="bg-[#eff0f2] h-screen w-screen">
            <Navbar />
            <div className="flex max-w-screen-xl mx-auto my-8 gap-12 relative">
                <div className="flex flex-col w-2/6 h-[500] rounded-xl bg-white py-3 px-3 gap-3">
                    <h1 className="font-semibold mb-3 text-xl">Records</h1>
                    <div className="flex flex-col gap-6">
                        <button className="flex bg-blue-600 p-1 rounded-3xl text-white w-full justify-center items-center gap-2" onClick={toggleModal}>
                            <Plus /> Add
                        </button>
                        <input type="search" className="border-2 border-gray-400 p-1 rounded-lg" placeholder=" Search"/>
                    </div>
                    <div className="flex flex-col my-3 gap-4">
                        <h1 className="font-semibold text-lg">Types</h1>
                        <div className="flex flex-col gap-3 pl-4">
                            <div className="flex gap-3">
                                <input type="checkbox" className="rounded-3xl border"/>
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
                        <div className="flex flex-col gap-4 pl-4">
                            <Maped />
                            <button className="flex items-center gap-3"><Plussed /> Add Category</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="font-semibold text-lg">Amount Range</h1>
                        <input type="range" min="0" max="1000" value="40" class="range range-xs" /> 
                    </div>
                </div>
                <div className="flex flex-col w-full gap-6">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <button className="border-none bg-gray-300 rounded-xl h-10 w-10"><Left /></button>
                            <p>Last 30 Days</p>
                            <button className="border-none bg-gray-300 rounded-xl h-10 w-10">ba</button>
                        </div>
                        <button className="flex gap-5 p-3 bg-white rounded-lg font-medium border">Newest First <DownTwo /></button>
                    </div>
                    <div className="flex p-2 px-6 justify-between w-full h-12 bg-white rounded-lg border items-center">
                        <div className="flex gap-3">
                            <input type="checkbox"/>
                            <p>Select all</p>
                        </div>
                        <p className="text-gray-400">- 35,500$</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-semibold">Today</h1>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-green-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-red-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">Yesterday</h1>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                        <div className="flex p-2 px-6 justify-between w-full h-14 bg-white rounded-lg border items-center">
                            <div className="flex gap-4">
                                <input type="checkbox"/>
                                <Homie />
                                <div>
                                    <p>Lending & Renting</p>
                                    <p className="text-gray-500 text-sm">14:00</p>
                                </div>
                            </div>
                            <p className="text-yellow-400">-1,000$</p>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="flex justify-center h-full w-full items-center glass absolute left-0 top-0 right-0 bottom-0" onClick={toggleModal}>
                    <div className="flex flex-col w-[700px] h-96 bg-white gap-4 rounded-xl p-7">
                        <div className="flex justify-between">
                            <h1>Add Record</h1>
                            <div onClick={toggleModal}>
                                <Close />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="flex flex-col w-full h-[280px] bg-white">
                                <div>
                                    <button className="h-9 rounded-3xl w-full bg-slate-300">Expense Income</button>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="w-full h-[280px] bg-slate-700"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Record