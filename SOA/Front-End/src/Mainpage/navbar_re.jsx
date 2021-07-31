import React , { Component }from 'react';
import logo from '../assets/img/AMA_logo_trans.png';

  class NavbarRe extends Component {
    
      
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
          <a class="button" id="logout" href="/logout">
            Log out
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
   
  export default NavbarRe ;