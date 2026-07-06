import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import FeaturedMusic from "@/components/home/FeaturedMusic";
import Booking from "@/components/home/Booking";

export default function Home() {
  return (
    <main className="bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <Journey />
      <FeaturedMusic />
      <Booking />
    </main>
  );
}
