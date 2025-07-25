import { ApiContext } from "../utils/contextApi.jsx";
import { useContext } from "react";

export default function Navbar() {
  const { setModal } = useContext(ApiContext);

  return (
    <nav className="sticky z-10 top-0  w-full">
      <div className="flex justify-between items-center text-gray-500 shadow-lg rounded-lg bg-slate-100 p-4">
        <h1 className="text-xl font-semibold ">The Resident Book</h1>
        <button
          onClick={() => setModal(true)}
          className="text-sm p-2 hover:bg-green-600 hover:scale-105 bg-green-500 text-white font-semibold rounded"
        >
          Add Resident
        </button>
      </div>
    </nav>
  );
}
