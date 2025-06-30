import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import ExpeditionRequestForm from "./ExpeditionRequestForm";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Navbar/>
      <ExpeditionRequestForm/>
     
      <Footer/>
    </main>
  )
}