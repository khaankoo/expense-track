import Maping from "@/utils/CardMap"

const { default: Visa } = require("@/images/Visa")

const Card = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto justify-between my-10">
            <div className=""><Visa /></div>
            <div className=""><Maping /></div>
        </div>
    )
}

export default Card