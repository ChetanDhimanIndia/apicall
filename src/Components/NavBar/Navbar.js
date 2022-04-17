import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "../Users/Users";
import Login from "../Login/Login";
import CreateUser from "../Users/CreateUser/CreateUser";
export default function Navbar() {
  return (
    <Router>
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
              <a>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <Link className="nav-link" to="/addUser">
                  Add user
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addUser" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}
