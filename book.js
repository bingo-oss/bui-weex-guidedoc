module.exports = {
    title: 'BUI-Weex',
    author: '广州市品高软件股份有限公司',
    language: 'zh-hans',

    links:{
        'sidebar': {

        }        
    },

    plugins: [
        '-sharing',
        //'-search',
        "-fontsettings",
        //'include-codeblock',    //https://plugins.gitbook.com/plugin/include-codeblock
        //"theme-comscore",        
        //'prism',                //https://plugins.gitbook.com/plugin/prism
        //'-highlight',
        //'anchor-navigation-ex', //https://plugins.gitbook.com/plugin/anchor-navigation-ex
        //'splitter',             //https://plugins.gitbook.com/plugin/splitter
        'mermaid-gb3',            //https://plugins.gitbook.com/plugin/mermaid-gb3;http://knsv.github.io/mermaid/#demos
        //'chart',                //https://plugins.gitbook.com/plugin/chart
        //'emphasize',            //https://plugins.gitbook.com/plugin/emphasize
        'cuav-chapters',
        "terminal",
        'back-to-top-button'
    ],

    pluginsConfig: {
        /*
        'anchor-navigation-ex': {
            'showLevel': false           
        } 
        */
    },

    styles: {
        website: 'styles/website.css'
    }
};