import "./home.css"
import Teaser from "../TeaserComponent/teaser"
import Content from "../ContentComponent/content"
import detectBrowserLanguage from "detect-browser-language"
import useStore from "../ZustandManager/zustand.js"

function Home() {
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

     function welcome() {
          if (language !== "none") {
               if (language === "de") {
                    return "Lass dich Inspirieren"
               } else if (language === "en") {
                    return "Get Inspired"
               } else if (language === "it") {
                    return "Lasciati ispirare"
               } else {
                    return "Get Inspired"
               }
          }
     }
     function intro() {
          if (language !== "none") {
               if (language === "de") {
                    return (
                         <div className="text">
                              <div>Hallo und Willkommen auf meiner Handmade-Seite, schön dass du hier bist!</div>
                              <br></br>
                              <div>Ich bin Andrea und meine Leidenschaft sind das Nähen und Handarbeiten.</div>
                              <br></br>
                              <div>Hier findest du all meine Werke – alle ausschließlich mit viel Liebe zum Detail</div>
                              <br></br>
                              <div>von mir selbst per Hand gefertigt. Ich lege viel Wert auf gute Qualität und Nachhaltigkeit.</div>
                              <br></br>
                              <div>Überzeuge dich selbst und klick dich durch meine Produkte.</div>
                              <br></br>
                              <div>Und falls du besondere Wünsche hast freue ich mich über deine Nachricht.</div>
                              <br></br>
                              <div>Viel Spaß dabei. </div>
                         </div>
                    )
               } else if (language === "en") {
                    return (
                         <div className="text">
                              <div>Hello and welcome to my handmade-site, nice to see you here.</div>
                              <br></br>
                              <div>My name is Andrea and my passions are sewing and being creative.</div>
                              <br></br>
                              <div>Here you will find all my artworks – they all are handmade </div>
                              <br></br>
                              <div>with a lot of love for every detail.</div>
                              <br></br>
                              <div>I attage great importance to high quality and sustainability.</div>
                              <br></br>
                              <div>Come and assure yourself and check out all my products.</div>
                              <br></br>
                              <div>And if you have special wishes I am looking forward to receive a message from you.</div>
                              <br></br>
                              <div>Have fun. </div>
                         </div>
                    )
               } else if (language === "it") {
                    return (
                         <div className="text">
                              <div>Ciao e benvenuti sul mio sito „handmade“, mi fa piacere che tu sia qui.</div>
                              <br></br>
                              <div>Sono Andrea e le mie passioni sono cucire e fare delle cose creative a mano.</div>
                              <br></br>
                              <div>Qui lo trovi tutti i miei lavori – tutti completamente fatti a mano </div>
                              <br></br>
                              <div>con tanto amore in ogni dettaglio.</div>
                              <br></br>
                              <div>La cosa piu importante per me è la qualità e la sostenibilità.</div>
                              <br></br>
                              <div>Convinciti cliccando i miei prodotti.</div>
                              <br></br>
                              <div>E se hai dei desideri speciali scrivimi pure un messaggio.</div>
                              <br></br>
                              <div>Buon divertimento. </div>
                         </div>
                    )
               } else {
                    return (
                         <div className="text">
                              <div>Hello and welcome to my handmade-site, nice to see you here.</div>
                              <br></br>
                              <div>My name is Andrea and my passions are sewing and being creative.</div>
                              <br></br>
                              <div>Here you will find all my artworks – they all are handmade with a lot of love for every detail.</div>
                              <br></br>
                              <div>I attage great importance to high quality and sustainability.</div>
                              <br></br>
                              <div>Come and assure yourself and check out all my products.</div>
                              <br></br>
                              <div>And if you have special wishes I am looking forward to receive a message from you.</div>
                              <br></br>
                              <div>Have fun. </div>
                         </div>
                    )
               }
          }
     }
     return (
          <div className="Home">
               <div className="placeholder"></div>

               <div className="fliestext">{intro()}</div>
               <div className="intro">
                    <h1 className="welcome">{welcome()} </h1>
               </div>
               <Teaser />
               




               <Content />
          </div>
     )
}

export default Home
