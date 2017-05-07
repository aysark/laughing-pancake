import React, { Component } from 'react';
import Engagement from './Engagement';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Container, Header, Menu, Segment, Icon } from 'semantic-ui-react'

class Dashboard extends Component {
  state = {
    activeItem: 'survey'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const BodyContainer = () => (
      <Container text>
        <Engagement />
      </Container>
    )

    return (
      <div className='Dashboard'>
        <Grid>
          <Grid.Row verticalAlign='top'>
            <Container fluid>
              <Segment inverted>
            <Menu inverted secondary size='huge'>
              <Menu.Item header>
                <img src='/favicon.ico' />
                JOYFUL HR
              </Menu.Item>
              <Menu.Item name='dashboard'  active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
              <Menu.Item name='explore'  active={activeItem === 'explore'} onClick={this.handleItemClick} />
              <Menu.Item name='configure'  active={activeItem === 'configure'} onClick={this.handleItemClick} />
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

export default Dashboard;
