## 单元格 (bui-cell)

bui-cell 可用于表单展示，也可以用在列表中，一个单元格分为 4个内容区域：

### 用法

```html
<bui-cell title="文字内容" label="标题" desc="描述信息"></bui-cell>
<bui-cell label="公司名称" >
    <input slot="title" class="input" placeholder="请输入公司名称" />
</bui-cell>

<bui-cell title="标题文字" @cellClick="cellClick" :cellStyle="cellStyle">
   <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
</bui-cell>

<bui-cell title="标题文字"  :cellStyle="cellStyle">
    <bui-icon slot="label" style="margin-right: 10px" name="ion-ios-cloud-upload-outline"></bui-icon>
    <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
</bui-cell>

<bui-cell :cellStyle="cellStyle" label="开发者选项">
    <switch checked="true"></switch>
</bui-cell>

```
Example: [bui-cell-demo](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/cell-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`label`** | `string` | `N` |  | 左边区域文本 |
| **`title`** | `string` | `N` |  | 标题文本|
| **`desc`** | `string` | `N` |  | 描述文本 |
| **`hasTopBorder`** | `boolean` | `N` | `false` | 是否有top border |
| **`hasBottomBorder`** | `boolean` | `N` | `true` | 是否有bottom border |
| **`hasMargin`** | `boolean` | `N` | `false` | 是否有bottom  margin|
| **`cellStyle`** | `object` | `N` |  | 用于扩展cell样式 |

### 事件

* `@cellClick`: 单元格点击事件

