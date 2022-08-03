import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/phones">
        <button>Phones</button>
      </Link>
    </nav>
  );
}

export default Navbar;