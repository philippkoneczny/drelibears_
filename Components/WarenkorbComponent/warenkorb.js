import "./warenkorb.css"
import useStore from "../ZustandManager/zustand.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import detectBrowserLanguage from "detect-browser-language"
function Warenkorb() {
     let [test, setTest] = useState({})
     let warenkorb = useStore((state) => state.warenkorb)
     function check(value) {
          if (value === "none") {
               return
          } else {
               return value
          }
     }
     const setLanguage = useStore((state) => state.setLanguage)
     let lang = detectBrowserLanguage()

     if (lang === "de-AT") {
          setLanguage("de")
     } else if (lang === "en-US") {
          setLanguage("en")
     } else if (lang === "de") {
          setLanguage("de")
     } else if (lang === "it-IT") {
          setLanguage("it")
     } else if (lang === "it") {
          setLanguage("it")
     } else {
          setLanguage("en")
     }
     return (
          <div className="wrapperw">
               <div className="contentw">
                    <div className="description descriptgrid">
                         <div className="detailgrid secondcola">
                              <div className="beautifulwarenkorb firstcola">Artikelbezeichnung</div>
                              <div className="beautifulwarenkorb secondcola">Größe</div>
                              <div className="beautifulwarenkorb thirdcola">Farbe</div>
                         </div>
                         <div className="beautifulwarenkorb thirdcola">Preis</div>
                    </div>
                    {warenkorb &&
                         warenkorb.map((item) => {
                              return (
                                   <article className="article-warenkorb">
                                        <img className="card-image firstcola" src={item[2][0]} alt="notfound" />
                                        <div className="detailgrid secondcola margin">
                                             <div className="beautifulwarenkorb firstcola">{item[0]}</div>
                                             <div className="beautifulwarenkorb secondcola">{check(item[5])}</div>
                                             <div className="beautifulwarenkorb thirdcola">{check(item[6])}</div>
                                        </div>
                                        <div className="beautifulwarenkorb thirdcola margin">{item[3]} €</div>
                                   </article>
                              )
                         })}
               </div>
          </div>
     )
}
export default Warenkorb
