import React from 'react'
import './items.css'
import {Button} from 'reactstrap'


export const List = (props)=>{
    
   
  
    return(

     <li className="list-text mt-2">
        <Button outline color="success" className="rounded-circle " onClick={()=>props.handletaskCLick(props.id)}><i className="fa fa-hourglass" onClick={props.handletaskCLick}/></Button> {props.item}
        <i className="fa fa-trash  float-right fa-lg mr-4 text-secondary" onClick={()=>props.modal(props.id)}></i>
        <div className="gray">{props.detail}</div>
</li> 

)
}

export const CompleteList  = (props)=>{
    return(

        <li className="list-text mt-2">
           <Button  color="success" className="rounded-circle " ><i className="fa fa-check" /></Button> {props.item}</li> 
       )   
}