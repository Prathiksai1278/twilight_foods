import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuShowcase from "@/components/MenuShowcase";
import Spotlight from "@/components/Spotlight";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Spotlight />
      <MenuShowcase />
      <Gallery />
      <ContactSection />
      <Footer/>
    </>
  );
}