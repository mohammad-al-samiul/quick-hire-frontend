import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container mx-auto max-w-1440px px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <span
            className="text-xl font-bold text-gray-900"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            QuickHire
          </span>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex gap-8 text-gray-600">
          <Link
            href="#"
            className="hover:text-gray-900 transition-colors"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Find Jobs
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 transition-colors"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Browse Companies
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4 items-center">
          <Link
            href="#"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Login
          </Link>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
