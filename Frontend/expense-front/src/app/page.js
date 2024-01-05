import Card from "@/components/Cards";
import Create from "@/components/Create";
import Email from "@/components/Email";
import Expense from "@/components/Income";
import Navbar from "@/components/Navbar";
import Lend from "@/utils/Records";

export default function Home() {
  return (
    <main className="bg-[#eff0f2] h-screen">
      <Navbar />
      <Card />
      <Expense />
      <Lend />
    </main>
  )
}
