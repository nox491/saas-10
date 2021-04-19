import React, { Component } from 'react';
import axios from 'axios';
import logo from "./assets/img/AMA_logo_trans.png";
import {RemoveScrollBar} from 'react-remove-scroll-bar';


class Login extends Component {
    state = { 
        email :"",
        password :"",
        error : ""
     }

     handleChange = event =>{ 
        
        this.setState({[event.target.name]: event.target.value });
      };

      handleSubmit = async (event) =>{
             event.preventDefault();

             try {
              const email = this.state.email
              const pass = this.state.password

              const {data:jwt} = await axios({
                  method: 'post',
                  url: "http://localhost:3001/login",
                
                  data: {
                    email : email, 
                     password : pass
                  }

                  
                  //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
              } catch(error){
                alert(error.response.data.message)
                this.setState({
                  error: error.response.data.message,
                })
              }
                //localStorage.setItem("token",jwt.user_access_token)
                
                         
      };


    render() { 
      
        return ( 
          <React.Fragment>
          <RemoveScrollBar />
          <section className="login-dark">
        <form method="post" onSubmit={this.handleSubmit} style={{marginTop: '-75px'}}><a href="/home"><img src={logo} width={220} style={{marginBottom: '65px'}} /> </a>
          <h2 className="sr-only">Login Form</h2>
          <div className="form-group"><input className="form-control" type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange}/></div>
          <div className="form-group"><input className="form-control" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}/></div>
          <div className="form-group"><button className="btn btn-primary btn-block" type="submit" style={{background: '#FF6F6C'}}>Login</button></div><a className="forgot" href="/signup">Don't have an account? Sign up here!</a>
        </form>
      </section>
      </React.Fragment>
          
        );
    }
}
 
export default Login;