import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{false ? '111':'222'}</li>
                <li>2</li>
            </ul>
        )
    }
}
export default App