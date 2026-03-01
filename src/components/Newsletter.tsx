export default function Newsletter() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto max-w-1440px px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Latest Jobs
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and never miss a job opportunity that
          matches your skills and preferences.
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            Join 50,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
