import 'bulma/css/bulma.min.css';
import './css/navbar.css';
import './css/footer.css';
import './css/mainbody.css';
import './css/login_signup.css';
import './css/ansaquestion.css';
import './css/askaquestion.css';
import './css/questionsperperiod.css';
import './css/questionsperkeyword.css';
import './css/contactform.css';
import './css/mainpage.css';
import './css/mycontribution.css';

import React , { Component } from "react";
import {Redirect, Route ,Switch} from 'react-router-dom';
import ProtectedRoute from './AuthorizationComponent/protectedroute';
import Login from "./login";
import Signup from "./signup";
import Ask from "./askaquestion";
import Answer from "./ansaquestion";
import Logout from "./logout";
import QPerPeriod from "./questionsperperiod";
import QPerKeyword from "./questionsperkeyword";
import ContactForm from './contactform';
import NotFound from './PageNotFoundComponent/notfound';
import MainPage from './Mainpage/mainpage';
import MyContribution from './mycontribution';

class App extends Component {
        

  render() { 
    
  return ( 

      <div className="total-screen">
  
    <main className="body-of-any-page">
        <Switch>

        <Route exact path="/home" component={MainPage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <ProtectedRoute exact path="/askq" component={Ask}></ProtectedRoute>
        <Route exact path="/ansq" component={Answer}></Route>
        <Route exact path="/logout" component={Logout}></Route>
        <ProtectedRoute exact path="/qperperiod" component={QPerPeriod}></ProtectedRoute>
        <ProtectedRoute exact path="/qperkeyword" component={QPerKeyword}></ProtectedRoute>
        <Route exact path="/contact" component={ContactForm}></Route>
        <ProtectedRoute exact path="/mycontrib" component={MyContribution}></ProtectedRoute>
        
        {/*
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/period" component={Check}></Route>     
        */}

        <Route exact path="/" render={()=> {
          return(
          <Redirect to="/home" />     
          )
        }
      }/>
      <Route component={NotFound} />
        </Switch>
    </main>
    </div>
  );
    }
  }
    



export default App;
