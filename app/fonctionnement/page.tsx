import Navbar from "../home/Navbar";
import HowItWorksIntro from "./HowItWorksIntro";
import StepsSection  from "./StepsSection";
import CreateRequestSection from "./CreateRequestSection";
import RequestProcessSectio from "./RequestProcessSection"
import CallToActionSection from "./CallToActionSection";
import WhyChooseSection from "./WhyChooseSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "../home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Navbar/>
      <HowItWorksIntro/>
      <StepsSection/>
      <CreateRequestSection/>
      <RequestProcessSectio/>
      <CallToActionSection/>
      <WhyChooseSection/>
      <TestimonialsSection/>
      <Footer/>
    </main>
  )
}