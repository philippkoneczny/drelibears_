import "./gallerie.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Sidebar from "../SidebarComponent/sidebar"
import { Link } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
import detectBrowserLanguage from "detect-browser-language"
function Gallerie() {
     let [test, setTest] = useState([])
     let [dispsidebar, setSidebar] = useState("false")
     let params = useParams()
     var url = ""
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
     function headline() {
          switch (params.id) {
               case "kleidung":
                    return "#Baby- und Kinderbekleidung"

               case "bears":
                    return "#Bären und Drachen"

               case "stuff":
                    return "#Accessoires"
               default:
                    break
          }
     }

     function sidebar() {
          switch (params.id) {
               case "kleidung":
                    return <Sidebar />

               case "bears":
                    return <div></div>

               case "stuff":
                    return <div></div>
               default:
                    break
          }
     }
     function ab() {
          switch (params.id) {
               case "kleidung":
                    return "ab"

               default:
                    break
          }
     }
     useEffect(() => {
          fetch("http://" + url + "/api/gallerie/" + params.id + "?page=1")
               .then((bears) => bears.json())
               .then((text) => {
                    setTest(text)
               })
     }, [params.id])
     return (
          <div className="Gallerie">
               <div id="userstories">
                    {sidebar()}
                    <div className="wrapper">
                         <h1 className="welcomee"> {headline()} </h1>
                         {test.map((bear, index) => (
                              <article className="article" key={index}>
                                   <Link className="noline" to={bear.detail}>
                                        <div className="card-img" style={{ backgroundImage: `url(${bear.imgUrl[0]})` }}>
                                             <h3 className="beautiful">{bear.name}</h3>
                                        </div>
                                   </Link>

                                   <div className="preis">
                                        {ab()} {bear.preis[0].toFixed(2)}€
                                   </div>
                              </article>
                         ))}
                    </div>
               </div>
          </div>
     )
}
export default Gallerie
