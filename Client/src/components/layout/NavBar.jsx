import { Link } from "react-router-dom";
import {
  FaUser,
  FaHotel,
  FaBed,
  FaCog,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg sticky-top border-bottom">
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link
            className="navbar-brand d-flex align-items-center text-decoration-none"
            to="/"
          >
            <FaHotel className="text-danger me-2 fs-4" />
            <span className="fw-bold fs-3 text-danger">CTT Hotel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center">
            {/* Center Navigation */}
            <div className="d-flex align-items-center gap-4 me-5">
              <Link
                className="nav-link text-dark text-decoration-none fw-medium position-relative hover-effect d-flex align-items-center"
                to="/rooms"
              >
                <FaBed className="me-2 text-primary" />
                Browse Rooms
              </Link>
              <Link
                className="nav-link text-dark text-decoration-none fw-medium position-relative hover-effect d-flex align-items-center"
                to="/existing-rooms"
              >
                <FaCog className="me-2 text-success" />
                Manage Rooms
              </Link>
              <Link
                className="nav-link text-dark text-decoration-none fw-medium position-relative hover-effect d-flex align-items-center"
                to="/find-booking"
              >
                <FaSearch className="me-2 text-warning" />
                Find Booking
              </Link>
            </div>

            {/* Account Section */}
            <div className="dropdown">
              <button
                className="btn btn-outline-primary d-flex align-items-center px-3 py-2 rounded-pill"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUserCircle className="me-2" />
                Account
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2"
                aria-labelledby="accountDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center py-2 px-3 hover-item"
                    to="/profile"
                  >
                    <FaUser className="me-2 text-primary" />
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center py-2 px-3 hover-item text-danger"
                    to="/logout"
                  >
                    <FaSignOutAlt className="me-2" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="btn btn-outline-secondary d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="collapse d-lg-none mt-3" id="mobileNav">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <Link
                className="d-flex align-items-center text-decoration-none p-3 border-bottom hover-bg"
                to="/rooms"
              >
                <FaBed className="me-3 text-primary" />
                <span className="fw-medium">Browse Rooms</span>
              </Link>
              <Link
                className="d-flex align-items-center text-decoration-none p-3 border-bottom hover-bg"
                to="/existing-rooms"
              >
                <FaCog className="me-3 text-success" />
                <span className="fw-medium">Manage Rooms</span>
              </Link>
              <Link
                className="d-flex align-items-center text-decoration-none p-3 border-bottom hover-bg"
                to="/find-booking"
              >
                <FaSearch className="me-3 text-warning" />
                <span className="fw-medium">Find Booking</span>
              </Link>
              <Link
                className="d-flex align-items-center text-decoration-none p-3 border-bottom hover-bg"
                to="/profile"
              >
                <FaUser className="me-3 text-primary" />
                <span className="fw-medium">Profile</span>
              </Link>
              <Link
                className="d-flex align-items-center text-decoration-none p-3 hover-bg text-danger"
                to="/logout"
              >
                <FaSignOutAlt className="me-3" />
                <span className="fw-medium">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hover-effect {
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 20px;
        }

        .hover-effect:hover {
          background-color: #f8f9fa;
          transform: translateY(-1px);
          color: #0d6efd !important;
        }

        .hover-effect::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 50%;
          background-color: #0d6efd;
          transition: all 0.3s ease;
        }

        .hover-effect:hover::after {
          width: 100%;
          left: 0;
        }

        .hover-item {
          transition: all 0.2s ease;
          border-radius: 8px;
        }

        .hover-item:hover {
          background-color: #f8f9fa;
          transform: translateX(5px);
        }

        .hover-bg {
          transition: background-color 0.2s ease;
        }

        .hover-bg:hover {
          background-color: #f8f9fa;
        }

        .dropdown-menu {
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .btn-outline-primary {
          border-width: 2px;
          transition: all 0.3s ease;
        }

        .btn-outline-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
        }

        .card {
          border-radius: 12px;
        }

        .navbar-brand:hover .text-danger {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
