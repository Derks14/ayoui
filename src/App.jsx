import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <section className="bg-[#F4F4EF] font-ascircular">
      <Outlet />
    </section>
  );
}

export default App;
