import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>

      <Navbar title="Dashboard" />

      {/* ======= Top Statistic Cards ======= */}
      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <div className="card-surface">
            <div className="text-secondary small">Total Assets</div>
            <h4 className="fw-bold">1,532</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-surface">
            <div className="text-secondary small">Active Agents</div>
            <h4 className="fw-bold text-success">924</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-surface">
            <div className="text-secondary small">Networking Scanners</div>
            <h4 className="fw-bold text-info">18</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-surface">
            <div className="text-secondary small">Pending Alerts</div>
            <h4 className="fw-bold text-warning">7</h4>
          </div>
        </div>
      </div>

      {/* ======= Recent Activity & Connections ======= */}
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card-surface">
            <h5>Recent Activity</h5>
            <ul className="list-unstyled small mt-3">
              <li className="py-2 border-bottom border-secondary">
                [Agent] Collected OS info from <strong>host-33</strong>
              </li>
              <li className="py-2 border-bottom border-secondary">
                [Scanner] Completed subnet scan <strong>172.16.1.0/24</strong>
              </li>
              <li className="py-2 border-bottom border-secondary">
                [Agent] Updated software inventory on{" "}
                <strong>workstation-12</strong>
              </li>
              <li className="py-2">
                [Agent] Status change detected for <strong>db-node-04</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-surface">
            <h5>System Connections</h5>
            <div className="mt-3">
              <div className="fw-semibold mb-2">
                Networking Scanning Servers
              </div>
              <ul className="list-unstyled small">
                <li>
                  <i className="bi bi-hdd-network text-success me-1"></i>
                  scanner-east — online
                </li>
                <li>
                  <i className="bi bi-hdd-network text-success me-1"></i>
                  scanner-west — online
                </li>
                <li>
                  <i className="bi bi-hdd-network text-danger me-1"></i>
                  scanner-lab — offline
                </li>
              </ul>

              <div className="fw-semibold mt-3 mb-2">Agents</div>
              <ul className="list-unstyled small">
                <li>
                  <i className="bi bi-cpu text-success me-1"></i>host-33 — online
                </li>
                <li>
                  <i className="bi bi-cpu text-secondary me-1"></i>
                  db-node-04 — offline
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

