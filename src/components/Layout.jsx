import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />

      <main className="content text-light">
        {children}

        <footer className="mt-4 text-secondary small text-center">
          © 2025 Asset Intelligence Platform — Secure, Smart, Scalable
        </footer>
      </main>
    </>
  );
}
