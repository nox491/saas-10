import React , { Component }from 'react';
import logo from "./assets/img/AMA_logo_trans.png";


  class Answer extends Component {
      state = { 
         
      }
      render() { 
          return (
          
          
        <React.Fragment>
          <section className="contact-clean">
        <form method="post">
          <h2 className="text-center">Answer a question</h2>
          <div className="form-group">
            <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button" style={{width: '400px', background: '#ff6f6ca6 !important'}}>Question Titles&nbsp;</button>
              <div className="dropdown-menu" style={{width: '400px'}}><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
            </div>
          </div><small className="form-text text-muted">(Keywords, read-only)</small><small className="form-text text-muted" style={{height: '40px'}}>Other Answers, if available, can be shown here</small><textarea className="form-control" name="Answer Text" placeholder="Type your answer here" rows={14} defaultValue={""} />
          <div className="form-group"><button className="btn btn-primary" type="submit" style={{background: '#FF6F6C !important'}}>Submit</button></div><a href="/home"><img src={logo} width={220} style={{marginBottom: '65px'}} /> </a>
        </form>
      </section>
        </React.Fragment>
        
        
        );
      }
  }
   
  export default Answer;