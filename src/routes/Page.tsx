import { months } from "../models/dictionary";
import Sheet from "../components/Sheet";
import { useParams } from "react-router-dom";
import { useLanguageStore } from "../stores/LangStore";

interface PageProps {
  pageID: number;
}

const Page = () => {
  const lang = useLanguageStore((state) => state.lang);
  const { id } = useParams();
  const page = months[lang][Number(id)];
  return (
    <>
      <div className="text-center text-black" id="page">
        {" "}
        strona: {page} - {lang}
      </div>
      <Sheet />
    </>
  );
};
export default Page;
