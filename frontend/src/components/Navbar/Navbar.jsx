import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar({ page, setPage }) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => setPage("home")}>
        <span className="brand-icon">⬡</span>
        <span className="brand-name">NexAuth</span>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {!user ? (
          <>
            <button
              className={`nav-btn ghost ${page === "login" ? "active" : ""}`}
              onClick={() => { setPage("login"); setMenuOpen(false); }}
            >
              Log In
            </button>
            <button
              className={`nav-btn solid ${page === "signup" ? "active" : ""}`}
              onClick={() => { setPage("signup"); setMenuOpen(false); }}
            >
              Sign Up
            </button>
          </>
        ) : (
          <div className="nav-user">
            <div className="nav-avatar" onClick={() => setPage("dashboard")}>
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="nav-username" onClick={() => setPage("dashboard")}>
              {user.name?.split(" ")[0]}
            </span>
            <button className="nav-btn ghost" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
