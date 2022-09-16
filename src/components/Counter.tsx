import { useState } from "react";
import Button from "./Button";

export default function Counter({ count }: { count: number }) {
  const [counter, setCounter] = useState<number>(count);

  const handleAdd = () => setCounter((n) => n + 1);
  const handleSubtract = () => setCounter((n) => n - 1);

  return (
    <>
      <Button onClickButton={handleAdd} action="add" />
      <span className="mx-4">{counter}</span>
      <Button onClickButton={handleSubtract} action="subtract" />
    </>
  );
}
