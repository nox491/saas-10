import React , { Component }from 'react';
import "/Users/vangelis/Desktop/AskMeAnything/askmeanything/src/assets/bootstrap/css/footer.css";

  class Footer extends Component {
      state = { 
         
      }
      render() { 
          return <footer className="page-footer dark" id="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h5>About</h5>
              </div>
              <div className="col-sm-3">
                <h5>Contact</h5>
              </div>
              <div className="col-sm-3">
                <h5>Project Documentation</h5>
              </div>
              <div className="col-sm-3">
                <h5>GitHub</h5>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2021 AskMeAnything</p>
          </div>
        </footer>

            

}
}

export default Footer ;