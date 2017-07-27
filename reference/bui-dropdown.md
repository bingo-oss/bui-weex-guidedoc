## 弹出层 (bui-dropdown)

此组件类似原生的 Popup window

### 导入组件

```javascript
components: {
    'bui-dropdown': buiweex.buiDropdown
}
```

### 使用

下拉框的位置是根据触发元素的 event对象的 position 计算而来的。设置ref是为了在组件内部做动画效果。

```html
<div class="span1">
	<bui-button value="弹出" @click="openDropdown($event)"></bui-button>
</div>

<bui-dropdown
        :show="showDropdown"
        @close="closeDropdown"
        ref="dropdown">
    <!--下拉内容-->
    <div class="bui-list">
        <div class="bui-cell" v-for="item in actionList"  @click="closeDropdown">
            <div class="bui-list-left">
                <bui-icon :name="item['l-icon']"></bui-icon>
            </div>
            <div class="bui-list-main">
                <text class="bui-list-title">{{item.title}}</text>
            </div>
        </div>
    </div>
</bui-dropdown>

```

```javascript
var buiweex = require("bui-weex");
export default {
    data: function () {
        return {
            showDropdown: false, //控制是否展开下拉框
            actionList: [
                {'l-icon': "icon-home", 'title': '在线客服'},
                {'l-icon': "icon-user", 'title': 'SherryLee'},
                {'l-icon': "icon-msg", 'title': '积分商城'},
                {'l-icon': "icon-liwu", 'title': '播云客'}
            ]
        }
    },
    components: {
        'bui-dropdown': buiweex.buiDropdown
    },
    methods: {
        "openDropdown": function (event) {
            this.showDropdown = true;
            //注意，需要在setTimeout/ $nextTick 中打开
            this.$nextTick(e=>{
                this.$refs.dropdown.open(event);
            })
        },
        "closeDropdown": function () {
            this.showDropdown = false;
        }
    }
}

```

### 属性

* `center` 组件下拉菜单是否在中间，默认为false

* `autowidth` 默认true，宽度按触发元素宽度自适应，如果控制宽度可设置为false，宽度为260px

* `show` 组件是否显示，触发时设置值为true 即会显示出下拉框，关闭时设置成false

* `ref` dom id

* `bgColor` 背景颜色，默认是 #ffffff

* `iconColor` 三角箭头颜色，默认是 #ffffff


### 事件

* `open` 打开组件，需要把event对象传入，参考如下：

```html
<text @click="openDropdown($event)">自适应点击元素宽度下拉菜单</text>
<bui-dropdown :show="showDropdown" @close="closeDropdown" v-if="showDropdown" ref="dropdown">
    <div class="bui-list">
        <div class="bui-cell" v-for="item in messageList">
            <div class="bui-list-left">
                <bui-icon :name="item['l-icon']"></bui-icon>
            </div>
        </div>
    </div>
</bui-dropdown>
```

```javascript
methods: {
    "openDropdown": function (event) {
        var _this = this;
        this.showDropdown = true;
        setTimeout(function () {
            _this.$refs['dropdown'].open(event);
        }, 1);
    }
}
```

* `@close` 点击组件遮罩层后触发的事件，把 `show` 的值设置为false，参考如下：

```html
<bui-dropdown :show="showDropdown" @close="closeDropdown" ref="dropdown"></bui-dropdown>
```

```javascript
methods: {
    "closeDropdown": function () {
        this.showDropdown = false;
    }
}
```
