# 列表 \(bui-list\)

结构参照example的例子，常用于垂直列表，拥有平滑的滚动和高效的内存管理，非常适合用于长列表的展示。最简单的使用方法是在 &lt;list&gt; 标签内使用一组由简单数组 repeat 生成的 &lt;cell&gt; 标签填充，需要引入对应的样式文件 `list.scss`

## 结构布局

* `普通文本列表`，参考如下：

  ```
  <list class="bui-list">
  <cell class="bui-cell" v-for="item in listData" @click="jumpTo(item)" @longpress="onLongpress">
  <div class="bui-list-main">
  <text class="bui-list-title">{{item.text}}</text>
  </div>
  <div class="bui-list-right">
  <bui-icon name="icon-go"></bui-icon>
  </div>
  </cell>
  </list>
  ```

* `左右图标列表`，参考如下：

  ```
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

* `下拉刷新&加载更多` ，内嵌 `<refresh>` 下拉刷新 与 `<loading>` 上拉刷新加载更多标签。

  ```
  <list class="bui-list p-r" @loadmore="onLoadmore($event)" loadmoreoffset="2">
    <refresh class="bui-refresh" @refresh="onRefresh" @pullingdown="onPullingdown($event)"
    :display="refreshing ? 'show' : 'hide'">
    <bui-icon :name="refreshIcon" size="40px" style="margin-right: 5px;"></bui-icon>
    <text class="bui-refresh-indicator">{{refreshText}}</text>
    </refresh>
    
    <cell class="bui-cell-xlarge" v-for="item in messageList">
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
    <loading class="bui-loading" @loading="onLoading" :display="showLoading ? 'show' : 'hide'">
      <text class="bui-loading-indicator">{{loadingText}}</text>
    </loading>
  </list>
  ```

  ```js
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
    //上拉加载更多
    "onLoading": function (e) {
      buiweex.toast("loading");
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 2000);
    }
  }
  ```

## 样式引用

列表的高度的大小由 `<cell>` 层的类样式来控制，参考如下：

```
<list class="bui-list">
  <cell class="bui-cell" v-for="item in listData" @click="jumpTo(item)" @longpress="onLongpress">
    <div class="bui-list-main">
      <text class="bui-list-title">{{item.text}}</text>
    </div>
    <div class="bui-list-right">
      <text class="badges" v-if="item.badges!=0">{{item.badges >= 100 ? '99+' : item.badges}}</text>
      <bui-icon name="icon-go"></bui-icon>
    </div>
  </cell>
</list>
```

```
<list class="bui-list">
  <cell class="bui-cell-large" v-for="item in listData" @click="jumpTo(item)" @longpress="onLongpress">
    <div class="bui-list-main">
      <text class="bui-list-title">{{item.text}}</text>
    </div>
    <div class="bui-list-right">
      <text class="badges" v-if="item.badges!=0">{{item.badges >= 100 ? '99+' : item.badges}}</text>
      <bui-icon name="icon-go"></bui-icon>
    </div>
  </cell>
</list>
```

```
<list class="bui-list">
  <cell class="bui-cell-xlarge" v-for="item in listData" @click="jumpTo(item)" @longpress="onLongpress">
    <div class="bui-list-main">
      <text class="bui-list-title">{{item.text}}</text>
    </div>
    <div class="bui-list-right">
      <text class="badges" v-if="item.badges!=0">{{item.badges >= 100 ? '99+' : item.badges}}</text>
      <bui-icon name="icon-go"></bui-icon>
    </div>
  </cell>
</list>
```



