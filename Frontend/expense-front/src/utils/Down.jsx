import { Eye } from "../images/Eye"
import { Nexted } from "../images/next"
import { v4 as uuidv4 } from "uuid"
const arr = [
    {
        title: "Food & Drinks"
    },
    {
        title: "Shopping"
    },
    {
        title: "Housing"
    },
    {
        title: "Transportation"
    },
    {
        title: "Vehicle"
    },
    {
        title: "Life & Entertainment"
    },
    {
        title: "Communication, PC"
    },
    {
        title: "Financial expenses"
    },
    {
        title: "Investments"
    },
    {
        title: "Income"
    },
    {
        title: "Others"
    },
]


const map = () => {
    return (
        <>
            {
                arr.map((el) => {
                    let key = uuidv4()
                    return (
                        <button className="flex justify-between" key={key}>
                            <div className="flex gap-2">
                                <Eye />
                                <p>{el.title}</p>
                            </div>
                            <Nexted />
                        </button>
                    )
                })
            }
        </>
    )
}

export default map