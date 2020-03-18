import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    // 在某一时刻,可以自动执行的函数   =>  生命周期
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: []
        }
    }
    componentWillMount(){
        console.log('componentWillMount =>  组件将要挂载到页面');
    }

    componentDidMount(){
        // rap2模拟接口调用
        axios.get('http://rap2.taobao.org:38080/app/mock/247555/rap2test/reactDemo').then(res=>{
            console.log(res);
            this.setState({
                list:res.data.data
            })
        }).catch(err=>{
            console.log(err);
        })
        console.log('componentDidMount  =>  组件挂载完成');
    }

    shouldComponentUpdate(){
        console.log('1-shouldComponentUpdate  =>  在组件更新渲染之前执行');
        // 需要有个boolean值,是否向下执行  true 执行  false 不执行 
        return true
    }

    componentWillUpdata(){
        console.log('2-componentWillUpdata    =>  ');
    }

    componentDidUpdate(){
        console.log('4-componentDidUpdate   => 组件渲染完之后执行');
        
    }

    // 状态或属性有所改变时执行
    render() {
        console.log('3-render =>  组件渲染中');
        
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
                    <input 
                        id="zj" 
                        className="ipt" 
                        value={this.state.inputVal} 
                        onChange={this.inputChange.bind(this)}
                        ref = {(input) => {this.input = input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                    // 属性传值方式,单向数据流,子组件不可修改
                                    <XiaojiejieItem 
                                        avname='深田咏美'
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
        // setState是个异步的 虚拟dom ,  可以在setState后面加个回调函数,代表虚拟dom创建完成之后再执行
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length);
        })
    }

    inputChange(e) {
        // console.log(e.target.value);
        // this.state.inputVal = e.target.value
        this.setState({
            inputVal: this.input.value
            // inputVal: e.target.value
        })
    }
}
export default Xiaojiejie