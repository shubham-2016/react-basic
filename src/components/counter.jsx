import React, { Component } from 'react';

class Counter extends Component {

    // state = {
    //     count : this.props.value,
    //     file : 'sample',
    //     tags : ['tag1','tag2','tag3']
    // };

    styles = {
        fontSize: '20',
        fontWeight: "bold"
    }

    // constructor() {
    //     super();
    //     this.handledIncrement = this.handledIncrement.bind(this);
    // }

    render() { 
        const { handledIncrement,counter,counterId } = this.props;
        return (
            <React.Fragment>
                <h4>{this.props.title}</h4>
                
                <button onClick={ () => { handledIncrement(counter) } } className="btn btn-secondary btn-sm">Increment</button>
                
                <button onClick={ () => this.props.onDelete(counterId) } className="btn btn-danger btn-sm m-2">Delete</button>
                
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
        if(this.props.tags.length === 0){
            return 'Sorry There is no tag.';
        }else{
            return this.props.tags.map((tag) => <li key={tag}>{tag}</li>);
        }
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.props.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props;
        return this.props.value === 0 ?  "Zero" : value;
    }
}   
 
export default Counter;