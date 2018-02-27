## 图片 \(bui-image\)

### 用法

加载远程图片

```html
<bui-image width="260px" height="260px" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
```

加载工程目录下的图片：固定放在`src/image`目录下

```html
<bui-image src="/image/demo.png" width="300px" height="300px"></bui-image>
```
Example:[bui-image](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/image-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`width`** | `string` | `Y` |  | 宽度 |
| **`height`** | `string` | `Y` |  | 高度|
| **`src`** | `string` | `Y` |  | 图片路径，支持/src/image下的图片 和远程图片 |
| **`resize`** | `string` | `N` | `stretch` | |
| **`placeholder`** | `string` | `N` |  | 默认图片，加载失败时候显示的图片|
| **`radius`** | `string` | `N` | `0px` | 图片圆角|

### 事件

* `@click` 图片点击事件

* `@load` 图片加载完成事件