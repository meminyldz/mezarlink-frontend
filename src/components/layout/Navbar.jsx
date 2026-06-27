import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          MezarLink
        </Link>

        <div className="flex gap-4">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/login">Giriş</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;