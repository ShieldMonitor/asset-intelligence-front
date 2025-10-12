import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // your dark theme overrides

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import NetworkingScanners from "./pages/NetworkingScanners";
import Agents from "./pages/Agents";
import Assets from "./pages/Assets";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scanners" element={<NetworkingScanners />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/assets" element={<Assets />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

