import React, { Component } from 'react';
// 校验传递的值
import propTypes from 'prop-types'
class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() { 
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