import React , { Component }from 'react';
import logo from "../assets/img/AMA_logo_trans.png";
import "../assets/bootstrap/css/footer.css";

  class NavbarRe extends Component {
      
      render() { 
          return (
          
          
        <React.Fragment>
          <div id="navbar">
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white text-right clean-navbar" style={{textAlign: 'center'}}>
          <div className="container"><a className="navbar-brand logo" href="#" /><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button><a href="/home"><img src={logo} width={168} height={35} /></a>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ml-auto" /><a className="mr-auto" href="/askq" style={{color: '#ff6f6c', padding: '0px'}}>Ask a Question</a><a className="mr-auto" href="/ansq" style={{marginLeft: '-127px', color: '#ff6f6c'}}>Answer a Question</a>
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/logout" style={{background: '#FF6F6C', color: 'rgb(255,255,255)', borderStyle: 'none'}}>LOGOUT</a></li>
              </ul>
            </div>
          </div>
        </nav>
        
        
      </div>
        </React.Fragment>
        
        
        );
      }
  }
   
  export default NavbarRe ;