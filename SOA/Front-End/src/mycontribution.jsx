import React , { Component } from 'react';
import Chart from 'react-bulma-chartjs';
import axios from 'axios';
import NavbarRe from './Mainpage/navbar_re';
import Footer from './Mainpage/footer';

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

class QPerPeriod extends Component {

    constructor (props) {
        super(props)
        const newstartdate = new Date();
        newstartdate.setHours(0,0,0);

        const newenddate = new Date();
    
        this.state = {
            email: "",
            questions: [],
            answers: [],
            answerMetrics: [],
            questionMetrics: [],
            initialstartDate : newstartdate,
            initialendDate : newenddate,
            error : "",
            backgroundColor: [
                '#7f0000',
                '#483d8b',
                '#008000',
                '#008b8b',
                '#cd853f',
                '#9acd32',
                '#00008b',
                '#8fbc8f',
                '#8b008b',
                '#b03060',
                '#ff0000',
                '#ff8c00',
                '#ffd700',
                '#7cfc00',
                '#00ff7f',
                '#dc143c',
                '#00ffff',
                '#00bfff',
                '#0000ff',
                '#f08080',
                '#ff00ff',
                '#1e90ff',
                '#dda0dd',
                '#90ee90',
                '#add8e6',
                '#ff1493',
                '#7b68ee',
                '#ffdead',
                '#808080',
                '#556b2f' //30 colors
            ],
            hoverBackgroundColor: [
                '#7f0000',
                '#483d8b',
                '#008000',
                '#008b8b',
                '#cd853f',
                '#9acd32',
                '#00008b',
                '#8fbc8f',
                '#8b008b',
                '#b03060',
                '#ff0000',
                '#ff8c00',
                '#ffd700',
                '#7cfc00',
                '#00ff7f',
                '#dc143c',
                '#00ffff',
                '#00bfff',
                '#0000ff',
                '#f08080',
                '#ff00ff',
                '#1e90ff',
                '#dda0dd',
                '#90ee90',
                '#add8e6',
                '#ff1493',
                '#7b68ee',
                '#ffdead',
                '#808080',
                '#556b2f' //30 colors 
            ]

        }
    }


