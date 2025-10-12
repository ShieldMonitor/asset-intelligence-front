import { useState } from "react";
import Navbar from "../components/Navbar";

export default function NetworkingScanners() {
  const [scanners, setScanners] = useState([
    {
      name: "scanner-dc1",
      status: "Online",
      lastSeen: "2025-10-12 09:45",
      networks: ["10.0.0.0/24", "10.0.1.0/24"],
      token: "d81b6f2a-019e-445e-bbe7-97ac5a0d91aa",
    },
    {
      name: "scanner-aws",
      status: "Offline",
      lastSeen: "2025-10-11 22:15",
      networks: ["172.31.0.0/16"],
      token: "c02a1f17-6df2-47a3-88fd-fbde18ea2a5b",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredScanners = scanners.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar title="Networking Scanners" />
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Registered Scanning Servers</h4>
        <button className="btn btn-primary">
          <i className="bi bi-plus-lg"></i> Add Scanner
        </button>
      </div>

      <div className="card-surface mb-4">
        <table className="table table-dark table-hover mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Last Seen</th>
              <th>Assigned Networks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredScanners.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>
                  <span
                    className={`badge ${
                      s.status === "Online" ? "bg-success" : "bg-secondary"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td>{s.lastSeen}</td>
                <td>{s.networks.join(", ")}</td>
                <td>
                  <button className="btn btn-sm btn-secondary me-1">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-sm btn-info me-1">
                    <i className="bi bi-key-fill"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      setScanners(scanners.filter((_, idx) => idx !== i))
                    }
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
