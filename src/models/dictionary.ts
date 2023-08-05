export type LangPrefix = "pl" | "en";
export type LangDictionary = { [key in LangPrefix]: string[] };

export interface LangContextProps {
  lang: LangPrefix;
  setLang: (lang:LangPrefix) => void;
}

export const months: LangDictionary = {
  pl: [
    "Okładka",
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ],
  en: [
    "Cover",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};
