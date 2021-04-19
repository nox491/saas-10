import React , { Component } from "react";
import {Redirect, Route ,Switch} from 'react-router-dom';
import Login from "./login";
import Navbar from "./Mainpage/navbar";
import Signup from "./signup";
import Footer from "./Mainpage/footer";
import MainBody from "./Mainpage/mainbody";
import Ask from "./askaquestion";
import Answer from "./ansaquestion";
import jwtDecode from 'jwt-decode';
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/css/styles.min.css"

class App extends Component {

  constructor() {
    super()
    try {
      const jwt =localStorage.getItem("token")
      const user =jwtDecode(jwt)
      this.state={user}
      if (user){this.state.admin=user.isAdmin }
      
        }
   catch(err){}        
      
  }

    render() { 
  
  return ( 
    <div>
      <Navbar/>
      <div className="total-screen">
  
    <main className="body-of-any-page">
        <Switch>

        <Route path="/home" component={MainBody}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/askq" component={Ask}></Route>
        <Route path="/ansq" component={Answer}></Route>
        {/*<Route path="/about" component={About}></Route>
        <Route path="/contact"  component={Latest}></Route>
        <Route path="/period" component={Check}></Route>
        <Route path="/keyword"  component={}></Route>
  */}

        <Route path="/" render={()=> {
          return(
          <Redirect to="/home" />
  )
        }
      }/>
        </Switch>
    </main>

    
    </div>
    <Footer/>
    </div>
  );
    }
}

export default App;
