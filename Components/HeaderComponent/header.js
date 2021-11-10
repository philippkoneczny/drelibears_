import "./header.css"
import { Link } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
import detectBrowserLanguage from "detect-browser-language"
function Header() {
     let language = useStore((state) => state.language)
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

     function baren() {
          if (language !== "none") {
               if (language === "de") {
                    return "Bären und Drachen"
               } else if (language === "en") {
                    return "Teddybears and Dragons"
               } else if (language === "it") {
                    return "Orsetti e draghi"
               } else {
                    return "Teddybears and Dragons"
               }
          }
     }
     function me() {
          if (language !== "none") {
               if (language === "de") {
                    return "Über mich"
               } else if (language === "en") {
                    return "About Me"
               } else if (language === "it") {
                    return "chi sono"
               } else {
                    return "About Me"
               }
          }
     }

     function kleidung() {
          if (language !== "none") {
               if (language === "de") {
                    return "Baby und Kinderbekleidung"
               } else if (language === "en") {
                    return "baby and child clothes"
               } else if (language === "it") {
                    return "abbiglamento da bambini"
               } else {
                    return "baby and child clothes"
               }
          }
     }
     function accessoirs() {
          if (language !== "none") {
               if (language === "de") {
                    return "Accessoires"
               } else if (language === "en") {
                    return "accessory"
               } else if (language === "it") {
                    return "accessori"
               } else {
                    return "accessory"
               }
          }
     }

     function kontakt() {
          if (language !== "none") {
               if (language === "de") {
                    return "Kontakt"
               } else if (language === "en") {
                    return "contact"
               } else if (language === "it") {
                    return "contatto"
               } else {
                    return "contact"
               }
          }
     }

     return (
          <div className="Header">
               <nav id="header">
                    <Link to="/" className="nav-link home">
                         Home
                    </Link>

                    <Link
                         className="nav-link gal dropdown"
                         onClick={() => {
                              const dropdownParent = document.getElementById("dropdownshop")
                              if (dropdownParent.classList.contains("expande")) {
                                   dropdownParent.classList.remove("expande")
                              } else {
                                   dropdownParent.classList.add("expande")
                              }
                         }}>
                         Shop
                         <div className="dropdown-menu-shop dropdownparentshop" id="dropdownshop">
                              <Link className="noline" to="/gallerie/bears">
                                   <div className="dropdownelementshop">{baren()} </div>
                              </Link>

                              <Link className="noline" to="/gallerie/kleidung">
                                   <div className="dropdownelementshop">{kleidung()} </div>
                              </Link>

                              <Link className="noline" to="/gallerie/stuff">
                                   <div className="dropdownelementshop">{accessoirs()}</div>
                              </Link>
                         </div>
                    </Link>
                    <Link to="/" className="logo">
                         <img className="img" src="/img/Logo_mit_farbe.png" alt="logo" />
                    </Link>
                    <Link
                         id="dropdownabout"
                         className="nav-link about dropdown"
                         onClick={() => {
                              const dropdownParent = document.getElementById("dropdownparentabout")
                              if (dropdownParent.classList.contains("expande")) {
                                   dropdownParent.classList.remove("expande")
                              } else {
                                   dropdownParent.classList.add("expande")
                              }
                         }}>
                         {me()}
                         <div className="dropdown-menu-shop dropdownparentabout" id="dropdownparentabout">
                              <Link className="noline" to="/about">
                                   <div className="dropd">Me</div>
                              </Link>

                              <Link className="noline" to="awards">
                                   <div className="dropd">Awards</div>
                              </Link>

                              <Link className="noline" to="/presse">
                                   <div className="dropd">Presse</div>
                              </Link>
                         </div>
                    </Link>
                    <Link to="/kontakt" className="nav-link impr">
                         {kontakt()}
                    </Link>

                    <div id="social">
                         <a className="social-icon" data-tooltip="andrea@mazzitelli.at" data-toggle="tooltip" data-placement="top" title="E-mail" href="mailto:andrea@mazzitelli.at">
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                         </a>

                         <a className="social-icon" data-tooltip="Facebook" data-toggle="tooltip" data-placement="top" title="facebook" href="https://www.facebook.com/andreamaria.mazzitellikohler">
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                         </a>

                         <a className="social-icon" data-tooltip="Instagram" data-toggle="tooltip" data-placement="top" title="instagram" href="https://www.instagram.com/drelibears/">
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                         </a>

                         <Link to="/warenkorb" className="social-icon">
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                         </Link>
                    </div>
               </nav>
          </div>
     )
}

export default Header
