import React, { Component } from 'react'

export default class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    scrollToUP = () => {
        // const { clientHeight } = this.box;

        this.box.scrollUp = 0;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '500px',
            width: '500px',
            overflow: 'auto'
        }

        const innerStyle ={
            width: '100%',
            height:'650px',
            background: 'linear-gradient(white,pink)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
                    <div style={innerStyle}/>
            </div>
            
        )
    }
}
