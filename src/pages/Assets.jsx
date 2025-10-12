import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Assets() {
  const [assets, setAssets] = useState([
    {
      hostname: "host-33",
      ip: "10.0.0.45",
      os: "Windows 11 Pro",
      management: "Managed",
      agent: "host-33",
      lastSeen: "2025-10-12 10:15",
      status: "Online",
      snmpStatus: null,
      software: ["Microsoft Edge", "Office 365", "Visual Studio Code"],
      hardware: ["Intel i7-10700", "16 GB RAM", "512 GB SSD"],
    },
    {
      hostname: "host-35",
      ip: "10.0.0.99",
      os: "Windows 10 Pro",
      management: "Unmanaged",
      agent: null,
      lastSeen: "2025-10-12 09:55",
      status: "Unmanaged",
      snmpStatus: null,
    },
    {
      hostname: "router-dc1",
      ip: "10.0.0.1",
      os: "Cisco IOS XE",
      management: "Unmanageable",
      agent: null,
      lastSeen: "2025-10-12 09:50",
      status: "Unmanageable",
      snmpStatus: "Failed",
    },
    {
      hostname: "switch-branch1",
      ip: "10.0.1.1",
      os: "Cisco IOS",
      management: "Unmanageable",
      agent: null,
      lastSeen: "2025-10-12 09:52",
      status: "Unmanageable",
      snmpStatus: "Success",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAssets = assets.filter((a) =>
    a.hostname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderBadgeClass = (status) => {
    switch (status) {
      case "Online":
        return "badge-online";
      case "Offline":
        return "badge-offline";
      case "Unmanaged":
        return "badge-unmanaged";
      default:
        return "badge-unmanageable";
    }
  };

  const renderSnmpBadge = (snmpStatus) => {
    if (snmpStatus === "Success") return "badge-snmp-success";
    if (snmpStatus === "Failed") return "badge-snmp-failed";
    return "";
  };

  const viewAsset = (asset) => {
    // same logic as before, you can use a modal ref or Bootstrap JS
  };

  const deleteAsset = (index) => {
    if (window.confirm("Are you sure you want to delete this asset?")) {
      const newAssets = [...assets];
      newAssets.splice(index, 1);
      setAssets(newAssets);
    }
  };

  const refreshAssets = () => {
    setAssets([...assets]); // placeholder
  };

  return (
    <>
      <Navbar title="Assets" />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Discovered Assets</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-secondary" onClick={refreshAssets}>
            <i className="bi bi-arrow-clockwise"></i> Refresh
          </button>
        </div>
      </div>

      <div className="mb-3" style={{ maxWidth: "400px" }}>
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Search assets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card-surface mb-4">
        <table className="table table-dark table-hover mb-0 align-middle">
          <thead>
            <tr>
              <th>Hostname</th>
              <th>IP Address</th>
              <th>OS / Device</th>
              <th>Management Type</th>
              <th>Agent</th>
              <th>Last Seen</th>
              <th>Status</th>
              <th>SNMP</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((a, index) => (
              <tr key={index}>
                <td>{a.hostname}</td>
                <td>{a.ip}</td>
                <td>{a.os}</td>
                <td>{a.management}</td>
                <td>{a.agent || "-"}</td>
                <td>{a.lastSeen}</td>
                <td>
                  <span className={`badge ${renderBadgeClass(a.status)}`}>{a.status}</span>
                </td>
                <td>
                  {a.snmpStatus ? (
                    <span className={`badge ${renderSnmpBadge(a.snmpStatus)}`}>{a.snmpStatus}</span>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-secondary me-1"
                    onClick={() => viewAsset(a)}
                    title="View Details"
                  >
                    <i className="bi bi-eye"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteAsset(index)}
                    title="Delete Asset"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

