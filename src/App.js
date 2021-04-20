import React , { Component } from "react";
import {Redirect, Route ,Switch} from 'react-router-dom';
import Login from "./login";
import NavbarUnRe from "./Mainpage/navbar_unre";
import NavbarRe from "./Mainpage/navbar_re";
import Signup from "./signup";
import Footer from "./Mainpage/footer";
import MainBody from "./Mainpage/mainbody";
import Ask from "./askaquestion";
import Answer from "./ansaquestion";
import Logout from "./logout";
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/css/styles.min.css"


class App extends Component {
        

  render() { 
    //localStorage.removeItem("token")
      const token =localStorage.getItem("token")

      if(token==null) {
    
  
  return ( 
    <div>
      <NavbarUnRe/>
      <div className="total-screen">
  
    <main className="body-of-any-page">
        <Switch>

        <Route path="/home" component={MainBody}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/askq" component={Ask}></Route>
        <Route path="/ansq" component={Answer}></Route>
        <Route path="/logout" component={Logout}></Route>
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
    else {
      return ( 
      <div>
      <NavbarRe/>
      <div className="total-screen">
  
    <main className="body-of-any-page">
        <Switch>

        <Route path="/home" component={MainBody}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/askq" component={Ask}></Route>
        <Route path="/ansq" component={Answer}></Route>
        <Route path="/logout" component={Logout}></Route>
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
    }




export default App;
