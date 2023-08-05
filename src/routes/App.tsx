import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import useLang from "../context/LangContext";

function App() {
  const [lang, setLang] = useLang();
  return (
    <>
      <div className="w-screen h-screen p-0">
        <SideMenu lang={lang} action={(lang) => setLang(lang)} />
        <Outlet context={{ lang }} />;
      </div>
    </>
  );
}

export default App;
