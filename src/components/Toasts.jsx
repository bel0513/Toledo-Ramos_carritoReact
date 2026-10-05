export default function Toasts({ toasts, cerrar }) {
  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <span>{t.texto}</span>
          {t.accion && (
            <button
              className="ok"
              onClick={() => {
                t.accion.fn();
                cerrar(t.id);
              }}
            >
              {t.accion.label}
            </button>
          )}
          <button className="x" aria-label="Cerrar aviso" onClick={() => cerrar(t.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
