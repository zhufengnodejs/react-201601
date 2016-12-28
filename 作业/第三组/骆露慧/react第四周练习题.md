1.介绍一下React Router

答：React Router是完整的React路由解决方案，保持UI与URL同步，拥有简单的API与强大的功能，例如代码延迟加载、动态路由匹配、以及帮助简历正确的位置过度处理；

2.使用react router的时候使用那几个属性,这几个属性的是做什么的?

答：属性分别是：router、route、IndexRoute、Redirect等四个；router：所有相关的配置都是包在router里,整体路由的跟组件；route配置每一个具体的路由；IndexRoute:默认路由；Redirect：路由重定向；

3.使用Link组件的方法,以及它的缺点
答：Link是react-router提供的导航组件，可以直接使用进行路由切换；使用方法如下：
```
import React,{Component} from 'react'
import {Link} from 'react-router'
export default class App extends Component{
   render(){
      return (
      <div>
	     <h1>hello react router</h1>
	     <ul>
             <li>
                 <Link to='/'>首页</Link>
              </li>
               <li>
                 <Link to='/contact'>联系我们</Link>
              </li>
         </ul>
      </div>
      )
   }
}
```
缺点：link不能链接到根路由/，因为根路由会匹配任何自路由，可以用IndexLink；

4.切换路由的几种方式

答：
```
<Link to='/'>首页</Link>
browserHistory.push(path)、browserHistory.goback()
this.context.router.push(path)
```

5.如何手动切换路由,写个例子
答：
```
import React,{Component} from 'react';
import {Link,browserHistory} from 'react-router'
export default class App extends Component{
     handleSubmit(e){
       e.preventDefault();
       const username=e.target.elements[0].value;
       const repo=e.target.elements.value;
       const path='/about/${username}/${repo}';
       browserHistory.push(path)
     }
     render(){
      return (
      <div>
	     <h1>hello react router</h1>
	     <ul>
             <li>
                <form action="" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="user name"/>
                 <input type="text" placeholder="repo"/>
                 <button type="submit">go with me</button>
                </form>
              </li>
         </ul>
      </div>
      )
   }
}
```

6.怎么使组件具有context属性

答：将组件改为：
`App.contextTypes={router:React.PropType.object};`
`export default App`
可以：
`this.context.router.push(path)`

7.什么是函数式编程?

答：把函数本身上升到一等公民的地位，进行编程构建

8.什么是纯函数?怎么写一个纯函数

答：纯函数：一个没有任何副作用，并且返回值只由输入决定的函数；
纯函数例子：
```
function addPure(x){
     return function(y){
          return y+x
     }
}
var a=addPure(5)(1)
```

9.什么是函数柯里化?好处是什么

答：只传递函数的一部分参数来调用它，让它返回一个函数去处理剩下的参数；
好处：参数复用：利用柯里化，我们可以固定住其中的部分参数，在调用的时候，这个参数就相当于已经被记住了，不需要再次传递；
延迟执行；不断的柯里化，累计传入的参数，最后执行；

10.说一说高阶函数与柯里化函数的区别

答：高阶函数：以一个函数为参数，同时返回一个函数作为函数的返回值；
      柯里化函数：传入一部分参数，未必是函数，但是返回值是函数；
      柯里化函数是高阶函数的一种表现形式；