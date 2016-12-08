1.什么是Git?  
  答：git是分布式的版本管理工具；

2.什么是GitHub?
  答：GitHub是一个用git做版本控制的项目托管平台；

3.git如何从master分支创建develop分支?
  答：在master分支上直接git branch develop；

4.git怎么切换分支,切换分支的时候应注意哪些?
  答：git checkout 分支名；
      分支切换之前请确保你的分支没有其他的任何操作（如新增、修改）

5.怎么查看git的状态,结果中的红色表示什么?绿色表示什么?
 答：使用git status命令查看状态；
     红色代表在工作区；
     绿色代表在暂存区

6.创建一个属于自己的git仓库,使用ssh的方式提交到github上，并提供github地址? 
 答： https://github.com/luolouhui.git

7.babel-cli这个模块提供了那两个命令? 
 答：babel和babel-node

8. `babel`是什么?babel能够做什么,能够解析那些语法?
 答：babel是一个通用的多用途的javascript编译器；可以把最新标准的javascript代码向下编译成可使用的版本；
     babel能够把整个babel拆分成核心的块和包（core），有很丰富的plugin插件，可以preset预设，可以与webpack、gulp、elint做个结合；
     能够解析es6/7和jsx和流式语法的检查等语法；

9. babel的配置文件是什么? *preset* 和 *plugin* 的区别和关联?
 答：babel的配置文件是 .babelrc 。
     preset是预设，plugin是插件。
     babel是一个编译器，但是做了架构分离，babel-core是核心，babel-cli是babel的命令行工具，结合plugin和preset才能做具体的解析工作。preset是对plugin的组合封装，从而完成一系列编译工作。

10. `babel` *编译单个* 文件使用什么命令?
 答：babel test.js --out-file output.js

11. babel *编译文件夹* 使用什么命令?
 答：babel src --out-dir dist