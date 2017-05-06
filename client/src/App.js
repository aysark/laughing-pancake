import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';

import { Grid, Container, Header, Menu, Segment, Icon } from 'semantic-ui-react'

class App extends Component {
  state = {
    activeItem: 'survey'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const BodyContainer = () => (
      <Container text>
        <Header as='h2'>Header</Header>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
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
