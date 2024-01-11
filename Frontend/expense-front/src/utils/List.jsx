import Homie from "@/images/Home";

const eeer = [
    {
        say: "Lending & Renting",
        mungu: "-1,000$"
    },
    {
        say: "Lending & Renting",
        mungu: "-1,000$"
    },
    {
        say: "Lending & Renting",
        mungu: "-1,000$"
    },
    {
        say: "Lending & Renting",
        mungu: "-1,000$"
    },
    {
        say: "Lending & Renting",
        mungu: "-1,000$"
    },
    {
        say: "Lending & Renting",
        mungu: "-1,000$"
    }
]


const build = () => {
  return (
    <div>
        {
            eeer.map((e) => {
                return (
                <div className="flex p-2 px-6 justify-between h-14 bg-white rounded-lg border items-center w-[910px]">
                    <div className="flex gap-4">
                      <input type="checkbox" />
                      <Homie />
                      <div>
                        <p>{e.say}</p>
                        <p className="text-gray-500 text-sm">14:00</p>
                      </div>
                    </div>
                    <p className="text-yellow-400">{e.mungu}</p>
                </div>
                )
            })
        }
    </div>
  );
};

export default build;
