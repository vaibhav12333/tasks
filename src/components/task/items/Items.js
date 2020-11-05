import React, {useState } from 'react';
import './items.css'
import {List,CompleteList} from './List'
import {Button} from 'reactstrap'

 
export const TaskList = (props)=>{
    const [itemList,setitemList] = useState()
    const [itemValue,setitemValue] = useState([])
    const [complete,setcomplete]  = useState([])
    const [del,setdel] = useState()
    const [detail,setdetail] = useState()
  
   
    const itemChange = (e)=>{
        setitemList(e.target.value)
    }
    const listEvent = ()=>{
        setitemValue((oldItems)=>{
            return [...oldItems,itemList]
        })
        setitemList("")
    }
    
    const deleteClick = ()=>{
            setitemValue(()=>{
                return itemValue.filter((item,index)=>{
                    return index !== del
                })
            
            })
        
    }
    let modalitem = itemValue.filter((item,index)=>{return index === del})

    const handleClick = (id)=>{
        setcomplete(()=>{
            return [...complete,itemValue.filter((item,index)=>{
             return   index === id
            })[0]]
        })
        console.log(complete)

        setitemValue((oldItems)=>{
            return oldItems.filter((arr,index)=>{
                return index !== id
            })

        })
        
        


    }
    const handleModal = (id)=>{
        setdel(id)
        deleteClick()
    }
    return (
        <div className="task-container mt-5">
          
            <div className="task-list-name ml-2 text-primary mt-1">
                {props.val}           <Button outline color="danger " className="trash float-right border-0" onClick={props.delete}><i className="fa fa-trash  fa-lg" /></Button>

            </div>
            <input type="text" 
            value={itemList}
            className="form__field m-3" placeholder="New Task" onChange={itemChange}/>
            <button className="btn btn-primary btn-md rounded-circle " onClick={listEvent}><strong>+</strong></button>
            <br />
            <div>
                <p className="text-primary">Pending({itemValue.length})</p>
                <ol className="pl-3">
                  
                    {itemValue.map((item,index)=>{
                       return  <List item={item} id={index} key={index} handletaskCLick={handleClick} modal={handleModal} detail={detail}/>
                    })}
                </ol>
            </div>
            <hr />
            <div>
                <p className="text-success">Completed({complete.length})</p>
                <ol className="pl-3">
                  
                    {complete.map((item,index)=>{
                       return  <CompleteList item={item} id={index} key={index} />
                    })}
                </ol>
            </div>
            <div>
               
            </div>
        </div>
    )
}