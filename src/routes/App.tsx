import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import { useLanguageStore } from "../stores/LangStore";

function App() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <div className="w-screen h-screen p-0">
        <SideMenu />
        <Outlet context={{ lang }} />;
      </div>
    </>
  );
}

export default App;
