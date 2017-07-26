## 列表 \(bui-list\)

框架中没有将列表封装成`component`，而是以样式的方式提供出来给开发者使用。Weex基于 list组件和 cell组件能够创建平滑的列表效果。请参考weex官方文档: [【list】](http://weex-project.io/cn/references/components/list.html)[【cell】](http://weex-project.io/cn/references/components/cell.html)[【refresh】](http://weex-project.io/cn/references/components/refresh.html)[【loading】](http://weex-project.io/cn/references/components/loading.html)

### 基础结构

```html
<list class="bui-list">
     <cell class="bui-cell" v-for="item in listData">
          <div class="bui-list-main">
            ...
          </div>
          <div class="bui-list-right">
            ...
          </div>
      </cell>
</list>

```

### 常用布局

* `普通文本列表`，参考如下：

  ```html
  <list class="bui-list">
	  <cell class="bui-cell" v-for="item in listData" @click="jumpTo(item)" @longpress="onLongpress">
		  <div class="bui-list-main">
		  	<text class="bui-list-title">文本内容</text>
		  </div>
		  <div class="bui-list-right">
		  	<bui-icon name="icon-go"></bui-icon>
		  </div>
	  </cell>
  </list>
  ```

* `左右图标列表`，参考如下：

  ```html
  <list class="bui-list">
	  <cell class="bui-cell-large" v-for="item in messageList" v-on:swipe="onSwpie()">
		  <div class="bui-list-left">
		  	<bui-image class="bui-list-thumb" radius="50px" v-bind:src="item['l-icon']"></bui-image>
		  </div>
		  <div class="bui-list-main">
			  <text class="bui-list-title">{{item.title}}</text>
			  <text class="bui-list-subtitle">{{item.subtitle}}</text>
		  </div>
		  <div class="bui-list-right">
		  		<bui-icon name="icon-go"></bui-icon>
		  </div>
	  </cell>
  </list>
  ```

### cell样式引用

列表的高度的大小由 `<cell>` 层的类样式来控制，框架提供了3个class，`bui-cell`,`bui-cell-large`,`bui-cell-xlarge`，也可以自行编写样式来控制cell的样式。参考如下：

```html
<list class="bui-list">
  <cell class="bui-cell | bui-cell-large | bui-cell-xlarge">
  </cell>
</list>

```

### 列表下拉刷新 & 加载更多

在`list`中嵌入`refresh`来实现列表下拉刷新的功能,再配合`loading`和`loading-indicator`实现加载更多功能

```html
<list class="bui-list" @loadmore="onLoadmore($event)" loadmoreoffset="2">
    <!--刷新组件-->
    <refresh class="bui-refresh" @refresh="onRefresh" @pullingdown="onPullingdown($event)" :display="refreshing ? 'show' : 'hide'">
        <bui-icon :name="refreshIcon" size="40px" style="margin-right: 5px;"></bui-icon>
        <text class="bui-refresh-indicator">{{refreshText}}</text>
    </refresh>
    <!--列表内容组件-->    
    <cell class="bui-cell-xlarge" v-for="i in list">
        <div class="bui-list-main">
            <text class="bui-list-title">第{{i}}行数据</text>
        </div>
    </cell>
    <!--加载更多-->
    <loading class="bui-loading" @loading="onLoading" :display="showLoading ? 'show' : 'hide'">
        <text class="bui-loading-indicator" v-if="showLoading">{{loadingText}}</text>
        <loading-indicator class="bui-indicator"></loading-indicator>
    </loading>
</list>
```

JS 关键代码如下：

```javascript
    export default {
        data: function () {
            return {
                LOADMORE_COUNT: 4,
                LOADMORE: [7, 8, 9, 9, 10],
                refreshing: false,
                showLoading: false,
                refreshIcon: "icon-todown",
                refreshText: "下拉刷新...",
                loadingText: "加载更多数据...",
                list: [1, 2, 3, 4, 5],
                newList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            //refresh下拉放手后的文字与图标
            "onRefresh": function (e) {
                this.refreshing = true;
                //下面代码是模拟异步请求效果
                setTimeout(() => {
                    this.refreshIcon = "icon-checkbox-on";
                    this.refreshText = "刷新成功";
                    setTimeout(() => {
                        this.refreshing = false;
                        this.list = this.newList;
                    }, 300);

                }, 500);
            },
            //refresh下拉放手前的文字与图标
            "onPullingdown": function (e) {
                //默认refresh文字与图标
                this.refreshIcon = "icon-todown";
                this.refreshText = "下拉可以刷新...";
                //下拉一定距离时文字与图标
                if (Math.abs(e.pullingDistance) > 60) {
                    console.log("松开即可刷新");
                    this.refreshIcon = "icon-toup";
                    this.refreshText = "松开即可刷新...";
                }
            },
            "onLoading": function (e) {
                buiweex.toast("loading");
                this.showLoading = true;
                setTimeout(() => {
                    const length = this.list.length;
                    this.showLoading = false;
                    if (length > 60) {
                        this.loadingText = '没有更多数据了'
                        return
                    } else {
                        this.loadingText = '加载更多数据...'
                        for (let i = length; i < length + this.LOADMORE_COUNT; ++i) {
                            this.list.push(i + 1)
                        }
                    }
                }, 2000);
            }
        }
    }
```



