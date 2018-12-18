export default {
    theme: {
        '@primary-color': '#fa6543',
        '@link-color': '#fa6543',
        '@border-radius-base': '4px',
        '@font-size-base': '16px',
        '@line-height-base': '1.2'
    },
    proxy: {
        '/api': {
            target: 'http://jsonplaceholder.typicode.com/',
            changeOrigin: true,
            pathRewrite: { '^/api': '' }
        }
    },
    extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
    env: {
        development: {
            extraBabelPlugins: ['dva-hmr']
        }
    }
}