import React, { Component } from 'react';
import Counter from './counter.jsx';

class Main extends Component {
    state = {  
        counters: [
            {id:1, value:1},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ],
        tag: ['tag1','tag2','tag3']
    }

    render() { 
        return ( 
            <div>
                <button onClick={() => { this.handleReset() }} className="btn btn-primary btn-sm m-2">RESET</button>
                
                { this.state.counters.map((countr) => 
                    <Counter 
                        key={countr.id} 
                        onDelete={this.handleDelete}
                        handledIncrement={this.handledIncrement}
                        value={countr.value} 
                        title={'Title: '+countr.id}
                        counterId={countr.id}
                        tags = {this.state.tag}
                        counter = {countr}
                    />
                )} 
            </div>
        );
    }

    handleReset = () => {    
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });    

        this.setState({ counters});
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters:counters });
    };

    handledIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters});
    }
}
 
export default Main;