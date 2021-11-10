import "./order.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
function Order(props) {
     let [statesize, setSize] = useState("none")
     const setgroße = useStore((state) => state.setGröße)
     let größe = useStore((state) => state.größe)
     let language = useStore((state) => state.language)
     function status(value) {
          if (value > 0) {
               return "black"
          } else {
               return "invisible"
          }
     }

     function groswahl() {
          if (language !== "none") {
               if (language === "de") {
                    return "Deine gewählte Größe ist"
               } else if (language === "en") {
                    return "your chosen size is"
               } else if (language === "it") {
                    return "la tua taglia selezionata é"
               } else {
                    return "your chosen size is"
               }
          }
     }
     function nogroswahl() {
          if (language !== "none") {
               if (language === "de") {
                    return "Bitte wähle eine Größe"
               } else if (language === "en") {
                    return "choose a size"
               } else if (language === "it") {
                    return "seleziona taglia"
               } else {
                    return "choose a size"
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
     function anderegrose() {
          if (language !== "none") {
               if (language === "de") {
                    return "andere Größe anfragen"
               } else if (language === "en") {
                    return "order other size"
               } else if (language === "it") {
                    return "chiedere un'altra taglia"
               } else {
                    return "order other size"
               }
          }
     }
     function wählen(value) {
          if (value !== "none") {
               return (
                    <div className="große">
                         {groswahl()} {größe}
                    </div>
               )
          } else {
               return <div>{nogroswahl()}</div>
          }
     }

     const size = [56, 62, 68, 74, 80, 86, 92, 98, 104, 110, 116, 122]

     return (
          <div>
               <div className="dropdownorder">
                    <div className="ordersize">{wählen(größe)}</div>

                    <button
                         className="btn-größe"
                         type="button"
                         onClick={() => {
                              const dropdownParent = document.getElementById("dropdownparent")
                              if (dropdownParent.classList.contains("expand")) {
                                   dropdownParent.classList.remove("expand")
                              } else {
                                   dropdownParent.classList.add("expand")
                              }
                         }}>
                         {wahle()}
                    </button>
                    <div className="dropdown-menu dropdownparent" id="dropdownparent">
                         <article className="dropdownelement">
                              <div
                                   id="size0"
                                   onClick={() => {
                                        setgroße(size[0])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[0])}>
                                   {size[0]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[1])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[1])}>
                                   {size[1]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[2])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[2])}>
                                   {size[2]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[3])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[3])}>
                                   {size[3]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[4])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[4])}>
                                   {size[4]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[5])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[5])}>
                                   {size[5]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[6])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[6])}>
                                   {size[6]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[7])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[7])}>
                                   {size[7]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[8])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[8])}>
                                   {size[8]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[9])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[9])}>
                                   {size[9]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[10])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[10])}>
                                   {size[10]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[11])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[11])}>
                                   {size[11]}
                              </div>
                         </article>

                         <Link to="/kontakt" className="noline">
                              <article className="dropdownelement">{anderegrose()}</article>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Order
