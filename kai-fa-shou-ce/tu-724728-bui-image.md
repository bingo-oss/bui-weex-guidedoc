# 图片 \(bui-image\)

注意：该组件在mixins里已经引入，用时勿再引。需要明确指定 width 和 height，否则图片无法显示。

## 特性

* `src` 图片地址path，此地址可以是远程地址，也可以是工程目录的图片（固定放在image目录下），参考如下：

  ```
  <bui-image style="width: 560px;height: 560px;" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
  <bui-image src="/image/applogo.png" style="width: 300px;height: 300px"></bui-image>
  ```

* `placeholder` 设置默认图片，一般src的图片加载有误或者没有赋值，也会显示此图片，参考如下：

  ```
  <bui-image src="/image/applogo.png" placeholder="/image/default.png" style="width: 300px;height: 300px"></bui-image>
  ```

* `radius` 设置图片圆角，参考如下：

  ```
  <bui-image style="width: 560px;height: 560px;" radius="30px" src="/image/applogo.png"></bui-image>
  ```

* `style`、 `class` 可以直接加样式，参考如下：

  ```
  <bui-image style="width: 560px;height: 560px;" class="classA" src="/image/applogo.png"></bui-image>
  ```

## 事件

* `@load` 是图片是否被加载，当图片加载完成时触发。目前在 Android、iOS 上支持，H5 暂不支持。

  ```
  <bui-image style="width: 560px;height: 560px;" @load="onLoad" src="/image/applogo.png"></bui-image>
  ```

  ```js
  methods: {
      "onLoad": function () {
          console.log("image load finished.");
      }
  }
  ```

* `@click` 是点击图片时触发的事件

  ```
  <bui-image style="width: 560px;height: 560px;" @click="imageFn" src="/image/applogo.png"></bui-image>
  ```

  ```js
  methods: {
    "imageFn": function () {
        console.log("image click.");
    }
  }
  ```



