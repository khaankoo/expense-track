import Currency from "@/components/Currency";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto w-full bg-[#eff0f2]">
      <Navbar />
      <Currency />
    </main>
  )
}
