import React from 'react';
import '../assets/scss/main.scss';

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
      </div>

    );
  }

}