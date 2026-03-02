"use client";

import { useState, useEffect } from "react";
import { apiService, Job } from "@/services/api";
import { MapPin, Briefcase, Clock, ExternalLink } from "lucide-react";

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Jobs
          </h2>
          <p className="text-gray-600">Find your next opportunity</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
              <p className="text-sm text-gray-500">
                (Filter UI ready – backend filter logic not connected yet)
              </p>
            </div>
          </div>

          {/* Job Cards */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Loading jobs...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No jobs found.
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => {
                  const requirements = job.requirements ?? [];
                  const displayDate = new Date(
                    job.postedAt ?? job.createdAt,
                  ).toLocaleDateString();

                  return (
                    <div
                      key={job._id}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-2">
                            {job.title}
                          </h3>
                          <p className="text-gray-600">{job.company}</p>
                        </div>

                        <div className="text-right">
                          <div className="text-blue-600 font-semibold">
                            {job.salary ?? "Negotiable"}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {job.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      {/* Requirements */}
                      {requirements.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {requirements.slice(0, 3).map((req, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                            >
                              {req}
                            </span>
                          ))}

                          {requirements.length > 3 && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              +{requirements.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.type ?? "Full Time"}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{displayDate}</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() =>
                              (window.location.href = `/jobs/${job._id}`)
                            }
                            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                          >
                            View Details
                          </button>

                          <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            <span>Apply Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Load More */}
            {!loading && jobs.length > 0 && (
              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Load More Jobs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
