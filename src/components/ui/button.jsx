export function Button({ children, onClick, variant = "default", className = "", ...props }) {
  const styles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700",
    ghost: "text-gray-500 hover:bg-gray-100",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400"
  };
  return (
    <button onClick={onClick} className={\`px-3 py-1 rounded \${styles[variant] || ""} \${className}\`} {...props}>
      {children}
    </button>
  );
}