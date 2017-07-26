## 图片轮播(bui-image-slider)

### 导入组件

```javascript
components: {
    "bui-image-slider": buiweex.buiImageSlider
}

```

### 使用

```html
<bui-image-slider :items="itemList" 
@itemClick="onItemClick" 
@change="onChange">
</bui-image-slider>
```

```javascript
var buiweex = require("bui-weex");
export default {
    data: function () {
        return {
            itemList: [
                {
                    url: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'
                },
                {
                    url: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
                },
                {
                    url: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                },
                {
                    url: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
                }
            ]
        }
    },
    components: {
        "bui-image-slider": buiweex.buiImageSlider
    },
    methods: {
    	 //图片切换时候的事件
        "onChange": function (e) {
            console.log(e);
        },
        //点击图片的事件
        "onItemClick": function (e, index) {
            console.log(index);
            console.log(e);
        }
    }
}

```

### 属性

* `items`: 进行轮播的图片对象，每个json对象必须要包含一个 `url` 字段
* `interval`: 图片切换的间隔时间，单位是ms,默认 2000ms
* `autoplay`: 设置是否自动播放，默认为 true
* `infinite`: 设置是否循环播放，默认为 true
* `imgResize`: 设置图片的resize属性, 
	* stretch：默认值，指定图片按照容器拉伸，有可能使图片产生形变。
	* cover：指定图片可以被调整到容器，以使图片完全覆盖背景区域，图片有可能被剪裁。
	* contain：指定可以不用考虑容器的大小，把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。
* `imgWidth`: 图片宽度，默认 750px
* `imgHeight`: 图片高度，默认 750px
* `placeholder`: 默认图片，如果图片加载失败，则会默认使用该图片，参考 `bui-image`的placeholder属性
* `indicatorStyle`: 小圆圈指示器扩展样式


### 事件

* `@change`: 当轮播索引改变时，触发该事件。 请参考：[Slider](http://weex-project.io/cn/references/components/slider.html) 的change事件
* `@itemClick`: 点击某张图片时候，触发该事件。返回 event对象 和当前图片索引

	```javascript
	"onItemClick": function (e, index) {
        console.log(index);
        console.log(e);
    }
	```

