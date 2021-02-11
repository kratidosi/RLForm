import {Component, React} from "react";
import { Redirect } from "react-router";
import './LoginForm.css';
import axios from 'axios';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:"",
            errors : false
        }
        this.handleInput = this.handleInput.bind(this);
        this.display = this.display.bind(this);
    }
   
    handleInput = (event) =>{
    const {name, value} = event.target;
    this.setState({
        [name]:value
    })
    }
 
     display = (event) => {
         event.preventDefault();
     
         var CryptoJS = require("crypto-js");
      
         axios.get('http://localhost:3000/users')
        .then(res =>res.data)
        .then((data) =>{
           data.map((item, index) =>
          { console.log(data)
            var bytes = CryptoJS.AES.decrypt(data[index].password, 'my-secret-key@123');
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            console.log(decryptedData); 
            if(data[index].firstname === this.state.name && decryptedData === this.state.password){
                alert('You are Successfully Logged In!!');
                window.location.href="/";
                
            }
       
            
        }

    
           )
           
        })
        .catch((error) =>{
            console.log(error);
        })
     }

    
    render(){
  return(
      <>
       <body>   
      
       
      
        
    <h2 style={{textAlign:'center', textDecoration:'underline', fontFamily:'cursive'}}>Login Page</h2><br/>    
    <div class="login">    
    <form onSubmit={this.display}>    
        <label><b>UserName     
        </b>    
        </label>    
        <input type="text" name="name" id="name" placeholder="Username" value={this.state.name} onChange={this.handleInput} required/>    
        <br/><br/>    
        <label><b>Password    
        </b>    
        </label>    
        <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} required/>    
        <br/><br/> <br/><br/>      
        <input type="submit"  value="Sign In"  style={{ marginRight:'30%', backgroundColor:'white', color:'black'}}/>       
        <br/><br/>    
        
    </form>     
</div>    
</body>   
      </>
  )
}
}

export default LoginForm;