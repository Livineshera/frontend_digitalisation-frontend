import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import ContactPage from "./ContactPage";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Navbar/>
      <ContactPage/>
      
      <Footer/>
    </main>
  )
}