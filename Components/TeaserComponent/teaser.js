import "./teaser.css"
import { Link } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
function Teaser() {
     let language = useStore((state) => state.language)

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
     function kleidung() {
          if (language !== "none") {
               if (language === "de") {
                    return "Baby und Kinderbekleidung"
               } else if (language === "en") {
                    return "baby an child clothes"
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

     return (
          <div className="teaser">
               <div className="ad">
                    <div className="ad-entry">
                         <Link className="link" to="/gallerie/bears">
                              <div className="imageteaser1">
                                   <div className="contentt">
                                        <h3>{baren()}</h3>
                                   </div>
                              </div>
                         </Link>
                    </div>
                    <div className="ad-entry">
                         <Link className="link" to="/gallerie/kleidung">
                              <div className="imageteaser2">
                                   <div className="contentt">
                                        <h3>{kleidung()}</h3>
                                   </div>
                              </div>
                         </Link>
                    </div>
                    <div className="ad-entry">
                         <Link className="link" to="/gallerie/stuff">
                              <div className="imageteaser3">
                                   <div className="contentt">
                                        <h3 className="shift">{accessoirs()}</h3>
                                   </div>
                              </div>
                         </Link>
                    </div>
               </div>
          </div>
     )
}
export default Teaser
