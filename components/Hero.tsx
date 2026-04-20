export default function Hero() {
  return (
    <section
      style={{
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        background:
          "radial-gradient(circle at top, rgba(0,255,153,0.10), transparent 20%), linear-gradient(180deg, #05070b 0%, #0b1020 55%, #05070b 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 980, width: "100%" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            color: "#8bffbf",
            fontSize: 13,
            letterSpacing: 0.5,
            marginBottom: 22,
          }}
        >
          LIVE SIGNALS • MARKET MOOD • AI CONFIDENCE
        </div>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: 1,
            margin: "0 0 22px",
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          AlphaScope AI
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 820,
            margin: "0 auto 38px",
          }}
        >
          Premium crypto intelligence platform with live signals, whale tracking,
          market sentiment, confidence scoring, bonus offers and fast global updates.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 50,
          }}
        >
          <a
            href="#pricing"
            style={{
              padding: "16px 28px",
              borderRadius: 14,
              background: "#67ff9a",
              color: "#071019",
              textDecoration: "none",
              fontWeight: 800,
              boxShadow: "0 12px 30px rgba(103,255,154,0.25)",
            }}
          >
            Start Free Trial
          </a>

          <a
            href="#live"
            style={{
              padding: "16px 28px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.05)",
              color: "white",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)",
              fontWeight: 700,
            }}
          >
            View Live Data
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 18,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {[
            ["92%", "Signal Confidence"],
            ["24/7", "Market Monitoring"],
            ["4", "Languages Ready"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                padding: "24px 18px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  marginBottom: 8,
                }}
              >
                {value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
