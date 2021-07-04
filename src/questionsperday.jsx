import React , { Component }from 'react';
import axios from 'axios';

class QPerPeriod extends Component {


    state = {
        questions: [],
        error : ""
    }
  
    async componentDidMount() {
        try {
            const {data: questions} = await axios({
                method: 'get',
                url: "http://localhost:3001/questionsperday",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token")
                }
        });
  
        this.setState({questions})

    } catch(error){
        alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
    })
    }   
    
  };
  renderTableData() {
      return this.state.questions.map((question) => {
        const { createdAt, title } = question
        return (
            <tr key={createdAt}>
               <td>{createdAt}</td>
               <td>{title}</td>
            </tr>
        )
      })
  }

    render(){
        
        return (
            
            <React.Fragment>      
             <div style={{width:1200,marginLeft:200,marginTop: '125px'}}>
                <h1 id='title'>Questions This Day</h1>
                    <table id='questions'>
                        <thead>
                        <tr> 
                          <th>Timestamp</th>
                          <th>Title</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
            </div>          
            </React.Fragment>
                  
        );
        
    }
}

export default QPerPeriod;