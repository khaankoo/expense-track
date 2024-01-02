import Card from "@/components/Cards";
import Create from "@/components/Create";
import Expense from "@/components/Income";
import { Last } from "@/components/LastRecord";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#eff0f2] h-full">
      {/* <Navbar /> */}
      {/* <Card /> */}
      {/* <Expense /> */}
      <Last />
    </main>
  )
}
