import "bootstrap/dist/css/bootstrap.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger"; // string literals, can only assign with these values
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} color={color}>
      {children}
    </button>
  );
};

export default Button;
