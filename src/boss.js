import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class boss extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isShow:true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                {/* unmountOnExit 删除dom元素 */}
                <CSSTransition 
                    in={this.state.isShow}
                    timeout={2000}
                    classNames='bossText'
                    unmountOnExit
                >
                    <div>boss级人物-孙悟空</div>
                </CSSTransition>
                {/* <div className={this.state.isShow ? 'show' : 'hide'}>boss级人物-孙悟空</div> */}
                <button onClick={this.toToggole}>召唤boss</button>
            </div>
        );
    }

    toToggole(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default boss;