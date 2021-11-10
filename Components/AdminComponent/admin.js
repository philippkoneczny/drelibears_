import "./admin.css"
import React, { useState } from "react"

const Admin = (props) => {
     let url = ""
     let preise = []
     let farben = []
     let farbene = []
     let farbeni = []
     let materialien = []
     let materialiene = []
     let materialieni = []
     let urls = []
     let grosen = []
     if (process.env.NODE_ENV !== "production") {
          url = "localhost:8080"
     } else {
          url = "185.164.4.169:80"
     }

     let [kleidungg, setKleidung] = useState("")
     let [bears, setBears] = useState("")
     let [accessoiress, setAccessoires] = useState("")
     let [name, setName] = useState("")
     let [description, setDescription] = useState("")
     let [descriptione, setDescriptione] = useState("")
     let [descriptioni, setDescriptioni] = useState("")

     let [material1, setMaterial1] = useState("")
     let [material2, setMaterial2] = useState("")
     let [material3, setMaterial3] = useState("")
     let [material1e, setMaterial1e] = useState("")
     let [material2e, setMaterial2e] = useState("")
     let [material3e, setMaterial3e] = useState("")
     let [material1i, setMaterial1i] = useState("")
     let [material2i, setMaterial2i] = useState("")
     let [material3i, setMaterial3i] = useState("")

     let [farbe2, setFarbe2] = useState("")
     let [farbe3, setFarbe3] = useState("")
     let [farbe1, setFarbe1] = useState("")
     let [farbe4, setFarbe4] = useState("")
     let [farbe5, setFarbe5] = useState("")
     let [farbe6, setFarbe6] = useState("")
     let [farbe7, setFarbe7] = useState("")
     let [farbe8, setFarbe8] = useState("")
     let [farbe9, setFarbe9] = useState("")
     let [farbe10, setFarbe10] = useState("")
     let [farbe11, setFarbe11] = useState("")
     let [farbe12, setFarbe12] = useState("")

     let [farbe2e, setFarbe2e] = useState("")
     let [farbe3e, setFarbe3e] = useState("")
     let [farbe1e, setFarbe1e] = useState("")
     let [farbe4e, setFarbe4e] = useState("")
     let [farbe5e, setFarbe5e] = useState("")
     let [farbe6e, setFarbe6e] = useState("")
     let [farbe7e, setFarbe7e] = useState("")
     let [farbe8e, setFarbe8e] = useState("")
     let [farbe9e, setFarbe9e] = useState("")
     let [farbe10e, setFarbe10e] = useState("")
     let [farbe11e, setFarbe11e] = useState("")
     let [farbe12e, setFarbe12e] = useState("")

     let [farbe2i, setFarbe2i] = useState("")
     let [farbe3i, setFarbe3i] = useState("")
     let [farbe1i, setFarbe1i] = useState("")
     let [farbe4i, setFarbe4i] = useState("")
     let [farbe5i, setFarbe5i] = useState("")
     let [farbe6i, setFarbe6i] = useState("")
     let [farbe7i, setFarbe7i] = useState("")
     let [farbe8i, setFarbe8i] = useState("")
     let [farbe9i, setFarbe9i] = useState("")
     let [farbe10i, setFarbe10i] = useState("")
     let [farbe11i, setFarbe11i] = useState("")
     let [farbe12i, setFarbe12i] = useState("")

     let detail = ""

     let [imgUrl1, setimgUrl1] = useState("")
     let [imgUrl2, setimgUrl2] = useState("")
     let [imgUrl3, setimgUrl3] = useState("")
     let [imgUrl4, setimgUrl4] = useState("")

     let [preis1, setPreis1] = useState("")
     let [preis2, setPreis2] = useState("")
     let [preis3, setPreis3] = useState("")
     let [preis4, setPreis4] = useState("")

     let [id, setId] = useState([])

     let [grose1, setGrose1] = useState("")
     let [grose2, setGrose2] = useState("")
     let [grose3, setGrose3] = useState("")
     let [grose4, setGrose4] = useState("")
     let [grose5, setGrose5] = useState("")
     let [grose6, setGrose6] = useState("")
     let [grose7, setGrose7] = useState("")
     let [grose8, setGrose8] = useState("")
     let [grose9, setGrose9] = useState("")
     let [grose10, setGrose10] = useState("")
     let [grose11, setGrose11] = useState("")
     let [grose12, setGrose12] = useState("")
     let [pflege, setPflege] = useState("")
     let [cert, setCert] = useState("")

     let [wahlbar, setWahl] = useState("")

     function deleteitem() {
          return (
               <div className=" beauty">
                    <span className="firstcol firstrow">Name </span>

                    <input type="text" className="thirdcol  firstrow beauty" value={name} onChange={(e) => setName(e.target.value)} />

                    <span className="firstcol eightrow">ID</span>

                    <input type="text" className="thirdcol eightrow beauty" value={id} onChange={(e) => setId(e.target.value)} />

                    <button className="btn smallbtn " onClick={() => DeleteItem()}>
                         Löschen
                    </button>
               </div>
          )
     }
     function kleidung() {
          return (
               <div className="smallgrid beauty">
                    <span className="firstcol firstrow">Name </span>

                    <input type="text" className="thirdcol  firstrow beauty" value={name} onChange={(e) => setName(e.target.value)} />
                    <span className="firstcol secondrow">
                         <span className="firstrowe">Description</span>
                         <span className="firstrow">Description Englisch</span>
                         <span className="secondrowe">Description Italienisch</span>
                    </span>

                    <span className="thirdcol secondrow">
                         <textarea type="text" className="beauty firstrowe" value={description} onChange={(e) => setDescription(e.target.value)} />

                         <textarea type="text" className="firstrow beauty" value={descriptione} onChange={(e) => setDescriptione(e.target.value)} />

                         <textarea type="text" className="secondrowe beauty" value={descriptioni} onChange={(e) => setDescriptioni(e.target.value)} />
                    </span>
                    <span className="firstcol thirdrow">Image Name</span>
                    <div className="thirdcol thirdrow beauty multi4">
                         <input type="text" className="first  beauty" value={imgUrl1} onChange={(e) => setimgUrl1(e.target.value)} />
                         <input type="text" className="second  beauty" value={imgUrl2} onChange={(e) => setimgUrl2(e.target.value)} />
                         <input type="text" className="third  beauty" value={imgUrl3} onChange={(e) => setimgUrl3(e.target.value)} />
                         <input type="text" className="forth  beauty" value={imgUrl4} onChange={(e) => setimgUrl4(e.target.value)} />
                    </div>

                    <span className="firstcol forthrow">Preis</span>
                    <div className="thirdcol forthrow beauty multi4">
                         <input type="text" className="first beauty" value={preis1} onChange={(e) => setPreis1(e.target.value)} />
                         <input type="text" className="second beauty" value={preis2} onChange={(e) => setPreis2(e.target.value)} />
                         <input type="text" className="third beauty" value={preis3} onChange={(e) => setPreis3(e.target.value)} />
                         <input type="text" className="forth beauty" value={preis4} onChange={(e) => setPreis4(e.target.value)} />
                    </div>
                    <span className="firstcol sixthrow">
                         <span className="firstrowe beauty">Material</span>
                         <span className="firstrow beauty">Material Englisch</span>
                         <span className="secondrowe beauty">Material Italienisch</span>
                    </span>
                    <span className="thirdcol sixthrow">
                         <div className="firstrowe beauty multi">
                              <input type="text" className="first beauty" value={material1} onChange={(e) => setMaterial1(e.target.value)} />
                              <input type="text" className="second beauty" value={material2} onChange={(e) => setMaterial2(e.target.value)} />
                              <input type="text" className="third beauty" value={material3} onChange={(e) => setMaterial3(e.target.value)} />
                         </div>
                         <div className="firstrow beauty multi">
                              <input type="text" className="first beauty" value={material1e} onChange={(e) => setMaterial1e(e.target.value)} />
                              <input type="text" className="second beauty" value={material2e} onChange={(e) => setMaterial2e(e.target.value)} />
                              <input type="text" className="third beauty" value={material3e} onChange={(e) => setMaterial3e(e.target.value)} />
                         </div>
                         <div className="secondrowe beauty multi">
                              <input type="text" className="first beauty" value={material1i} onChange={(e) => setMaterial1i(e.target.value)} />
                              <input type="text" className="second beauty" value={material2i} onChange={(e) => setMaterial2i(e.target.value)} />
                              <input type="text" className="third beauty" value={material3i} onChange={(e) => setMaterial3i(e.target.value)} />
                         </div>
                    </span>
                    <span className="firstcol seventrow  marginsize">Größen</span>
                    <div className="thirdcol seventrow beauty multi12">
                         <div className="first marginsize">56</div>
                         <input type="text" className="second beauty" value={grose1} onChange={(e) => setGrose1(e.target.value)} />
                         <div className="third  marginsize">62</div>
                         <input type="text" className="forth beauty" value={grose2} onChange={(e) => setGrose2(e.target.value)} />
                         <div className="fift  marginsize">68</div>
                         <input type="text" className="sixt beauty" value={grose3} onChange={(e) => setGrose3(e.target.value)} />
                         <div className="sevent marginsize">74</div>
                         <input type="text" className="eight beauty" value={grose4} onChange={(e) => setGrose4(e.target.value)} />
                         <div className="nine marginsize">80</div>
                         <input type="text" className="ten beauty" value={grose5} onChange={(e) => setGrose5(e.target.value)} />
                         <div className="eleven marginsize">86</div>
                         <input type="text" className="twelve beauty" value={grose6} onChange={(e) => setGrose6(e.target.value)} />
                         <div className="thirdteen marginsize">92</div>
                         <input type="text" className="fourteen beauty" value={grose7} onChange={(e) => setGrose7(e.target.value)} />
                         <div className="fifteen marginsize">98</div>
                         <input type="text" className="sixteen beauty" value={grose8} onChange={(e) => setGrose8(e.target.value)} />
                         <div className="seventeen marginsize">104</div>
                         <input type="text" className="eightteen beauty" value={grose9} onChange={(e) => setGrose9(e.target.value)} />
                         <div className="nineteen marginsize">110</div>
                         <input type="text" className="twenty beauty" value={grose10} onChange={(e) => setGrose10(e.target.value)} />
                         <div className="twetyone marginsize">116</div>
                         <input type="text" className="twentytwo beauty" value={grose11} onChange={(e) => setGrose11(e.target.value)} />
                         <div className="twentythree marginsize">122</div>
                         <input type="text" className="twentyfour beauty" value={grose12} onChange={(e) => setGrose12(e.target.value)} />
                    </div>

                    <span className="firstcol eightrow">ID</span>

                    <input type="text" className="thirdcol eightrow beauty" value={id} onChange={(e) => setId(e.target.value)} />

                    <span className="firstcol ninerow">Pflege</span>

                    <input type="text" className="thirdcol ninerow beauty" value={pflege} onChange={(e) => setPflege(e.target.value)} />

                    <span className="firstcol tenrow">Zertifikat</span>
                    <div className="thirdcolcert tenrow">
                         <input className="firstcolcert height marginsize" height="20px" type="checkbox" id="oko" onClick={(e) => setCert(e.target.value)} value="1" />
                         <label className="secondcolcert beauty marginsize" for="oko">
                              {" "}
                              Ökotex
                         </label>
                    </div>
                    <div className="thirdcolcert2 tenrow">
                         <input className="firstcolcert height marginsize" type="checkbox" id="gots" onClick={(e) => setCert(e.target.value)} value="2" />
                         <label className="secondcolcert beauty marginsize" for="gots">
                              {" "}
                              Ökotex & GOTS
                         </label>
                    </div>
                    <div className="thirdcolcert3 tenrow">
                         {" "}
                         <input className="firstcolcert height marginsize" type="checkbox" id="nix" onClick={(e) => setCert(e.target.value)} value="0" />
                         <label className="secondcolcert beauty marginsize" for="nix">
                              {" "}
                              nix
                         </label>
                         <div className="dreicol">{cert}</div>
                    </div>
                    <button className="btn elevenrow senden" onClick={() => PostItem()}>
                         Speichern
                    </button>
               </div>
          )
     }

     function accessoires() {
          return (
               <div className="smallgrid beauty">
                    <span className="firstcol firstrow">Name </span>

                    <input type="text" className="thirdcol  firstrow beauty" value={name} onChange={(e) => setName(e.target.value)} />

                    <span className="firstcol secondrow">
                         <span className="firstrowe">Description</span>
                         <span className="firstrow">Description Englisch</span>
                         <span className="secondrowe">Description Italienisch</span>
                    </span>

                    <span className="thirdcol secondrow">
                         <textarea type="text" className="beauty firstrowe" value={description} onChange={(e) => setDescription(e.target.value)} />

                         <textarea type="text" className="firstrow beauty" value={descriptione} onChange={(e) => setDescriptione(e.target.value)} />

                         <textarea type="text" className="secondrowe beauty" value={descriptioni} onChange={(e) => setDescriptioni(e.target.value)} />
                    </span>
                    <span className="firstcol thirdrow">Image Name</span>

                    <div className="thirdcol thirdrow beauty multi4">
                         <input type="text" className="first beauty" value={imgUrl1} onChange={(e) => setimgUrl1(e.target.value)} />
                         <input type="text" className="second beauty" value={imgUrl2} onChange={(e) => setimgUrl2(e.target.value)} />
                         <input type="text" className="third beauty" value={imgUrl3} onChange={(e) => setimgUrl3(e.target.value)} />
                         <input type="text" className="forth beauty" value={imgUrl4} onChange={(e) => setimgUrl4(e.target.value)} />
                    </div>
                    <span className="firstcol forthrow">Preis</span>

                    <input type="text" className="thirdcol forthrow beauty" value={preis1} onChange={(e) => setPreis1(e.target.value)} />

                    <span className="firstcol fiftrow">Wählbar</span>

                    <input type="text" className="thirdcol fiftrow beauty" value={wahlbar} onChange={(e) => setWahl(e.target.value)} />

                    <span className="firstcol sixthrow">
                         <span className="firstrowe beauty">Material</span>
                         <span className="firstrow beauty">Material Englisch</span>
                         <span className="secondrowe beauty">Material Italienisch</span>
                    </span>
                    <span className="thirdcol sixthrow">
                         <div className="firstrowe beauty multi">
                              <input type="text" className="first beauty" value={material1} onChange={(e) => setMaterial1(e.target.value)} />
                              <input type="text" className="second beauty" value={material2} onChange={(e) => setMaterial2(e.target.value)} />
                              <input type="text" className="third beauty" value={material3} onChange={(e) => setMaterial3(e.target.value)} />
                         </div>
                         <div className="firstrow beauty multi">
                              <input type="text" className="first beauty" value={material1e} onChange={(e) => setMaterial1e(e.target.value)} />
                              <input type="text" className="second beauty" value={material2e} onChange={(e) => setMaterial2e(e.target.value)} />
                              <input type="text" className="third beauty" value={material3e} onChange={(e) => setMaterial3e(e.target.value)} />
                         </div>
                         <div className="secondrowe beauty multi">
                              <input type="text" className="first beauty" value={material1i} onChange={(e) => setMaterial1i(e.target.value)} />
                              <input type="text" className="second beauty" value={material2i} onChange={(e) => setMaterial2i(e.target.value)} />
                              <input type="text" className="third beauty" value={material3i} onChange={(e) => setMaterial3i(e.target.value)} />
                         </div>
                    </span>

                    <span className="firstcol seventrow">
                         <span className="firstrowe beauty">Farben</span>
                         <span className="firstrow beauty">Farben Englisch</span>
                         <span className="secondrowe beauty">Farben Italienisch</span>
                    </span>
                    <span className="thirdcol seventrow">
                         <div className="firstrowe beauty multi12">
                              <div className="first">Nr1</div>
                              <input type="text" className="second beauty" value={farbe1} onChange={(e) => setFarbe1(e.target.value)} />
                              <div className="third">Nr2</div>
                              <input type="text" className="forth beauty" value={farbe2} onChange={(e) => setFarbe2(e.target.value)} />
                              <div className="fift">Nr3</div>
                              <input type="text" className="sixt beauty" value={farbe3} onChange={(e) => setFarbe3(e.target.value)} />
                              <div className="sevent">Nr4</div>
                              <input type="text" className="eight beauty" value={farbe4} onChange={(e) => setFarbe4(e.target.value)} />
                              <div className="nine">Nr5</div>
                              <input type="text" className="ten beauty" value={farbe5} onChange={(e) => setFarbe5(e.target.value)} />
                              <div className="eleven">Nr6</div>
                              <input type="text" className="twelve beauty" value={farbe6} onChange={(e) => setFarbe6(e.target.value)} />
                              <div className="thirdteen">Nr7</div>
                              <input type="text" className="fourteen beauty" value={farbe7} onChange={(e) => setFarbe7(e.target.value)} />
                              <div className="fifteen">Nr8</div>
                              <input type="text" className="sixteen beauty" value={farbe8} onChange={(e) => setFarbe8(e.target.value)} />
                              <div className="seventeen">Nr9</div>
                              <input type="text" className="eightteen beauty" value={farbe9} onChange={(e) => setFarbe9(e.target.value)} />
                              <div className="nineteen">Nr10</div>
                              <input type="text" className="twenty beauty" value={farbe10} onChange={(e) => setFarbe10(e.target.value)} />
                              <div className="twetyone">Nr11</div>
                              <input type="text" className="twentytwo beauty" value={farbe11} onChange={(e) => setFarbe11(e.target.value)} />
                              <div className="twentythree">Nr12</div>
                              <input type="text" className="twentyfour beauty" value={farbe12} onChange={(e) => setFarbe12(e.target.value)} />
                         </div>

                         <div className="firstrow beauty multi12">
                              <div className="first">Nr1</div>
                              <input type="text" className="second beauty" value={farbe1e} onChange={(e) => setFarbe1e(e.target.value)} />
                              <div className="third">Nr2</div>
                              <input type="text" className="forth beauty" value={farbe2e} onChange={(e) => setFarbe2e(e.target.value)} />
                              <div className="fift">Nr3</div>
                              <input type="text" className="sixt beauty" value={farbe3e} onChange={(e) => setFarbe3e(e.target.value)} />
                              <div className="sevent">Nr4</div>
                              <input type="text" className="eight beauty" value={farbe4e} onChange={(e) => setFarbe4e(e.target.value)} />
                              <div className="nine">Nr5</div>
                              <input type="text" className="ten beauty" value={farbe5e} onChange={(e) => setFarbe5e(e.target.value)} />
                              <div className="eleven">Nr6</div>
                              <input type="text" className="twelve beauty" value={farbe6e} onChange={(e) => setFarbe6e(e.target.value)} />
                              <div className="thirdteen">Nr7</div>
                              <input type="text" className="fourteen beauty" value={farbe7e} onChange={(e) => setFarbe7e(e.target.value)} />
                              <div className="fifteen">Nr8</div>
                              <input type="text" className="sixteen beauty" value={farbe8e} onChange={(e) => setFarbe8e(e.target.value)} />
                              <div className="seventeen">Nr9</div>
                              <input type="text" className="eightteen beauty" value={farbe9e} onChange={(e) => setFarbe9e(e.target.value)} />
                              <div className="nineteen">Nr10</div>
                              <input type="text" className="twenty beauty" value={farbe10e} onChange={(e) => setFarbe10e(e.target.value)} />
                              <div className="twetyone">Nr11</div>
                              <input type="text" className="twentytwo beauty" value={farbe11e} onChange={(e) => setFarbe11e(e.target.value)} />
                              <div className="twentythree">Nr12</div>
                              <input type="text" className="twentyfour beauty" value={farbe12e} onChange={(e) => setFarbe12e(e.target.value)} />
                         </div>

                         <div className="secondrowe beauty multi12">
                              <div className="first">Nr1</div>
                              <input type="text" className="second beauty" value={farbe1i} onChange={(e) => setFarbe1i(e.target.value)} />
                              <div className="third">Nr2</div>
                              <input type="text" className="forth beauty" value={farbe2i} onChange={(e) => setFarbe2i(e.target.value)} />
                              <div className="fift">Nr3</div>
                              <input type="text" className="sixt beauty" value={farbe3i} onChange={(e) => setFarbe3i(e.target.value)} />
                              <div className="sevent">Nr4</div>
                              <input type="text" className="eight beauty" value={farbe4i} onChange={(e) => setFarbe4i(e.target.value)} />
                              <div className="nine">Nr5</div>
                              <input type="text" className="ten beauty" value={farbe5i} onChange={(e) => setFarbe5i(e.target.value)} />
                              <div className="eleven">Nr6</div>
                              <input type="text" className="twelve beauty" value={farbe6i} onChange={(e) => setFarbe6i(e.target.value)} />
                              <div className="thirdteen">Nr7</div>
                              <input type="text" className="fourteen beauty" value={farbe7i} onChange={(e) => setFarbe7i(e.target.value)} />
                              <div className="fifteen">Nr8</div>
                              <input type="text" className="sixteen beauty" value={farbe8i} onChange={(e) => setFarbe8i(e.target.value)} />
                              <div className="seventeen">Nr9</div>
                              <input type="text" className="eightteen beauty" value={farbe9i} onChange={(e) => setFarbe9i(e.target.value)} />
                              <div className="nineteen">Nr10</div>
                              <input type="text" className="twenty beauty" value={farbe10i} onChange={(e) => setFarbe10i(e.target.value)} />
                              <div className="twetyone">Nr11</div>
                              <input type="text" className="twentytwo beauty" value={farbe11i} onChange={(e) => setFarbe11i(e.target.value)} />
                              <div className="twentythree">Nr12</div>
                              <input type="text" className="twentyfour beauty" value={farbe12i} onChange={(e) => setFarbe12i(e.target.value)} />
                         </div>
                    </span>
                    <span className="firstcol eightrow">ID</span>

                    <input type="text" className="thirdcol eightrow beauty" value={id} onChange={(e) => setId(e.target.value)} />

                    <span className="firstcol ninerow">Pflege</span>

                    <input type="text" className="thirdcol ninerow beauty" value={pflege} onChange={(e) => setPflege(e.target.value)} />

                    <span className="firstcol tenrow">Zertifikat</span>
                    <div className="thirdcolcert tenrow">
                         <input className="firstcolcert height marginsize" height="20px" type="checkbox" id="oko" onClick={(e) => setCert(e.target.value)} value="1" />
                         <label className="secondcolcert beauty marginsize" for="oko">
                              {" "}
                              Ökotex
                         </label>
                    </div>
                    <div className="thirdcolcert2 tenrow">
                         <input className="firstcolcert height marginsize" type="checkbox" id="gots" onClick={(e) => setCert(e.target.value)} value="2" />
                         <label className="secondcolcert beauty marginsize" for="gots">
                              {" "}
                              Ökotex & GOTS
                         </label>
                    </div>
                    <div className="thirdcolcert3 tenrow">
                         {" "}
                         <input className="firstcolcert height marginsize" type="checkbox" id="nix" onClick={(e) => setCert(e.target.value)} value="0" />
                         <label className="secondcolcert beauty marginsize" for="nix">
                              {" "}
                              nix
                         </label>
                         <div className="dreicol">{cert}</div>
                    </div>
                    <button className="btn elevenrow senden" onClick={() => PostItem()}>
                         Speichern
                    </button>
               </div>
          )
     }
     function bear() {
          return (
               <div className="smallgrid beauty">
                    <span className="firstcol firstrow">Name </span>

                    <input type="text" className="thirdcol  firstrow beauty" value={name} onChange={(e) => setName(e.target.value)} />

                    <span className="firstcol secondrow">
                         <span className="firstrowe">Description</span>
                         <span className="firstrow">Description Englisch</span>
                         <span className="secondrowe">Description Italienisch</span>
                    </span>

                    <span className="thirdcol secondrow">
                         <textarea type="text" className="beauty firstrowe" value={description} onChange={(e) => setDescription(e.target.value)} />

                         <textarea type="text" className="firstrow beauty" value={descriptione} onChange={(e) => setDescriptione(e.target.value)} />

                         <textarea type="text" className="secondrowe beauty" value={descriptioni} onChange={(e) => setDescriptioni(e.target.value)} />
                    </span>

                    <span className="firstcol thirdrow">Image Name</span>

                    <div className="thirdcol thirdrow beauty multi4">
                         <input type="text" className="first beauty" value={imgUrl1} onChange={(e) => setimgUrl1(e.target.value)} />
                         <input type="text" className="second beauty" value={imgUrl2} onChange={(e) => setimgUrl2(e.target.value)} />
                         <input type="text" className="third beauty" value={imgUrl3} onChange={(e) => setimgUrl3(e.target.value)} />
                         <input type="text" className="forth beauty" value={imgUrl4} onChange={(e) => setimgUrl4(e.target.value)} />
                    </div>
                    <span className="firstcol forthrow">Preis</span>

                    <input type="text" className="thirdcol forthrow beauty" value={preis1} onChange={(e) => setPreis1(e.target.value)} />

                    <span className="firstcol sixthrow">
                         <span className="firstrowe beauty">Material</span>
                         <span className="firstrow beauty">Material Englisch</span>
                         <span className="secondrowe beauty">Material Italienisch</span>
                    </span>
                    <span className="thirdcol sixthrow">
                         <div className="firstrowe beauty multi">
                              <input type="text" className="first beauty" value={material1} onChange={(e) => setMaterial1(e.target.value)} />
                              <input type="text" className="second beauty" value={material2} onChange={(e) => setMaterial2(e.target.value)} />
                              <input type="text" className="third beauty" value={material3} onChange={(e) => setMaterial3(e.target.value)} />
                         </div>
                         <div className="firstrow beauty multi">
                              <input type="text" className="first beauty" value={material1e} onChange={(e) => setMaterial1e(e.target.value)} />
                              <input type="text" className="second beauty" value={material2e} onChange={(e) => setMaterial2e(e.target.value)} />
                              <input type="text" className="third beauty" value={material3e} onChange={(e) => setMaterial3e(e.target.value)} />
                         </div>
                         <div className="secondrowe beauty multi">
                              <input type="text" className="first beauty" value={material1i} onChange={(e) => setMaterial1i(e.target.value)} />
                              <input type="text" className="second beauty" value={material2i} onChange={(e) => setMaterial2i(e.target.value)} />
                              <input type="text" className="third beauty" value={material3i} onChange={(e) => setMaterial3i(e.target.value)} />
                         </div>
                    </span>
                    <span className="firstcol eightrow">ID</span>

                    <input type="text" className="thirdcol eightrow beauty" value={id} onChange={(e) => setId(e.target.value)} />

                    <span className="firstcol ninerow">Pflege</span>

                    <input type="text" className="thirdcol ninerow beauty" value={pflege} onChange={(e) => setPflege(e.target.value)} />

                    <span className="firstcol tenrow">Zertifikat</span>
                    <div className="thirdcolcert tenrow">
                         <input className="firstcolcert height marginsize" height="20px" type="checkbox" id="oko" onClick={(e) => setCert(e.target.value)} value="1" />
                         <label className="secondcolcert beauty marginsize" for="oko">
                              {" "}
                              Ökotex
                         </label>
                    </div>
                    <div className="thirdcolcert2 tenrow">
                         <input className="firstcolcert height marginsize" type="checkbox" id="gots" onClick={(e) => setCert(e.target.value)} value="2" />
                         <label className="secondcolcert beauty marginsize" for="gots">
                              {" "}
                              Ökotex & GOTS
                         </label>
                    </div>
                    <div className="thirdcolcert3 tenrow">
                         {" "}
                         <input className="firstcolcert height marginsize" type="checkbox" id="nix" onClick={(e) => setCert(e.target.value)} value="0" />
                         <label className="secondcolcert beauty marginsize" for="nix">
                              {" "}
                              nix
                         </label>
                         <div className="dreicol">{cert}</div>
                    </div>
                    <button className="btn elevenrow senden" onClick={() => PostItem()}>
                         Speichern
                    </button>
               </div>
          )
     }

     const DeleteItem = () => {
          if (name === "" || id === "") {
               alert("Fill out all Values")
               return
          } else {
               fetch("http://" + url + "/api/deleteitem/", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                         name,
                         id
                    })
               })
                    .then((data) => data.json())
                    .then((text) => {
                         setName("")
                         setId("")
                         alert(text._status)
                    })
          }
     }

     function PostItem() {
          if (material3 !== "") {
               materialien = [material1, material2, material3]
          } else if (material2 !== "") {
               materialien = [material1, material2]
          } else if (material1 !== "") {
               materialien = [material1]
          } else {
               return
          }

          if (material3e !== "") {
               materialiene = [material1e, material2e, material3e]
          } else if (material2 !== "") {
               materialiene = [material1e, material2e]
          } else if (material1e !== "") {
               materialiene = [material1e]
          } else {
               return
          }
          if (material3i !== "") {
               materialieni = [material1i, material2i, material3i]
          } else if (material2i !== "") {
               materialieni = [material1i, material2i]
          } else if (material1i !== "") {
               materialieni = [material1i]
          } else {
               return
          }

          if (preis4 !== "") {
               preise = [preis1, preis2, preis3, preis4]
          } else if (preis3 !== "") {
               preise = [preis1, preis2, preis3]
          } else if (preis2 !== "") {
               preise = [preis1, preis2]
          } else if (preis1 !== "") {
               preise = [preis1]
          } else {
               return
          }

          if (imgUrl4 !== "") {
               urls = ["/img/fotos-shop/" + imgUrl1 + ".jpg", "/img/fotos-shop/" + imgUrl2 + ".jpg", "/img/fotos-shop/" + imgUrl3 + ".jpg", "/img/fotos-shop/" + imgUrl4 + ".jpg"]
          } else if (imgUrl3 !== "") {
               urls = ["/img/fotos-shop/" + imgUrl1 + ".jpg", "/img/fotos-shop/" + imgUrl2 + ".jpg", "/img/fotos-shop/" + imgUrl3 + ".jpg"]
          } else if (imgUrl2 !== "") {
               urls = ["/img/fotos-shop/" + imgUrl1 + ".jpg", "/img/fotos-shop/" + imgUrl2 + ".jpg"]
          } else if (imgUrl1 !== "") {
               urls = ["/img/fotos-shop/" + imgUrl1 + ".jpg"]
          } else {
               return
          }

          if (grose12 !== "" && grose11 !== "" && grose10 !== "" && grose9 !== "" && grose8 !== "" && grose7 !== "" && grose6 !== "" && grose5 !== "" && grose4 !== "" && grose3 !== "" && grose2 !== "" && grose1 !== "") {
               grosen = [grose1, grose2, grose3, grose4, grose5, grose6, grose7, grose8, grose9, grose10, grose11, grose12]
          } else {
               if (
                    farbe12 !== "" &&
                    farbe11 !== "" &&
                    farbe10 !== "" &&
                    farbe9 !== "" &&
                    farbe8 !== "" &&
                    farbe7 !== "" &&
                    farbe6 !== "" &&
                    farbe5 !== "" &&
                    farbe4 !== "" &&
                    farbe3 !== "" &&
                    farbe2 !== "" &&
                    farbe1 !== "" &&
                    farbe12e !== "" &&
                    farbe11e !== "" &&
                    farbe10e !== "" &&
                    farbe9e !== "" &&
                    farbe8e !== "" &&
                    farbe7e !== "" &&
                    farbe6e !== "" &&
                    farbe5e !== "" &&
                    farbe4e !== "" &&
                    farbe3e !== "" &&
                    farbe2e !== "" &&
                    farbe1e !== "" &&
                    farbe12i !== "" &&
                    farbe11i !== "" &&
                    farbe10i !== "" &&
                    farbe9i !== "" &&
                    farbe8i !== "" &&
                    farbe7i !== "" &&
                    farbe6i !== "" &&
                    farbe5i !== "" &&
                    farbe4i !== "" &&
                    farbe3i !== "" &&
                    farbe2i !== "" &&
                    farbe1i !== ""
               ) {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5, farbe6, farbe7, farbe8, farbe9, farbe10, farbe11, farbe12]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e, farbe6e, farbe7e, farbe8e, farbe9e, farbe10e, farbe11e, farbe12e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i, farbe6i, farbe7i, farbe8i, farbe9i, farbe10i, farbe11i, farbe12i]
               } else if (
                    farbe11 !== "" &&
                    farbe10 !== "" &&
                    farbe9 !== "" &&
                    farbe8 !== "" &&
                    farbe7 !== "" &&
                    farbe6 !== "" &&
                    farbe5 !== "" &&
                    farbe4 !== "" &&
                    farbe3 !== "" &&
                    farbe2 !== "" &&
                    farbe1 !== "" &&
                    farbe11e !== "" &&
                    farbe10e !== "" &&
                    farbe9e !== "" &&
                    farbe8e !== "" &&
                    farbe7e !== "" &&
                    farbe6e !== "" &&
                    farbe5e !== "" &&
                    farbe4e !== "" &&
                    farbe3e !== "" &&
                    farbe2e !== "" &&
                    farbe1e !== "" &&
                    farbe11i !== "" &&
                    farbe10i !== "" &&
                    farbe9i !== "" &&
                    farbe8i !== "" &&
                    farbe7i !== "" &&
                    farbe6i !== "" &&
                    farbe5i !== "" &&
                    farbe4i !== "" &&
                    farbe3i !== "" &&
                    farbe2i !== "" &&
                    farbe1i !== ""
               ) {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5, farbe6, farbe7, farbe8, farbe9, farbe10, farbe11]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e, farbe6e, farbe7e, farbe8e, farbe9e, farbe10e, farbe11e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i, farbe6i, farbe7i, farbe8i, farbe9i, farbe10i, farbe11i]
               } else if (
                    farbe10 !== "" &&
                    farbe9 !== "" &&
                    farbe8 !== "" &&
                    farbe7 !== "" &&
                    farbe6 !== "" &&
                    farbe5 !== "" &&
                    farbe4 !== "" &&
                    farbe3 !== "" &&
                    farbe2 !== "" &&
                    farbe1 !== "" &&
                    farbe10e !== "" &&
                    farbe9e !== "" &&
                    farbe8e !== "" &&
                    farbe7e !== "" &&
                    farbe6e !== "" &&
                    farbe5e !== "" &&
                    farbe4e !== "" &&
                    farbe3e !== "" &&
                    farbe2e !== "" &&
                    farbe1e !== "" &&
                    farbe10i !== "" &&
                    farbe9i !== "" &&
                    farbe8i !== "" &&
                    farbe7i !== "" &&
                    farbe6i !== "" &&
                    farbe5i !== "" &&
                    farbe4i !== "" &&
                    farbe3i !== "" &&
                    farbe2i !== "" &&
                    farbe1i !== ""
               ) {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5, farbe6, farbe7, farbe8, farbe9, farbe10]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e, farbe6e, farbe7e, farbe8e, farbe9e, farbe10e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i, farbe6i, farbe7i, farbe8i, farbe9i, farbe10i]
               } else if (
                    farbe9 !== "" &&
                    farbe8 !== "" &&
                    farbe7 !== "" &&
                    farbe6 !== "" &&
                    farbe5 !== "" &&
                    farbe4 !== "" &&
                    farbe3 !== "" &&
                    farbe2 !== "" &&
                    farbe1 !== "" &&
                    farbe9e !== "" &&
                    farbe8e !== "" &&
                    farbe7e !== "" &&
                    farbe6e !== "" &&
                    farbe5e !== "" &&
                    farbe4e !== "" &&
                    farbe3e !== "" &&
                    farbe2e !== "" &&
                    farbe1e !== "" &&
                    farbe9i !== "" &&
                    farbe8i !== "" &&
                    farbe7i !== "" &&
                    farbe6i !== "" &&
                    farbe5i !== "" &&
                    farbe4i !== "" &&
                    farbe3i !== "" &&
                    farbe2i !== "" &&
                    farbe1i !== ""
               ) {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5, farbe6, farbe7, farbe8, farbe9]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e, farbe6e, farbe7e, farbe8e, farbe9e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i, farbe6i, farbe7i, farbe8i, farbe9i]
               } else if (
                    farbe8 !== "" &&
                    farbe7 !== "" &&
                    farbe6 !== "" &&
                    farbe5 !== "" &&
                    farbe4 !== "" &&
                    farbe3 !== "" &&
                    farbe2 !== "" &&
                    farbe1 !== "" &&
                    farbe8e !== "" &&
                    farbe7e !== "" &&
                    farbe6e !== "" &&
                    farbe5e !== "" &&
                    farbe4e !== "" &&
                    farbe3e !== "" &&
                    farbe2e !== "" &&
                    farbe1e !== "" &&
                    farbe8i !== "" &&
                    farbe7i !== "" &&
                    farbe6i !== "" &&
                    farbe5i !== "" &&
                    farbe4i !== "" &&
                    farbe3i !== "" &&
                    farbe2i !== "" &&
                    farbe1i !== ""
               ) {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5, farbe6, farbe7, farbe8]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e, farbe6e, farbe7e, farbe8e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i, farbe6i, farbe7i, farbe8i]
               } else if (
                    farbe7 !== "" &&
                    farbe6 !== "" &&
                    farbe5 !== "" &&
                    farbe4 !== "" &&
                    farbe3 !== "" &&
                    farbe2 !== "" &&
                    farbe1 !== "" &&
                    farbe7e !== "" &&
                    farbe6e !== "" &&
                    farbe5e !== "" &&
                    farbe4e !== "" &&
                    farbe3e !== "" &&
                    farbe2e !== "" &&
                    farbe1e !== "" &&
                    farbe7i !== "" &&
                    farbe6i !== "" &&
                    farbe5i !== "" &&
                    farbe4i !== "" &&
                    farbe3i !== "" &&
                    farbe2i !== "" &&
                    farbe1i !== ""
               ) {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5, farbe6, farbe7]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e, farbe6e, farbe7e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i, farbe6i, farbe7i]
               } else if (
                    farbe6 !== "" &&
                    farbe5 !== "" &&
                    farbe4 !== "" &&
                    farbe3 !== "" &&
                    farbe2 !== "" &&
                    farbe1 !== "" &&
                    farbe6e !== "" &&
                    farbe5e !== "" &&
                    farbe4e !== "" &&
                    farbe3e !== "" &&
                    farbe2e !== "" &&
                    farbe1e !== "" &&
                    farbe6i !== "" &&
                    farbe5i !== "" &&
                    farbe4i !== "" &&
                    farbe3i !== "" &&
                    farbe2i !== "" &&
                    farbe1i !== ""
               ) {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5, farbe6]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e, farbe6e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i, farbe6i]
               } else if (farbe5 !== "" && farbe4 !== "" && farbe3 !== "" && farbe2 !== "" && farbe1 !== "" && farbe5e !== "" && farbe4e !== "" && farbe3e !== "" && farbe2e !== "" && farbe1e !== "" && farbe5i !== "" && farbe4i !== "" && farbe3i !== "" && farbe2i !== "" && farbe1i !== "") {
                    farben = [farbe1, farbe2, farbe3, farbe4, farbe5]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e, farbe5e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i, farbe5i]
               } else if (farbe4 !== "" && farbe3 !== "" && farbe2 !== "" && farbe1 !== "" && farbe4e !== "" && farbe3e !== "" && farbe2e !== "" && farbe1e !== "" && farbe4i !== "" && farbe3i !== "" && farbe2i !== "" && farbe1i !== "") {
                    farben = [farbe1, farbe2, farbe3, farbe4]
                    farbene = [farbe1e, farbe2e, farbe3e, farbe4e]
                    farbeni = [farbe1i, farbe2i, farbe3i, farbe4i]
               } else if (farbe3 !== "" && farbe2 !== "" && farbe1 !== "" && farbe3e !== "" && farbe2e !== "" && farbe1e !== "" && farbe3i !== "" && farbe2i !== "" && farbe1i !== "") {
                    farben = [farbe1, farbe2, farbe3]
                    farbene = [farbe1e, farbe2e, farbe3e]
                    farbeni = [farbe1i, farbe2i, farbe3i]
               } else if (farbe2 !== "" && farbe1 !== "" && farbe2e !== "" && farbe1e !== "" && farbe2i !== "" && farbe1i !== "") {
                    farben = [farbe1, farbe2]
                    farbene = [farbe1e, farbe2e]
                    farbeni = [farbe1i, farbe2i]
               } else if (farbe1 !== "" && farbe1e !== "" && farbe1i !== "") {
                    farben = [farbe1]
                    farbene = [farbe1e]
                    farbeni = [farbe1i]
               } else if (bears === "true") {
               } else if (wahlbar === "0") {
               } else {
                    return
               }
          }

          detail = "/produkt/" + id

          if (kleidungg === "true") {
               if (
                    name === "" ||
                    description === "" ||
                    descriptione === "" ||
                    descriptioni === "" ||
                    imgUrl4 === "" ||
                    imgUrl3 === "" ||
                    imgUrl2 === "" ||
                    imgUrl1 === "" ||
                    preis1 === "" ||
                    preis2 === "" ||
                    preis3 === "" ||
                    preis4 === "" ||
                    materialien === [] ||
                    materialiene === [] ||
                    materialieni === [] ||
                    grose12 === "" ||
                    grose11 === "" ||
                    grose10 === "" ||
                    grose9 === "" ||
                    grose8 === "" ||
                    grose7 === "" ||
                    grose6 === "" ||
                    grose5 === "" ||
                    grose3 === "" ||
                    grose3 === "" ||
                    grose2 === "" ||
                    grose1 === "" ||
                    pflege === "" ||
                    cert === "" ||
                    id === ""
               ) {
                    alert("Fill out all Values")
                    return
               } else {
                    fetch("http://" + url + "/api/postitem/kleidung", {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json"
                         },

                         body: JSON.stringify({
                              name,
                              description,
                              descriptione,
                              descriptioni,
                              urls,
                              preise,
                              detail,
                              materialien,
                              materialiene,
                              materialieni,
                              grosen,
                              pflege,
                              cert,
                              id
                         })
                    })
                         .then((data) => data.json())
                         .then((text) => {
                              setName("")
                              setDescription("")
                              setDescriptione("")
                              setDescriptioni("")
                              setimgUrl1("")
                              setimgUrl2("")
                              setimgUrl3("")
                              setimgUrl4("")
                              setId("")
                              setPreis1("")
                              setPreis2("")
                              setPreis3("")
                              setPreis4("")
                              setGrose1("")
                              setGrose2("")
                              setGrose3("")
                              setGrose4("")
                              setGrose5("")
                              setGrose6("")
                              setGrose7("")
                              setGrose8("")
                              setGrose9("")
                              setGrose10("")
                              setGrose11("")
                              setGrose12("")
                              setMaterial1("")
                              setMaterial2("")
                              setMaterial3("")
                              setMaterial1e("")
                              setMaterial2e("")
                              setMaterial3e("")
                              setMaterial1i("")
                              setMaterial2i("")
                              setMaterial3i("")
                              setPflege("")

                              var elm = document.getElementById("oko")
                              if (elm.checked) {
                                   elm.click()
                              }

                              var elm = document.getElementById("gots")
                              if (elm.checked) {
                                   elm.click()
                              }
                              var elm = document.getElementById("nix")
                              if (elm.checked) {
                                   elm.click()
                              }
                              setCert("")
                              alert(text._status)
                         })
               }
          } else if (bears === "true") {
               if (
                    name === "" ||
                    description === "" ||
                    pflege === "" ||
                    cert === "" ||
                    descriptione === "" ||
                    descriptioni === "" ||
                    imgUrl4 === "" ||
                    imgUrl3 === "" ||
                    imgUrl2 === "" ||
                    imgUrl1 === "" ||
                    preis1 === "" ||
                    preise === [] ||
                    materialien === [] ||
                    materialiene === [] ||
                    materialieni === [] ||
                    id === ""
               ) {
                    alert("Fill out all Values")
                    return
               } else {
                    fetch("http://" + url + "/api/postitem/bears", {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json"
                         },

                         body: JSON.stringify({
                              name,
                              description,
                              descriptione,
                              descriptioni,
                              urls,
                              preise,
                              detail,
                              materialien,
                              materialiene,
                              materialieni,
                              pflege,
                              cert,
                              id
                         })
                    })
                         .then((data) => data.json())
                         .then((text) => {
                              setName("")
                              setDescription("")
                              setDescriptione("")
                              setDescriptioni("")
                              setPreis1("")
                              setimgUrl1("")
                              setimgUrl2("")
                              setimgUrl3("")
                              setimgUrl4("")
                              setId("")
                              setMaterial1("")
                              setMaterial2("")
                              setMaterial3("")
                              setMaterial1e("")
                              setMaterial2e("")
                              setMaterial3e("")
                              setMaterial1i("")
                              setMaterial2i("")
                              setMaterial3i("")
                              setPflege("")

                              var elm = document.getElementById("oko")
                              if (elm.checked) {
                                   elm.click()
                              }

                              var elm = document.getElementById("gots")
                              if (elm.checked) {
                                   elm.click()
                              }
                              var elm = document.getElementById("nix")
                              if (elm.checked) {
                                   elm.click()
                              }
                              setCert("")
                              alert(text._status)
                         })
               }
          } else if (accessoiress === "true") {
               if (
                    name === "" ||
                    description === "" ||
                    descriptione === "" ||
                    descriptioni === "" ||
                    pflege === "" ||
                    cert === "" ||
                    imgUrl4 === "" ||
                    imgUrl3 === "" ||
                    imgUrl2 === "" ||
                    imgUrl1 === "" ||
                    preis1 === "" ||
                    preise === [] ||
                    materialien === [] ||
                    materialiene === [] ||
                    materialieni === [] ||
                    farben === [] ||
                    farbene === [] ||
                    farbeni === [] ||
                    id === "" ||
                    wahlbar === ""
               ) {
                    alert("Fill out all Values")
                    return
               } else {
                    fetch("http://" + url + "/api/postitem/accessoires", {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json"
                         },

                         body: JSON.stringify({
                              name,
                              description,
                              descriptione,
                              descriptioni,
                              urls,
                              preise,
                              detail,
                              materialien,
                              materialiene,
                              materialieni,
                              farben,
                              farbene,
                              farbeni,
                              pflege,
                              cert,
                              id,
                              wahlbar
                         })
                    })
                         .then((data) => data.json())
                         .then((text) => {
                              setName("")
                              setDescription("")
                              setDescriptione("")
                              setDescriptioni("")
                              setPreis1("")

                              setimgUrl1("")
                              setimgUrl2("")
                              setimgUrl3("")
                              setimgUrl4("")

                              setMaterial1("")
                              setMaterial2("")
                              setMaterial3("")

                              setMaterial1e("")
                              setMaterial2e("")
                              setMaterial3e("")

                              setMaterial1i("")
                              setMaterial2i("")
                              setMaterial3i("")

                              setFarbe1("")
                              setFarbe2("")
                              setFarbe3("")
                              setFarbe4("")
                              setFarbe5("")
                              setFarbe6("")
                              setFarbe7("")
                              setFarbe8("")
                              setFarbe9("")
                              setFarbe10("")
                              setFarbe11("")
                              setFarbe12("")

                              setFarbe1e("")
                              setFarbe2e("")
                              setFarbe3e("")
                              setFarbe4e("")
                              setFarbe5e("")
                              setFarbe6e("")
                              setFarbe7e("")
                              setFarbe8e("")
                              setFarbe9e("")
                              setFarbe10e("")
                              setFarbe11e("")
                              setFarbe12e("")

                              setFarbe1i("")
                              setFarbe2i("")
                              setFarbe3i("")
                              setFarbe4i("")
                              setFarbe5i("")
                              setFarbe6i("")
                              setFarbe7i("")
                              setFarbe8i("")
                              setFarbe9i("")
                              setFarbe10i("")
                              setFarbe11i("")
                              setFarbe12i("")

                              setWahl("")
                              setId("")
                              setPflege("")

                              var elm = document.getElementById("oko")
                              if (elm.checked) {
                                   elm.click()
                              }

                              var elm = document.getElementById("gots")
                              if (elm.checked) {
                                   elm.click()
                              }
                              var elm = document.getElementById("nix")
                              if (elm.checked) {
                                   elm.click()
                              }
                              setCert("")
                              alert(text._status)
                         })
               }
          }
     }

     return (
          <div>
               {
                    <div className="admin">
                         <div className="card auth-card input-field rows">
                              <div id="dropdownitem" className="firstrowe dropdownitem">
                                   <h2 className="headline4">Welchen Artikel willst du anlegen</h2>
                                   <button
                                        className="btn smallbtn"
                                        onClick={() => {
                                             setKleidung("true")
                                             const dropdownitem = document.getElementById("dropdownitem")
                                             if (dropdownitem.classList.contains("expanditem")) {
                                                  dropdownitem.classList.remove("expanditem")
                                                  setKleidung("")
                                                  setBears("")
                                                  setAccessoires("")
                                             } else {
                                                  dropdownitem.classList.add("expanditem")
                                                  setBears("")
                                                  setKleidung("true")
                                                  setAccessoires("")
                                             }
                                        }}>
                                        Kleidung
                                   </button>
                                   <button
                                        className="btn smallbtn"
                                        onClick={() => {
                                             const dropdownitemm = document.getElementById("dropdownitem")
                                             if (dropdownitemm.classList.contains("expanditem")) {
                                                  dropdownitemm.classList.remove("expanditem")
                                                  setKleidung("")
                                                  setBears("")
                                                  setAccessoires("")
                                             } else {
                                                  dropdownitemm.classList.add("expanditem")
                                                  setBears("true")
                                                  setKleidung("")
                                                  setAccessoires("")
                                             }
                                        }}>
                                        Bären
                                   </button>
                                   <button
                                        className="btn smallbtn"
                                        onClick={() => {
                                             const dropdownitem = document.getElementById("dropdownitem")
                                             if (dropdownitem.classList.contains("expanditem")) {
                                                  dropdownitem.classList.remove("expanditem")
                                                  setKleidung("")
                                                  setBears("")
                                                  setAccessoires("")
                                             } else {
                                                  setAccessoires("true")
                                                  setBears("")
                                                  setKleidung("")
                                                  dropdownitem.classList.add("expanditem")
                                             }
                                        }}>
                                        Accessoires
                                   </button>

                                   {kleidungg === "true" && kleidung()}
                                   {bears === "true" && bear()}
                                   {accessoiress === "true" && accessoires()}
                              </div>
                              <div className="secondrow">
                                   <h2 className="headline4">Welchen Artikel willst du löschen?</h2>

                                   {deleteitem()}
                              </div>
                         </div>
                    </div>
               }
          </div>
     )
}
export default Admin
