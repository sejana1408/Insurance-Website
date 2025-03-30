export default function Card({ children, className, title, footer }) {
  return (
    <div className={`p-6 shadow-lg rounded-lg bg-white ${className}`}>
      {title && <div className="text-xl font-bold mb-4">{title}</div>}
      {children}
      {footer && <div className="mt-4 border-t pt-2">{footer}</div>}
    </div>
  );
}