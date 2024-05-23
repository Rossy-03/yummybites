const Button = ({ children, className, type, ...props }) => {
  return (
    <button
      type={type}
      className={className}
      style={{
        padding: "1rem",
        border: "none",
        outline: "none",
        width: "auto",
        display: "flex",
        alignItems: "ceenter",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
