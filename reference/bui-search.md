## 搜索框 (bui-searchbar)

框架提供两个搜索框布局，一个是搜索位于中间布局 `bui-searchbar-center` ，一个是搜索位于左边布局 `bui-searchbar-left`，参考如下：

```html
<!--搜索位于中间布局-->
<bui-searchbar-center></bui-searchbar-center> 
<!--搜索位于左边布局-->
<bui-searchbar-left></bui-searchbar-left>
```

### 导入组件

```javascript
components: {
    'bui-searchbar-left': buiweex.buiSearchbarLeft,
    'bui-searchbar-center': buiweex.buiSearchbarCenter
}
```

### 使用

```html
<bui-searchbar-left placeholder="请输入关键字" @search="onSearch"></bui-searchbar-left>

<bui-searchbar-center  @search="onSearch"></bui-searchbar-center>

```

```javascript
"onSearch": function (value) {
    buiweex.toast("搜索:" + value);
}
```

### 属性

* `placeholder` 提示用户可以输入什么。 提示文本不能有回车或换行，参考如下：

  ```html
  <bui-searchbar-left placeholder="请输入数字"></bui-searchbar-left>
  ```

* `value` 搜索框赋值，参考如下：

  ```html
  <bui-searchbar-left value="weex"></bui-searchbar-left>
  ```

* `autofocus` 布尔类型的数据，表示是否在页面加载时控件自动获得输入焦点，参考如下：

  ```html
  <bui-searchbar-left autofocus="true"></bui-searchbar-left>
  ```
* `type` 搜索框皮肤，有两套，参考如下：

  ```html
  <bui-searchbar-left></bui-searchbar-left>  //默认是灰色
  <bui-searchbar-left type="primary"></bui-searchbar-left>  //蓝色
  ```

### 事件

* `@focus` 是搜索框组件获得输入焦点，事件中的 event 对象如下

  * value

  * timestamp 事件发生时的时间戳,仅支持Android

  参考如下：

  ```
  <bui-searchbar-left @focus='onfocus'></bui-searchbar-left>
  ```

  ```js
  methods: {
    "onfocus": function(event){
      console.log(event)
    }
  }
  ```

* `@input` 是搜索框输入字符的值实时更改，用法如 `@focus`。

* `@blur` 是搜索框失去输入焦点，用法如 `@focus`。

* `@clear` 是清除搜索框内容时触发的事件，用法如 `@focus`。

* `@search` 是搜索框点击搜索按钮后触发的事件，事件中的 event 是搜索框的 value 值。

