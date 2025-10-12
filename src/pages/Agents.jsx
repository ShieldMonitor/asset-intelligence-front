import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Agents() {
  const [agents, setAgents] = useState([
    { name: "host-33", status: "Online", lastSeen: "2025-10-12 10:00", scanner: "scanner-dc1" },
    { name: "db-node-04", status: "Offline", lastSeen: "2025-10-12 09:50", scanner: "scanner-dc1" },
    { name: "workstation-12", status: "Online", lastSeen: "2025-10-12 09:45", scanner: "scanner-aws" }
  ]);

  const [filter, setFilter] = useState("");
  const [viewAgentIndex, setViewAgentIndex] = useState(null);

  const filteredAgents = agents.filter(a => a.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteAgent = (index) => {
    if (confirm("Are you sure you want to delete this agent?")) {
      const newAgents = [...agents];
      newAgents.splice(index, 1);
      setAgents(newAgents);
    }
  };

  const viewAgent = (index) => {
    setViewAgentIndex(index);
    const modalEl = document.getElementById("viewAgentModal");
    new window.bootstrap.Modal(modalEl).show();
  };

  const addAgent = (e) => {
    e.preventDefault();
    const name = e.target.agentName.value.trim();
    const scanner = e.target.assignedScanner.value.trim();
    if (!name || !scanner) return;

    const token = crypto.randomUUID();
    document.getElementById("agentTokenCommand").textContent = `agent-register --name ${name} --token ${token} --scanner ${scanner} --api https://api.assetintel.com`;
    document.getElementById("registrationInfo").style.display = "block";

    const now = new Date().toISOString().slice(0,16).replace("T"," ");
    setAgents(prev => [...prev, { name, status: "Online", lastSeen: now, scanner }]);
    e.target.reset();
  };

  return (
    <>
      <Navbar title="Agents" />

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Registered Agents</h4>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addAgentModal">
          <i className="bi bi-plus-lg"></i> Add Agent
        </button>
      </div>

      {/* Agents Table */}
      <div className="card-surface mb-4">
        <table className="table table-dark table-hover mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Last Seen</th>
              <th>Assigned Scanner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgents.map((agent, index) => (
              <tr key={index}>
                <td>{agent.name}</td>
                <td>
                  <span className={`badge ${agent.status === "Online" ? "badge-online" : "badge-offline"}`}>
                    {agent.status}
                  </span>
                </td>
                <td>{agent.lastSeen}</td>
                <td>{agent.scanner}</td>
                <td>
                  <button className="btn btn-sm btn-secondary me-1" onClick={() => viewAgent(index)} title="View Details">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteAgent(index)} title="Delete Agent">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Agent Modal */}
      <div className="modal fade" id="addAgentModal" tabIndex="-1" aria-labelledby="addAgentModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content card-surface">
            <div className="modal-header">
              <h5 className="modal-title" id="addAgentModalLabel">Add Agent</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="addAgentForm" onSubmit={addAgent}>
                <div className="mb-3">
                  <label htmlFor="agentName" className="form-label">Agent Name</label>
                  <input type="text" className="form-control" id="agentName" placeholder="e.g. host-01" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="assignedScanner" className="form-label">Assigned Scanner</label>
                  <input type="text" className="form-control" id="assignedScanner" placeholder="e.g. scanner-dc1" required />
                </div>
                <div id="registrationInfo" style={{ display: "none" }}>
                  <h6>Registration Command</h6>
                  <div className="code-block mt-2" id="agentTokenCommand"></div>
                  <p className="mt-2">Run this command on the target asset to register the agent.</p>
                </div>
                <button type="submit" className="btn btn-primary w-100">Generate Registration Command</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* View Agent Modal */}
      <div className="modal fade" id="viewAgentModal" tabIndex="-1" aria-labelledby="viewAgentModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content card-surface">
            <div className="modal-header">
              <h5 className="modal-title" id="viewAgentModalLabel">Agent Details</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {viewAgentIndex !== null && (
                <>
                  <p><strong>Name:</strong> {agents[viewAgentIndex].name}</p>
                  <p><strong>Status:</strong> {agents[viewAgentIndex].status}</p>
                  <p><strong>Last Seen:</strong> {agents[viewAgentIndex].lastSeen}</p>
                  <p><strong>Assigned Scanner:</strong> {agents[viewAgentIndex].scanner}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-dark"
          placeholder="Search agents..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </>
  );
}
