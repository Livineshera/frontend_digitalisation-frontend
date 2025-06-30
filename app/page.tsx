import AgenceButtonsSection from "./home/AgenceButtonsSection";
import FaciliteSection from "./home/FaciliteSection";
import Features from "./home/Features";
import FonctionnementPlateforme from "./home/FonctionnementPlateforme";
import Footer from "./home/Footer";
import HeroSection from "./home/HeroSection";
import Navbar from "./home/Navbar";
import NewsletterSection from "./home/NewsletterSection";
import ReseauSection from "./home/ReseauSection";
import SocialSection from "./home/SocialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Navbar/>
      <HeroSection/>
      <AgenceButtonsSection/>
      <ReseauSection/>
      <FaciliteSection/>
      <SocialSection/>
      <Features/>
     <NewsletterSection/>
     <Footer/>
    </main>
  )
}