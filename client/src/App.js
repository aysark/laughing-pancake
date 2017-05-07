import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';

import { Grid, Container, Header, Menu, Segment, Icon, Button, Progress, Rating } from 'semantic-ui-react'

class App extends Component {
  state = {
    activeItem: 'survey',
    percent: 0

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
    const BodyContainer = () => (
      <Container text>
        <Header as='h2'>How was work today?</Header>
         <Rating maxRating={5} defaultRating={0} icon='star' size='massive' onRate={this.handleRate} />
         { this.renderSecondaryQuestion() }
      </Container>
    )

    return (
      <div className='App'>
        <Grid>
          <Grid.Row verticalAlign='top'>
            <Container fluid>
              <Segment inverted>
            <Menu inverted secondary size='huge'>
              <Menu.Item header>
                <img src='/favicon.ico' />
                JOYFUL HR
              </Menu.Item>
              <Menu.Item name='survey'  active={activeItem === 'survey'} onClick={this.handleItemClick} />
              <Menu.Item name='profile'  active={activeItem === 'profile'} onClick={this.handleItemClick} />
              <Menu.Item name='contact'  active={activeItem === 'contact'} onClick={this.handleItemClick} />

              <Menu.Item position='right'>
                <div className="ProgressBar">
                  <Progress percent={this.state.percent} progress size='medium'/>
                </div>
              </Menu.Item>
            </Menu>
          </Segment>
          </Container>
          </Grid.Row>
          <Grid.Row>
              {BodyContainer()}
          </Grid.Row>
          <Grid.Row>
            <Container>
              Footer
            </Container>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
