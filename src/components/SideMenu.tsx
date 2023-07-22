import { useContext, useState } from "react";
import { months } from "../models/dictionary";
import useLang from "../context/LangContext";

function SideMenu() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);


  const pages = months[lang].map((page) => (
    <button
      className="border-2 border-white rounded-md p-1 hover:bg-white hover:text-black focus:bg-white focus:text-black"
      key={page}
    >
      {page}
    </button>
  ));

  const handleLangSwitch = () => {
    lang === "en" && setLang("pl");
    lang === "pl" && setLang("en");
  };

  return (
    <>
        <div
          onMouseLeave={() => setMenuOpen((prevState) => !prevState)}
          className={`mt-0 h-full w-32 ${
            menuOpen ? "-ml-0" : "-ml-32 md:-ml-0"
          } fixed z-10 bg-black left-0 top-0 text-white flex flex-col gap-2 p-2 align-top text-sm`}
        >
          <button
            onClick={() => setMenuOpen((prevState) => !prevState)}
            className="w-8 h-8 absolute -right-4 rounded-md bg-orange-600 justify-items-end text-right font-bold md:hidden"
          >
            <span className="text-2xl">{menuOpen ? "<" : ">"}</span>
          </button>
          <div className="flex">
            <button
              onClick={handleLangSwitch}
              className="border-2 border-white rounded-md p-1 hover:bg-white hover:text-black mb-6"
            >
              PL/EN
            </button>
          </div>
          {pages}
        </div>

    </>
  );
}

export default SideMenu;
