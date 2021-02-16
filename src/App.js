import{useState,useEffect} from "react";
import './App.css';
import Results from "./Historyform/Results"
import axios from "axios";



function App() {
 
axios.get("https://radiant-peak-90735.herokuapp.com/").then((res)=>{console.log(res)})



  //UseStates
  let[DropdownValue,setDropdownValue]=useState();
  let[DropdownResult,setDropdownResult]=useState();
  let[Chargenumber,setChargenumber]=useState();
  let[Mengennummer,setMengennummer]=useState();
  let[MyArray,setMyArray]=useState([]);
  let[Result,setResult]=useState();
  let[History,setHistory]=useState([]);

  axios.post("https://radiant-peak-90735.herokuapp.com/data",{data:"hello"}).then((res)=>{console.log(res)});

  //Zeitstempel

  let time=new Date();
  let hours=time.getHours();
  let minutes=time.getMinutes();

  const update=()=>{

    if(DropdownResult===undefined){
      setDropdownResult("Kein Produkt gewählt!")}
      else if(Chargenumber===undefined){setChargenumber("Keine Chargenummer gewählt!")}
      else if(Mengennummer===undefined){setMengennummer("Keine Menge gewählt!")}
    
    setResult("||Produkt="+DropdownResult+" ||    Chargenummer= "+Chargenumber+"  ||  Menge="+Mengennummer+"||"+"Zeit:"+hours+":"+minutes+"||");
    setMyArray([Result]);
    
    
  }
  
  const DeleteAll=(e)=>{
  setHistory([]);
window.location.reload();}

  return (
    <div className="App">
    <div className="Header">Material erfassung Mobile


<div className="Dropdown">


<label for="Products" className="Label">Material</label>
<select className="dropdown" name="Products" id="Products" onChange={(event)=>{setDropdownValue(event.target.value)}}>
  <option value=""></option>
  <option value="Reifen">Reifen</option>
  <option value="Motor">Motor</option>
  <option value="Felge">Felge</option>
</select>
<button onClick={()=>{setDropdownResult(DropdownValue)}} >&#10003;</button>
</div>

<div className="Inputs">
  <label  for="Chargenummer">Charge.Nr:</label>
  <input type="text" id="Chargenummer" name="Chargenummer" onChange={(event)=>{setChargenumber(event.target.value)}}></input>

  <label for="Menge">Menge:</label>
  <input type="number" id="Menge" name="Menge" onChange={(event)=>{setMengennummer(event.target.value)}}></input>
</div>

<div className="Save">
  <button onMouseMove={update} onClick={()=>{History.push(MyArray)}} >Save</button>
    <button onClick={DeleteAll}>Clear All</button>
</div></div>

<div className="History">
<h3>Material erfassungs-Liste</h3>
<Results  Param={History} />
  
  
</div>
     
    </div>
  );
}

export default App;
