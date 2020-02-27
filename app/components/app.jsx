import React from 'react';
import { Button } from 'react-bootstrap';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      helloWorld: 'hola'
    };
  }

  componentDidMount() {
    //code when component is mounted
    this.setState({
      helloWorld: 'hola4'
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.helloWorld}</h2>
        <Button variant="primary">Primary</Button>
      </div>

    );
  }

}