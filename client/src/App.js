import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Survey from './Survey';
import Engagement from './Engagement';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Container, Header, Menu, Segment, Icon, Button, Progress, Rating } from 'semantic-ui-react'

class App extends Component {
  state = {
    activeItem: 'home',
    percent: 0
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  increment = () => this.setState({
   percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })

  render() {
    const { activeItem } = this.state
    const BodyContainer = () => (
      <Container text>
        <Header as='h2'>Welcome</Header>

      </Container>
    )

    return (
      <div className='App'>
        <Router>
          <Grid>
            <Grid.Row verticalAlign='top'>
              <Container fluid>
                <Segment inverted>
              <Menu inverted secondary size='huge'>
                <Menu.Item header>
                  <img src='/favicon.ico' />
                  <Link to="/">JOYFUL HR</Link>
                </Menu.Item>
                <Menu.Item name='survey'  active={activeItem === 'survey'}  as={Link} to='/Survey' onClick={this.handleItemClick} />
                <Menu.Item name='dashboard'  active={activeItem === 'dashboard'} as={Link} to='/Dashboard' onClick={this.handleItemClick} />
                <Menu.Item name='profile'  active={activeItem === 'profile'} onClick={this.handleItemClick} />
                <Menu.Item name='contact'  active={activeItem === 'contact'} onClick={this.handleItemClick} />

                { this.state.activeItem === 'survey' ?
                <Menu.Item position='right'>
                  <div className="ProgressBar">
                    <Progress percent={this.state.percent} progress size='medium'/>
                  </div>
                </Menu.Item> : <Menu.Item position='right'></Menu.Item> }
              </Menu>
            </Segment>
            </Container>
            </Grid.Row>
            <Grid.Row>
              <Route exact path="/" component={BodyContainer}/>
              <Route path="/Survey" component={Survey}/>
              <Route path="/Dashboard" component={Engagement}/>
            </Grid.Row>
            <Grid.Row>
              <Container>
                Footer
              </Container>
            </Grid.Row>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
