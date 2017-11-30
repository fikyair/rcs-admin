### 项目介绍
风控限额前端项目



#### 开发启动

```
npm run dev
```

#### 开发构建
通过jenkins进行远程构建然后将build和nginx-conf发送到rcs-admin的容器内，
jenkins使用nginx镜像重新发布服务

#### 生产打包

```
npm run build
```

### 项目结构

```
webpack.config.babel.js                 热开发webpack配置文件
webpack.production.config.babel.js      热开发webpack配置文件
src                                     开发代码
static                                  静态文件
mock                                    mock数据、应用
nginx-conf                              nginx配置文件
```
### 框架介绍
React16  react-router4 webpack3 redux antd

redux 对网络请求进行拦截状态处理，后台接口提供数据统一放在redux中管理
组件中只处理输入数据逻辑、交互逻辑，真正意义上的声明式渲染。


声明式路由 react-router 4.0版本有很大的改动，很多代码事例写法不同于2.0
中文文档[react-roter-4.0中文](https://github.com/xusai2014/React-router-4.0.0-docs)

### 与统一门户集成
同步登录状态
同步用户信息

