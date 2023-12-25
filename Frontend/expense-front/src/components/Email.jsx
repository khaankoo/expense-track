import Geld from "@/images/Geld";

const Email = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col mx-auto w-60 gap-4">
          <Geld />
          <h1>Welcome Back</h1>
          <p>Welcome back, Please enter your details</p>
          <div className="flex flex-col gap-2">
            <input className="p-2 rounded-lg border-2 border-gray-300" type="email" id="" placeholder="Email"/>
            <input className="p-2 rounded-lg border-2 border-gray-300" type="password" id="" placeholder="Password"/>
            <button className="btn bg-blue-600 text-white rounded-3xl">
              Log in
            </button>
          </div>
          <div className="flex gap-2">
            <p>Don’t have account?</p>
            <button className="text-blue-500">Sign up</button>
          </div>
        </div>
      </div>
      <div className="flex bg-blue-600 h-full w-full">bene</div>
    </div>
  );
};

export default Email;
