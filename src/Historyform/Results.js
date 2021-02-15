import "./Result.css";

export default function Results({Param}){
const ClickHandler=(event)=>{event.target.parentNode.remove()};

return(
<div>
    <ol>
        {Param.map((iteration,index)=>{return(<li className="List" key={index}><p className="Input">{iteration}  <button className="Button" onClick={ClickHandler}>Delete</button></p> </li>)})}
    </ol>
</div>

)
}