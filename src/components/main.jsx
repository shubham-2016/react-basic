import React, { Component } from 'react';
import Counter from './counter.jsx';

class Main extends Component {
    state = {  
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
    }

    render() { 
        return ( 
            <div>
                <button onClick={() => { this.handleReset() }} class="btn btn-primary btn-sm m-2">RESET</button>
                
                { this.state.counters.map((countr) => 
                    <Counter 
                        key={countr.id} 
                        onDelete={this.handleDelete}
                        value={countr.value} 
                        title={'Title: '+countr.id}
                        counterId={countr.id}
                    />
                )} 
            </div>
        );
    }

    handleReset = () => {
        const counterReset = this.state.counters.map(c => {
            c.value = 0
            return c;
        });
        this.setState({counterReset});
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };
}
 
export default Main;