1. 介绍一下webpack
- Webpack 是当下最热门的前端资源模块化管理和打包工具
- 可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源
- 可以通过loader的转换，任何形式的资源都可以作为模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等

2. 箭头函数支持的两种写法是什么？函数里的this指向谁？
```
var fn = x => x * x
var fn = x => {....   return ..;}
```
- 上面一种使用与比较简单的箭头函数，下面是可以包含多语句的函数
- 函数中this是由上下文决定的

3. 如何用es6的方法定义一个类，？（写个小例子，里面要包括公共方法私有方法和继承）
```
    class People {
        constructor(name) {
            this.name = name;
        }
        sayName() {
            console.log('My name is ' + this.name);
        }
    };

    class Student extends People {
        constructor(name, grade) {
            super(name);
            this.grade = grade;
        }
        selfIntroduction() {
            console.log('My name is ' + this.name + ' and my grade is ' + this.grade);
        }
    }
    var stu1 = new Student('Anna', 7);
    console.log(stu1);
    stu1.selfIntroduction();
```

4. 以下str用es6的方法怎么写？
```
    var name=‘cat’,age=1, var str=name+’is’+age+’years old’
    var name="cat",age=1;   var str = `${name} is ${age} years old`;
```
5. 以下对象怎么用解构赋值的方法怎么解析成一个个变量？
```
    var obj={
         a:"1",
         fn4:function(){console.log(this.a);},
         bcc:[1,2,3]
    };
    var {a,fn4,bcc} = obj;   将1赋给变量a，将fn4函数赋给变量fn4，将数组[1,2,3]赋给变量bcc
```
6. 以下数组怎么用解构赋值的方法怎么解析成一个个变量？
```
    var ary=[‘cat’,’dog’,’fox’]
    var [cat,dog,fox] = ary;   将cat赋给变量cat，dog赋给变量dog，fox赋给变量fox
```
7. es6函数怎么定义默认参数？怎么传任意参数的？（写个函数小例子）
```
    function fn(a=1,b=2){
        console.log(a,b);
    }   // 定义默认参数

    function fn(str1,...keys) {
        console.log(arguments);
        return keys;
    }
    console.log(fn('my','list','OK'));
    // 传递任意参数，会将从第二个之后的参数放于数组keys中，未放置之前为空数组
```
8. 写一下let和const的区别
- onst定义的变量，只能在声明时赋值，并且不可修改
- let是定义的块级作用域
9. 用es6的方法写出import和export的几种方法
- import name from 'my-module.js' ;
    - 导入整个模块到当前做作用域，name作为接受该模块的对象名称
- import {moduleName} from 'my-module.js';
    - 导入模块中某个成员
- import {moduleName1,moduleName2} from 'my-module';
    -导入模块中的多个成员
- export {function};
    - 导出一个函数
- export const foo = 2;
    - 导出一个常量
- export default myFunctionClass;
    - 默认导出，一个模块只能有一个默认导出，这个导出可以是一个对象，一个函数或一个类
10. 根据webpack视频所学，练习用webpack打包一个文件出来（包括，单独分离css,less文件，自动弹出浏览器，文件压缩等功能，做完上传到自己的仓库中，提交你的项目地址即可）
```
    https://github.com/zj135808/myWebpack
```