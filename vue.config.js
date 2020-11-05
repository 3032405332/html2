// const path = require("path");
module.exports = {
    publicPath: "./",
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    outputDir: process.env.VUE_APP_OUT_DIR || 'dist',
    // 配置全局注入scss
    // pluginOptions: {
    //     'style-resources-loader': {
    //         preProcessor: 'scss',
    //         patterns: [
    //             //加上自己的文件路径，不能使用别名
    //             path.resolve(__dirname, 'src/assets/scss/_themes.scss'),
    //         ]
    //     }
    // },
    devServer: {
        open: true, // 配置自动启动浏览器
        proxy: {
            [process.env.VUE_APP_PROXY_KEY]: {
                target: process.env.VUE_APP_API_URL, // 通过本地服务器将你的请求转发到这个地址
                changeOrigin: true, // 设置这个参数可以避免跨域
                pathRewrite: {
                    [`^${process.env.VUE_APP_PROXY_KEY}`]: "/"
                }
            }
        }
    }
};
