# 下拉菜单 \(bui-mask\)

## 特性

* `showArrow` showArrow为false，宽度按触发元素宽度自适应,如果控制宽度可设置为true，默认宽度为260px

* `center` 组件下拉菜单定位于中间，默认为false

* `show` 与 `v-if` 都是触发组件是否展开，值设置同一个，触发时设置值为true

* `ref` 给组件窗口设置dom


## 事件

* `open` 打开组件，需要把event对象传入，参考如下：

  ```
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

  ```js
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

  ```
  <bui-dropdown :show="showDropdown" @close="closeDropdown" v-if="showDropdown" ref="dropdown"></bui-dropdown>
  ```

  ```js
  methods: {
    "closeDropdown": function () {
        this.showDropdown = false;
    }
  }
  ```
  
## 扩展

  组件里的内容可以直接加到组件作为其子组件，参考如下：
  ```
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
  
  ```js
  methods: {
    "openDropdown": function (event) {
        var _this = this;
        this.showDropdown = true;
        setTimeout(function () {
            _this.$refs['dropdown'].open(event);
        }, 1);
    },
    "closeDropdown": function () {
        this.showDropdown = false;
    }
  }
  ```



  








