import React from 'react';
import { Button } from 'react-bootstrap';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      helloWorld: 'hola',
      active: false
    };

    this.changeActive = this.changeActive.bind(this);
  }

  componentDidMount() {
    //code when component is mounted
    this.setState({
      helloWorld: 'hola4'
    })
  }

  changeActive() {
    this.setState({
      active: ! this.state.active,
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.helloWorld}</h2>
        <Button variant="primary" onClick={this.changeActive}>Example</Button>
      </div>

    );
  }

}