


export default function Results({Param,Menge}){
const ClickHandler=(event)=>{event.target.parentNode.remove()}
return(
<div>
    <ol>
        {Param.map((iteration,index)=>{return(<li key={index}>{iteration}  {Menge}<button onClick={ClickHandler}>Delete</button> </li>)})}
    </ol>
</div>

)
}