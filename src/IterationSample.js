import React, { Component } from 'react'

export default class IterationSample extends Component {
    render() {
        
        const names = ['eunjung', 'ej', 'j', 'jKim'];

        // use index value by map 
        const nameList = names.map(
            (name, index) => (<li key={index}>{name}</li>)
        )

        return (
            <div>
                <h1>Map, Key Example</h1>
                <ul>
                    {nameList}
                </ul>        
            </div>
        )
    }
}

