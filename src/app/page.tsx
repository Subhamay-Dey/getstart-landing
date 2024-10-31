import { AnimatedBeamDemo } from "@/components/AnimatedBeamDemo";
import Herosection from "@/components/Herosection";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack";
import TimeSaver from "@/components/TimeSaver";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <TimeSaver/>
      <TechStack/>
      <Pricing/>
    </div>
  );
}
