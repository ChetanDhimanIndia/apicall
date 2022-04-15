export default function Navbbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Reqres API
        </a>
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                {/* <Router>
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                  <Routes>
                    <Route path="/users" element={<Users />} />
                  </Routes>
                </Router> */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add User
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
