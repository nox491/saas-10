import React , { Component }from 'react';
import axios from 'axios';
import logo from "./assets/img/AMA_logo_trans.png";


  class Ask extends Component {
    state = { 
      title :"",
      content :"",
      keywords :"",
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

   
     const {data: Response} = await axios({
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
     } catch(error){
       alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
       })
     }   
};
      render() { 
          return (
          
          
        <React.Fragment>
          <section className="contact-clean">
            <form method="post" onSubmit={this.handleSubmit}>
              <h2 className="text-center">Question:</h2>
              <div className="form-group"><input className="form-control" type="text" name="title" value={this.state.title} placeholder="Question Title" onChange={this.handleChange}/></div>
              <div className="form-group"><textarea className="form-control" name="Text" placeholder="Question Text" name="content" value={this.state.content} rows={14} defaultValue={""} onChange={this.handleChange}/></div>
              <input className="form-control is-invalid" type="text" name="keywords" value={this.state.keywords} placeholder="Keywords, (Press enter to separate)" onChange={this.handleChange}/>
              <div className="form-group"><button className="btn btn-primary" type="submit" style={{background: '#FF6F6C !important'}}>send </button></div><a href="/home"><img src={logo} width={220} style={{marginBottom: '65px'}} /> </a>
            </form>
          </section>
        </React.Fragment>
        
        
        );
      }
  }
   
  export default Ask;