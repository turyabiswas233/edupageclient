import { useState } from "react";
import "./App.css";
import AdminRoot from "./components/admin/adminRoot";
import { MdClose } from "react-icons/md";
function App() {
  const [show, setshow] = useState(true);
  return (
    <div className="dark:bg-root_bluish overflow-hidden h-screen w-screen">
      <p
        className={`text-rose-500 font-bold absolute top-5 left-1/2 -translate-x-1/2 z-[100]   bg-white  p-5 text-justify ${
          !show && "hidden"
        }`}
      >
        <MdClose
          className="bg-black text-white rounded-sm text-lg z-auto cursor-pointer"
          onClick={() => setshow(false)}
        />
        <i className="underline underline-offset-4">I will add documentation</i>
        <br /> tui just{" "}
        <code className="bg-gray-400 rounded-md px-1 no-underline text-black">
          App.jsx
        </code>{" "}
        ta tor admin er dashboard er component e replace kore de. r component
        folder er moddhe jesob file and folder ase, oigula sob omnei tor
        component folder e copy kore de. tailwind e kichu code ase, oigulao aktu
        copy korte hbe, r <span className="text-orange-400">headlessUI</span> ta
        ami install disilam. So oitao lagbe. I hope error hbe na. r error hoile
        amake janais <b className="text-slate-950">ASAP</b>.
      </p>
      <AdminRoot />;
    </div>
  );
}

export default App;
