import{useState} from "react";
import './App.css';

function App() {
  let[DropdownValue,setDropdownValue]=useState();
  
  return (
    <div className="App">

    <label for="Products">Choose a Product:</label>

<select name="Products" id="Products" onChange={(event)=>{setDropdownValue(event.target.value)}}>
  <option value=""></option>
  <option value="Reifen">Reifen</option>
  <option value="Motor">Motor</option>
  <option value="Felge">Felge</option>
</select>
     
    </div>
  );
}

export default App;
