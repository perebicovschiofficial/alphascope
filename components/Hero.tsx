export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 40px",
        textAlign: "center",
        background:
          "linear-gradient(135deg,#0f0f0f,#151515,#1e1e1e)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
        AlphaScope AI
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#aaa",
          maxWidth: "800px",
          margin: "0 auto 40px",
        }}
      >
        Premium crypto intelligence platform with live signals,
        whale tracking, smart entries and AI confidence scoring.
      </p>

      <button
        style={{
          padding: "18px 40px",
          fontSize: "18px",
          borderRadius: "14px",
          background: "#00ff99",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Start Free Trial
      </button>
    </section>
  );
}
