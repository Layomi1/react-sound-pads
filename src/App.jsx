import { useState } from "react";
import padsData from "../src/pads";
import Pad from "./components/Button";

function App() {
  const [pads, setPads] = useState(padsData);
  function toggle(id) {
    setPads((prev) =>
      prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item))
    );
  }
  return (
    <main className="flex h-screen justify-center items-center bg-[#1c1917]">
      <div className=" grid grid-cols-2 grid-rows-4 gap-[10px] ">
        {pads.map((pad, id) => (
          <Pad
            key={id}
            id={pad.id}
            color={pad.color}
            on={pad.on}
            toggle={toggle}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
