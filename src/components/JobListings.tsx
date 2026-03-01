export default function JobListings() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-1440px px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Jobs
          </h2>
          <p className="text-gray-600">Find your next opportunity</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>

              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Job Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Full Time</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Part Time</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Remote</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Experience</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Entry Level</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Mid Level</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Senior Level</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Salary Range</h4>
                <select className="w-full p-2 border border-gray-200 rounded-lg text-gray-600">
                  <option>$0 - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k - $150k</option>
                  <option>$150k+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Senior Frontend Developer
                    </h3>
                    <p className="text-gray-600">Google</p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-semibold">
                      $120k - $180k
                    </div>
                    <div className="text-gray-500 text-sm">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  We are looking for an experienced frontend developer to join
                  our team...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    Posted 2 days ago
                  </span>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Product Designer
                    </h3>
                    <p className="text-gray-600">Meta</p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-semibold">
                      $100k - $150k
                    </div>
                    <div className="text-gray-500 text-sm">Remote</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our design team to create amazing user experiences for
                  billions of users...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    UI/UX
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Prototyping
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    Posted 1 week ago
                  </span>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Backend Engineer
                    </h3>
                    <p className="text-gray-600">Amazon</p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-semibold">
                      $130k - $190k
                    </div>
                    <div className="text-gray-500 text-sm">Seattle, WA</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Build scalable backend systems that power millions of
                  customers worldwide...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    AWS
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Docker
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    Posted 3 days ago
                  </span>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
