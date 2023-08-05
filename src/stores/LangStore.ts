import { create } from "zustand";
import { LangPrefix } from "../models/dictionary";

interface LangStore {
  lang: LangPrefix;
  setLang: (lang: LangPrefix) => void;
}

export const useLanguageStore = create<LangStore>((set, get) => ({
  lang: "pl",
  setLang: (lang) => set({ lang: lang }),
}));
