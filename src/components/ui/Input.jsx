const Input = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      className={className}
      style={{
        padding: "1rem",
        border: "none",
        outline: "none",
        fontSize: "1rem",
        width: "100%",
        display: "flex",
        alignItems: "ceenter",
      }}
      {...props}
    />
  );
};

export default Input;
