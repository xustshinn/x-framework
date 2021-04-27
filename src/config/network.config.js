/**
 * @description 网络配置
 */
const network = {
  contentType: 'application/json;charset=UTF-8',
  messageDuration: 2000,
  requestTimeout: 15000,
  //开发环境端口号
  devPort: '9999',
  //默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
  baseURL: process.env.NODE_ENV === 'development' ? 'mock-server' : 'mock-server'
};

export default network;
