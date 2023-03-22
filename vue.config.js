const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

let proxyObj = {}

// 定义代理
proxyObj['/'] = {
    // websocket
    ws: false,
    // 目标地址
    target: 'http://localhost:8081',
    // 将请求头中的 host 修改为目标端口
    changeOrigin: true,
    // [查资料，待补充]
    patchReWrite: {
        '^/': '/'
    }

}

// 通过 node.js 实现转发
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}
