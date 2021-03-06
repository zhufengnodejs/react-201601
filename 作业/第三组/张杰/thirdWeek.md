#### 1.state和props的用法和区别?
- props一般用于父组件向子组件的通信，主要用于组件的数据传递
- state一般用于组件内部的数据管理
- props的用法

```
    父组件
    render() {
        var name = 'Alice';
        return <Profile name={name} />

    }
    子组件
    render (){
        let name = this.props.name;
        return <div>{name}</div>

    }
```
- state的用法

```
        constructor (){
            super();
            this.state = {
                val:'DefaultValue'
            }
        }
        updateData = (e) => {
            this.setState({
                val:e.target.value
            })
        }
        render(){
            return (
                <div>
                    <input type="text" onChange={this.updateData}/>
                    <h1>{this.state.val}</h1>
                </div>
            )
        }
```

#### 2.stateless component的定义和有点是什么？
- stateless:无状态组件是为创建纯展示的组件，根据传入的props进行展示
- stateless优点：增强编写组件的方便性，提高整体的渲染性能
- component：在开发中，可以将显示的内容分割成不同的组件，之后再将这些组件组合到一起，这样在下次使用相同的组件的时候就可以复用
- component优点：组件是具有生命周期的，这样在我们开发中就可以根据自身需要对其进行处理

#### 3.写jsx语法,是怎么引入样式名称和style的
- 通过样式对象引入：

```
    <h1 style={titleStyle}>Hello World</h1>
```
- 可以通过import引入样式文件

```
    import './style.css'
```

#### 4.react render方法中 return一个组件的时候需要注意什么?
- return 后面只能有一个闭合的标签
- 如果return后面有多行语句的时候，需要使用 () 括号给括起来

#### 5.react 怎么引入一个变量
```
    import React , { Component } from 'react'
```

#### 6.如何实现组件接口规范约束？
- 使用propTypes
- 下面是给Profile这个组件的接收值进行了接口规范

```
    Profile.propTypes = {
        url:PropTypes.string,
        name:PropTypes.string,
        id:PropTypes.number
    }
```

#### 7.怎么设置组件默认参数
- 使用defaultProps

```
    Profile.defaultProps = {      
        name:'xxx',
        id:0,
        url:''
    };
```

#### 8.ref是什么?怎么获取ref对应的实例
- ref是React中的一个属性，当render函数返回某个组件的实例时，可以给render中的某个虚拟DOM节点添加一个ref属性，通过ref属性，我们还可以拿到该虚拟DOM对应的真实DOM节点
- 有以下两种方式可以获取ref对应的实例

```
    <input type="text" ref="username" />  
       
    var usernameDOM = this.refs.username.getDOMNode();  
    var usernameDOM = React.findDOMNode(this.refs.username); 
```

#### 9.react怎么获取DOM节点
- 可以通过ref获取到对应的DOM节点
- 通过this.props.children获取到组件的子DOM节点

#### 10.react移除节点的两个方法是哪个?
- 在渲染之前 ```return false```
- 使用如下方式进行删除，从根节点删除

``` 
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
```
