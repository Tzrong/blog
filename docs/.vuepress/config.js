module.exports = {
    // 网站标题
    title: 'april的主页',
    // 网站描述
    description: 'April,Personal Website',
    keywords: 'April的博客，April',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/images/photo.jpeg' }],
        ['link', { rel: 'manifest', href: '/images/photo.jpeg' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpeg' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
        ['meta', { 'http-quiv': 'expires', cotent: '0' }],
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 部署到github相关的配置
    markdown: {
        lineNumbers: true, // 代码块是否显示行号
        toc: { includeLevel: [1, 2] },
    },
    themeConfig: {
        nav: [
            // 导航栏配置
            { text: 'Home', link: '/' },
            { text: '关于前端', link: '/accumulate/' },
            { text: 'JavaScript练习', link: '/algorithm/' },
            { text: '诗和远方', link: '/others/' },
            { text: 'github', link: 'https://github.com/AprilTong/blog.git' },
        ],
        sidebar: {
            '/accumulate/': [
                {
                    title: 'Css',
                    path: '/accumulate/css/',
                    collapsable: true,
                    children: [
                        {
                            title: '基本使用概念',
                            path: '/accumulate/css/common',
                        },
                        {
                            title: 'object.fit属性',
                            path: '/accumulate/css/1',
                        },
                        {
                            title: 'css绘制圆形渐变进度条',
                            path: '/accumulate/css/2',
                        },
                        {
                            title: '媒体查询',
                            path: '/accumulate/css/3',
                        },
                        {
                            title: '文本溢出显示省略号',
                            path: '/accumulate/css/6',
                        },
                    ],
                },
                {
                    title: 'javaScript',
                    path: '/accumulate/js/',
                    collapsable: true,
                    children: [
                        {
                            title: '跨域了解',
                            path: '/accumulate/js/1',
                        },
                    ],
                },
                {
                    title: 'Vue',
                    path: '/accumulate/vue/',
                    collapsable: true,
                    children: [
                        {
                            title: 'vue编译原理',
                            path: '/accumulate/vue/1',
                        },
                        {
                            title: '父子组件通信',
                            path: '/accumulate/vue/2',
                        },
                        {
                            title: 'vue 中被忽略但却很实用的',
                            path: '/accumulate/vue/3',
                        },
                        {
                            title: 'element-ui Upload 上传文件',
                            path: '/accumulate/vue/4',
                        },
                        {
                            title: 'vue+axios 以文件流的形式下载文件',
                            path: '/accumulate/vue/5',
                        },
                        {
                            title: 'element-ui 中 el-table 多列排序',
                            path: '/accumulate/vue/6',
                        },
                        {
                            title: 'vue 转换 es7 为 es5 语法',
                            path: '/accumulate/vue/7',
                        },
                        {
                            title: '结合ts的vue递归组件写法',
                            path: '/accumulate/vue/8',
                        },
                    ],
                },
            ],
        },
        sidebarDepth: 2,
        editLinks: true, // 默认是false，设置为true来启用
        editLinkText: '发现有错误?前往GitHub指正', // 指明编辑功能的文字内容
        docsRepo: 'https://github.com/AprilTong/blog',
        lastUpdated: '上次更新',
        smoothScroll: true, // 点击左侧侧边栏,页面滚动效果,smoothScroll 选项来启用页面滚动效果,true为启动,false禁用
    },
    plugin: {
        'vuepress-plugin-auto-sidebar': {
            // titleMode: 'titlecase', // 标题模式
            collapsable: true, // 设置为true，开启折叠
        },
    },
};
