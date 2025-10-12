import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Wifi, Play } from "lucide-react";

export default function ManualScan() {
  const [target, setTarget] = useState("");
  const [scanType, setScanType] = useState("full");
  const [isScanning, setIsScanning] = useState(false);
  const [output, setOutput] = useState("");

  const handleScan = () => {
    if (!target) return;
    setIsScanning(true);
    setOutput("");

    // Simulate a network scan (replace with real API call later)
    setTimeout(() => {
      setIsScanning(false);
      setOutput(`Scan completed for ${target} (${scanType} scan).
- Open ports: 22, 80, 443
- Vulnerabilities found: 2 critical, 5 medium
- Recommendations: Patch outdated services, enable firewall.`);
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <div className="text-2xl font-bold text-cyan-400">SentinelVMP</div>
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li className="hover:text-cyan-400 transition cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 transition cursor-pointer">Scan</li>
          <li className="hover:text-cyan-400 transition cursor-pointer">Reports</li>
          <li className="hover:text-cyan-400 transition cursor-pointer">Settings</li>
        </ul>
      </nav>

      {/* Scan Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl p-10 w-full max-w-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Cpu className="w-8 h-8" /> Manual Network Scan
          </h2>

          {/* Target Input */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Target IP / Hostname</label>
            <input
              type="text"
              placeholder="e.g., 192.168.1.10"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Scan Type */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Scan Type</label>
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="full">Full Network Scan</option>
              <option value="quick">Quick Scan</option>
              <option value="ports">Ports Only</option>
            </select>
          </div>

          {/* Scan Button */}
          <button
            onClick={handleScan}
            disabled={isScanning}
            className={`w-full flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Play className="w-5 h-5" />
            {isScanning ? "Scanning..." : "Start Scan"}
          </button>

          {/* Output */}
          {output && (
            <div className="mt-6 bg-gray-700 p-4 rounded-lg whitespace-pre-line text-gray-300 font-mono">
              {output}
            </div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800 mt-auto">
        © {new Date().getFullYear()} SentinelVMP — Network security simplified.
      </footer>
    </div>
  );
}
