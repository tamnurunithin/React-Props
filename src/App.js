import "./styles.css";
import React from "react";
import add from "./add";

function App() {
  const result = add(3, 4);
  return (
    <div>
      <h3>The Result is : {result}</h3>
    </div>
  );
}
export default App;
