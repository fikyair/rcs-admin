### 项目介绍

爱家公寓前端项目

后台管理请见  [flat](https://github.com/fikyair/flat)

#### 接口列表(Updating)

\* 客户端与admin共用接口

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
