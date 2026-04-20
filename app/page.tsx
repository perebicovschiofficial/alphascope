export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0b0b",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #222"
      }}>
        <div style={{fontWeight: "bold"}}>AlphaScope AI</div>
        <div>Live | Signals | News | Pricing</div>
      </header>

      <section style={{
        textAlign: "center",
        padding: "140px 20px"
      }}>
        <h1 style={{fontSize: "64px", marginBottom: "20px"}}>AlphaScope AI</h1>
        <p style={{fontSize: "22px", opacity: 0.8}}>
          Premium crypto intelligence platform
        </p>

        <button style={{
          marginTop: "30px",
          padding: "16px 34px",
          border: "none",
          borderRadius: "12px",
          background: "#32d74b",
          fontSize: "18px",
          cursor: "pointer"
        }}>
          Start Free Trial
        </button>
      </section>
    </main>
  );
}
