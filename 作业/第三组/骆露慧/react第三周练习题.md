1.state和props的用法和区别?
 >  答：props：组件间的数据传输；
>           state：管理组件自己内部的数据;
>       var MyComponent=function(props){
>       var state={}
>       return "v dom"
>       }
  
2.stateless component的定义和有点是什么？

>答：无状态组件；

>`const APP=()=><h1>hello</h1>`

3.写jsx语法,是怎么引入样式名称和style的


 >  答：import React,{component} from 'react';
 >import './index.css';
 >class  App extends Component{
  > render( ){
  >const myStyle={
  >backgorund:#333;
  >}
  >return (
  `<div style={myStyle}></div>`
  > )
 >}
 >}


4.react render方法中 return一个组件的时候需要注意什么?

> 答：1.不允许顶层出现多个html标签，用一个标签包裹；2.注释必须是{/*
> */}这种方式在jsx里面；3.label标签里的for改为htmlFor，class用className;4.return后用括号包起来，不能没有内容直接换行；

5.react 怎么引入一个变量

> 答：`import React,{Component} from 'react'`
> class App extends Component{
>    render( ){
>     const obj={
>     name:"xiaoming"
>     }
>      return (
>      <div>{obj.neme}
>     )
>     }
>     }

6.如何实现组件接口规范约束？

> 答：Profile.propTypes = {
>     url:React.PropTypes.string,
>     name:React.PropTypes.string,
>     id:React.PropTypes.number.isRequired };

7.怎么设置组件默认参数

 >答：Profile.defaultProps = {
 >            url:"",
 >            name:"xiaoming",
 >             id: "0"
 >};
 
8.ref是什么?怎么获取ref对应的实例

>答：react的一个属性，通过ref属性，可以获取dom节点；
`this.refs.content`

9.react怎么获取DOM节点

>答：1.通过ref属性获取
> 2.`this.props.children`
> 3.React.Children API

10.react移除节点的两个方法是哪个?

>答：1.ruturn null;
>2.ReactDOM.unmoutComponentAtNode(document.getElementById('app'))