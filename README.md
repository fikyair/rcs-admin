# react-antd
[![React Native](https://img.shields.io/badge/react-^15.3.2-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Redux](https://img.shields.io/badge/redux-^4.4.5-yellowgreen.svg?style=flat-square)](https://github.com/reactjs/redux)
[![Redux Immutablejs](https://img.shields.io/badge/immutablejs-^0.0.8-orange.svg?style=flat-square)](https://github.com/indexiatech/redux-immutablejs)
[![Ant Design](https://img.shields.io/badge/ant--design-^2.7.2-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)

### 项目介绍

#### 爱家公寓客户端

后台管理接口请戳  [flat](https://github.com/fikyair/flat)

中后台管理系统请戳 [house-admin](https://github.com/fikyair/house-admin)

### 效果图

<img src="http://qiniu.xueshiming.cn/%E9%A6%96%E9%A1%B5%E6%90%9C%E7%B4%A2%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E7%BA%A6%E7%9C%8B%E6%A8%A1%E5%9D%97%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83%E6%A8%A1%E5%9D%97%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E5%9C%B0%E5%9F%9F%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E6%88%91%E8%A6%81%E7%A7%9F%E6%88%BF%E6%90%9C%E7%B4%A2%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E6%88%BF%E6%BA%90%E5%8F%91%E5%B8%83%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2.png"/>

<img width="800" height="373" src="http://qiniu.xueshiming.cn/%E8%AE%A2%E5%8D%95%E6%A8%A1%E5%9D%97%E9%A1%B5%E9%9D%A2.png"/>

### 接口列表(Updating)

\* client与admin共用接口

##### CLIENT：

| Definition | function      | args             | type       |
| -----------|:-------------:|:----------------:|:----------:|
|  Login     | validate      | name pwd         | get        |
|  Regist    | add           | name pwd         | post       |
|  Position  | query         | pName cName      | get        |
|  FlatSource| query         | price flatType...| get        |
|  Index     | query         | any...           | get        |
|  News      | query         | all              | get        |
|* Message   | add query     | flatId msg       | post       |
|* Publish   | add           | pos area...      | post       |
|* Collect   | add           | pos area...      | post       |

##### ADMIN:

| Definition | function      | args             | type       |
| -----------|:-------------:|:----------------:|:----------:|
| User       | CRUD          | name pwd         | post       |
| FlatSource | CRUD          | pos area...      | post       |
| Position   | CRUD          | pName cName sName| post       |
|* Message   | CRUD          | flatId msg       | post       |
| News       | CRUD          | all              | post       |


#### 开发启动

`yarn run dev`

#### 开发构建
通过jenkins进行远程构建然后将build和nginx-conf发送到rcs-admin的容器内，
jenkins使用nginx镜像重新发布服务

#### 生产打包


`npm run build`


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

参考：[react-router-4.0英文](https://reacttraining.com/react-router/web/guides/philosophy)
