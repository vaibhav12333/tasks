import React, { Component} from 'react';
import "./tasks.scss";
import { Collapse, Navbar, NavbarToggler,NavItem ,NavbarBrand, Modal,ModalHeader} from 'reactstrap';
import axios from 'axios';
import {TaskList} from './items/Items'
import { ModalBody } from 'react-bootstrap';


class Tasks extends Component {
    constructor(props){
        super(props);
        this.state={
            collapsed: false,
            listno: parseInt(1),
            list:[],
            modal: false,
            listName:"",
            image:""
            
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        }
    async componentDidMount(){
      const data = await axios.get(`https://picsum.photos/id/${Math.floor((Math.random()*999)+1)}/info`)
      this.setState({image:data.data.download_url})
      console.log(data)
      }
      0
    

    toggleNavbar(){
      this.setState({ collapsed: !this.state.collapsed})
    }
    toggleModal(){
      this.setState({ modal: !this.state.modal})
    }
    handleChange(e){
      if(e.charCode===13){
        if(e.target.value !== "")
       { this.setState({listName:e.target.value})
    this.setState([{...this.state,list:this.state.list.push((index)=>{  return(<TaskList key={index} val={this.state.listName} delete={()=>this.handleDelete(index)}/>)})}])
      console.log(this.state.list)
      this.toggleModal()}
      else{
        alert('Please Enter Name')
      }

      }  }
    handleClick(){

      this.setState({listno:parseInt(this.state.listno+1)})
      this.setState([{...this.state,list:this.state.list.push((index)=>{  return(<TaskList key={index} val={this.state.listName}  delete={()=>this.handleDelete(index)}/>)})}])
      console.log(this.state.list)
      this.toggleModal()

    }
    handleDelete(id){
       this.setState({list:this.state.list.filter((val,index)=> index !== id)})
       console.log(this.state.list)
    console.log(id)
    }

    
    render(){
      
    
        return(
             <div>
      <Navbar color="primary" dark>
        <NavbarBrand href="/" className="mr-auto"><strong>TasksBoard</strong></NavbarBrand>
        <img className="imag" src={this.state.image} />

      </Navbar>
      <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Enter List Name</ModalHeader>
          <ModalBody>
            <input type="text" name="list" className="form__field"  onKeyPress={this.handleChange} placeholder="List Name" required/>

          </ModalBody>
      </Modal>
      <div className="container-fluid">
        <div className="row">
          {this.state.list.map((val,index)=>{return(
                            <div className="col-3">
                              {val(index)}
                          </div>
          )})}
              
        </div>
      </div>
      <button className="btn-primary  btn-lg mb-2 mr-1 fixed-bottom rounded-circle ml-auto text-light" onClick={this.toggleModal}><strong>+</strong></button>
    </div>
        )
    }
}

export default Tasks