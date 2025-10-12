// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar d-flex flex-column p-3 text-light">
      <div className="brand mb-3 text-center">AssetIntel Admin</div>
      <hr className="text-secondary" />
      <nav className="nav flex-column gap-1">
        <NavLink to="/" className="nav-link">
          <i className="bi bi-speedometer2 me-2"></i>Dashboard
        </NavLink>
        <NavLink to="/scanners" className="nav-link">
          <i className="bi bi-hdd-network me-2"></i>Networking Scanners
        </NavLink>
        <NavLink to="/agents" className="nav-link">
          <i className="bi bi-cpu me-2"></i>Agents
        </NavLink>
        <NavLink to="/assets" className="nav-link">
          <i className="bi bi-laptop me-2"></i>Assets
        </NavLink>
        <NavLink to="/reports" className="nav-link">
          <i className="bi bi-graph-up me-2"></i>Reports
        </NavLink>
        <NavLink to="/settings" className="nav-link">
          <i className="bi bi-gear me-2"></i>Settings
        </NavLink>
      </nav>
    </aside>
  );
}

