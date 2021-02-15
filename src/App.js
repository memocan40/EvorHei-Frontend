import{useState,useEffect} from "react";
import './App.css';
import Results from "./Historyform/Results"

function App() {
  let[DropdownValue,setDropdownValue]=useState();
  let[DropdownResult,setDropdownResult]=useState();
  let[Chargenumber,setChargenumber]=useState();
  let[Mengennummer,setMengennummer]=useState();
  let[Nummerarray,setNummerarray]=useState([]);
  let[MyArray,setMyArray]=useState([]);
  let[Result,setResult]=useState();
  let[History,setHistory]=useState([]);

  useEffect(()=>{
    setResult("Produkt="+DropdownResult+"    / Chargenummer= "+Chargenumber+"    Menge="+Mengennummer);
    setMyArray([Result]);
    
    
  })
  

  return (
    <div className="App">
    <div className="Header">Material erfassung Mobile</div>


<div className="Dropdown">
<label for="Products" className="Label">Material</label>
<select name="Products" id="Products" onChange={(event)=>{setDropdownValue(event.target.value)}}>
  <option value=""></option>
  <option value="Reifen">Reifen</option>
  <option value="Motor">Motor</option>
  <option value="Felge">Felge</option>
</select>
<button onClick={()=>{setDropdownResult(DropdownValue)}} >&#10003;</button>
</div>

<div className="Inputs">
  <label  for="Chargenummer">Charge.Nr</label>
  <input type="text" id="Chargenummer" name="Chargenummer" onChange={(event)=>{setChargenumber(event.target.value)}}></input>

  <label for="Menge">Menge</label>
  <input type="number" id="Menge" name="Menge" onChange={(event)=>{setMengennummer(event.target.value)}}></input>
</div>

<div className="Save">
  <button onClick={()=>{
    Nummerarray.push(Mengennummer);
    History.push(MyArray)}} >Save</button>
</div>

<div className="History">
<Results  Param={History} />
  
  
</div>
     
    </div>
  );
}

export default App;
