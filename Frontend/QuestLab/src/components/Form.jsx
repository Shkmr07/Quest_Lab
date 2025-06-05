import React, { useContext } from "react";
import { ContextProvider } from "../utils/contextApi";

export default function Form({ setModal }) {
  const { inp, setInp } = useContext(ContextProvider);

  function handleChange(e) {
    setInp((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    }));
  }

  return (
    <form className="flex flex-col w-sm shadow-lg bg-gradient-to-br from-white/80 via-gray-100/80 to-gray-300/80 backdrop-blur-md rounded-xl gap-3 z-50 p-6">
      <input
        className="p-2 outline-none border border-slate-500 focus:border-blue-500 rounded   "
        type="text"
        name="firstName"
        value={inp.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        className="p-2 outline-none border border-slate-500 focus:border-blue-500 rounded  "
        type="text"
        name="lastName"
        value={inp.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        className="p-2 outline-none border border-slate-500 focus:border-blue-500 rounded  "
        type="text"
        name="role"
        value={inp.role}
        onChange={handleChange}
        placeholder="Role"
      />
      <input
        className="p-2 outline-none border border-slate-500 focus:border-blue-500 rounded  "
        type="file"
        name="profileImg"
        multiple
        onChange={handleChange}
        value={inp.profileImg}
      />
      <input
        className="p-2 outline-none border border-slate-500 focus:border-blue-500 rounded  "
        type="text"
        name="linkedin"
        placeholder="LinkedIn"
        onChange={handleChange}
        value={inp.linkedin}
      />
      <input
        className="p-2 outline-none border border-slate-500 focus:border-blue-500 rounded  "
        type="text"
        name="twitter"
        placeholder="Twitter"
        onChange={handleChange}
        value={inp.twitter}
      />
      <input
        className="p-2 text-white font-semibold bg-green-500 hover:bg-green-600 rounded hover:scale-105  "
        type="submit"
      />
    </form>
  );
}
