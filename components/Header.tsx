export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 28px",
        background: "#05070b",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        color: "white"
      }}
    >
      <a
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: 28
        }}
      >
        AlphaScope AI
      </a>

      <nav style={{ display: "flex", gap: "18px", alignItems: "center" }}>
        <a href="#live" style={{ color: "white", textDecoration: "none" }}>
          Live
        </a>
        <a href="#signals" style={{ color: "white", textDecoration: "none" }}>
          Signals
        </a>
        <a href="#news" style={{ color: "white", textDecoration: "none" }}>
          News
        </a>
        <a href="#pricing" style={{ color: "white", textDecoration: "none" }}>
          Pricing
        </a>
      </nav>
    </header>
  );
}
