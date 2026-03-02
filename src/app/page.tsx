import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";
import Testimonials from "@/components/Testimonials";
import JobDashboard from "@/components/JobDashboard";
import JobListings from "@/components/JobListings";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Testimonials />
      <JobDashboard />
      <JobListings />

      <Footer />
    </div>
  );
}
