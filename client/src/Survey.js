import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Client from './Client'

import 'semantic-ui-css/semantic.min.css';

import { Grid, Container, Header, Menu, Segment, Icon, Button, Progress, Rating, Radio, Form, Divider } from 'semantic-ui-react'

class Survey extends Component {
  state = {
    percent: 0,
    checked: false
  }

  increment = () => this.setState({
   percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })
  handleRate = (e, { rating, maxRating }) => {
    this.setState({ rating, maxRating })
    this.setState({ percent: 25 })
  }
  handleRate2 = (e, { rating, maxRating }) => {
    this.setState({ q2Rating:rating, maxRating })
    this.setState({ percent: 50 })
  }
  handleRate3 = (e, { rating, maxRating }) => {
    this.setState({ q3Rating:rating, maxRating })
    this.setState({ percent: 75 })
  }
  handleChange = (e, { value }) => this.setState({ q2Value:value })
  handleSubmitButton = (e, {name}) => {
    Client.submitSurvey({
      _user: "590e45d4093e06345203ce60",
      results: [
        {
          "question":1,
          "answer": this.state.rating,
        }, {
          "question":2,
          "answer":this.state.q2Rating
        }, {
          "question":3,
          "answer":this.state.q3Rating
        }, {
          "question":4,
          "answer":2
        }, {
          "question":5,
          "answer":5
        }
      ]
    }, (result) => {
      console.log(result);
    });
  }

  renderSecondaryQuestion() {
    if (this.state.rating > 0 && this.state.rating <=5) {
      return (
        <div>
          <br/>
          <h2>How do you feel about your team?</h2>
          <Rating maxRating={5} defaultRating={0} icon='star' size='massive' onRate={this.handleRate2} />

          <h2>Do you enjoy working at ACME Corp?</h2>
          <Rating maxRating={5} defaultRating={0} icon='star' size='massive' onRate={this.handleRate3} />

           <Divider />
          <Button fluid primary onClick={this.handleSubmitButton}>Submit</Button>
        </div>
      );
    }
  }

  render() {
    const { activeItem } = this.state

    return (
        <Container text>
          <Header as='h2'>How was work today?</Header>
           <Rating maxRating={5} defaultRating={0} icon='star' size='massive' onRate={this.handleRate} />
           { this.renderSecondaryQuestion() }
        </Container>
    );
  }
}

export default Survey;
