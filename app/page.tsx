import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import FeaturedMusic from "@/components/home/FeaturedMusic";
import LivePerformance from "@/components/home/LivePerformance";
import GalleryPreview from "@/components/home/GalleryPreview";
import Booking from "@/components/home/Booking";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <Journey />
      <FeaturedMusic />
      <LivePerformance />
      <GalleryPreview />
      <Booking />
      <Footer />
    </main>
  );
}
