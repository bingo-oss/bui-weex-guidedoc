## BUI-Weex概述

BUI-Weex 是一套专门为[ Weex ](http://weex-project.io/cn/)前端开发者打造的一套高质量UI框架。为了达到更好的效果，请在 `WeexSDK 0.11.0 +` 上使用这套UI框架，目前仅支持`iOS`和`android`平台，后续将针对web平台进行降级支持。

## 工具集

BUI-Weex 提供了一系列的开源工具集，包括：

*  [bui-weex](https://www.npmjs.com/package/bui-weex) 组件库: 托管在NPM上。bui-weex 是以 node_module 的方式存在的，更新组件库需要修改 package.json 版本号。该组件库可以独立使用，配合weex的工程即可，推荐使用我们提供的脚手架工程。
*  [bui-weex-toolkit](https://www.npmjs.com/package/bui-weex-toolkit) 命令行工具：托管在NPM上。需要安装到全局。该工具可以通过命令行快速创建脚手架工程和查看最新的脚手架工程。
*  [bui-weex-template](https://github.com/bingo-oss/bui-weex-template) 脚手架工程：基于weex官方的工程改造的，配合`bui-weex`组件库可以发挥更强的威力。托管在github上，下载即可使用。推荐使用 toolkit 来创建。

`bui-weex-toolkit` 和 `bui-weex-template` 对于weex开发者来说是可选的。

## 示例预览
请使用[Playground](https://weex-project.io/cn/playground.html)扫描下面二维码即可查看效果 (Playground是weex提供的安装在手机端的调试工具)：

![](images/qrcode.png)

![](images/preview.gif)


## 沟通交流

**我们的GitHub仓库**

bui-weex组件库 [https://github.com/bingo-oss/bui-weex](https://github.com/bingo-oss/bui-weex)

bui-weex-sample示例库 [https://github.com/bingo-oss/bui-weex-sample](https://github.com/bingo-oss/bui-weex-sample)

bui-weex-toolkit命令行工具 [https://github.com/bingo-oss/bui-weex-toolkit](https://github.com/bingo-oss/bui-weex-toolkit)

bui-weex-template脚手架工程 [https://github.com/bingo-oss/bui-weex-template](https://github.com/bingo-oss/bui-weex-template)


欢迎大家给我们提 issue ：[https://github.com/bingo-oss/bui-weex/issues](https://github.com/bingo-oss/bui-weex/issues)

感谢理解与支持！


## 阅读之前

在往下阅读开发文档之前，您需要具备如下技能：

**技能一：熟悉 Weex 官方开发套路**

官网  ：[http://weex-project.io/cn/](http://weex-project.io/cn/)

BUI-Weex 仅仅是在UI层面给予开发者提供脚手架以及丰富的组件，JS Module以及内置的功能，开发者需要在官网寻找答案。

**技能二：熟悉 Vue2.0 语法**

官网：[https://cn.vuejs.org/](https://cn.vuejs.org/)  另外阅读：[【Vue 2.x 在 Weex 和 Web 中的差异】](http://weex-project.io/cn/references/vue/difference-with-web.html)

Vue2.0 是前端领域炙手可热的 Javascript 框架，与 Weex 结合，使用Vue 作为上层框架，遵循 W3C 标准实现了统一的 JSEngine 和 DOM API。

**技能三：了解 Webpack 用法**

教程 ：[【Webpack简明教程】](https://www.magentonotes.com/webpack-tutorial.html)

Webpack是目前最流行的前端模块加载方案，在Webpack中，所有资源都被当作是模块,js,css,image 等。支持压缩合并替换等功能。作为前端er，可以不知道 gulp ,但错过了 Webpack 会很遗憾 ！

**技能四：ICONFONT**

官网：[http://www.iconfont.cn/](http://www.iconfont.cn/)

ICONFONT是阿里提供的图标分享管理平台，BUI-Weex 里面提供的图标来源于该平台。如果内置的icon无法满足项目需求，可以在这里寻找合适的icon。具体请参考：【字体图标（bui-icon）】的扩展部分。

**技能五：SASS语法**

官网：[http://www.w3cplus.com/sassguide/syntax.html](http://www.w3cplus.com/sassguide/syntax.html)

Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承等等特性。Sass 生成良好格式化的 CSS 代码，易于组织和维护。