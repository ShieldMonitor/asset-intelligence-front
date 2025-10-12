export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-dark mb-4 rounded px-3">
      <div className="container-fluid px-0">
        <span className="navbar-brand">{title}</span>

        <form className="d-flex" role="search" style={{ maxWidth: "400px" }}>
          <input className="form-control form-control-dark" type="search" placeholder="Search assets, agents..." />
        </form>

        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
            <img
              src="https://ui-avatars.com/api/?name=JD&background=0d6efd&color=fff&rounded=true&size=32"
              alt="User"
              className="rounded-circle me-2"
            />
            <strong>John Doe</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">API Tokens</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
