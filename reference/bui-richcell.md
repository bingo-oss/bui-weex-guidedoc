## 富文本(bui-richcell)
目前组件支持 文本，图标，图片的混合展示。对于较长的文本，暂时无法自动换行。

### 用法

```html
 <bui-richcell :content='content' @click="richClick"></bui-richcell>
```

```javascript
data: function () {
    return {
        leftItem: {
            icon: 'ion-chevron-left'
        },
        content:[
            {
                type: 'text',
                value: '@张指导',
                theme: 'blue',
            },
            {
                type: 'text',
                value: '今天去深圳市局开会,与会人数近30人，领导人'
            },
            {
                type: 'text',
                value: '@鲁琳',
                theme: 'blue'
            },
            {
                type: 'text',
                value: '局长对此系统高度重视,请加快'
            },
            {
                type: 'text',
                value: '#云指挥系统#',
                theme: 'red',
            },
            {
                type: 'text',
                value: '项目建设'
            },
            {
                type:'icon',
                icon:'ion-checkmark-circled',
                color:'red',
            },
            {
                type: 'text',
                value: '关键未来信息化建设的高度我们成为行业领头羊的关键！'
            },
        ]
    }
},
methods: {
    richClick(e,obj){
        this.$toast(JSON.stringify(obj));
    }
}
```
Example: [bui-image-slider](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/richcell-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`content `** | `array` | `Y` |  | 内容数组 |
| **`hasTextMargin `** | `boolean` | `N` | `true` | 设置是文本是否有右边距 |

* content 目前支持三种类型，icon,text,image

text: 

```
{
    type: 'text',
    value: '@张指导',
    style:{}, 
    theme: 'blue' //内置了black,blue,gray,red,yellow
}
```

icon:

```
{
    type: 'icon',
    icon:'ion-checkmark-circled',
    color:'red',
    size:48
}
```

image:

```
{
	type:'image',
	width: 100,
	height: 100
}
```

### 事件

* `@click`: content中的每个组件的点击事件，返回 event 和 当前小组件的对象数据