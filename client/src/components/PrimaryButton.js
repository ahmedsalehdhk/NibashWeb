import React from "react";

export default function PrimaryButton(props) {
  return <div className="px-8 py-4 rounded-full flex items-center justify-center bg-[#262523] capitalize text-white hover:cursor-pointer w-fit">{props.text}</div>;
}
