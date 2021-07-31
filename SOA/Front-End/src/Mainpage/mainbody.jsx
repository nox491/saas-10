import React , { Component }from 'react';
import imageperperiod from '../assets/img/perperiod.webp';
import imagekeyword from '../assets/img/keywords.png'
import imagecontribution from '../assets/img/contribution.jpg'

  class MainBody extends Component {
    

      render() {
        
        return ( 
          <div>
          <div class="card" id="questionsperperiod">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={imageperperiod} alt="question per period img" width="10" 
     height="1000"/>
    </figure>
  </div>

    <div class="content">
    <a class="button" method="get" href="/qperperiod" id="QPerPeriod">Questions per Period</a>
    </div>
    </div>

    <div class="card" id="questionsperkeyword">
    <div class="card-image">
    <figure class="image is-4by3">
      <img src={imagekeyword} alt="question per keyword img"/>
    </figure>
  </div>
  
    <div class="content">
      <a class="button" method="get" href="/qperkeyword" id="QPerKeyword">Questions per Keyword</a>
    </div>
  </div>

  <div class="card" id="mycontribution">
    <div class="card-image">
    <figure class="image is-4by3">
      <img src={imagecontribution} alt="my contribution img"/>
    </figure>
  </div>
  
    <div class="content">
      <a class="button" method="get" href="/mycontrib" id="MyContr">My Contribution per Period</a>
    </div>
  </div>
  </div>
        )
}
}

export default MainBody ;