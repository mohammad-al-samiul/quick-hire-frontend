export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-1440px px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-gray-600">Real stories from real candidates</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-semibold">JD</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-gray-600 text-sm">Software Engineer</div>
              </div>
            </div>
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              &quot;QuickHire helped me find my dream job in just 2 weeks. The
              platform is amazing and the companies are top-notch!&quot;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-600 font-semibold">SM</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Miller</div>
                <div className="text-gray-600 text-sm">UI Designer</div>
              </div>
            </div>
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              &quot;The best job search platform I&apos;ve ever used. Found
              amazing opportunities and got hired at a great startup!&quot;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">MJ</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mike Johnson</div>
                <div className="text-gray-600 text-sm">Product Manager</div>
              </div>
            </div>
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              &quot;QuickHire made my job search so much easier. Great interface
              and excellent job recommendations!&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
