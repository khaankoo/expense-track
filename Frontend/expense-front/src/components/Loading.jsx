import Geld from "@/images/Geld";

const Loading = () => {
    return (
        <div className="flex flex-col mx-auto gap-6">
            <Geld />
            <div className="flex flex-col gap-4">
                <span className="loading mx-auto text-blue-600"></span>
                <p>Түр хүлээнэ үү...</p>
            </div>
        </div>
    )
}

export default Loading