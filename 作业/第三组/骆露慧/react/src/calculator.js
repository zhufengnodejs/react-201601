
import  React , { Component } from 'react';
import ReactDOM from 'react-dom';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0
        }
    }
    render(){
        return(
            <div>
            <input
        type="text"
        defaultValue="0"
        ref="firstParam"
            />
            <select ref="operator">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input
        type="text"
        defaultValue="0"
        ref="secondParam"
            />
            <button
        onClick={ () => this.caculate()}
>=</button>
<span>{this.state.result}</span>
</div>
)
}
caculate(){
    let param1 = Number(ReactDOM.findDOMNode(this.refs.firstParam).value);
    let param2 = Number(ReactDOM.findDOMNode(this.refs.secondParam).value);
    if(isNaN(param1)||isNaN(param2)){
        alert("请正确输入参数");
        ReactDOM.findDOMNode(this.refs.firstParam).value = 0;
        ReactDOM.findDOMNode(this.refs.secondParam).value = 0;
        return;
    }
    let result = 0;
    let operator = ReactDOM.findDOMNode(this.refs.operator).value;
    switch (operator){
        case '+' :
            result = param1 + param2;
            break;
        case '-' :
            result = param1 - param2;
            break;
        case '*' :
            result = param1 *  param2;
            break;
        case '/' :
            result = param1 / param2;
            break;
        default:
            break;
    }

    this.setState({result})
}
}

export default Calculator;