## 图片轮播(bui-image-slider)

![](../assets/gif/slider.gif)&nbsp;&nbsp;&nbsp;<img src="../assets/qrcode/slider.png" alt="" width="120px">

### 用法

```html
<bui-image-slider :items="itemList" 
	@itemClick="onItemClick" 
	@change="onChange">
</bui-image-slider>
```

```javascript
data () {
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
methods: {
	 //图片切换时候的事件
 	onChange(e) {
        console.log(e);
    },
    //点击图片的事件
    onItemClick(e, index) {
        this.$toast(index);
    }
}
```
Example: [bui-image-slider](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/slider-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`items `** | `array` | `Y` |  | 显示的图片数组 |
| **`interval `** | `number` | `N` | `6000` | 图片切换的间隔时间,单位ms |
| **`autoplay `** | `boolean` | `N` | `true` | 设置是否自动播放 |
| **`infinite `** | `boolean` | `N` | `true` | 设置是否循环播放 |
| **`imgResize `** | `string` | `N` | `stretch ` | 设置图片的resize属性 |
| **`imgWidth `** | `number` | `N` | `750` | 图片宽度 |
| **`imgHeight `** | `number` | `N` | `750` | 图片高度 |
| **`placeholder `** | `string` | `N` |  | 默认图片 |
| **`indicatorStyle `** | `object` | `N` |  | 小圆圈指示器扩展样式 |
| **`sliderStyle`** | `object` | `N` |  | 容器扩展样式 |

* `items`: 进行轮播的图片对象，每个json对象必须要包含一个 `url` 字段
* `imgResize`: 设置图片的resize属性, 
	* stretch：默认值，指定图片按照容器拉伸，有可能使图片产生形变。
	* cover：指定图片可以被调整到容器，以使图片完全覆盖背景区域，图片有可能被剪裁。
	* contain：指定可以不用考虑容器的大小，把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。

### 事件

* `@change`: 当轮播索引改变时，触发该事件。 请参考：[Slider](http://weex-project.io/cn/references/components/slider.html) 的change事件
* `@itemClick`: 点击某张图片时候，触发该事件。返回event对象 和当前图片索引.
