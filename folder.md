## 目录规范
BUI-Weex 提供的脚手架工程是在官方的基础上进行改造的，主要包括以下几个方面特性：

* 动态生成 webpack 入口
* 支持 Sass 加载器
* 支持加载工程目录下图片资源
* 支持加载 ttf 字体图标文件

先来看看目录结构，然后再逐个分析实现的机制！

### 目录结构

* bui-weex-template 
	* assets —— weex官方内置
	* build —— weex官方内置，自定义脚本,在 npm run serve时候使用
	* dist —— webpack打包生成的目录，包含js,image,ttf等
	* node_modules —— 工程依赖的npm package
	* src —— 业务代码
		* entry —— 放置webpack的入口，多个入口就放在这里
			* app.js —— 入口文件
		* image —— 放置图片资源
			* logo.png —— 内置logo图片 
		* js —— 放置js公共代码目录
		* views —— 放置视图页面
			* app.vue —— 对应app.js的视图页面 
	* .babelrc —— 支持ES6语法的配置文件，删除后无法使用ES6
	* config.js —— 启动Server的时候自动生成的文件(npm run serve)
	* index.html —— PC预览首页
	* package.json —— npm的配置文件，里面包含依赖配置、Scripts配置等
	* webpack.config.js —— webpack的脚本文件
	* weex.html —— PC预览页面,index.html 嵌入的 iframe页面


### 特性：动态生成 webpack 入口

标准的webpack配置entry是需要指定文件的，为了方便使用，框架将自动遍历 `src/entry`目录并生成对应的 js bundle

关键代码 (webpack.config.js):

```javascript
// 遍历文件入口,动态生成入口
function getEntries () {
    var entryFiles = glob.sync('./src/entry/**', { 'nodir': true})
    var entries = {};
    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.split('entry/')[1];
        filename = filename.substr(0, filename.lastIndexOf('.'));
        entries[filename] = filePath;
    }
    return entries;
}
```

### 特性：支持 Sass 加载器

框架内使用 Sass的语法来写样式，对应的样式文件是 *.scss，框架做了支持：

在 package.json 中配置如下依赖：

```javascript
 "node-sass": "^4.5.2",
 "sass-loader": "^6.0.3",
```

在 web.config.js 中配置如下loader:

```javascript
loaders: [
	{
     test: /\.scss$/,
     loader: 'style!css!sass'
    }
]
```

### 特性：支持加载工程目录下图片资源
官方的`<image>`组件不支持加载本地工程的图片，只加载远程的 http 图片。框架做了处理，将 `src/image` 目录下的图片资源在编译阶段拷贝到 dist 目录下，开发人员就可以通过 `<bui-image>` 来使用本地的图片。

在 web.config.js 中

```javascript
//  文件拷贝插件,将图片拷贝到dist目录
var copyPlugin = new copy([
    {from: './src/image', to: "./image"}
])
```
使用方式:

```html
<bui-image src="/image/logo.png" width="244px" height="172px"></bui-image>
```

### 特性：支持加载 ttf 字体图标文件

框架提供了`<bui-icon>`组件，里面用到 [ionicons](http://ionicons.com/) 的字体文件 ttf，框架在编译阶段将其拷贝到 dist 目录。组件内部会从 dist 目录下找到 这个ttf文件。

```javascript
//  文件拷贝插件,将字体拷贝到dist目录
var copyPlugin = new copy([
    {from: './node_modules/bui-weex/src/font', to: "./font"}
])
```