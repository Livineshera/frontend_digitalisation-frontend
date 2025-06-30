import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import CompareHero from "./CompareHero";
import CompareFilterForm from "./CompareFilterForm";
import CompareResults from "./CompareResults";
import CompareCTA from "./CompareCTA";
import WhyCompareSection from "./WhyCompareSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Navbar/>
      <CompareHero/>
      <CompareFilterForm/>
      <CompareResults/>
      <WhyCompareSection/>
      <CompareCTA/>
      
      
      <Footer/>
    </main>
  )
}