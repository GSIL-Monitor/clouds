# jerry

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Koa.js
#### 数据请求
(需引入 koa-bodyparser)
* GET
  * ctx.query
* POST
  * ctx.request.body

#### 返回数据注意事项
> 在用ajax请求或者SQL查询时,需要用 *promise* 和 *await* 来操作
```javascript
const query = () => {
  return new Promise((resolve, reject) => {
    client.query(sqlStr /* SQL语句 */ , param /* (可选)条件参数 */, function (err, result) => {
      if (result) {
        resolve({data: result})
      }
    })
  })
}
const result = await query()
ctx.body = result
```
#### 增删改查
> * **新增**
    ``` javascript
    // VALUES为 0 则为默认自动生成
    const condition = 'INSERT INTO node_user(id,name,age) VALUES(0,?,?)'
    const param = ['name', 'age']
    ```
* **更改**
  ```javascript
  const condition = 'UPDATE node_user SET name = ?,age = ? WHERE id = ?';
  const param =  ['resObj.name', 'age', 'id'];
  ```
* **删除**
  ```javascript
  const condition = `DELETE FROM node_user WHERE id = ${resId}`
  ```
* **查询**
  ```javascript
  const condition = `SELECT * FROM ${TEST_TABLE}`;
  ```
