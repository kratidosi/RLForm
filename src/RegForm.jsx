import { Component, React } from "react";
import { Link, Redirect } from "react-router-dom";
import './RegForm.css';
import axios from 'axios';


import  country_list from './CountryList';

class RegForm extends Component{
    constructor(){
        super();
        this.state = {
          id:"",
         firstname:'',
         lastname:'',
         password:'',
         cfmpwd:'',
         country:'',
         subject:'',
         errors: {}
       
        }
        this.handlechange = this.handlechange.bind(this);
        this.display =  this.display.bind(this);
    }
    handlechange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [event.target.name]:event.target.value
        });
     }
     handlevalidation = () =>{
      let input = this.state;
      let errors = {};
      let isValid = true;
      var passw=  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
        if(!input.password.match(passw)) {
          isValid = false;
          errors["password"] = "Entered Password does not strong!!"
        }
     
         if(input.password!== input.cfmpwd){
             isValid = false;
             errors["password"] = "Passwords don't match!!";
         } 
       
       this.setState({
         errors: errors
       })
       return isValid;
     }

   
     display(event){
        event.preventDefault();
        if(this.handlevalidation()){
        var CryptoJS = require("crypto-js");
        const axios = require('axios');
        axios.post('http://localhost:3000/users',{

            id: (Math.floor(Math.random()*500) +1000),
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password:  CryptoJS.AES.encrypt(JSON.stringify(this.state.password), 'my-secret-key@123').toString(),
            

            cfmpwd: this.state.cfmpwd,
            country : this.state.country,
            subject : this.state.subject
           }).then(response => {
           
            alert("You are Successfully registered!!");
            this.setState({
              firstname:'',
              lastname:'',
              password:'',
              cfmpwd:'',
              country:'',
              subject:''

            });
         
          }).catch(error =>{
              console.log(error);
          });
        
        
       }
     }
  
    render(){
        return(
            <div>
            <body>
   
    <div className="container" style={{marginTop:'2%'}}>
        <h1 style={{textAlign:'center', textDecoration:'underline', fontFamily:'cursive'}}>REGISTERATION FORM</h1><br/>
  
  <form onSubmit={this.display}>
    <div class="row">
      <div class="col-25">
        <label for="fname" style={{color:"darkred", marginLeft:"40px"}}>First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Enter FirstName!!"  onChange={this.handlechange} value={this.state.firstname} required/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname" style={{color:"darkred", marginLeft:"40px"}}>Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Enter LastName!!"  onChange={this.handlechange} value={this.state.lastname} required/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="password" style={{color:"darkred", marginLeft:"40px"
      }}>Password</label>
      </div>
      <div class="col-75">
        <input type="password" id="password" name="password" placeholder="Enter Password!!" 
        style={{  width: "100%",
        height:"50px",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        resize: "vertical"}}
        onChange={this.handlechange} value={this.state.password} required/>
      </div>
      <div className="text-danger" style={{color:"darkred", marginLeft:"40%",fontSize:"20px"}}>{this.state.errors.password}</div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="cfmpwd" style={{color:"darkred", marginLeft:"40px"}}>Confirm Password</label>
      </div>
      <div class="col-75">
        <input type="password" id="cfmpwd" name="cfmpwd" placeholder="Enter Confirm Password!!"  onChange={this.handlechange} value={this.state.cfmpwd} required/>
      </div>
    </div>
   
    <div class="row">
      <div class="col-25">
        <label for="country" style={{color:"darkred", marginLeft:"40px"}}>Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country"  onChange={this.handlechange} required>
          <option selected="true" disabled="disabled">--SELECT OPTION --</option>
        {country_list.map((items, index) =>
        <option>{items}</option>
        )}
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject" style={{color:"darkred", marginLeft:"40px"}}>Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write Something....."  onChange={this.handlechange}  value={this.state.subject} required></textarea>
      </div>
    </div>
    <div class="row">
     <input type="submit" value="Submit" style={{marginLeft:'50%', marginTop:'20px'}}/>
    </div>
  </form>
</div>

  </body>
     </div>
        )
    }
}


export default RegForm;