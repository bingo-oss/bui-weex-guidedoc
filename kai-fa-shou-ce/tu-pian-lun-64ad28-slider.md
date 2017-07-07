# 图片轮播

用法如下：

```
<slider class="bui-slider" interval="1500" auto-play="true" offset-x-accuracy="0.1" @scroll="scrollHandler" @change="changeHandler" infinite="false">
    <div class="bui-slider-pages" v-for="item in itemList">
        <bui-image class="img" :src="item.pictureUrl"></bui-image>
        <text class="bui-slider-title">{{item.title}}</text>
    </div>
    <indicator class="bui-slider-indicator"></indicator>
</slider>
```

```js
methods: {
    "scrollHandler": function (e) {
        this.scrollHnadlerCallCount = this.scrollHnadlerCallCount + 1;
        this.topbarStyle = -e.offsetXRatio * 750
    },
    "changeHandler": function (e) {
        this.scrollHnadlerCallCount = 0;
    }
}
```

## 特性

* `auto-play` 可选值为 true/false，默认的是 false

* `interval` 值为毫秒数，此值设定 slider 切换时间间隔。当 auto-play 值为 true 时生效

* `offset-x-accuracy` 控制onscroll事件触发的频率，默认值为10，表示两次onscroll事件之间Slider Page至少滚动了10px。注意，将该值设置为较小的数值会提高滚动事件采样的精度，但同时也会降低页面的性能

## 事件

* `change` 打开组件，参考如下：

  ```
<slider class="bui-slider" interval="1500" auto-play="true" offset-x-accuracy="0.1" @change="changeHandler" infinite="false">
    <div class="bui-slider-pages" v-for="item in itemList">
        <bui-image class="img" :src="item.pictureUrl"></bui-image>
        <text class="bui-slider-title">{{item.title}}</text>
    </div>
    <indicator class="bui-slider-indicator"></indicator>
</slider>
```

```js
methods: 
    "changeHandler": function (e) {
        this.scrollHnadlerCallCount = 0;
    }
}
```






