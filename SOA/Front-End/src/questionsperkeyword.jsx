import React , { Component }from 'react';
import axios from 'axios';
import NavbarRe from './Mainpage/navbar_re';
import Footer from './Mainpage/footer';
import Chart from 'react-bulma-chartjs';

class QPerKeyword extends Component {

state = {
    questions: [],
    error : ""
}

async componentDidMount() {
    try {
        const {data: questions} = await axios({
            method: 'get',
            url: "http://localhost:4001/esb",

            headers: {
                'x-observatory-auth': localStorage.getItem("token"),
                'url': 'http://localhost:5002/questionsperkeyword'
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
      const { keywordWord, titlesperkeyword } = question
      return (
          <tr key={keywordWord}>
             <td>{keywordWord}</td>
             <td>{titlesperkeyword}</td>
          </tr>
      )
    })
}


render() {
    const data =  {
        labels : this.state.questions.slice(0, 30).map(a => a.keywordWord)
        ,
        datasets: [
          {
            data: this.state.questions.slice(0, 30).map(a => a.titlesperkeyword),
            backgroundColor: [
                '#556b2f',
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
                '#808080' //30 colors 
            ],
            hoverBackgroundColor: [
            '#556b2f',
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
            '#808080' //30 colors 
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
                <h1 class='title is-1' id='perkeywordtitle'>Number of Questions Per Keyword</h1>
                <div className="tablecontainer">
                    <table class="table is-striped is-hoverable is-fullwidth is-bordered">
                        <thead>
                        <tr> 
                          <th className="sticky-column">Keyword</th>
                          <th className="sticky-column">Num of Questions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    </div>
                
                    <h3 class='title is-3' id='keywordgraphtitle'>Top-30 most used Keywords</h3>
                <div id="keywordchart">
                    <Chart type={'doughnut'} data={data} options={options}/>
                </div>
                
            <Footer />
        </body>
    );
}
}

export default QPerKeyword;