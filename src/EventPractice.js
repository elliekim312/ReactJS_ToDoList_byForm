import React, { Component } from 'react'

export default class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick() {
    //     alert(this.state.message)
    //     this.setState({
    //         message: ''
    //     });
    // }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ' : ' + this.state.message)
        this.setState({
            username: '',
            message: ''
        });
    }


    handleKeyPress = (e) => {
        if(e.key === 'Confirm'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1><b> Practice Event!! </b></h1>
                <label> Your Name </label> <br/>
                <input type="text" name="username" placeholder="Enter your name" value={this.state.username}
                    onChange={
                        this.handleChange
                        // (e) => {
                        //     this.setState({
                        //         message: e.target.value
                        //     })
                        //     // console.log(e.target.value);
                        // }
                    }
                />
                <input type="text" name="message" placeholder="Enter message" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <button onClick={
                    this.handleClick
                    // () => {
                    //     alert(this.state.message);
                    //     this.setState({
                    //         message: ''
                    //     });
                    // }
                }> Confirm </button>
            </div>
        )
    }
}
