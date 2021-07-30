import React , { Component } from "react";
import axios from 'axios';
import _ from 'lodash';
import NavbarRe from "./Mainpage/navbar_re";
import NavbarUnRe from "./Mainpage/navbar_unre";
import Footer from "./Mainpage/footer";


  class Answer extends Component {
    constructor(props) {
      super(props)
      this.state = { 
         selQuestion : [],
         selQuestionTitle : "",
         answers : [],
         questions : [],
         searchTerm : "",
         ansContent : "",
         isLoading : false,
         isQSelected : false,
         isSubmitted : false,
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

      handleChangeAnswer = event => {
        const ansContent = event.target.value;
        this.setState({ansContent})
      }

      handleClick = async (e) =>{

        this.setState({
          searchTerm: "",
          questions: []
        })

           try {   
                const questionTitle = e.currentTarget.getAttribute("value")
                const {data : response} = await axios({
                    method: 'get',
                    url: "http://localhost:3001/selectQ",
                    
                    params : {
                      questionTitle: questionTitle
                    },
                    headers: {
                      'x-observatory-auth': localStorage.getItem("token")
                    } 
                    });

                    this.setState({selQuestion : response[0]})
                    this.setState({answers : response[1]})
                    
              } catch(error){
                alert(error.response.data.message)
                this.setState({
                    error: error.response.data.message,
                  })
                } 
                  
      };
        
      handleSubmit = async (e) =>{
        e.preventDefault();

        try {
          const title = this.state.selQuestionTitle
          const ansContent = this.state.ansContent
       
         await axios({
             method: 'post',

             url: "http://localhost:3001/ansq",
             
             data: {
               title: title,
               content: ansContent
             },
    
             headers: {
               'x-observatory-auth': localStorage.getItem("token")
            }
          
           });
           this.setState({
             ansContent: "",
             isSubmitted: true
           })
           window.scrollTo(0, 0)
           setTimeout(() => {
            // After 3 seconds banner disappears
            this.setState({
              isSubmitted: false
            })
          }, 3000)

         } catch(error){
           alert(error.response.data.message)
           this.setState({
             error: error.response.data.message,
           })
         }   
    };

    renderListData() {
        return this.state.questions.map((question) => {
          const { questionTitle } = question
          return (
            
            <a className="dropdown-item" onClick={this.handleClick} value={questionTitle}>{questionTitle}</a>
                      
          )
        })
    }

    renderQuestionData() {
      return this.state.selQuestion.map((question) => {
        const { title, content } = question
        this.state.selQuestionTitle = title
        this.state.isQSelected = true

        return (
          <div class="tile is-parent">
            <article class="tile is-child notification is-primary">
              <h2 class="title is-2" id="ansTitle">{title}</h2>
              <h4 class="title is-4" id="q2Content">{content}</h4>
            </article>
          </div>
        )
      })
  }

  renderAnswerData() {
    return this.state.answers.map((answer) => {
      const { content } = answer

      return (
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <h5 class="title is-5" id="new_answer">{content}</h5>
          </article>
        </div>
      )
    })
}

      render() {
        const token = localStorage.getItem("token")
      

      var isAuthenticated = false
      

      if(token==null) {
        isAuthenticated = false
      }
      else {
        isAuthenticated = true
      }
        return (
      <body>
        {isAuthenticated ? <NavbarRe /> : <NavbarUnRe/>}
        {this.state.isSubmitted && <section class="hero is-medium is-primary" id="questionbanner">
            <div class="hero-body">
            <p class="title">
            Your answer is submitted
            </p>
            <p class="subtitle">
            Thank you for your help
            </p>
            </div>
            </section>}
           <form method="post" onSubmit={this.handleSubmit}>
            <h1 class="title is-1" id="ansaquestion">Answer a question</h1>
            <h3 class="title is-3" id="keywordsearch">Search by Keyword</h3>
            <input class="input is-normal" type="text" id="ansaquestionsearch" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
            
              {this.state.isLoading && <div id="loading">Loading...</div>}
              <div id="dropdownitem">
                {this.renderListData()}
              </div>

              <div id="questiondata">
                {this.renderQuestionData()} 
              </div>

              <div id="answerdata">
                {this.renderAnswerData()}
              </div>

              {this.state.isQSelected && isAuthenticated && <div id="ansContent"><textarea class="textarea is-small" name="ansContent" placeholder="Type your answer here" rows="14" value={this.state.ansContent} onChange={this.handleChangeAnswer} onSubmit={this.handleSubmit} required></textarea>
              <button class="button is-primary" id="submitAns" type="submit">Submit</button></div>}

              {this.state.isQSelected && !isAuthenticated && <div id="ansContent"><textarea class="textarea is-small" name="ansContent" placeholder="Type your answer here" rows="14" value={this.state.ansContent} onChange={this.handleChangeAnswer} onSubmit={this.handleSubmit} disabled></textarea>
              <button class="button is-primary" id="submitAns" type="submit" disabled>Submit</button></div>}
            </form> 
        <Footer />
      </body>
        
        );
            
      }
  }
   
  export default Answer;