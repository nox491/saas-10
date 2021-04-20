import React, { Component } from 'react';
import logo from './assets/img/AMA_logo_trans.png';
import axios from 'axios';
import {RemoveScrollBar} from 'react-remove-scroll-bar';

class Signup extends Component {
  state = { 
    email :"",
    password :"",
    repeat_password :"",
    error : ""
 }

 handleChange = event =>{ 
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = async (event) =>{
         event.preventDefault();
         if (this.state.password !== this.state.repeat_password) {
          alert("Passwords don't match");
         }
         else{
try{
          const email = this.state.email
          const pass = this.state.password
          
          const data = await axios({
              method: 'post',
              url: "http://localhost:3001/signup",
            
              data: {
                email : email, 
                 password : pass
              },
            
              //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
            window.location='/'
          } catch(error){
            alert(error.response.data.message)    
            this.setState({             
                error: error.response.data.message,      
            });  
          }
        }        
  };

    render() { 
      
        return ( 
        <React.Fragment>
          <RemoveScrollBar />
      <section className="login-dark">
        <form method="post" onSubmit={this.handleSubmit} style={{marginTop: '-75px'}}><a href="/home"><img src={logo} width={220} style={{marginBottom: '65px'}} /> </a>
          <h2 className="sr-only">Login Form</h2>
          <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/></div>
          <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/></div>
          <input className="form-control" type="password" name="repeat_password" placeholder="Re-enter password" value={this.state.repeat_password} onChange={this.handleChange} required/>
          <div className="form-group"><button className="btn btn-primary btn-block" type="submit" style={{background: '#FF6F6C'}}>Sign Up</button></div><a className="forgot" href="/login">Already got an account? Login here!</a>
        </form>
      </section>
      </React.Fragment>

);
}
}

export default Signup;