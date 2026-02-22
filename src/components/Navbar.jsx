import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-6 bg-primary sticky top-0 z-50">
      <h1 className="text-xl font-semibold text-accent">Sam</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-accent transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-accent transition">
          About
        </Link>
        <Link to="/projects" className="hover:text-accent transition">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-accent transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;