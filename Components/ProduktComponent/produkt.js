import "./produkt.css"
import useStore from "../ZustandManager/zustand.js"
import detectBrowserLanguage from "detect-browser-language"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Picture from "../PictureComponent/picture"
import Order from "../OrderComponent/order"
import Farben from "../FarbenComponent/farben"

//{test.imgUrl && <img src={test.imgUrl[0]} />}
function Produkt() {
     let [test, setTest] = useState({})
     let [bear, setBear] = useState("")
     let [wahl, setWahl] = useState("")

     var url = ""
     let params = useParams()
     let größe = useStore((state) => state.größe)
     let farbe = useStore((state) => state.farbe)
     let preis = useStore((state) => state.preis)
     //let [preis, setPreis] = useState(0.0)
     //let warenkorb = useStore((state) => state.warenkorb)
     const hinzufügen = useStore((state) => state.hinzufügen)
     const setPreis = useStore((state) => state.setPreis)
     const setfarbe = useStore((state) => state.setFarbe)
     const setgroße = useStore((state) => state.setGröße)
     let language = useStore((state) => state.language)

     if (process.env.NODE_ENV !== "production") {
          url = "localhost:8080"
     } else {
          url = "185.164.4.169:80"
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
     function description() {
          if (language !== "none") {
               if (language === "de") {
                    return test.description
               } else if (language === "en") {
                    return test.descriptione
               } else if (language === "it") {
                    return test.descriptioni
               } else {
                    return test.description
               }
          }
     }

     function material() {
          if (language !== "none") {
               if (language === "de") {
                    return (
                         <div>
                              <h5>Materialzusammensetzung:</h5>
                              {test.material.map((material, index) => (
                                   <article key={index}>{material}</article>
                              ))}
                         </div>
                    )
               } else if (language === "en") {
                    return (
                         <div>
                              <h5>material composition:</h5>
                              {test.materiale.map((material, index) => (
                                   <article key={index}>{material}</article>
                              ))}
                         </div>
                    )
               } else if (language === "it") {
                    return (
                         <div>
                              <h5>composizione del materiale:</h5>
                              {test.materiali.map((material, index) => (
                                   <article key={index}>{material}</article>
                              ))}
                         </div>
                    )
               } else {
                    return (
                         <div>
                              <h5>material composition:</h5>
                              {test.materiale.map((material, index) => (
                                   <article key={index}>{material}</article>
                              ))}
                         </div>
                    )
               }
          }
     }

     function preise() {
          if (language !== "none") {
               if (language === "de") {
                    return "Preis:"
               } else if (language === "en") {
                    return "price:"
               } else if (language === "it") {
                    return "prezzo:"
               } else {
                    return "price:"
               }
          }
     }

     function farben() {
          if (language !== "none") {
               if (language === "de") {
                    return test.farben
               } else if (language === "en") {
                    return test.farbene
               } else if (language === "it") {
                    return test.farbeni
               } else {
                    return test.farben
               }
          }
     }

     function warenkorb() {
          if (language !== "none") {
               if (language === "de") {
                    return "zum Warenkorb hinzufügen"
               } else if (language === "en") {
                    return "add to cart"
               } else if (language === "it") {
                    return "aggiungere al tuo carello"
               } else {
                    return "add to cart"
               }
          }
     }

     function noprice() {
          if (language !== "none") {
               if (language === "de") {
                    return "Noch nicht gewählt"
               } else if (language === "en") {
                    return "not chosen"
               } else if (language === "it") {
                    return "non selezionato"
               } else {
                    return "not chosen"
               }
          }
     }
     function certname() {
          if (language !== "none") {
               if (language === "de") {
                    return "Zertifikate:"
               } else if (language === "en") {
                    return "certificates:"
               } else if (language === "it") {
                    return "certificati:"
               } else {
                    return "not chosen"
               }
          }
     }

     function certopt(cert) {
          if (cert === "0") {
               return ""
          } else if (cert === "1") {
               return (
                    <div className="space">
                         <h5>{certname()}</h5>
                         <div>Ökotex Standard 100</div>
                    </div>
               )
          } else if (cert === "2") {
               return (
                    <div className="space">
                         <h5>{certname()}</h5>
                         <div>Ökotex Standard 100</div>
                         <div>GOTS</div>
                    </div>
               )
          } else {
               return ""
          }
     }

     function certdisp(cert) {
          if (cert === "0") {
               return ""
          } else if (cert === "1") {
               return (
                    <div className="space2">
                         <div>Dieser Stoff ist mit Oeko-Tex Standart 100 zertifiziert und garantiert, dass das Produkt frei von Schadstoffen und gesundheitsschädlichen Chemikalien sind.</div>
                    </div>
               )
          } else if (cert === "2") {
               return (
                    <div>
                         <div className="space2">Dieser Stoff ist mit Oeko-Tex Standart 100 zertifiziert und garantiert, dass das Produkt frei von Schadstoffen und gesundheitsschädlichen Chemikalien sind.</div>
                         <div className="space2">Dieser Stoff ist mit dem GOTS Zertifikat ausgezeichnet und garantiert bei der Herstellung die Verwendung von mindestens 70% aus biologisch erzeugten Naturfasern.</div>
                    </div>
               )
          } else {
               return ""
          }
     }

     function calcpreis(gewähltegröße) {
          switch (gewähltegröße) {
               case "none":
                    return noprice()
               case 56:
                    return test.preis[0].toFixed(2)
               case 62:
                    return test.preis[0].toFixed(2)
               case 68:
                    return test.preis[0].toFixed(2)
               case 74:
                    return test.preis[1].toFixed(2)
               case 80:
                    return test.preis[1].toFixed(2)
               case 86:
                    return test.preis[1].toFixed(2)
               case 92:
                    return test.preis[2].toFixed(2)
               case 98:
                    return test.preis[2].toFixed(2)
               case 104:
                    return test.preis[2].toFixed(2)
               case 110:
                    return test.preis[3].toFixed(2)
               case 116:
                    return test.preis[3].toFixed(2)
               case 122:
                    return test.preis[3].toFixed(2)
               default:
                    break
          }
     }

     function displayprize() {
          if (test.großen) {
               setPreis(calcpreis(größe))

               if (preis === "Noch nicht gewählt" || preis === "non selezionato" || preis === "not chosen") {
                    return <div className="preisfarbe">{preis}</div>
               } else {
                    return (
                         <div className="preisfarbe">
                              {preise()}
                              {preis} €
                         </div>
                    )
               }
          } else {
               test.preis && setPreis(test.preis[0].toFixed(2))

               return (
                    <div className="preisfarbe">
                         {" "}
                         {preise()} {preis} €{" "}
                    </div>
               )
          }
     }
     function ready() {
          if ((test.großen && größe !== "none") || (test.farben && farbe !== "none") || (farbe === "none" && größe === "none" && wahl !== "") || bear !== "") {
               const dropdownParent = document.getElementById("warenkorb")

               dropdownParent.classList.add("expander")
          } else {
          }
     }

     useEffect(() => {
          ;(async () => {
               const response = await fetch("http://" + url + "/api/produkt/" + params.id)
               const data = await response.json()
               //console.log(data.großen)
               if (data.type === "bear") {
                    setBear("bear")
                    setfarbe("none")
                    setgroße("none")
                    setWahl("")
                    setTest(data.be)
               } else if (data.type === "kleidung") {
                    setgroße("none")
                    setfarbe("none")
                    setWahl("")
                    setBear("")
                    setTest(data.kl)
               } else if (data.type === "accessoir") {
                    setgroße("none")
                    setfarbe("none")
                    setBear("")
                    if (data.ac.wahlbar == "0") {
                         setWahl("true")
                    }

                    setTest(data.ac)
               }
          })()
     }, [params.id])

     if (test === null) {
          // Render loading state ...
     } else {
          return (
               <div className="grid">
                    <div className="prodwrapper">
                         <h1 className="headlineprod"># {test.name} </h1>

                         <div className="picture"> {test.imgUrl && <Picture property={test.imgUrl} />}</div>
                         <div className="sidetext">
                              <div className="row1">{description()}</div>
                              <div className="row2">
                                   {test.material && material()}
                                   {test.cert && certopt(test.cert)}
                              </div>
                              {test.großen && (
                                   <div>
                                        <Order size={test.großen} identificator={test.id} />
                                   </div>
                              )}
                              {test.wahlbar > 0 && test.farben && language === "de" && (
                                   <div>
                                        <Farben farben={test.farben} identificator={test.id} />
                                   </div>
                              )}
                              {test.wahlbar > 0 && test.farbene && language === "en" && (
                                   <div>
                                        <Farben farben={test.farbene} identificator={test.id} />
                                   </div>
                              )}
                              {test.wahlbar > 0 && test.farbeni && language === "it" && (
                                   <div>
                                        <Farben farben={test.farbeni} identificator={test.id} />
                                   </div>
                              )}
                              {displayprize()}

                              <div className="hiddenspace" id="warenkorb">
                                   <button
                                        className="btn-warenkorb"
                                        onClick={() => {
                                             hinzufügen([test.name, test.detail, test.imgUrl, preis, test.id, größe, farbe])
                                        }}>
                                        {warenkorb()}
                                   </button>
                              </div>

                              {ready()}
                         </div>
                    </div>
                    <div className="extras beautyklein">{test.cert && certdisp(test.cert)}</div>
               </div>
          )
     }
}
export default Produkt