    initialGetMetricsAns = async (event) => {
        try {
            const {data: answers} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myansmetricscontribution"
                },
                params: {
                    startDate: this.state.initialstartDate,
                    endDate: this.state.initialendDate,
                  }
        });

        this.setState({answerMetrics: answers})
        
    } catch(error){
        alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
    })
    } 
    }
   
    initialGetMetricsQ = async (event) => {
        try {
            const {data: questions} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myqmetricscontribution"
                },
                params: {
                    startDate: this.state.initialstartDate,
                    endDate: this.state.initialendDate,
                  }
        });

        this.setState({questionMetrics: questions})
        this.initialGetMetricsAns(event)
        
    } catch(error){
        alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
    })
    } 
    }

    initialGetAnswers = async (event) => {
        try {
            const {data: answers} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myanscontribution"
                },
                params: {
                    startDate: this.state.initialstartDate,
                    endDate: this.state.initialendDate,
                  }
        });

        this.setState({answers})
        this.initialGetMetricsQ(event)


    } catch(error){
        alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
    })
    } 
    }

    componentDidMount = async (event) => {

        try {
            const {data: questions} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myqcontribution"
                },
                params: {
                    startDate: this.state.initialstartDate,
                    endDate: this.state.initialendDate,
                  }
        });

        this.setState({questions})
        this.initialGetAnswers(event)

    } catch(error){
        alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
    })
    } 
          
    }

    GetMetricsAns = async (event) => {
        try {
            const {data: answers} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myansmetricscontribution"
                },
                params: {
                    startDate: event.value[0],
                    endDate: event.value[1],
                  }
        });

        this.setState({answerMetrics: answers})
        
    } catch(error){
        alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
    })
    } 
    }

    GetMetricsQ = async (event) => {
        try {
            const {data: questions} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myqmetricscontribution"
                },
                params: {
                    startDate: event.value[0],
                    endDate: event.value[1],
                  }
        });

        this.setState({questionMetrics: questions})
        this.GetMetricsAns(event)
        
    } catch(error){
        alert(error.response.data.message)
       this.setState({
         error: error.response.data.message,
    })
    } 
    }

    getAnswers = async (event) => {
        try {
            const {data: answers} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myanscontribution"
                },
                params: {
                    startDate: event.value[0],
                    endDate: event.value[1],
                  }
        });

        this.setState({answers})
        this.GetMetricsQ(event)

    } catch(error){
        alert(error)
       this.setState({
         error: error.response.data.message,
    })
    }   
        }


    handleChange = async (event) => {
    
        if(event.value) {
            if(event.value[1].getDay() !== this.state.initialendDate.getDay()){
                event.value[0].setHours(0,0,0)
                event.value[1].setHours(24,0,0)
            }

            else {
                event.value[0].setHours(0,0,0)
            }

        try {
            const {data: questions} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': "http://localhost:5004/myqcontribution"
                },
                params: {
                    startDate: event.value[0],
                    endDate: event.value[1],
                  }
        });

        this.setState({questions})
        this.getAnswers(event)

    } catch(error){
        alert(error)
       this.setState({
         error: error.response.data.message,
    })
    }   
        }
  };

  pressedClearButton = async (e) => {
      
    this.setState({
        questions: []
    })
  }

  renderQTableData() {
      return this.state.questions.map((question) => {
        const { createdAt, title } = question
        return (
            <tr key={title}>
               <td>{createdAt}</td>
               <td>{title}</td>
            </tr>
        )
      })
  }

  renderAnsTableData() {
    return this.state.answers.map((answer) => {
      const { createdAt, title, content } = answer
      return (
          <tr key={title}>
             <td>{createdAt}</td>
             <td>{title}</td>
             <td>{content}</td>
          </tr>
      )
    })
}

    render(){
        const dataAnsMetrics =  {
            labels: this.state.questionMetrics.map(a => a.createdAt),
            datasets: [
              {
                data: this.state.questionMetrics.map(a => a.titlesperday),
                backgroundColor: this.state.backgroundColor,
                hoverBackgroundColor: this.state.hoverBackgroundColor
              }
            ]
          };

        const dataQMetrics =  {
            labels: this.state.answerMetrics.map(a => a.createdAt),
            datasets: [
              {
                data: this.state.answerMetrics.map(a => a.titlesperday),
                backgroundColor: this.state.backgroundColor,
                hoverBackgroundColor: this.state.hoverBackgroundColor
              }
            ]
          };
          
        return (
            <body>
                <NavbarRe /> 
                <h1 class="title is-1" id='perperiodtitle'>My Contribution</h1>     
                <div id="dateRangePicker">
                  
                <DateRangePickerComponent 
                    startDate={this.state.initialstartDate} 
                    endDate={this.state.initialendDate}
                    format = "dd-MMM-yy"
                    max = {this.state.initialendDate}
                    maxDays = {30}
                    strictMode = {true}
                    cleared = {this.pressedClearButton}
                    onChange = {this.handleChange} 
                    >
                </DateRangePickerComponent>
                </div>

                <div className="myqtablecontainer">
                    <table class="table is-striped is-hoverable is-fullwidth is-bordered">
                        <thead>
                        <tr> 
                          <th className="sticky-column">Date</th>
                          <th className="sticky-column">My Question Titles</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderQTableData()}
                        </tbody>
                    </table>
                    </div>
  
                    <div className="myanstablecontainer">
                    <table class="table is-striped is-hoverable is-fullwidth is-bordered">
                        <thead>
                        <tr> 
                          <th className="sticky-column">Date</th>
                          <th className="sticky-column">My Question Titles</th>
                          <th className="sticky-column">My Answers</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderAnsTableData()}
                        </tbody>
                    </table>
                    </div>
              
    
                    <div id="BarQMetrics"> 
                    <Chart type={'bar'} data={dataQMetrics}/>
                    </div>   

                    <div id="BarAnsMetrics"> 
                    <Chart type={'bar'} data={dataAnsMetrics}/>
                    </div>    
    
                    <Footer />  
            </body>          
        );
        
    }
}


export default QPerPeriod;