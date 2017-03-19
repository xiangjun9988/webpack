##### webpack参考地址 http://www.jianshu.com/p/dcb28b582318
##### Webpack的核心原理
1. 一切皆模块
```
正如js文件可以是一个“模块（module）”一样，其他的（如css、image或html）文件也可视作模 块。因此，你可以require('myJSfile.js')亦可以require('myCSSfile.css')。这意味着我们可以将事物（业务）分割成更小的易于管理的片段，从而达到重复利用等的目的。
```

2. 按需加载

```
传统的模块打包工具（module bundlers）最终将所有的模块编译生成一个庞大的bundle.js文件。但是在真实的app里边，“bundle.js”文件可能有10M到15M之大可能会导致应用一直处于加载中状态。因此Webpack使用许多特性来分割代码然后生成多个“bundle”文件，而且异步加载部分代码以实现按需加载。
```

##### 把样式打包进来，需要配合安装style-loader和css-loader

##### webpack如何让html和js绑在一起呢？
接下来要登场的是：html-webpack-plugin这么一个插件

##### 其他模块的解决方案


##### CONFIGURATION
entry: 配置入口资源
output: 配置编译后的资源
module: 资源处理
resolve: 配置资源别名/扩展名等
plugins: 插件，比loader更强大



上线上的是Build,entry很重要，可以是单一的一个，也可以是数组







术---{按照步骤说做法}：
第一步：安装 install
第二步：配置 webpack.conf.js
   核心、关机键点【entry - output - module - resolve - plugins】
第三步：启动 webpack













为什么要用？
理由一：前端的世界，很乱。
理由二：

理由一举个例子：
假设:
```
a.js  依赖 b.js
b.js  依赖 c.js
c.js   依赖 d.js
```
如果在我们前端去引用这些依赖的时候,往往是这样的:
```
<script src='a.js'></script>
<script src='b.js'></script>
<script src='c.js'></script>
<script src='d.js'></script>
```
问题
```
不论你进入哪个页面,这些js 都要去加载…造成不必要的浪费
```

特性好处
支持CommonJs和AMD模块，意思也就是我们基本可以无痛迁移旧项目。
支持模块加载器和插件机制，可对模块灵活定制。特别是我最爱的babel-loader，有效支持ES6。
可以通过配置，打包成多个文件。有效利用浏览器的缓存功能提升性能。
将样式文件和图片等静态资源也可视为模块进行打包。配合loader加载器，可以支持sass，less等CSS预处理器。
内置有source map，即使打包在一起依旧方便调试。
看完上面这些，可以想象它就是一个前端工具，可以让我们进行各种模块加载，预处理后，再打包。之前我们对这些的处理是放在grunt或gulp等前端自动化工具中。有了webpack，我们无需借助自动化工具对模块进行各种处理，让我们工具的任务分的更加清晰。