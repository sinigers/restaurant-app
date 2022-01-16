import { Link } from "react-router-dom";
import "./NavBarCustom.css";
const NavbarCustom = () => {
  return (
    <nav className="navbar">
      <h1>Resto</h1>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/create-product">Create</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        {/* ako e napisano taka -isprashta zaiavka kam servera
                <a href="/">Home</a>
                <a href="/create">New blog</a> */}
      </div>
    </nav>
  );
};

export default NavbarCustom;
