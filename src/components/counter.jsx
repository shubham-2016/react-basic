import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 1,
        file : 'sample',
        tags : ['tag1','tag2','tag3']
    };

    styles = {
        fontSize: '20',
        fontWeight: "bold"
    }

    // constructor() {
    //     super();
    //     this.handledIncrement = this.handledIncrement.bind(this);
    // }

    render() { 

        return (
            <React.Fragment>
                <h1>Hello World, Welcome To React JS Tutorial</h1>
                <button onClick={ this.handledIncrement } className="btn btn-secondary btn-sm">Increment</button>
                <div>
                    <span style = {this.styles} className = { this.getBadgeClasses() } >
                        { this.formatCount() }
                    </span>
                </div>
                <div>
                    <ul> { this.getTags() } </ul>
                </div>
            </React.Fragment>
        );
    }

    getTags(){
        if(this.state.tags.length === 0){
            return 'Sorry There is no tag.';
        }else{
            return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
        }
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return this.state.count === 0 ?  "Zero" : count;
    }

    handledIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
}   
 
export default Counter;