import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const authLinks = () => (
    <>
      {/* <Link className="nav-link" to="/profile">
        Profile
      </Link> */}
      <Link className="nav-link" to="/logout">
        Logout
      </Link>
    </>
  );
  const guestLinks = () => (
    <>
      <Link className="nav-link" to="/signup">
        Signup
      </Link>
      <Link className="nav-link" to="/login">
        Login
      </Link>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Blog Hub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {isLoggedIn ? authLinks() : guestLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
