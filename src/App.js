import{useState} from "react";
import './App.css';
import Results from "./Historyform/Results"
import axios from "axios";



function App() {
 
axios.get("https://radiant-peak-90735.herokuapp.com/").then((res)=>{console.log(res)})



  //UseStates for inputs
  let[DropdownValue,setDropdownValue]=useState();
  let[DropdownResult,setDropdownResult]=useState();
  let[Chargenumber,setChargenumber]=useState();
  let[Mengennummer,setMengennummer]=useState();
//Usestates for handling the data in the list
  let[MyArray,setMyArray]=useState([]);
  let[Result,setResult]=useState();
  let[History,setHistory]=useState([]);
  
//data to send in database
  let data={data:Result};
  

  

  //Zeitstempel

  let time=new Date();
  let date=time.getDate();
  let day=time.getDay();
  let hours=time.getHours();
  let minutes=time.getMinutes();


  //Funktionen

  const save=()=>{History.push(MyArray);
    axios.post("https://radiant-peak-90735.herokuapp.com/data",data).then((res)=>{console.log(res)});}

  const update=()=>{

    if(DropdownResult===undefined||DropdownResult===""){
      setDropdownResult("Kein Produkt gewählt!")}
      if(Chargenumber===undefined||Chargenumber===""){setChargenumber("Keine Chargenummer gewählt!")}
      if(Mengennummer===undefined||Mengennummer===""){setMengennummer("Keine Menge gewählt!")}
    
    setResult("||Produkt="+DropdownResult+" ||    Chargenummer= "+Chargenumber+"  ||  Menge="+Mengennummer+"||"+"Datum:"+date+"."+day+" "+"Zeit="+hours+":"+minutes+"||");
    setMyArray([Result]);
  }
  
  const DeleteAll=(e)=>{
  setHistory([]);
window.location.reload();}

const Clear=()=>{
  document.querySelector("#Menge").value="";
  document.querySelector("#Chargenummer").value="";
  document.querySelector("#Products").value="";
}

const auswahl=()=>{
  document.querySelector("#auswahl").innerHTML="Produkt gewählt!";
  setTimeout(() => {
    document.querySelector("#auswahl").innerHTML="Wählen sie ihr Produkt"
  }, 2000);
}


  return (
    <div className="App"  onMouseOver={update} >
    <div className="Header">Material erfassung Mobile


<div className="Dropdown">


<label for="Products" className="Label" id="auswahl"> Wählen sie ihr Produkt</label>
<select className="dropdown" name="Products" id="Products" onChange={(event)=>{setDropdownValue(event.target.value)}}>
  <option value=""></option>
  <option value="Reifen">Reifen</option>
  <option value="Motor">Motor</option>
  <option value="Felge">Felge</option>
</select>

<button onClick={()=>{setDropdownResult(DropdownValue)}}  onMouseDown={auswahl}>&#10003;</button>

</div>

<div className="Inputs">
  <label  for="Chargenummer">Charge.Nr:</label>
  <input type="text" id="Chargenummer" name="Chargenummer"  onChange={(event)=>{setChargenumber(event.target.value)}}></input>

  <label for="Menge">Menge:</label>
  <input type="number" id="Menge" name="Menge" onChange={(event)=>{setMengennummer(event.target.value)}}></input>
</div>

<div className="Save">
  <button onMouseDown={save} onClick={update} >Save</button>
  <button onClick={Clear}>Clear</button>
    
</div></div>

<div className="History">
<h3>Material erfassungs-Liste    <button className="Clearall" onClick={DeleteAll}>Clear List</button></h3>
<Results  Param={History} />
  
  
</div>
     
    </div>
  );
}

export default App;
