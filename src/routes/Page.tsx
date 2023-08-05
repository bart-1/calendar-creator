import { LangPrefix, months } from "../models/dictionary";
import Sheet from "../components/Sheet";
import { useOutletContext, useParams } from "react-router-dom";

interface PageProps {
  pageID: number;
}

const Page = () => {
  const { lang } = useOutletContext<{ [key: string]: LangPrefix }>();
  const { id } = useParams();
    const page = months[lang][Number(id)]
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
