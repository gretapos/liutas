import { Component } from 'react';


class BumCircle extends Component {
    constructor(props) {
        super();
        this.state = {
            color: '#' + Math.floor(Math.random()*16777215).toString(16),
            count: 0,
        };
    }

    componentDidMount() {

    }


    click = () =>  { 
    
       this.setState({
          color: '#' + Math.floor(Math.random()*16777215).toString(16),
          count: this.state.count +1
        });
    }


    render () {
        return (
            <>
                <div className='bumCircle' style={{backgroundColor: this.state.color}}>
                <div className='counter' onClick={this.click}>{this.state.count}</div>
                
                    
                </div>
            </>
        )
    }
    

}


export default BumCircle;