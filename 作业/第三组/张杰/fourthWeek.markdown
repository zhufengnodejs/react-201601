## 介绍一下React Router
- React Router 是专为 React 设计的路由解决方案
-  React Router保持UI和URL同步，它拥有简单的API和强大的功能，例如代码的延迟加载，动态路由匹配，以及帮助建立正确的位置过渡处理

## 使用react router的时候使用那几个属性,这几个属性的是做什么的?
- history
- path：路由的路径
- component：访问该路由时进行渲染的组件

## 使用Link组件的方法,以及它的缺点
- 使用Link组件的方法

```
    <Link to="/">首页</Link>
     <Link to="/contact">联系我们</Link>
```

## 切换路由的几种方式
- 使用link进行路由切换

```
    <Link to={this.props.url} >名称显示</Link>
```
- 使用browserHistory进行路由切换

```
    browserHistory.push( path )
```
- 使用context属性

```
    this.context.router.push( path )

    App.contextTypes = {
      router: React.PropTypes.object
    }

```
- 使用重定向

```
    <Redirect from="about" to="about/react/router" />   // 当访问的路径为 /about的时候，跳转到  /about/react/router
```

## 如何手动切换路由,写个例子
```
    import React, { Component } from 'react'
    import { Link, IndexLink, browserHistory } from 'react-router'
    
    import NavLink from './NavLink'
    
    class App extends Component {
      handleSubmit( e ){
        e.preventDefault()
    
        const userName = e.target.elements[0].value
        const repo = e.target.elements[1].value
    
        const path = `/about/${userName}/${repo}`
    
        // browserHistory.push( path )
        console.log( this.context )
        console.log( this.props )
    
        this.context.router.push( path )
    
      }
    
      goBackWithMe(){
        this.context.router.goBack()
      }
    
      render(){
        return (
          <div>
            <h1> hello react router~~! </h1>
            <ul>
              <li>
                {/* <NavLink url="/" linkName="首页" /> */}
                <IndexLink to="/" activeStyle={{ fontSize: "40px"}}> 首页 </IndexLink>
    
              </li>
              <li>
                <NavLink url="/contact" linkName="联系我们" />
              </li>
              <li>
                <NavLink url="/about" linkName="关于我们" />
              </li>
              <li>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" placeholder="user name"/>
                  <input type="text" placeholder="repo"/>
                  <button type="submit"> go with me </button>
                  <button onClick={ this.goBackWithMe.bind(this) }> go back </button>
                </form>
              </li>
            </ul>
            { this.props.children }
          </div>
        )
      }
    }
    
    App.contextTypes = {
      router: React.PropTypes.object
    }
    
    export default App
```

## 怎么使组件具有context属性
- 如下：给组件App添加context属性

```
    App.contextTypes = {
      router: React.PropTypes.object
    }
```

## 什么是函数式编程?
- 把函数本身上升到一等公民的地位，进行编程构建

## 什么是纯函数?怎么写一个纯函数
- 一个没有任何副作用，并且返回值只由输入决定的函数
- 副作用：如果一个函数，除了返回值之外，还会修改某些其它状态，或者与外部函数等有可观测的交互
- slice是一个纯函数，splice是非纯函数，例如下面列举了两个函数，一个为纯函数，一个为非纯函数

```
    // 非纯函数
    var x = 5;
    function add(y){return y+x}
    
    // 纯函数
    function add (y){
        return function(x){
            return y+x
        }
    }
```

## 什么是函数柯里化?好处是什么
- 函数柯理化：只传递函数的一部分参数来调用它，让它返回一个函数去处理剩下的参数
- 好处：
 - 参数复用:利用柯理化，我们可以固定其中的部分参数，在调用的时候，个参数就相当于已经被记住了，不需要再次传递，也就是我们这里说的参数复用
 - 延迟执行：不断的柯里化，累积传入的参数，最后执行

## 说一说高阶函数与柯里化函数的区别
- 高阶函数：一个函数为参数，同时返回一个函数作为函数的返回值
- 函数柯理化：只传递函数的一部分参数来调用它，让它返回一个函数去处理剩下的参数


