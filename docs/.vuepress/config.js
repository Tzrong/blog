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
            // { text: '算法题库', link: '/algorithm/' },
            { text: '诗和远方', link: '/others/' },
            { text: 'github', link: 'https://github.com/AprilTong/blog.git' },
        ],
        sidebar: {
            '/accumulate/': [
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
                    ],
                },
                {
                    title: 'Css',
                    path: '/accumulate/css/',
                    collapsable: true,
                    children: [
                        {
                            title: 'object.fit属性',
                            path: '/accumulate/css/1',
                        },
                        {
                            title: 'css绘制圆形渐变进度条',
                            path: '/accumulate/css/2',
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
