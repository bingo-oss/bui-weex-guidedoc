# 选择器

有三个选择器，`pick`数据选择， `pickDate`日期选择，`pickTime`时间选择，用法都是一样的，以下列举`pickDate`的用法，如下：

```
<text @click="pickDate()">选择时间</text>
<text>{{date}}</text>
```

```js
methods: {
    "pickDate": function (event) {
        var _this = this;
        picker.pickDate({
            value: _this.date
        }, function (event) {
            if (event.result == 'success') {
                console.log("pickdate");
                console.log(event.data);
                _this.date = event.data;
            }
        });
    }
}
```


