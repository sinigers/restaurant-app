import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav id="navbar-header" class="navbar navbar-expand-lg">
      <div class="container">
        <Link
          class="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile"
          to="/"
        >
          <img src="./logo.png" alt="" />
        </Link>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav d-flex justify-content-between">
            <li class="nav-item only-desktop">
              <Link class="nav-link" id="side-nav-open" to="#">
                <span class="lnr lnr-menu"></span>
              </Link>
            </li>
            <div class="d-flex flex-lg-row flex-column">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about.html">
                  About
                </Link>
              </li>
            </div>
          </ul>

          <Link
            class="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
            to="#"
          >
            <img src="./public/img/logo.png" alt="" />
          </Link>
          <ul class="navbar-nav d-flex justify-content-between">
            <div class="d-flex flex-lg-row flex-column">
              <li class="nav-item active">
                <Link class="nav-link" to="menu.html">
                  Menu
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="team.html">
                  Team
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link class="nav-link" to="reservation.html">
                  Reservation
                </Link>
              </li>
            </div>
            <li class="nav-item">
              <Link id="side-search-open" class="nav-link" to="#">
                <span class="lnr lnr-magnifier"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
