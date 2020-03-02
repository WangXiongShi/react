import React, { Component, Fragment } from 'react'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: ['头部按摩', '精油推背']
        }
    }

    render() {
        return (
            // <div>
            // flex
            <Fragment>
                <div>
                    <input value={this.state.inputVal} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index + item}>{item}</li>
                        })
                    }

                </ul>
            </Fragment>
            // </div>
        )
    }
    // 增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        })
    }

    inputChange(e) {
        // console.log(e.target.value);
        // this.state.inputVal = e.target.value
        this.setState({
            inputVal: e.target.value
        })
    }
}
export default Xiaojiejie