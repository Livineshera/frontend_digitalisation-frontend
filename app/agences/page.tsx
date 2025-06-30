import Navbar from "../home/Navbar";

import Footer from "../home/Footer";
import AgenciesIntro from "./AgenciesIntro";
import AgenciesGrid from "./AgenciesGrid";
import AgencyFAQSection from "./AgencyFAQSection";
import BecomePartnerSection from "./BecomePartnerSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Navbar/>
      <AgenciesIntro/>
      <AgenciesGrid/>
      <AgencyFAQSection/>
      <BecomePartnerSection/>
      <Footer/>
    </main>
  )
}