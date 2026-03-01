import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Companies from "@/components/Companies";
import Testimonials from "@/components/Testimonials";
import JobListings from "@/components/JobListings";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Companies />
      <Testimonials />
      <JobListings />
      <Newsletter />
      <Footer />
    </>
  );
}
