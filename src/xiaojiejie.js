import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

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
                {/* demo注释 */}
                {
                    // demo注释
                }
                <div>
                    <label htmlFor="zj">增加服务:</label>
                    <input id="zj" className="ipt" value={this.state.inputVal} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (

                                    <XiaojiejieItem 

                                        key={index+item}
                                        content={item} 
                                        index={index}
                                        deleteItem={this.delItem.bind(this)}
                                    
                                    />

                            )
                        })
                    }

                </ul>
            </Fragment>
            // </div>
        )
    }
    // 删除列表项
    delItem(index) {
        console.log(index);
        let list = this.state.list
        list.splice(index, 1)

        // this.state.list.splice(index, 1)
        this.setState({
            list
        })
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