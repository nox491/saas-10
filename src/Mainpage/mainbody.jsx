import React , { Component }from 'react';
import img_period from "../assets/img/scenery/image5.jpg";
import img_keyword from "../assets/img/scenery/image6.jpg";
import "../assets/bootstrap/css/Mainpage/mainbody.css";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

  class MainBody extends Component {
    

      render() {
        
        return ( 
        <React.Fragment>
          <RemoveScrollBar />
          return <main className="page service-page" id="mainbody">
          <section className="clean-block clean-services dark" style={{background: 'rgb(255,255,255)'}}>
            <div className="container">
              <div className="row justify-content-center" style={{marginTop: '56px', background: '#ffffff'}}>
                <a className="col-md-6 col-lg-4" method="get" href="/qperday">
                  <div className="card"><img className="card-img-top w-100 d-block" src={img_period}/>
                    <div className="card-body">
                      <a className="card-title" style={{color: '#a574ff'}}>Questions per Period</a>
                    </div>
                    <div />
                  </div>
                </a>
                <a className="col-md-6 col-lg-4" href="/perkeyword">
                  <div className="card"><img className="card-img-top w-100 d-block" src={img_keyword} />
                    <div className="card-body">
                      <a className="card-title" style={{color: '#a574ff'}}>Questions per Keyword</a>
                    </div>
                    <div />
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>
        </React.Fragment>
        )
}
}

export default MainBody ;