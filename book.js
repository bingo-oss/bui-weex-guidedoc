module.exports = {
    title: 'BUI-Weex',
    author: '广州市品高软件股份有限公司',
    language: 'zh-hans',

    plugins: [
        '-sharing',
        "-fontsettings",
        'back-to-top-button',
        "copy-code-button",
        "expandable-chapters",
        "heading-anchors",
        "theme-fexa"
    ],

    "pluginsConfig": {
        "theme-fexa":{
            "search-placeholder":"输入关键字搜索", //搜索框提示信息
            "logo":"./logo.png", //logo地址
            "favicon":"./images/favicon.ico" //ico地址
        }
    }
};