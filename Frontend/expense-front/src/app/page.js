import Card from "@/components/Cards";
import Expense from "@/components/Income";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#eff0f2] h-full">
      <Navbar />
      <Card />
      <Expense />
    </main>
  )
}
