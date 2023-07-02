import { useState } from 'react';
import { months } from './dictionary';




function App() {
  const [lang, setLang] = useState<keyof typeof months>("en");



  const pages = months[lang].map(pages => (<div>{pages}</div>))

  const handleLangSwitch = () => {
    lang === "en" && setLang("pl")
    lang === "pl" && setLang("en")
  }


  return ( 
      <>
      <div className='w-full fixed h-10 bg-black top-0 text-white flex gap-2 '>
       <button onClick={handleLangSwitch}>PL/EN</button> {pages}
          </div>
       
            <div className="container h-screen m-auto bg-mygray-lighter p-20">
        <div className="w-[800px] h-[1220px] bg-white m-auto">
          
        </div>
            </div>
      </>
  )
}

export default App
