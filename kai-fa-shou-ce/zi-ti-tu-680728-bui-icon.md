# 字体图标 \(bui-icon\)

注意：该组件在mixins里已经引入，用时勿再引。

目前已有26个字体图标，key，value格式，value是字体图标对应的unicode，图标列表如下：

```
"icon-search": "&#xe623;",
"icon-radio": "&#xe66f;",
"icon-radio-on": "&#xe641;",
"icon-checkbox-on": "&#xe653;",
"icon-menu": "&#xe603;",
"icon-back": "&#xe60c;",
"icon-go": "&#xe608;",
"icon-book": "&#xe6a6;",
"icon-msg": "&#xe60e;",
"icon-user": "&#xe647;",
"icon-home": "&#xe617;",
"icon-add": "&#xe606;",
"icon-success": "&#xe600;",
"icon-video": "&#xe615;",
"icon-lishijilu": "&#xe601;",
"icon-star": "&#xe6a1;",
"icon-delete-little": "&#xe610;",
"icon-loadding": "&#xe7fa;",
"icon-delete": "&#xe612;",
"icon-toup": "&#xe602",
"icon-todown": "&#xe64f",
"icon-liwu": "&#xe685",
"icon-jiantou": "&#xe646"
```

![](/assets/import3.png)

使用时设置的`name`值是上图对应的key，参考如下：

```
<bui-icon name="icon-search"></bui-icon>
```

## 颜色设置

组件支持设置color属性，默认颜色是深灰色'\#9ea7b4'，参考如下：

```
<bui-icon name="icon-search" color="red"></bui-icon>
```

## 大小设置

组件支持设置size属性，默认大小是'40px'，参考如下：

```
<bui-icon name="icon-search" size="60px"></bui-icon>
```

## 可添加样式类

组件支持设置类class，参考如下：

```
<bui-icon name="icon-search" size="60px" class="margin10"></bui-icon>
```

## 横向字体图标排列

需要在外层增加`flex-row`使其水平铺开，相反纵向在外层加`flex-column`

```
<div class="flex-row">
     <bui-icon name="icon-search" size="60px"></bui-icon>
     <bui-icon name="icon-search" size="60px"></bui-icon>
</div>
```

## 字体图标事件

按钮支持：点击事件@click

```
<bui-icon name="icon-search" size="60px" class="margin10" @click="iconEvent($event)"></bui-icon>
```

```js
methods: {
   "iconEvent": function (event) { 
        //todo;
    }
}
```

## 扩展组件

参照bui-icon组件另外创建一个，注意事项有2个，如下：

1. fontFamily的值命名要跟已有的字体图标的取名不同，如下图：![](/assets/import9.png)
2. 如果是用把字体文件存放在项目文件里，字体文件存放目录在 'src/font' 文件里，需要在webpack.config.js编译文件里将字体图标文件拷贝到dist/目录下，如下图：

   ![](/assets/import6.png)



