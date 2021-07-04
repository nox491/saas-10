import React , { Component, useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import logo from "./assets/img/AMA_logo_trans.png";
import axios from 'axios';
import _ from 'lodash';


  class Answer extends Component {
    constructor(props) {
      super(props)
      this.state = { 
         questions : [],
         searchTerm : "",
         isLoading : false,
         error: ""
      };
      this.handleSearchText = _.debounce(this.onSearchText, 500);
  }
      
  onSearchText = async () => {
    try {
    this.setState({ isLoading: true });
          
            const keyword = this.state.searchTerm
            const {data : questions} = await axios({
              method: 'get',
              url: "http://localhost:3001/searchQ",
            
              params : {
                keyword: keyword
              },
              headers: {
                'x-observatory-auth': localStorage.getItem("token")
             }
             
            });
            this.setState({questions})
            this.setState({isLoading: false})

          } catch(error){
            alert(error.response.data.message)
            this.setState({
              error: error.response.data.message,
            })
          } 
          
        };

      handleChange = event => {
        const searchTerm = event.target.value;
        this.setState({searchTerm});
        this.handleSearchText(this.state.searchTerm);
      }

      handleClick=(e)=>{
           alert(e.currentTarget.getAttribute("value"));
        }

      renderListData() {
        return this.state.questions.map((question) => {
          const { questionTitle } = question
          return (
            <Dropdown.Item>
            <li onClick={this.handleClick} value={questionTitle}>{questionTitle}</li>
            </Dropdown.Item>
          )
        })
    }

      render() {
        
        return (
      
        <React.Fragment>
          <section className="contact-clean">
           <form method="post">
          <h2 className="text-center">Answer a question</h2>
          <label htmlFor="search">Search by Keyword</label>
            <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
            {this.state.isLoading && <div>Loading...</div>}
            <ul className="search-result">
              {this.renderListData()}
            </ul>
          <textarea className="form-control" name="Answer Text" placeholder="Type your answer here" rows={14} defaultValue={""} />
          <div className="form-group"><button className="btn btn-primary" type="submit" style={{background: '#FF6F6C !important'}}>Submit</button></div><a href="/home"><img src={logo} width={220} style={{marginBottom: '65px'}} /> </a>
        </form>
      </section>
        </React.Fragment>
        
        
        );
            
      }
  }
   
  export default Answer;