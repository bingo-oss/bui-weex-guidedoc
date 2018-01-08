## 单元格 (bui-cell)

Demo: [bui-cell-demo](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/cell-demo.vue)

bui-cell 可用于表单展示，也可以用在列表中，一个单元格分为 4个内容区域：



### 用法

```html
<bui-cell title="文字内容" label="标题" desc="描述信息"></bui-cell>
<bui-cell label="公司名称" >
    <input slot="title" class="input" placeholder="请输入公司名称" />
</bui-cell>
<bui-cell title="标题文字" >
   <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
</bui-cell>
<bui-cell title="标题文字" >
    <bui-icon slot="label" style="margin-right: 10px" name="ion-ios-cloud-upload-outline"></bui-icon>
    <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
</bui-cell>
<bui-cell label="开发者选项">
    <switch checked="true"></switch>
</bui-cell>

```

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`width`** | `string` | `Y` |  | 宽度 |
| **`height`** | `string` | `Y` |  | 高度|
| **`src`** | `string` | `Y` |  | 图片路径，支持/src/image下的图片 和远程图片 |
| **`resize`** | `string` | `N` | `stretch` | |
| **`placeholder`** | `string` | `N` |  | 默认图片，加载失败时候显示的图片|
| **`radius`** | `string` | `N` | `0px` | 图片圆角|
