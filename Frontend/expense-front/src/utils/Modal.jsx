const bigOne = () => {
  return (
    <div className="flex flex-col h-full w-full items-center glass absolute left-0 top-0 right-0 bottom-0">
      <div className="w-full h-full relative" onClick={toggleModal}></div>
      <div className="flex flex-col mt-36 w-[700px] h-96 bg-white gap-2 rounded-xl p-7 absolute justify-between">
        <div className="flex justify-between">
          <h1>Add Record</h1>
          <div onClick={toggleModal}>
            <Close />
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex flex-col h-fit bg-white gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex bg-[#F3F4F6] w-full rounded-3xl">
                <a
                  className={`w-[160px] h-[40px] text-center flex items-center justify-center rounded-[20px] text-[16px] gap-1 font-normal ${
                    isIncome
                      ? "bg-transparen text-black"
                      : "bg-[#0166FF] text-white"
                  }`}
                  onClick={() => income(false)}
                >
                  Expense
                </a>
                <a
                  className={`w-[160px] h-[40px] text-center flex items-center justify-center rounded-[20px] text-[16px] gap-1 font-normal ${
                    isIncome
                      ? "bg-[#16A34A] text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => income(true)}
                >
                  Income
                </a>
              </div>
              <input
                type="text"
                className="border rounded-xl p-5"
                placeholder="$ 000.00"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1>Category</h1>
              <select className="w-full p-2 border rounded-md">
                <option>Home</option>
                <option>Food</option>
                <option>Drink</option>
                <option>Taxi</option>
                <option>Gift</option>
                <option>Shopping</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <h1>Date</h1>
                <input type="date" className="border rounded-md p-1" />
              </div>
              <div className="flex flex-col gap-1">
                <h1>Date</h1>
                <input type="time" className="border rounded-md p-1" />
              </div>
            </div>
            <button className="btn rounded-3xl bg-[#16A34A] text-white">
              Add Record{" "}
              {income ? "bg-[#0166FF] text-white" : "bg-[#16A34A] text-white"}
            </button>
          </div>
          <div className="w-[100%] h-[280px]">
            <div className="flex flex-col gap-2">
              <h1>Payee</h1>
              <input
                placeholder="Write here"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Note</h1>
              <textarea
                placeholder="Write here"
                className="w-full p-2 border rounded-lg"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bigOne