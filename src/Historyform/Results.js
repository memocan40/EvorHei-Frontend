


export default function Results({Param,Menge}){

return(
<div>
    <ol>
        {Param.map((iteration,index)=>{return(<li key={index}>{iteration}  {Menge} </li>)})}
    </ol>
</div>

)
}