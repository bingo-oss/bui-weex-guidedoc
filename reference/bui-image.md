## 图片 \(bui-image\)

### 导入组件

```javascript
components: {
   'bui-image': buiweex.buiImage
}
```

### 使用
如果使用bui-weex的脚手架工程，你会发现在 `src/js/mixins.js`已经引入了该组件，如果未引入，请按照上面的方式自行导入。weex中图片需要明确指定 width 和 height，否则图片无法显示,bui-image也不例外。

加载远程图片

```html
<bui-image width="260px" height="260px" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
```

加载工程目录下的图片：固定放在`src/image`目录下

```html
<bui-image src="/image/demo.png" width="300px" height="300px"></bui-image>
```

### 属性

* `src` ：图片地址path，可以是远程地址，也可以是工程目录的图片（固定放在`src/image`目录下）
* `width` ：图片宽度，带上单位,例如 200px
* `height` ：图片高度，带上单位,例如 200px
* `placeholder` ：设置默认图片，一般src的图片加载失败或者没有赋值，会显示此图片
* `radius` ：设置图片圆角，例如 radius="50px"

### 事件

* `@load` 图片加载完成时触发。目前在仅仅在Android、iOS 上支持。

  ```html
  <bui-image width="200px" height="200px" @load="onLoad" src="/image/demo.png"></bui-image>
  ```

  ```javascript
  methods: {
      "onLoad": function () {
          console.log("image load finished.");
      }
  }
  ```

* `@click` 点击图片时触发的事件

  ```html
  <bui-image width="200px" height="200px" @click="imageFn" src="/image/demo.png"></bui-image>
  ```

  ```javascript
  methods: {
    "imageFn": function () {
        console.log("image click.");
    }
  }
  ```