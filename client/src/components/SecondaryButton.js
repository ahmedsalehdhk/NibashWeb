import React from "react";

export default function SecondaryButton(props) {
  return <div className="px-8 py-4 rounded-full flex items-center justify-center border-2 border-[#262523] capitalize hover:cursor-pointer w-fit">{props.text}</div>;
}
