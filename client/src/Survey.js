import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';

import { Grid, Container, Header, Menu, Segment, Icon, Button, Progress, Rating } from 'semantic-ui-react'

class Survey extends Component {
  state = {
    percent: 0
  }

  increment = () => this.setState({
   percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })
  handleRate = (e, { rating, maxRating }) => {
    this.setState({ rating, maxRating })
    this.setState({ percent: 50 })
  }

  renderSecondaryQuestion() {
    if (this.state.rating > 0 && this.state.rating < 3) {
      return (
          <h2>Sorry to hear that, What caused this?</h2>
      );
    } else if (this.state.rating > 3) {
      return (
        <h2>Great to hear!  What was the reason?</h2>
      );
    } else {
      return (
        <p></p>
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
