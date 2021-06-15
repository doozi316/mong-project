module.exports = {
    outputDir: "../src/main/resources/static",  // 빌드 타겟 디렉토리
    devServer: {
        port: 7777,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
