import Features from "@/components/Features";
import Herosection from "@/components/Herosection";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Herosection/>
      <Features/>
      <Pricing/>
    </div>
  );
}
