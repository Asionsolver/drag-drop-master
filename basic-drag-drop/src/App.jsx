import { useRef } from "react";
import BasicDragDrop from "./components/BasicDragDrop";
import Basket from "./components/Basket";

function App() {
  const basketRef = useRef(null);
  return (
    <div className="flex flex-col items-center  h-screen bg-slate-900">
      <BasicDragDrop basketRef={basketRef} />
      <Basket ref={basketRef} />
    </div>
  );
}

export default App;
