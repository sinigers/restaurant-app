import { Link } from "react-router-dom";
import "./NavBarCustom.css";
const NavbarCustom = () => {
  return (
    <nav className="navbar">
      <h1>Resto</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/dragable">About</Link>
        <Link to="/create">Menu</Link>
        <Link to="/login">Team</Link>

        {/* ako e napisano taka -isprashta zaiavka kam servera
                <a href="/">Home</a>
                <a href="/create">New blog</a> */}
      </div>
    </nav>
  );
};

export default NavbarCustom;
