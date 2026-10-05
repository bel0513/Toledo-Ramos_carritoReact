import Logo from "./Logo";

export default function Navbar({ unidades, abrir }) {
  return (
    <header className="nav">
      <div className="marca">
        <Logo />
        <div>
          <span className="m1">Tienda</span>
          <span className="m2">Palmira</span>
        </div>
      </div>
      <button className="cartbtn" onClick={abrir} aria-label={`Abrir carrito, ${unidades} unidades`}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H6" />
        </svg>
        {unidades > 0 && <span className="badge">{unidades}</span>}
      </button>
    </header>
  );
}
