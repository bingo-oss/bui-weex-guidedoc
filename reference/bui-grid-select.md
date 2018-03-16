## 多格筛选 (bui-grid-select)

![](../assets/gif/gridselect.gif)&nbsp;&nbsp;&nbsp;<img src="../assets/qrcode/gridselect.png" alt="" width="120px">


### 用法

```html
<bui-grid-select
        :items="testData1"
        :single=true
        @overLimit="onOverLimit"
        @select="_click"></bui-grid-select>
<bui-grid-select
    :items="testData2"
    :limit="3"
    @overLimit="overLimit"
    @select="_click2"></bui-grid-select>
<bui-grid-select
    :cols="5"
    :single=true
    :items="testData3"
    :customStyles="customStyles"
    @select="_click3"></bui-grid-select>
```

```javascript
data: function () {
    return {
        testData1: [
            {
                'title': '云应用平台',
                'disabled': true
            },
            {
                'title': '云应用产品',
                'selected': true
            },
            {
                'title': '轨道交通'
            },
            {
                'title': '轨道交通'
            },
            {
                'title': '财政'
            },
            {
                'title': '人力资源'
            },
            {
                'title': '展示一行'
            },
            {
                'title': '超过一行文本将被截断展示'
            },
            {
                'title': '超过一行文本将被截断展示'
            },
            {
                'title': '轨道交通'
            },
        ],
        testData2: [
            {
                'disabled': true,
                'title': '云应用平台'
            },
            {
                'title': '云应用产品',
                'selected': true
            },
            {
                'title': '轨道交通'
            },
            {
                'title': '轨道交通'
            },
            {
                'title': '财政'
            },
            {
                'title': '人力资源'
            },
            {
                'title': '展示一行'
            },
            {
                'title': '超过一行文本将被截断展示'
            },
            {
                'title': '超过一行文本将被截断展示'
            },
            {
                'title': '轨道交通'
            },
        ],
        customStyles: {
            lineSpacing: '20px',
            width: '130px',
            height: '50px',
            icon: '',
            color: '#333333',
            selectedColor: '#ffffff',
            disabledColor: '#eeeeee',
            borderColor: '#e8e8e8',
            selectedBorderColor: '#3399ff',
            backgroundColor: '#ffffff',
            selectedBackgroundColor: '#3399ff'
        },
    }
},
methods: {
    _click(e){
        this.$toast(e.selectedList[0].title);
    },
    _click2(e){
        this.$toast(this.testData2[e.selectIndex].title);
    },
    _click3(e){
        this.$toast(this.testData3[e.selectIndex].title);
    },
    overLimit(e){
        this.$toast(`最多选择${e}个`);
    }
}
```

Example:[bui-grid-select](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/grid-select-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`items`** | `array ` | `Y` | | 多格筛选数据项 |
| **`single`** | `boolean` | `N` | `false` | 单项选择 |
| **`limit`** | `number` | `N` |  | 多项选择时的选择项的上限个数 |
| **`cols`** | `string``number ` | `N` | `4` | 列数 |
| **`customStyles`** | `object` | `N` |  | 自定义属性 |

`items`: 赋值单选组数据列表，传一个数组，单个数组的属性如下：

  * title ：选项文本
  * selected ：表明该选项是否为选中, true为选中、false为不选中、默认值为false
 
`customStyles `: 自定义属性，传一个对象，属性如下：

  * width ：多格筛选单个宽度
  * height ：多格筛选单个高度
  * color ：正常状态文字色
  * selectedColor ：选中状态文字色
  * disabledColor ：不可选字体颜色
  * borderColor ：正常状态边框色
  * selectedBorderColor ：选中状态边框色
  * backgroundColor ：正常状态背景色
  * selectedBackgroundColor ：选中状态背景色 

### 事件

* `@overLimit`:点击某项触发的事件，当超过上限数量时触发的事件，返回索引、文本
* `@select`:点击某项触发的事件，返回索引、文本