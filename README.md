# webpack配置的多页面脚手架

### webpack参考文档
- https://www.jianshu.com/u/af374c36932d
- https://juejin.im/post/5ac9dc9af265da23884d5543

### 配置注意事项
- 打包时先清空dist文件夹
- 将js中的css单独提取到一个文件中，webpack4要安装extract-text-webpack-plugin@next
- 打包图片file-loader和url-loader的区别
    - file-loader：用于解析项目中的url输入，
    - url-loader：需要安装file-loader，但不依赖于file-loader，会将引入的图片编码，生成dataURI，减少请求
- html-webpack-plugin相关：https://www.cnblogs.com/wonyun/p/6030090.html
- 用optimize-css-assets-webpack-plugin可以压缩打包后的css
- code spliting，chunks和bundle的区别
    - chunks：https://blog.csdn.net/dai_qingyun/article/details/53674179
