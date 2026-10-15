export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`pill-label${className ? ` ${className}` : ''}`}>
      <span className="pill-label__edge" aria-hidden="true" />
      {children}
      <span className="pill-label__edge" aria-hidden="true" />
    </p>
  );
}
