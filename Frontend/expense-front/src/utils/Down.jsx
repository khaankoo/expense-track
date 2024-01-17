import { useEffect, useState } from "react"
import { Eye } from "../images/Eye"
import { Nexted } from "../images/next"
import axios from "axios"

const map = () => {
    const [ categories, setCategories ] = useState()
    const category = async () => {
        try {
            const res = await axios.post("http://localhost:8000/category")
            setCategories(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        category()
    }, [])
    return (
        <button className="flex justify-between">
            <div className="flex gap-2">
                <Eye />
                {categories && Array.isArray(categories) && categories.map((e) => <p key={e.name}>{e.name}</p>)}
            </div>
            <Nexted />
        </button>
    )
}
export default map