const base = {
  //开发以及部署时的URL，hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"，history模式默认使用"/"或者"/二级目录/"
  publicPath: '',
  //生产环境构建文件的目录名
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: 'X-Framework',
  //加载时显示文字
  loadingText: '加载中...',
  //token名称
  tokenName: 'AccessToken',
  //token存储位置localStorage sessionStorage cookie
  storage: 'localStorage',
  //是否开启登录拦截
  loginInterception: true,
  //是否开启登录RSA加密
  loginRSA: false,
  // 开启gzip
  gzip: false,
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true
};

module.exports = base;
