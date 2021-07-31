import React , { Component }from 'react';
import 'bulma/css/bulma.min.css';
import '../css/navbar.css';
import logo from '../assets/img/AMA_logo_trans.png';

  class NavbarUnRe extends Component {
      
      render() { 
          return (
          
          
        <React.Fragment>
          <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/home">
      <img src={logo} alt="logo img" width="112" height="28"/>
    </a>
  </div>

  <div id="navbarItems" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/askq">
        Ask a Question
      </a>

      <a class="navbar-item" href="/ansq">
        Answer a Question
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button" id='signup' href="/signup">
            <strong>Sign up</strong>
          </a>
          <a class="button" id="login" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
        </React.Fragment>
        
        
        );
      }
  }
   
  export default NavbarUnRe;