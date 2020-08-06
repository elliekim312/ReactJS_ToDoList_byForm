import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class MyComponent extends Component {
    static defaultProps = {
        name : 'React!!'
    }
    
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            number : 3
        }
    }

    state = {
        number: 0
    }
   
    render() {
        return (
            <div>
                <p> Yo, this is my component! </p>
                <p> Check, my name is { this.props.name } </p>
                <p> My age is { this.props.age } </p>
                <p> My favorite number is { this.state.number } </p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number+1
                    })
                }
            }> Add </button>
            </div>
        )
    }
}

// MyComponent.propType = {
//     name: PropTypes.string,
//     age: PropTypes.number.isRequired
// }

// MyComponent.defaultProps = {
//     name: 'React'
// }



// import React, { Component } from 'react';

// class MyComponent extends Component {
//     render() {
//         return (
//             <div>
//                 Yo, this is my component!
//             </div>
//         )
//     }
// }

// export default MyComponent;