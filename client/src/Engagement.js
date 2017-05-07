import React, { Component } from 'react';
import {Line, Radar} from 'react-chartjs-2';
import { Grid, Container, Header, Menu, Segment, Icon, Button, Progress, Rating } from 'semantic-ui-react'



class Engagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            surveys: [],
            sorted_answers: []
        };
        this.fetchRecords = this.fetchRecords.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sortAnswers = this.sortAnswers.bind(this);
    };


    // defaultProps = {
    //     user_id: 1,
    //     survey: [{question: 1, answer: 2}, {question: 2, answer: 2}, {question: 3, answer: 2}, {question: 4, answer: 3}, {question: 5, answer: 3}]
    // };

    // state = {
    //     users: this.props.users,
    //     survey: this.props.surveys
    // };

    fetchRecords(){
        console.log("Hitting Fetch Records")
        this.setState({
            users: [{user_id: 1}, {user_id: 2}, {user_id: 3}, {user_id: 4}, {user_id: 5}],
            surveys: [
                [{question: 1, answer: 2}, {question: 2, answer: 2}, {question: 3, answer: 2}, {question: 4, answer: 3}, {question: 5, answer: 3}]
            ]
        })

    };

    componentWillMount(){
      this.fetchRecords();
    };

    handleClick(e){
      e.preventDefault()
      // Pseudocode
      // click gets ref (this.refs.value) or key value
      // ---> var user_id = this.refs.value
      // passes value to sortAnswers
      sortAnswers(user_id)
    };

    sortAnswers(user_id){
      //Pseudocode
      // takes a value of user_id
      // makes a get call to db using user_id

      var answer_sort = [];

      //survey is set to whatever you get back from the db
      var survey = 

      // this commented out loop sorts through multiple surveys
      // for (var i = 0 ; i <= this.state.surveys.length ; i ++) {

          // for (var x=0; x < this.state.surveys[i].length ; x++){
          //   answer_sort.push(this.state.surveys[i][x]["answer"]);
          // }

          for (var x=0; x < survey.length ; x++){
            answer_sort.push(survey[x]["answer"]);
          }


      // };

      this.setState({
        sorted_answers: answer_sort
      })

    };

    render() {
        var users = this.state.users
        var surveys = this.state.surveys
        console.log(this.state);
        console.log(users);
        console.log(surveys);
        console.log("PRINT THIS OUT")
        console.log(this.state.surveys[0])
        const importVolumeData = {
          labels: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
          datasets: [
            {
              label: 'Import Volume',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [      
                 this.state.surveys[0]["answer"], this.state.surveys[1]["answer"], this.state.surveys[2]["answer"], this.state.surveys[3]["answer"], this.state.surveys[4]["answer"] 
              ]
            }

          ]
        };

        return (

                <Container text>
                    <div id="user_info">
                        {this.state.users.map(function(user) {
                            return <li key={user.user_id}><a>Employee {user.user_id}</a></li>
                            })
                        }
                    </div>

                    <div id="graph data">
                      <Line data={importVolumeData} />
                    </div>
                </Container>
        );
    }
}


export default Engagement;
