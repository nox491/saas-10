import React , { Component }from 'react';
import img_period from "../assets/img/scenery/image5.jpg";
import img_keyword from "../assets/img/scenery/image6.jpg";
import "/Users/vangelis/Desktop/AskMeAnything/askmeanything/src/assets/bootstrap/css/Mainpage/mainbody.css";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

  class MainBody extends Component {
      state = { 
         
      }
      render() {
        return ( 
        <React.Fragment>
          <RemoveScrollBar />
          return <main className="page service-page" id="mainbody">
          <section className="clean-block clean-services dark" style={{background: 'rgb(255,255,255)'}}>
            <div className="container">
              <div className="row justify-content-center" style={{marginTop: '56px', background: '#ffffff'}}>
                <div className="col-md-6 col-lg-4">
                  <div className="card"><img className="card-img-top w-100 d-block" src={img_period} />
                    <div className="card-body">
                      <h4 className="card-title" style={{color: '#a574ff'}}>Questions per Period</h4>
                    </div>
                    <div />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card"><img className="card-img-top w-100 d-block" src={img_keyword} />
                    <div className="card-body">
                      <h4 className="card-title" style={{color: '#a574ff'}}>Questions per Keyword</h4>
                    </div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        </React.Fragment>
        )
}
}

export default MainBody ;