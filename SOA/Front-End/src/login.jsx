import React, { Component } from 'react';
import axios from 'axios';
import NavbarUnRe from "./Mainpage/navbar_unre";
import Footer from "./Mainpage/footer";


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
                  url: "http://localhost:4001/esb",

                  headers: {
                    'url': 'http://localhost:5001/login'
                },
                
                  data: {
                    email : email, 
                    password : pass
                  }

                });
    
                window.location='/home'
                localStorage.setItem("token",jwt.user_access_token)
                
              } catch(error){
                alert(error)
                this.setState({
                  error: error.response.data.message,
                })
              }   
      };


    render() { 
      
        return ( 
          <body>
            <NavbarUnRe />
          <section class="hero is-primary" id="loginpage">
          <div class="container">
            <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box" onSubmit={this.handleSubmit}>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" name="email" value={this.state.email} class="input" onChange={this.handleChange} required />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>  
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" name="password" value={this.state.password} class="input" onChange={this.handleChange} required/>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox"/>
                Remember me
              </label>
            </div>
            <a className="new_account" href="/signup">Don't have an account? Sign up here!</a>
              <button class="button is-primary">
                Login
              </button>
          </form>
        </div>
      </div>
    </div>
<Footer />
</section>
</body>
        
        );
    }
}
 
export default Login;