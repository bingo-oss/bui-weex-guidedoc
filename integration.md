## 已有项目集成 BUI-Weex

对于已经创建好的 Weex项目，使用我们的UI框架也是比较方便的。请按照如下步骤进行：

### 第一步:修改package.json
以下有标注`--add`的地方，需要新增，其他可以根据需要调整版本，例如可以使用最新的 vue 2.4.2，修改完成后 运行`npm install` 并确保其正常安装。

```javascript
 "scripts": {
    "start": "npm run serve & npm run dev", --add optional //用于合并dev和serve命令
    "dev": "webpack --watch",
    "serve": "node build/init.js && serve -p 8686",
    "debug": "weex-devtool",
    "publish": "node build/publish.js", --add optional //用于打包bundel js到 publish目录
    "build": "webpack"
  },
  "dependencies": {
    "glob": "^7.1.2", --add //用于文件操作
    "vue": "^2.4.2", //使用最新的vue
    "vue-template-compiler": "^2.4.2", //vue 2.4.2 需要它支持
    "vue-router": "^2.1.1",
    "vuex": "^2.1.1",
    "vuex-router-sync": "^4.0.1",
    "weex-vue-render": "^0.11.2"
  },
  "devDependencies": {
    "babel-core": "^6.20.0",
    "babel-loader": "^6.2.9",
    "babel-preset-es2015": "^6.18.0",
    "bui-weex": "^0.1.10", --add  //bui-weex组件库
    "copy-webpack-plugin": "^4.0.1", --add  //用于文件操作
    "css-loader": "^0.26.1",
    "ip": "^1.1.4",
    "node-sass": "^4.5.2",  --add //用于支持Sass
    "sass-loader": "^6.0.3", --add //用于支持Sass
    "serve": "^1.4.0",
    "vue-loader": "^10.0.2",
    "webpack": "^1.14.0",
    "weex-devtool": "^0.2.64",
    "weex-loader": "^0.4.1",
    "weex-vue-loader": "^0.2.5"
  }

```


### 第二步: 新增publish.js
这一步是可选的，如果不需要通过 `npm run publish` 来发布bundle.js可以忽略此步骤。如果需要，请 下载 [publish.js](https://github.com/bingo-oss/bui-weex-template/blob/master/build/publish.js)

### 第三步：修改 webpack.config.js

BUI-Weex提供的脚手架工程对webpack的优化包含如下方面：

1. 自动根据 src/entry 遍历入口文件；
2. 支持使用本地工程的图片资源(bui-image)；
3. 支持使用字体图标(bui-icon)；
4. 支持使用sass进行样式编写；

具体代码如下，请参考：

```javascript
var fs = require('fs');
var webpack = require('webpack');
var glob = require("glob");
var copy = require('copy-webpack-plugin');

var bannerPlugin = new webpack.BannerPlugin(
    '// { "framework": "Vue" }\n',
    {raw: true}
)

//  文件拷贝插件,将图片和字体拷贝到dist目录
var copyPlugin = new copy([
    {from: './src/image', to: "./image"},
    {from: './node_modules/bui-weex/src/font', to: "./font"}
])

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

// 生成webpack配置
function getBaseConfig() {
    return {
        entry: getEntries(),
        output: {
            path: 'dist',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                }, {
                    test: /\.vue(\?[^?]+)?$/,
                    loaders: []
                }, {
                    test: /\.scss$/,
                    loader: 'style!css!sass'
                }
            ]
        },
        vue: {},
        plugins: [bannerPlugin, copyPlugin]
    }
}

//*.web.js
var webConfig = getBaseConfig();
webConfig.output.filename = '[name].web.js';
webConfig.module.loaders[1].loaders.push('vue');

//*.weex.js
var weexConfig = getBaseConfig();
weexConfig.output.filename = '[name].weex.js';
weexConfig.module.loaders[1].loaders.push('weex');

module.exports = [webConfig, weexConfig];

```

### 第四步：工程结构

对于工程结构，BUI-weex 是有一定要求的，大致上和原生的 Weex工程保持一致。 具体请参看：[【目录规范】](http://dev.bingocc.com/buiweex/docs/folder.html)


您在集成过程中发现的任何问题和建议，请在ISSUE中提问！
