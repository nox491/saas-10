import React , { Component }from 'react';
import logo from "./assets/img/AMA_logo_trans.png";


  class Ask extends Component {
      state = { 
         
      }
      render() { 
          return (
          
          
        <React.Fragment>
          <section className="contact-clean">
        <form method="post">
          <h2 className="text-center">Question:</h2>
          <div className="form-group"><input className="form-control" type="text" name="Question Title" placeholder="Question Title" /></div>
          <div className="form-group"><textarea className="form-control" name="Question Text" placeholder="Question Text" rows={14} defaultValue={""} /></div><input className="form-control is-invalid" type="email" name="Keywords" placeholder="Keywords, separated with &quot;,&quot;" />
          <div className="form-group"><button className="btn btn-primary" type="submit" style={{background: '#FF6F6C !important'}}>send </button></div><a href="/home"><img src={logo} width={220} style={{marginBottom: '65px'}} /> </a>
        </form>
      </section>
        </React.Fragment>
        
        
        );
      }
  }
   
  export default Ask;