const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

type Props = {
  onClickButton: () => void;
  action: "add" | "subtract";
};

const Button = ({ onClickButton, action }: Props) => {
  const text = action === "add" ? "+" : "-";
  return (
    <button
      className={cn(
        action === "add"
          ? "bg-blue-700 hover:bg-blue-800"
          : "bg-rose-700 hover:bg-rose-800",
        "px-6 py-1 rounded"
      )}
      onClick={onClickButton}
    >
      <span className="text-base font-medium text-white">{text}</span>
    </button>
  );
};

export default Button;
