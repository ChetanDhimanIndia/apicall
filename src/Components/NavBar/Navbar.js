export default function Navbbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        Reqres API
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <p className="nav-link">
                Home <span className="sr-only">(current)</span>
              </p>
            </li>
            <li className="nav-item">
              {/* <a> */}
              {/* <Router>
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                  <Routes>
                    <Route path="/users" element={<Users />} />
                  </Routes>
                </Router> */}
              {/* </a> */}
            </li>
            <li className="nav-item">
              <p className="nav-link">Add User</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
