<template>
    <div class="center">
        <bui-image src="/image/logo.png" width="244px" height="172px"></bui-image>
        <text class="h2">BUI-Weex</text>
        <text class="h4">专注为Weex前端开发者提供高质量UI组件</text>
        <bui-button type="primary" value="快速体验" @click="jumpTo"></bui-button>
    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<script>
    //引入bui-weex模块
    //import buiweex from 'bui-weex'
    var buiweex = require("bui-weex");
    module.exports = {
        data: function () {
            return {}
        },
        methods: {
            "jumpTo":function () {
                buiweex.push(buiweex.getContextPath()+"/index.weex.js")
            }
        },
        components: {},
        mounted: function () {

        }
    }
</script>