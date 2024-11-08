import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Pricing from "@/components/Pricing";
import EarlyReviews from "@/components/EarlyReviews";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Herosection/>
      <Features/>
      <EarlyReviews/>
      <Demo/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
