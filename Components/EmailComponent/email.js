import "./email.css"
import React, { useState } from "react"
import { useToasts } from "react-toast-notifications"
import useStore from "../ZustandManager/zustand.js"
const Message = () => {
     var url = ""
     if (process.env.NODE_ENV !== "production") {
          url = "localhost:8080"
     } else {
          url = "185.164.4.169:80"
     }
     let language = useStore((state) => state.language)
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

     function button() {
          if (language !== "none") {
               if (language === "de") {
                    return "Senden"
               } else if (language === "en") {
                    return "send"
               } else if (language === "it") {
                    return "invia"
               } else {
                    return "send"
               }
          }
     }

     function namen() {
          if (language !== "none") {
               if (language === "de") {
                    return "Name"
               } else if (language === "en") {
                    return "name"
               } else if (language === "it") {
                    return "nome"
               } else {
                    return "name"
               }
          }
     }

     function betreff() {
          if (language !== "none") {
               if (language === "de") {
                    return "Betreff"
               } else if (language === "en") {
                    return "reference"
               } else if (language === "it") {
                    return "oggetto"
               } else {
                    return "reference"
               }
          }
     }

     function nachricht() {
          if (language !== "none") {
               if (language === "de") {
                    return "Nachricht"
               } else if (language === "en") {
                    return "message"
               } else if (language === "it") {
                    return "messaggio"
               } else {
                    return "message"
               }
          }
     }
     function spezialorder() {
          if (language !== "none") {
               if (language === "de") {
                    return (
                         <div>
                              <div className="headline2">Bei Fragen oder individuellen Bestellungen,</div>
                              <br></br>
                              <div className="headline2"> schreib mir doch einfach eine e-mail</div>
                         </div>
                    )
               } else if (language === "en") {
                    return (
                         <div>
                              <div className="headline2">If you have questions or individual needs,</div>
                              <br></br>
                              <div className="headline2"> write an e-mail to me</div>
                         </div>
                    )
               } else if (language === "it") {
                    return (
                         <div>
                              <div className="headline2">Per domande o ordine speciali,</div>
                              <br></br>
                              <div className="headline2"> scrivimi un e-mail</div>
                         </div>
                    )
               } else {
                    return (
                         <div>
                              <div className="headline2">If you have questions or individual needs,</div>
                              <br></br>
                              <div className="headline2"> write me an e-mail</div>
                         </div>
                    )
               }
          }
     }
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [message, setMessage] = useState("")
     const [subject, setSubject] = useState("")
     const PostData = () => {
          fetch("http://" + url + "/api/kontakt", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },

               body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
               })
          })
               .then((data) => data.json())
               .then((text) => {
                    alert(text._status)
                    setMessage("")
                    setName("")
                    setSubject("")
                    setEmail("")
               })
     }
     return (
          <div className="kontakt">
               <h3 className="headline">{kontakt()}</h3>
               <div className="card auth-card input-field">
                    {spezialorder()}
                    <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" className="form-control" placeholder={namen()} value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="form-control" placeholder={betreff()} value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <textarea type="text" className="form-control-text" placeholder={nachricht()} value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className="btn" onClick={() => PostData()}>
                         {button()}
                    </button>
               </div>
          </div>
     )
}
export default Message
