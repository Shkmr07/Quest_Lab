import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Card({
  image,
  firstName,
  lastName,
  role,
  linkedin,
  twitter,
}) {
  return (
    <div className="flex flex-col w-[250px] shadow-lg px-2 py-3 hover:scale-105 rounded-xl gap-2 hover:transition-all">
      <div className="w-full h-36">
        <img className="w-full h-full rounded object-cover" src={image} alt={firstName} />
      </div>
      <p className="text-sm text-slate-600 "><strong className="text-gray-700">Author :</strong> {`${firstName} ${lastName}`}</p>
      <p className="text-sm text-slate-600"><strong className="text-gray-700">Role: </strong>{role}</p>
      <div className="flex items-center justify-between mt-2 ">
        <a href={twitter} target="_blank">
          <FaSquareXTwitter className="text-xl hover:scale-105" />
        </a>
        <a href={linkedin} target="_blank">
          <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800 hover:scale-105" />
        </a>
      </div>
    </div>
  );
}
