import React from 'react'

import '../css/AnswerScreen.css'

class AnswerScreen extends React.Component {
    render() {
        return (
            <div className='answer-screen'>
              {this.props.txt}
            </div>
        )
    }
}

export default AnswerScreen