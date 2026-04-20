export default function Header() {
  return (
    <header style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"20px 40px",
      borderBottom:"1px solid #222",
      background:"#0b0b0b",
      color:"white"
    }}>
      <h2>AlphaScope AI</h2>

      <nav style={{display:"flex",gap:"20px"}}>
        <span>Live</span>
        <span>Signals</span>
        <span>News</span>
        <span>Pricing</span>
      </nav>
    </header>
  )
}
