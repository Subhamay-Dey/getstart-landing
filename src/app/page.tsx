import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Herosection/>
      <Features/>
      <Footer/>
    </div>
  );
}
