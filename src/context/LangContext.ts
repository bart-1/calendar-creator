import { useState } from "react"
import { LangPrefix } from "../models/dictionary"

const useLang = () => {
    const [lang, setLang] = useState<LangPrefix>("pl")

return {lang, setLang} as const

}
export default useLang;
