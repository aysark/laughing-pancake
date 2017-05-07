import React, { Component } from 'react';
import {Line, Radar} from 'react-chartjs-2';


class Engagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            surveys: []
        };
        this.fetchRecords = this.fetchRecords.bind(this);
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
            surverys: [
                [{question: 1, answer: 2}, {question: 2, answer: 2}, {question: 3, answer: 2}, {question: 4, answer: 3}, {question: 5, answer: 3}],
                [{question: 1, answer: 2}, {question: 2, answer: 2}, {question: 3, answer: 2}, {question: 4, answer: 3}, {question: 5, answer: 3}],
                [{question: 1, answer: 2}, {question: 2, answer: 2}, {question: 3, answer: 2}, {question: 4, answer: 3}, {question: 5, answer: 3}],
                [{question: 1, answer: 2}, {question: 2, answer: 2}, {question: 3, answer: 2}, {question: 4, answer: 3}, {question: 5, answer: 3}],
                [{question: 1, answer: 2}, {question: 2, answer: 2}, {question: 3, answer: 2}, {question: 4, answer: 3}, {question: 5, answer: 3}]
            ]
        })

    };

    componentDidMount(){
        this.fetchRecords();
    };

    render() {
        var users = this.state.users
        var surveys = this.state.surveys
        console.log(this.state);
        console.log(users);
        console.log(surveys);

        return (

                <div>
                    <div id="user_info">
                        <img src="https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-16-512.png"/>
                        {this.state.users.map(function(user) {
                            return <li key={user.user_id}>Employee {user.user_id}</li>
                            })
                        }
                    </div>

                    <div id="graph data">
                      <Line data={importVolumeData} />
                    </div>
                </div>
        );
    }
}

const importVolumeData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
      data: [6500, 5900, 4000, 3100, 5600, 8500, 9100]
    }
  ]
};

export default Engagement;
