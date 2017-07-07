# 单选 \(bui-radio\)

是表单元素，简单例子参考如下：

```
<template>
    <bui-radio radioItems="items" :flexDirection="'flex-column'" @change="changeFn"></bui-radio>
</template>

<script>
    module.exports = {
        data: function(){
            return {
                "items": [
                    {
                        title: "男",         //文本
                        disabled: true,      //表明是否激活按钮, true为激活、false为不激活、默认值为false
                        select: true,        //表明是否是选中项, true为选中、false为不选中
                        value: "1"
                    },
                    {
                        title: "女",
                        select: false,
                        value: "0"
                    }
                ]
            }
        },
        components: {
            'bui-radio': require('../../components/bui-radio.vue')
        },
        methods: {
            'changeFn': function(val){
                console.log(val) //选中的item值
            }
        }
    }
</script>
```

## 特性

* `radioItems` **： **赋值单选组数据列表，传一个数组，单个数组的属性如下：

  * title ：单选文本

  * disabled ：表明是否激活按钮, true为激活、false为不激活、默认值为false

  * select ：表明是否是选中项, true为选中、false为不选中

  * value ：表单的value

* `flexDirection` **： **单选表单组布局控制，横向为 flex-row ，纵向为 flex-colunm ；

## 事件

* `@change` ：选中单选项时触发这个事件，事件中的event对象属性如下：
  * title ：单选文本
  * disabled ：表明是否激活按钮, true为激活、false为不激活、默认值为false
  * select ：表明是否是选中项, true为选中、false为不选中
  * value ：表单的value



