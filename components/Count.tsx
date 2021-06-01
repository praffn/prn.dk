import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);

  return <button onClick={increment}>Clicked {count} times</button>;
}

export default Count;
