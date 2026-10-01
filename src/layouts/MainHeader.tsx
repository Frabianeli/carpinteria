import { Navbar } from "../home/Navbar"
import banner1 from '../assets/banner/Carpinteria-banner-1.png'
import { Hero } from "../home/Hero"


export const MainHeader = () => {
  return (
    <div id="inicio" className="relative min-h-screen overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0">
        <img src={banner1}  alt="Taller de carpinteria"
         className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1d15]/80 via-transparent to-[#0f1d15]/40" />
      </div>
      <Navbar />
      <Hero />
    </div>
  )
}
