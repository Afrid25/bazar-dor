const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "rounded-md px-5 py-2.5 text-sm font-bold transition";
  const variants = {
    primary: "bg-[#009447] text-white hover:bg-[#007d3b]",
    secondary: "border border-[#dce4de] bg-white text-[#5d6a62] hover:bg-[#f7faf7]",
    danger: "border border-[#f1b8b8] bg-white text-[#c43d43] hover:bg-[#fff5f5]",
  };

  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
