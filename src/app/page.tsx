import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Herosection/>
      <Demo/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
