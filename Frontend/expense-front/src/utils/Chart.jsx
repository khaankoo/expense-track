import { v4 as uuidv4 } from "uuid"

const chart = [
    {
        tide: "Income - Expense"
    },
    {
        tide: "Income - Expense"
    }
]

const Charting = () => {
    return (
        <div className="flex mx-auto justify-between gap-5 w-full h-">
            {
                chart.map((el) => {
                    let key = uuidv4()
                    return (
                        <div className="bg-white p-5 w-full h-52" key={key}>
                            <h1>{el.tide}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Charting