import Bluen from "@/images/Blue"
import Green from "@/images/Gren"


const { default: Visa } = require("@/images/Visa")

const Card = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto justify-between my-10">
            <div className=""><Visa /></div>
            <div className="flex flex-col gap-6 p-4 border-2 rounded-xl bg-white w-96">
                <div className="flex gap-3">
                    <Green />
                    <h1>Your Income</h1>
                </div>
                <hr />
                <div>
                    <h1 className="font-semibold text-3xl">1,200,000</h1>
                    <p>Your Income Amount</p>
                </div>
                <div>
                    <p>32% from last month</p>
                </div>
            </div>
            <div className="flex flex-col gap-6 p-4 border-2 rounded-xl bg-white w-96">
                <div className="flex gap-3">
                    <Bluen />
                    <h1>Your Income</h1>
                </div>
                <hr />
                <div>
                    <h1 className="font-semibold text-3xl">-1,200,000</h1>
                    <p>Your Income Amount</p>
                </div>
                <div>
                    <p>32% from last month</p>
                </div>
            </div>
        </div>
    )
}

export default Card