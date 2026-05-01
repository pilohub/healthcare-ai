import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          🚑 MedHelp
        </div>

        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/hospitals">Hospitals</a>
          <a href="/status">Emergency</a>
          <a href="/contacts">Contact</a>
        </div>

      </div>
    </nav>
  );
}