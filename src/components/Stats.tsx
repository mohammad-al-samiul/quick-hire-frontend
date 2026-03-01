export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-1440px px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              5000+
            </div>
            <div
              className="text-gray-600"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              Jobs Available
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              1000+
            </div>
            <div
              className="text-gray-600"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              Companies
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              50K+
            </div>
            <div
              className="text-gray-600"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              Candidates
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              100+
            </div>
            <div
              className="text-gray-600"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              Partners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
