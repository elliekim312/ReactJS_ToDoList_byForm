import React, { Component } from 'react'

export default class AdvencedIterationSample extends Component {
    
    state = {
        names : ['New York City', 'Boston', 'Minneapolis', 'Irvine'],
        name : '',
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        //add value to names, initialize name
        this.setState({
            names:this.state.names.concat(this.state.name),
            name: ''
        })
    }

    handleRemove = (index) => {
        
        const { names } = this.state;
        // add value to names array except index value using slice and ... 
        // this.setState({
        //     names: [
        //         ...names.slice(0, index),
        //         ...names.slice(index + 1, names.length)
        //     ]
        // });


        // create new array except index value
        this.setState({
            names: names.filter((item, i) => i !== index)
        });


    }
    render() {        
        const nameList = this.state.names.map(
            (name, index) => (<li key={index} onDoubleClick={() => this.handleRemove(index)}>{name}</li>)
        )
        
        return (
            <div>
                <h1>Map, Key Example</h1>
                <h2> Add your favorite cities</h2>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <button onClick={this.handleInsert}> Add </button>
                <ul>
                    {nameList}
                </ul>        
            </div>
        )
    }
}

