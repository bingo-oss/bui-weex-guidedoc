# 滑动菜单 \(bui-slider-bar\)

目前支持左右侧滑动菜单，参考如下：

```
<bui-slider-bar @close="closeSliderBarLeft" type="left" :show="showBarLeft" v-if="showBarLeft" ref="leftSliderBar"></bui-slider-bar>
<bui-slider-bar @close="closeSliderBarRight" type="right" :show="showBarRight" v-if="showBarLeft" ref="rightSliderBar"></bui-slider-bar>
```

## 特性

* `type` 判断菜单是否为左或右侧滑动，对应是 `left` `right`

* `show` 与 `v-if` 都是触发滑动窗口是否展开，值设置同一个，触发时设置值为true

* `ref` 给滑动窗口设置dom


## 事件

* `openBar` 展开滑动菜单，参考如下：

  ```
  <text @click="openleft()">左侧滑动</text>
  <bui-slider-bar @close="closeSliderBarLeft" type="left" :show="showBarLeft" v-if="showBarLeft" ref="leftSliderBar"></bui-slider-bar>
  ```

  ```js
  methods: {
    "openleft": function () {
        var _this = this;
        this.showBarLeft = true;
        setTimeout(function () {
            _this.$refs['leftSliderBar'].openBar();
        }, 1);
    }
  }
  ```

* `@close` 点击滑动菜单遮罩层或者对应的手势时收起滑动菜单，把 `show` 的值设置为false，参考如下：

  ```
  <bui-slider-bar @close="closeSliderBarLeft" type="left" :show="showBarLeft" v-if="showBarLeft" ref="leftSliderBar"></bui-slider-bar>
  ```

  ```js
  methods: {
    "closeSliderBarLeft": function () {
        this.showBarLeft = false;
    }
  }
  ```
## 扩展

  滑动菜单里的内容可以直接加到组件作为其子组件，参考如下：
  ```
  <text @click="openleft()">左侧滑动</text>
  <bui-slider-bar @close="closeSliderBarLeft" type="left" :show="showBarLeft" v-if="showBarLeft" ref="leftSliderBar">
      <div class="userBox">
        <bui-image :src="'/image/pic.jpg'" radius="120px" class="icon-image-middle"></bui-image>
        <text class="userName">喵喵</text>
      </div>
      <div class="bui-list">
      <div class="bui-cell-large" v-for="item in messageList">
        <div class="bui-list-left">
            <bui-icon :name="item['l-icon']"></bui-icon>
        </div>
        <div class="bui-list-main">
            <text class="bui-list-title">{{item.title}}</text>
        </div>
      </div>
    </div>
  </bui-slider-bar>
  ```
  
  ```js
  methods: {
    "openleft": function () {
        var _this = this;
        this.showBarLeft = true;
        setTimeout(function () {
            _this.$refs['leftSliderBar'].openBar();
        }, 1);
    },
    "closeSliderBarLeft": function () {
        this.showBarLeft = false;
    }
  }
  ```
  
  ```css
  <style>
    .userBox{
        align-items: center;
        margin-bottom: 80px;
    }
    .userName{
        font-size: 30px;
        line-height: 50px;
    }
    .icon-image-middle{
        width: 120px ;
        height: 120px ;
    }
  </style>
  ```



