import React, { Component } from 'react';
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
                <div className={this.state.isShow ? 'show' : 'hide'}>boss级人物-孙悟空</div>
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