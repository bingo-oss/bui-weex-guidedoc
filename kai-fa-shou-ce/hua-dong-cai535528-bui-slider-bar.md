## 滑动菜单 \(bui-slider-bar\)

目前支持左右侧滑动菜单，参考如下：

```html
<bui-slider-bar @close="closeSliderBarLeft" type="left" :show="showBarLeft" ref="leftSliderBar"></bui-slider-bar>
<bui-slider-bar @close="closeSliderBarRight" type="right" :show="showBarRight" ref="rightSliderBar"></bui-slider-bar>
```

### 导入组件

```javascript
components: {
    'bui-slider-bar': buiweex.buiSliderBar
}
```

### 使用

声明组件的ref是为了在组件内部使用动画

```html
<bui-button value="打开" @click="openleft"></bui-button>
<bui-slider-bar
        @close="closeSliderBarLeft"
        type="left"
        :show="showBarLeft"
        ref="leftSliderBar">
    ...内容区域
</bui-slider-bar>

```

```javascript
//打开左侧滑动栏
"openleft": function () {
    this.showBarLeft = true;
    this.$nextTick(()=>{
        this.$refs.leftSliderBar.openBar();
    })
},
"closeSliderBarLeft": function () {
    this.showBarLeft = false;
}
```



### 属性

* `type` 滑动菜单类型，可以是`left`或者`right`

* `show` 控制滑动菜单是否展开，触发时设置值为true，关闭时设置成false

* `ref` dom id


### 事件

* `openBar` 展开滑动菜单，参考如下：

  ```html
  <text @click="openleft()">左侧滑动</text>
  <bui-slider-bar @close="closeSliderBarLeft" type="left" :show="showBarLeft" ref="leftSliderBar"></bui-slider-bar>
  ```

  ```javascript
  methods: {
	    "openleft": function () {
	        this.showBarLeft = true;
		    this.$nextTick(()=>{
		        this.$refs.leftSliderBar.openBar();
		    })
	    }
  }
  ```

* `@close` 点击滑动菜单遮罩层或者对应的手势时收起滑动菜单，把 `show` 的值设置为false，参考如下：

  ```javascript
  methods: {
	    "closeSliderBarLeft": function () {
	        this.showBarLeft = false;
	    }
  }
  ```