import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import Stats from "@/components/home/Stats";
import FeaturedMusic from "@/components/home/FeaturedMusic";
import LivePerformance from "@/components/home/LivePerformance";
import GalleryPreview from "@/components/home/GalleryPreview";
import LegacyTimeline from "@/components/home/LegacyTimeline";
import Booking from "@/components/home/Booking";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />

      <main className="bg-[#080808] text-white">
        <Navbar />
        <Hero />
        <Journey />
        <Stats />
        <FeaturedMusic />
        <LivePerformance />
        <GalleryPreview />
        <LegacyTimeline />
        <Booking />
        <Footer />
      </main>
    </>
  );
}
