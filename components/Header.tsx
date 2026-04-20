xport default function Header() {
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
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(5,7,11,0.88)",
        backdropFilter: "blur(10px)",
        color: "white",
      }}
    >
      <a
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: 28,
          letterSpacing: "-1px",
        }}
      >
        AlphaScope AI
      </a>

      <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <a href="#live" style={linkStyle}>Live</a>
        <a href="#signals" style={linkStyle}>Signals</a>
        <a href="#news" style={linkStyle}>News</a>
        <a href="#pricing" style={linkStyle}>Pricing</a>
        <a
          href="#pricing"
          style={{
            textDecoration: "none",
            color: "#071019",
            background: "#67ff9a",
            padding: "10px 16px",
            borderRadius: 12,
            fontWeight: 800,
          }}
        >
          Join
        </a>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.82)",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
};
