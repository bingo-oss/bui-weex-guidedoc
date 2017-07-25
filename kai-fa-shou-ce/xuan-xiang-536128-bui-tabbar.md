## 选项卡(bui-tabbar)
选项卡组件属于高级组件，要实现选项卡效果，需要使用 `bui-tabbar`, `bui-tabbar-item` 配合 `slider` 组件一起使用。

###导入组件

```javascript
components: {
    "bui-tabbar": buiweex.buiTabbar,
    "bui-tabbar-item": buiweex.buiTabbarItem
}
```

### 使用

选项卡的实现使用方式：bui-tabbar + bui-tabbar-item + slider

优点：充分利用slider的滑动特性。

实现：
* slider的index属性和 change事件配合 与bui-tabbar进行联动 ; 
* bui-tabbar-item表示每个选项内容区域，通过currentTab来控制当前显示哪个选项 ; 
* 要实现底部选项卡，只需要将 bui-tabbar 和 slider 区域对调即可;


```html
<!--选项部分-->
<bui-tabbar
    :tabItems="tabItems"
    :currentTab="currentTab"
    showSelectedLine="true"
    @load="onTabLoad"
    @itemClick="onTabItemClick">
</bui-tabbar>

<!--内容部分-->
<slider class="slider" :index="index" auto-play="false" @change="change($event)">
    <!--选项卡内容-->
    <bui-tabbar-item tabId="tab1" :currentTab="currentTab">
        <scroller style="width: 750px;flex: 1">
            <div>
                <text v-for="i in 100">选项卡{{i}}</text>
                <text>我是滚动的内容</text>
            </div>
        </scroller>
    </bui-tabbar-item>
    <bui-tabbar-item tabId="tab2" :currentTab="currentTab">
        <text>选项卡2</text>
    </bui-tabbar-item>
    <bui-tabbar-item tabId="tab3" :currentTab="currentTab">
        <text>选项卡3</text>
    </bui-tabbar-item>
    <bui-tabbar-item tabId="tab4" :currentTab="currentTab">
        <text>选项卡4</text>
    </bui-tabbar-item>
</slider>

```

JS关键代码如下：

```javascript
var buiweex = require("bui-weex");
module.exports = {
    data: function () {
        return {
            //当前选择的tab
            currentTab: "tab1",
            index:1,
            tabItems: [
                {
                    tabId: "tab1",
                    title: "首页",
                    icon: "icon-home"
                },
                {
                    tabId: "tab2",
                    icon: "icon-liwu",
                    title: "动态"
                },
                {
                    tabId: "tab3",
                    icon: "icon-user",
                    title: "我的"
                },
                {
                    tabId: "tab4",
                    icon: "icon-video",
                    title: "直播"
                }
            ]
        }
    },
    components: {
        "bui-tabbar": buiweex.buiTabbar,
        "bui-tabbar-item": buiweex.buiTabbarItem
    },
    methods: {
        //选项卡加载完成事件,必须实现
        "onTabLoad": function (tabId, index) {
            this.currentTab = tabId;
            this.index=index;
        },
        //选项卡点击事件,必须实现
        "onTabItemClick": function (e, tabId, index) {
            this.currentTab = tabId;
            this.index = index;
        },
        //slider 在改变的时候
        "change": function (e) {
            this.index = e.index;
            this.currentTab = this.tabItems[index].tabId;
        }
    }
}
```

### 属性

**bui-tabbar 组件**

* tabItems 选项卡数据（数组），每个item包含 tabId, icon, title 字段。
* currentTab 当前选中的tab，主要用于与内容项进行联动
* height 选项卡高度，默认100px
* iconSize 选项卡图标大小，默认45px
* titleSize 选项卡文字大小，默认22px
* background 选项卡背景颜色，默认#f7f7f7
* selectedBackground 选项卡选中后的背景颜色，默认#f7f7f7
* normalColor 选项卡文字和图标颜色，默认#818181
* selectedColor 选项卡文字和图标选中后的颜色，默认#4ca4fe
* containerStyle 选项卡容器扩展样式
* itemStyle 选项卡Item扩展样式
* showSelectedLine 选项卡选中后是否显示底部的border，默认不显示，它的颜色和selectedColor保持一致

**bui-tabbar-item 组件**

* tabId  当前item的id
* currentTab 当前选中的item


### 事件

**bui-tabbar 组件**

* @onTabLoad 选项卡加载完成事件，必须实现

  ```javascript
     "onTabLoad": function (tabId, index) {
         this.currentTab = tabId;
         this.index=index;
     }
  ```
  
* @onTabItemClick 选项卡点击事件,必须实现

  ```javascript
     "onTabItemClick": function (e, tabId, index) {
        this.currentTab = tabId;
        this.index = index;
    }
  ```