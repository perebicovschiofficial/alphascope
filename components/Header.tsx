export default function Hero() {
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
        background: "#0b0b0b",
        color: "white"
      }}
    >
      <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
        AlphaScope AI
      </h1>

      <p style={{ fontSize: "22px", opacity: 0.8, marginBottom: "30px" }}>
        Premium crypto intelligence platform
      </p>

      <button
        style={{
          padding: "16px 34px",
          fontSize: "18px",
          borderRadius: "12px",
          border: "none",
          background: "#32d74b",
          cursor: "pointer"
        }}
      >
        Start Free Trial
      </button>
    </section>
  );
}
