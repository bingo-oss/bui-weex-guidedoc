## 流程图 (bui-timeline)

### 可扩展流程图

![](../assets/gif/timeline.jpg)&nbsp;&nbsp;&nbsp;<img src="../assets/qrcode/timeline.png" alt="" width="120px">


### 用法

```html
<bui-timeline>
    <bui-timeline-item first=true></bui-timeline-item>
    <bui-timeline-item>
        <text class="time">1984年</text>
        <text class="content">发布 Macintosh</text>
    </bui-timeline-item>
    <bui-timeline-item>
        <text class="time">2007年</text>
        <text class="content">发布 iPhone</text>
    </bui-timeline-item>
    <bui-timeline-item>
        <text class="time">2010年</text>
        <text class="content">发布 iPad</text>
    </bui-timeline-item>
    <bui-timeline-item last=true>
        <text class="time">2011年10月5日</text>
        <text class="content">史蒂夫·乔布斯去世</text>
    </bui-timeline-item>
</bui-timeline>
```

Example:[bui-timeline](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/timeline-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`color`** | `string` | `N` | `blue` | 圆圈颜色，可选值为`blue``red``green`，或自定义色值 |
| **`title`** | `string` | `N` | `发布版本一` | 默认时间轴文本 |
| **`last`** | `boolean` | `Y` | `false` | 指定最后一个节点 |
| **`first`** | `boolean` | `Y` | `false` | 指定第一个节点 |


### 扩展

自定义时间轴点内容，参考如下：

```html
<bui-timeline title="">
    <bui-icon name="trophy" slot="dot"></bui-icon>
    <text class="time">1984年</text>
    <text class="content">发布 Macintosh</text>
</bui-header>
```


