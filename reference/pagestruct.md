## 页面结构

### 基础结构
每一个vue页面（组件）的结构都包含了`template` `script` `style` 如下结构:

```html
<template>
   <div>
       <p>{{greeting}}</p>
   </div>
</template>
<!--引入样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<script>
    module.exports = {
        data: function () {
            return {
               greeting:"hello bui-weex"
            }
        }, 
        methods: {  },
        components:{ },
        mounted: function () { }
    }
</script>
```

注意事项：

1.	template 下面只能有一个顶级`div`标签
2. buiweex.scss 样式文件的引入 需要带上 `lang="sass"`，业务层面的css推荐使用scss来编写

### 滚动结构
要让页面的某部分区域滚动，需要用到 `scroller` 标签。该标签的使用请查看 [【scroller】](http://weex-project.io/cn/references/components/scroller.html)

```html
<template>
   <div>
      <bui-header title="页面滚动"></bui-header>
      <scroller>
          <text class="h3" v-for="i in 100">第{{i}}行</text>
      </scroller>
   </div>
</template>
```

以上页面结构表示 除了 `bui-header` 外，其余部分滚动显示。如果页面使用了 `list`组件，则无需使用 `scroller` 标签也能达到滚动效果。

### 选项卡结构

要呈现选项卡的结构，需要用到框架的 `bui-tabbar` 组件，组件大致结构如下，请参考 [【bui-tabbar】](http://dev.bingocc.com/buiweex/docs/reference/bui-tabbar.html)：

```html
<!--选项部分-->
<bui-tabbar :tabItems="tabItems" showSelectedLine=true @change="onItemChange" v-model="currentTab">
</bui-tabbar>

<!--内容部分-->
<slider class="slider" @change="onSliderChange" :index="currentTab">
    <div class="slider-item">
       <text class="h1">tab0</text>
    </div>
    <div class="slider-item">
        <text class="h1">tab1</text>
    </div>
    <div class="slider-item">
        <text class="h1">tab2</text>
    </div>
    <div class="slider-item">
        <text class="h1">tab3</text>
    </div>
</slider>
```

更多页面结构，后面会以案例和场景的方式呈现给各位！