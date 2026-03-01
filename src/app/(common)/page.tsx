import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";
import Testimonials from "@/components/Testimonials";
import JobListings from "@/components/JobListings";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import JobDashboard from "@/components/JobDashboard";
import FeaturedJobs from "@/components/FeatureJobs";
import LatestJobsSection from "@/components/LatestJob";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Testimonials />
      <JobDashboard />
      <FeaturedJobs />
      <LatestJobsSection />
      <Footer />
    </div>
  );
}
