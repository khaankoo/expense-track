import Close from "./../images/X"
import Homie from "@/images/Home";

const Category = ({ onClick }) => {
    return (
        <div className="flex flex-col p-5 w-96 gap-4 h-fit bg-white rounded-xl absolute left-0 top-0 right-0 bottom-0 mx-auto">
            <div className="w-full h-full glass" onClick={onClick}></div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h1>Add Category</h1>
                    <Close onClick={onClick}/>
                </div>
                <hr />
                <div className="flex gap-2 justify-between">
                    <Homie />
                    <input type="text" className="border p-2 w-full rounded-xl" placeholder="Name"/>
                </div>
                <button className="btn bg-[#16A34A] text-white">Add Category</button>
            </div>
        </div>
    )
}

export default Category