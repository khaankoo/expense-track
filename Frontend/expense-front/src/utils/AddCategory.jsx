import Close from "./../images/X"
import Homie from "@/images/Home";

const Category = ( {onClick} ) => {
    return (
        <div className="p-5 w-[50%] h-fit flex flex-col gap-4">
            <div className="w-full h-full glass"></div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h1>Add Category</h1>
                    <Close onClick={onClick}/>
                </div>
                <hr />
                <div className="flex flex-col gap-2">
                    <Homie />
                    <input type="text" className="border p-2" placeholder="Name"/>
                </div>
                <button className="btn bg-[#16A34A]">Add Category</button>
            </div>
        </div>
    )
}

export default Category