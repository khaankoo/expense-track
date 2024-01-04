import { v4 as uuidv4 } from "uuid"
const rent = [
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    }
]

const Lend = () => {
    return (
        <div>
            {
                rent.map((el) => {
                    let key = uuidv4()
                    return (
                        <div className="p-5 bg-white" key={key}>
                            <hr />
                            <div className="flex justify-between">
                                <div>
                                    <h1>{el.lere}</h1>
                                    <p>{el.time}</p>
                                </div>
                                <div>
                                    <p>{el.money}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Lend