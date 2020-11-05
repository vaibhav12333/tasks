import react,{Component} from 'react';
import loginimg from "../../loginimg.svg"

export class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
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
            if(filtered.length !== 0) {
                if(filtered[0].password === this.state.password) this.props.history.history.push('/tasks')
                else {
                    document.getElementById('password_error').style.display = 'block'
                    
                document.getElementById('email_error').style.display = 'none'
                }
            }
            else{
                document.getElementById('email_error').style.display = 'block'
                document.getElementById('password_error').style.display = 'none'
            }
        }
        else{
            document.getElementById('email_error').style.display = 'block'
            document.getElementById('password_error').style.display = 'none'
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginimg} alt="svg" />
                    </div>
                    <form className="form" onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input onChange={this.onInputChange} type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={this.onInputChange} type="password" name="password" placeholder="password" />
                        </div>  
                        <p id="email_error">Email not found</p> 
                        <p id="password_error">Password Incorrect</p>   
                        <div className="footer">
                            <button type="submit" className="btn">
                                Login
                            </button>
                        </div>             
                    </form>
                </div>
                

            </div>
        )
    }
}