import { Component } from 'react';

 
class Clock extends Component {

    constructor(props) {
        super();
        this.state = new Date().toLocaleTimeString();

    }

    render () {

        return
        <h1>{this.state}</h1>
    }
   
 }

 export default Clock;