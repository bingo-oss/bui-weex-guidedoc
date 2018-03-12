## 流程图 (bui-flow)

![](../assets/gif/flow.gif)&nbsp;&nbsp;&nbsp;<img src="../assets/qrcode/flow.png" alt="" width="120px">


### 用法

```html
<bui-flow
    :items="testData"></bui-flow>
<bui-flow
    :items="testData"
    :customStyles="customStyles"
    @click='_click'></bui-flow>
```

```javascript
data: function () {
    return {
        testData: [
            {
                'date': '2017-05-24 21:10:29',
                'desc': '结束',
                'highlight': true,
                'title': '页面交互输出'
            },
            {
                'date': '2017-05-24 21:10:29',
                'desc': '回流到客户确认',
                'title': '设计稿上传'
            },
            {
                'date': '2017-05-24 19:54:28',
                'desc': '产品经理需跟业务与设计相关人员确认',
                'title': '产品经理确认'
            },
            {
                'date': '2017-05-24 19:50:21',
                'desc': '以需求方案输出产品原型,需要客户确认',
                'title': '产品原型图'
            },
            {
                'date': '2017-05-24 19:49:03',
                'desc': '业务员根据客户的需要制定产品解决方案',
                'title': '客户提出需求方案'
            }
        ],
        customStyles: {
            'highlightTitleColor': '#EE9900',
            'highlightPointInnerColor': '#EE9900',
            'highlightPointBorderColor': '#FFE78D'
        },
    }
},
methods: {
    _click(index){
        this.$toast(index);
    },
}
```

Example:[bui-flow](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/flow-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`items`** | `array` | `Y` |  | 流程图数据元素 |
| **`customStyles`** | `object` | `N` |  | 高亮标题，高亮节点`highlightTitleColor`, `highlightPointInnerColor`, `highlightPointBorderColor` |

`items`: 赋值单选组数据列表，传一个数组，单个数组的属性如下：

  * title ：节点文本
  * date ：节点时间
  * desc ：节点描述
  * highlight ：表明该选项是否为节点高亮, true为流程图节点高亮、false为流程图节点不高亮、默认值为false



### 事件

* `@click`:点击某项触发的事件，返回索引