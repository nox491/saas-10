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
        questions: [],
        error : "",
        initialstartDate : newstartdate,
        initialendDate : newenddate,
        }
    }
   
    componentDidMount = async (event) => {

        try {
            const {data: questions} = await axios({
                method: 'get',
                url: "http://localhost:4001/esb",
  
                headers: {
                    'x-observatory-auth': localStorage.getItem("token"),
                    'url': 'http://localhost:5002/questionsperperiod'
                },
                params: {
                    startDate: this.state.initialstartDate,
                    endDate: this.state.initialendDate
                  }
        });

        this.setState({questions})

    } catch(error){
        alert(error.response.data.message)
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
                    'url': 'http://localhost:5002/questionsperperiod'
                },
                params: {
                    startDate: event.value[0],
                    endDate: event.value[1]
                  }
        });

        this.setState({questions})

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

  renderTableData() {
      return this.state.questions.map((question) => {
        const { createdAt, titlesperday } = question
        return (
            <tr key={titlesperday}>
               <td>{createdAt}</td>
               <td>{titlesperday}</td>
            </tr>
        )
      })
  }

    render(){
        const data =  {
            labels : this.state.questions.map(a => a.createdAt)
            ,
            datasets: [
              {
                data: this.state.questions.map(a => a.titlesperday),
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
            ]
          };
          const options = {
            animateRotate: true
          };
        return (
            <body>
                <NavbarRe /> 
                <h1 class="title is-1" id='perperiodtitle'>Questions per Period</h1>     
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
                <div className="periodtable">
                    <table class="table is-striped is-hoverable is-fullwidth is-bordered" id='perperiodquestions'>
                        <thead>
                        <tr> 
                          <th className="sticky-column">Date</th>
                          <th className="sticky-column">Number of Questions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table> 
                </div>
       
                    <div id="periodchart"> 
                    <Chart type={'doughnut'} data={data} options={options}/>
                    </div>      
                    <Footer />  
            </body>          
        );
        
    }
}


export default QPerPeriod;