import "./farben.css"

import { Link } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
function Farben(props) {
     const setfarbe = useStore((state) => state.setFarbe)
     let language = useStore((state) => state.language)
     let farbe = useStore((state) => state.farbe)

     function status(value) {
          if (value > 0) {
               return "black"
          } else {
               return "invisible"
          }
     }
     function farbwahl() {
          if (language !== "none") {
               if (language === "de") {
                    return "Deine gewählte Farbe ist"
               } else if (language === "en") {
                    return "your chosen color is"
               } else if (language === "it") {
                    return "il tuo colore selezionato é"
               } else {
                    return "your chosen color is"
               }
          }
     }
     function nofarbwahl() {
          if (language !== "none") {
               if (language === "de") {
                    return "Bitte wähle eine Farbe"
               } else if (language === "en") {
                    return "choose a color"
               } else if (language === "it") {
                    return "seleziona colore"
               } else {
                    return "choose a color"
               }
          }
     }

     function wahle() {
          if (language !== "none") {
               if (language === "de") {
                    return "wählen"
               } else if (language === "en") {
                    return "choose"
               } else if (language === "it") {
                    return "seleziona"
               } else {
                    return "choose"
               }
          }
     }
     function anderefarbe() {
          if (language !== "none") {
               if (language === "de") {
                    return "andere Farbe anfragen"
               } else if (language === "en") {
                    return "order other color"
               } else if (language === "it") {
                    return "ciedere un'altro colore"
               } else {
                    return "order other color"
               }
          }
     }
     function wählen(value) {
          if (value !== "none") {
               return (
                    <div className="beauty">
                         {farbwahl()} {farbe}
                    </div>
               )
          } else {
               return <div className="beauty">{nofarbwahl()}</div>
          }
     }

     return (
          <div>
               <div className="dropdownorder">
                    <div className="ordersize">{wählen(farbe)}</div>

                    <button
                         className="btn-größe"
                         type="button"
                         onClick={() => {
                              const dropdownParent = document.getElementById("dropdownparentcolor")
                              if (dropdownParent.classList.contains("expand")) {
                                   dropdownParent.classList.remove("expand")
                              } else {
                                   dropdownParent.classList.add("expand")
                              }
                         }}>
                         {wahle()}
                    </button>
                    <div className="dropdown-menu dropdownparent" id="dropdownparentcolor">
                         {props.farben.map((farbe, index) => (
                              <article key={index} className="dropdownelement">
                                   <div
                                        id="size0"
                                        onClick={() => {
                                             setfarbe(farbe)
                                             const dropdownParent = document.getElementById("dropdownparentcolor")
                                             if (dropdownParent.classList.contains("expand")) {
                                                  dropdownParent.classList.remove("expand")
                                             }
                                        }}
                                        className="black">
                                        {farbe}
                                   </div>
                              </article>
                         ))}

                         <Link to="/kontakt" className="noline">
                              <article className="dropdownelement">{anderefarbe()}</article>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Farben
