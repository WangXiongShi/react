import React, { Component } from 'react';
// 校验传递的值
import propTypes from 'prop-types'
class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    // 组件第一次存在于dom中,函数是不会被执行的
    // 如果已经存在在于dom中,函数才会被执行
    componentWillReceiveProps(){
        console.log('child  =>  componentWillReceiveProps');
    }

    componentWillUnmount(){
        console.log('child  =>  子组件在删除时执行');
    }

    // nextProps 将要变化的属性 , 将要变化的状态
    shouldComponentUpdate(nextProps,nextState){
        // console.log('child-shouldComponentUpdate  =>  在组件更新渲染之前执行');
        // 需要有个boolean值,是否向下执行  true 执行  false 不执行 
        if(nextProps.content !== this.props.content) return true
        else return false
    }

    render() { 
        console.log('child => render');
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname}为你做-{this.props.content}
            </li>
         );
    }

    handleClick(){
        // console.log(this.props.index);
        this.props.deleteItem(this.props.index)
    }
}

// 父传子的参数校验   
XiaojiejieItem.propTypes={
    // isRequired必须传递值
    avname:propTypes.string.isRequired,
    content:propTypes.string,
    index:propTypes.number,
    deleteItem:propTypes.func
}

// 参数没传时的默认值
XiaojiejieItem.defaultProps={
    avname:'松岛枫'
}
export default XiaojiejieItem;