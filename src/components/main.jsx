import React, { Component } from 'react';
import Counter from './counter.jsx';

class Main extends Component {
    
    render() { 
        return ( 
            <div>
                <button onClick={() => { this.props.handleReset() }} className="btn btn-primary btn-sm m-2">RESET</button>
                
                { this.props.counters.map((countr) => 
                    <Counter 
                        key={countr.id} 
                        onDelete={this.props.handleDelete}
                        handledIncrement={this.props.handledIncrement}
                        value={countr.value} 
                        title={'Title: '+countr.id}
                        counterId={countr.id}
                        tags = {this.props.tags}
                        counter = {countr}
                    />
                )} 
            </div>
        );
    }

}
 
export default Main;