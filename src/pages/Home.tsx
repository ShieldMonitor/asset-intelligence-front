import React from "react";
import Navbar from "../components/Navbar";
import { ShieldCheck, BarChart3, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
    title: "Automated Scans",
    description: "Detect vulnerabilities across your network with automated scans.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-cyan-400" />,
    title: "Dashboards",
    description: "Visualize risks and vulnerabilities with interactive charts.",
  },
  {
    icon: <Clock className="h-8 w-8 text-cyan-400" />,
    title: "24/7 Monitoring",
    description: "Always-on monitoring for critical assets and services.",
  },
  {
    icon: <Zap className="h-8 w-8 text-cyan-400" />,
    title: "Reporting",
    description: "Generate exportable compliance and audit reports quickly.",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-28 px-6 bg-gray-900">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-cyan-400">
          Protect Your Network
        </h1>
        <p className="text-gray-300 max-w-2xl mb-10 text-lg sm:text-xl">
          SentinelVMP helps security teams detect and remediate vulnerabilities efficiently with a modern, easy-to-use platform.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/manual-scan"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-2xl font-semibold shadow-lg transition"
          >
            Manual Scan
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 border border-cyan-400 hover:bg-cyan-700 rounded-2xl font-semibold transition"
          >
            Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col items-center text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-100">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} SentinelVMP — Modern Vulnerability Management Platform.
      </footer>
    </div>
  );
}

