import "./sidebar.css"

function Sidebar() {
     return (
          <div class="sidebar">
               <input type="text" id="search" value="search" />
               <div id="menubar">
                    <nav className="menu">
                         Artikel<br></br>
                         <hr></hr>
                         <input type="checkbox" id="artikel1" name="artikel1" value="Bike" />
                         <label for="artikel1"> Hoodie/Sweater</label>
                         <br></br>
                         <input type="checkbox" id="artikel2" name="artikel1" value="Bike" />
                         <label for="artikel1"> Shirts</label>
                         <br></br>
                         <input type="checkbox" id="artikel3" name="artikel1" value="Bike" />
                         <label for="artikel1"> Hosen/Leggings</label>
                         <br></br>
                         <input type="checkbox" id="artikel4" name="artikel1" value="Bike" />
                         <label for="artikel1"> Kleider</label>
                         <br></br>
                         <input type="checkbox" id="artikel5" name="artikel1" value="Bike" />
                         <label for="artikel1"> Strampler/Romper</label>
                         <br></br>
                    </nav>
                    <nav className="menu2">
                         <div className="menuhead">Größen</div>
                         <hr></hr>
                         <input type="checkbox" id="artikel6" name="artikel1" value="Bike" />
                         <label for="artikel1"> 52-62</label>
                         <br></br>
                         <input type="checkbox" id="artikel7" name="artikel1" value="Bike" />
                         <label for="artikel1"> 68-80</label>
                         <br></br>
                         <input type="checkbox" id="artikel8" name="artikel1" value="Bike" />
                         <label for="artikel1"> 92-110</label>
                         <br></br>
                         <input type="checkbox" id="artikel9" name="artikel1" value="Bike" />
                         <label for="artikel1"> 116-128</label>
                         <br></br>
                    </nav>
               </div>
          </div>
     )
}

export default Sidebar
