export default function Button({ type, className, children, disabled }) {
  return (
    <button
      type={type}
      className={`p-4 text-white font-bold rounded-lg transition ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
