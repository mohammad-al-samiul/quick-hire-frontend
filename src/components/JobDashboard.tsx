"use client";

import { useState, useEffect } from "react";
import { apiService, Job } from "@/services/api";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function JobDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Categories and locations for filters
  const categories = [
    "All",
    "Engineering",
    "Design",
    "Marketing",
    "Sales",
    "Product",
    "HR",
    "Finance",
  ];
  const locations = [
    "All",
    "Remote",
    "New York",
    "San Francisco",
    "London",
    "Berlin",
    "Tokyo",
    "Singapore",
  ];

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, searchQuery, selectedCategory, selectedLocation]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const jobsData = await apiService.getJobs();
      setJobs(jobsData);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterJobs = () => {
    let filtered = jobs;

    if (searchQuery) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter((job) => job.category === selectedCategory);
    }

    if (selectedLocation && selectedLocation !== "All") {
      filtered = filtered.filter((job) => job.location === selectedLocation);
    }

    setFilteredJobs(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterJobs();
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedLocation("");
  };

  console.log("filterjob", filteredJobs);

  return (
    <section className="py-16 bg-gray-50 lg:px-32">
      <div className="container mx-auto max-w-1440px px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Job Dashboard
          </h2>
          <p
            className="text-gray-600"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Find your perfect job from {jobs.length}+ opportunities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "Clash Display", fontWeight: 600 }}
                />
              </div>
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ fontFamily: "Clash Display", fontWeight: 600 }}
              >
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                style={{ fontFamily: "Clash Display", fontWeight: 600 }}
              >
                Search Jobs
              </button>
            </div>
          </form>

          {/* Filters */}
          {showFilters && (
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "Clash Display", fontWeight: 600 }}
                  >
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ fontFamily: "Clash Display", fontWeight: 600 }}
                  >
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category === "All" ? "" : category}
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "Clash Display", fontWeight: 600 }}
                  >
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ fontFamily: "Clash Display", fontWeight: 600 }}
                  >
                    {locations.map((location) => (
                      <option
                        key={location}
                        value={location === "All" ? "" : location}
                      >
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-700 text-sm"
                style={{ fontFamily: "Clash Display", fontWeight: 600 }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p
            className="text-gray-600"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Showing {filteredJobs.length} of {jobs.length} jobs
          </p>
        </div>

        {/* Job Listings */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p
              className="mt-4 text-gray-600"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              Loading jobs...
            </p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p
              className="text-gray-600"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              No jobs found matching your criteria.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 hover:text-blue-700"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Job Card Component
function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
        {/* Job Info */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3
              className="text-xl font-semibold text-gray-900"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              {job.title}
            </h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              {job.type || "Full-time"}
            </span>
          </div>

          <p
            className="text-gray-600 mb-3"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            {job.company}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>{job.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary || "Competitive"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>
                {job.createdAt
                  ? new Date(job.createdAt).toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </span>
            </div>
          </div>

          <p
            className="text-gray-600 line-clamp-2 mb-4"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            {job.description}
          </p>

          {/* Requirements */}
          <div className="flex flex-wrap gap-2 mb-4">
            {job.requirements && job.requirements.length > 0 ? (
              <>
                {job.requirements.slice(0, 3).map((req, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {req}
                  </span>
                ))}
                {job.requirements.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    +{job.requirements.length - 3} more
                  </span>
                )}
              </>
            ) : (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                No specific requirements
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 lg:ml-4">
          <button
            onClick={() => (window.location.href = `/jobs/${job._id}`)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            View Details
          </button>
          <button className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span style={{ fontFamily: "Clash Display", fontWeight: 600 }}>
              Apply Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ...
