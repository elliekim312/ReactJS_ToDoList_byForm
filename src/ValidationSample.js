import React, { Component } from 'react';
import './ValidationSample.css';

export default class ValidationSample extends Component {
    // initialize
    state = {
        password : '',
        clicked : false,
        validated : false
    }
    
    // Onchange --> password of state is updated
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    // Onclick --> clicked is being true, validatied is validation result
    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <h1> Validation </h1>
                {/* className is empty until click the btn. after click the btn, set value by validation result */}
                <input
                    ref = { (ref) => this.input=ref }
                    type="password" value={this.state.password} onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
                <button onClick={this.handleButtonClick}> Validate </button>      
            </div>
        )
    }
}
