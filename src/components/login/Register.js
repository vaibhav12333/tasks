import react,{Component} from 'react';
import loginimg from "../../loginimg.svg"

export class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            username: '',
            password: '',
        }
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        
        if(localStorage.getItem('dataObj')){
            let unparsedObj = localStorage.getItem('dataObj')
            let parsedObj = JSON.parse(unparsedObj)
            let filtered = parsedObj.dataArray.filter(obj => obj.email === this.state.email)
            if(filtered.length !== 0){
                document.getElementById('email_error').style.display = "block"
            }
            else{
                let newArray = parsedObj.dataArray.concat([this.state])
                let newObj = {
                    dataArray: newArray
                }
                let stringifyedNewObj = JSON.stringify(newObj)
                localStorage.setItem('dataObj', stringifyedNewObj)
                document.getElementById('email_error').style.display = 'none'
                document.getElementById('saved').style.display = 'block'
            }
        }
        else {
            let dataArray = [];
            dataArray.push(this.state)
            let dataObj = {
                dataArray: dataArray
            }
            let parsedDataObj = JSON.stringify(dataObj)
            localStorage.setItem("dataObj", parsedDataObj)
            document.getElementById('saved').style.display = 'block'
        }
        
    } 
    render(){
        return(
            <div className="base-container"  ref={this.props.containerRef}>
                <div className="header">Sign Up</div>
                <div className="content">
                    <div className="image">
                        <img src={loginimg} alt="svg" />
                    </div>
                    <form className="form" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" onChange={this.onInputChange} name="email" placeholder="email" />
                    </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" onChange={this.onInputChange} name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={this.onInputChange} name="password" placeholder="password" />
                        </div>
                        <p id="saved">User Registered</p>
                        <p id="email_error">Email already exists</p>
                        <div className="mt-2">
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                    </div>                   
                        </form>
            
               
                </div>
            </div>
        )
    }
}