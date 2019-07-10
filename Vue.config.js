module.exports = {
    devServer:{
        proxy:{
            "/sz":{
                "target":"https://api1.34580.com/sz",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/sz":""
                }
            }
        }
    }
}
