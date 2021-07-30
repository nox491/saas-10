import React , { Component }from 'react';
import axios from 'axios';
import NavbarRe from "./Mainpage/navbar_re";
import Footer from "./Mainpage/footer";

  class Ask extends Component {
    state = { 
      title :"",
      content :"",
      keywords :"",
      isSubmitted : false,
      error : ""
   }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }
/*
  highlight = event => {
    event.preventDefault();
    let val = document.getElementsByClassName("contact-clean")
    //let keyword = document.getElementsByClassName("form-control is-invalid").name
    alert(val[0].value)
  }
*/
  handleSubmit = async (event) =>{
    event.preventDefault();
    try {

      const title = this.state.title
      const content = this.state.content
      const keywords = this.state.keywords

   
     await axios({
         method: 'post',
         url: "http://localhost:3001/askq",
       
         
         data: {
           title: title,
           content: content,
           keywords: keywords
         },

         headers: {
           'x-observatory-auth': localStorage.getItem("token")
        }
      
       });
       this.setState({
        title :"",
        content :"",
        keywords :"",
        isSubmitted : true
       })

       setTimeout(() => {
        // After 3 seconds banner disappears
        this.setState({
          isSubmitted: false
        })
      }, 3000)
      
     } catch(error){
       this.setState({
         error: error.response.data.message,
       })
       console.log(this.state.error)
     }   
};

      render() { 
          return (
          
        <body>
          <NavbarRe />
          {this.state.isSubmitted && <section class="hero is-small is-primary" id="questionbanner">
            <div class="hero-body">
            <p class="title">
            Your question is submitted
            </p>
            <p class="subtitle">
            We hope you get a nice answer
            </p>
            </div>
            </section>}
            <form method="post" onSubmit={this.handleSubmit} id="questionform">
              <h1 class="title is-1" id="askaquestion">Ask a question</h1>
              <input class="input is-normal" type="text" name="title" id="qTitle" value={this.state.title} placeholder="Question Title" onChange={this.handleChange} required/>
              <textarea class="textarea is-small" id="q1Content" placeholder="Question Text" name="content" value={this.state.content} rows="14" defaultValue={""} onChange={this.handleChange} required/>
              <input class="input is-normal" type="text" name="keywords" id="Keywords" value={this.state.keywords} placeholder="Keywords, (Press enter to separate)" onChange={this.handleChange} required/>
              <button class="button is-primary" id="submitQ" type="submit">send </button>
            </form>
            
            <Footer />
        </body>
        
        );
      }
  }
   
  export default Ask;