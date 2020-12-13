module.exports = {
    pwa: {
        themeColor: '#4A6270',
        name: 'MindGYM',
        scope: ".",
    },
    devServer: {
        open: process.platform === 'darwin',
        port: 8080, // CHANGE YOUR PORT HERE!
        https: true,
        hotOnly: false,
        overlay: {
            warnings: true,
            errors: true
        }
    },
}