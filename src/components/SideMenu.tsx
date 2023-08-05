import { useState } from "react";
import { months } from "../models/dictionary";
import { Link } from "react-router-dom";
import LangButton from "./LangButton";
import { useLanguageStore } from "../stores/LangStore";


function SideMenu() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const lang = useLanguageStore(state => state.lang)
  const setLang = useLanguageStore(state => state.setLang)

  const pages = months[lang].map((page, key) => (
    <Link to={`page/${key}`} key={page}>
      <button
        className="w-full border-2 border-white rounded-md p-1 hover:bg-white hover:text-black focus:bg-white focus:text-black"
      >
        {page}
      </button>
    </Link>
  ));

   return (
    <>
      <div
        onMouseLeave={() => setMenuOpen((prevState) => !prevState)}
        className={`mt-0 h-full w-32 ${
          menuOpen ? "-ml-0" : "-ml-32 md:-ml-0"
        } fixed z-10 bg-gray-900 left-0 top-0 text-white flex flex-col gap-2 p-2 align-top text-sm`}
      >
        <button
          onClick={() => setMenuOpen((prevState) => !prevState)}
          className="w-8 h-8 absolute -right-4 rounded-md bg-orange-600 justify-items-end text-right font-bold md:hidden"
        >
          <span className="text-2xl">{menuOpen ? "<" : ">"}</span>
        </button>
        <div className="flex gap-2">
         
          <LangButton action={(lang) => setLang(lang)} title="pl" lang={lang} />
          <LangButton action={(lang) => setLang(lang)} title="en" lang={lang} />
        </div>
        {pages}
      </div>
    </>
  );
}

export default SideMenu;
