import { AnimatedBeamDemo } from "@/components/AnimatedBeamDemo";
import Features from "@/components/Features";
import Herosection from "@/components/Herosection";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack";
import TimeSaver from "@/components/TimeSaver";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Herosection/>
      <Features/>
      <Pricing/>
    </div>
  );
}
