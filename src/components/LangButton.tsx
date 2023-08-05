import React from "react";
import { LangPrefix } from "../models/dictionary";

interface LangButtonProps {
  action: (title: LangPrefix) => void;
  lang: LangPrefix;
  title: LangPrefix;
}

const LangButton = ({ action, lang, title }: LangButtonProps) => {
  return (
    <>
      <button
        onClick={() => action(title)}
        className={`${
          lang === title
            ? "bg-gray-200 text-black"
            : "text-white hover:bg-gray-200 hover:text-black"
        } border-2 border-white rounded-md p-1`}
      >
        {title.toUpperCase()}
      </button>
    </>
  );
};
export default LangButton;
