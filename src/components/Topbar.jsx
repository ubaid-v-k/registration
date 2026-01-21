import "../styles/topbar.css";

export default function Topbar({ onMenuClick }) {
  const userName = "A";
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <div className="topbar">
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* MOBILE MENU */}
        <button className="menu-btn" onClick={onMenuClick}>
          <i className="bi bi-list"></i>
        </button>

        <h4 className="brand">CRM</h4>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input placeholder="Search" />
        </div>

        <button className="icon-btn">
          <i className="bi bi-bell"></i>
        </button>

        <div className="profile-avatar">{firstLetter}</div>
      </div>
    </div>
  );
}
