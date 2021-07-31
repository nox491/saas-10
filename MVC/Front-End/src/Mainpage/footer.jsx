import React , { Component }from 'react';

  class Footer extends Component {
      state = { 
         
      }


      render() { 
          return (
    <footer>
          <nav class="level">

              <div class="level-item">
                <a class="button" id="contact" href="/contact">
                  <strong>Contact</strong>
                </a>
              </div>
              <div class="level-item">
                <a class="button" id="documentation" href="https://github.com/nox491/saas-10/blob/main/SAAS10.vpp">
                  <strong>Documentation</strong>
                </a>
              </div>
              <div class="level-item">
                <a class="button" id="about">
                  <strong>About</strong>
                </a>
              </div>
              <div class="level-item">
                <a class="button" id="github" href="https://github.com/nox491/saas-10/tree/Back-End">
                  <strong>Github</strong>
                </a>
              </div>

          </nav>
          <div class="content has-text-centered" id='copyright'>
    <p>
      <strong id='copyright_text'>© 2021 AskMeAnything</strong>
    </p>
  </div>
          </footer>

          /*
      
  
          */


            )

}
}

export default Footer ;