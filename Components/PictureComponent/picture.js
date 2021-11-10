import "./picture.css"
import { useState } from "react"

function Picture(props) {
     let [pic, setPic] = useState(props.property[1])

     return (
          <div className="gridpic">
               <div className="big">{props.property && <img alt="notfound" className="bigone" src={pic} />}</div>
               <div className="small">
                    <span onClick={() => setPic(props.property[1])} className="liste">
                         {props.property && <img alt="notfound" className="smallpic" src={props.property[1]} />}
                    </span>
                    <span onClick={() => setPic(props.property[2])} className="liste">
                         {props.property && <img alt="notfound" className="smallpic" src={props.property[2]} />}
                    </span>
                    <span onClick={() => setPic(props.property[3])} className="liste">
                         {props.property && <img alt="notfound" className="smallpic" src={props.property[3]} />}
                    </span>
               </div>
          </div>
     )
}
export default Picture
