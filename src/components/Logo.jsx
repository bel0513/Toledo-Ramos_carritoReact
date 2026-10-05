// Logo: sello redondo con franjas amarillo / azul / rojo y una bolsa de compras
export default function Logo({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Logo Tienda Palmira">
      <defs><clipPath id="sello"><circle cx="32" cy="32" r="30" /></clipPath></defs>
      <g clipPath="url(#sello)">
        <rect width="64" height="32" fill="#FCD116" />
        <rect y="32" width="64" height="16" fill="#0B3D91" />
        <rect y="48" width="64" height="16" fill="#D62828" />
      </g>
      <circle cx="32" cy="32" r="30" fill="none" stroke="#fff" strokeWidth="2.5" />
      <path d="M20 26h24l-2 20a3 3 0 0 1-3 2.7H25a3 3 0 0 1-3-2.7z" fill="#fff" />
      <path d="M26 26v-3a6 6 0 0 1 12 0v3" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M27 35l5 5 6-8" fill="none" stroke="#D62828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
