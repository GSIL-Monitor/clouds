const mysql = require("mysql")
const conf = require("../mysql-conf").test
const appConf = require("../mysql-conf").appData
const axios = require("axios")

module.exports = async (ctx) => {
    const TEST_TABLE = 'node_user'
    // const refs = {
    //     jscode: ctx.query.code,
    //     appid: appConf.appId,
    //     secret: appConf.appSecret
    // }
    // const getUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${refs.appid}&secret=${refs.secret}&js_code=${refs.jscode}&grant_type=authorization_code`;
    // const ref = {
    //     openId: null,
    //     uuid: null,
    //     skey: null,
    //     createTime: new Date().getTime(),
    //     lastVisitTime: null,
    //     sessionKey: null,
    //     userInfo: null
    // }
    const client = mysql.createConnection(conf)
    const resObj = ctx.query
    const condition = 'UPDATE node_user SET name = ?,age = ? WHERE id = ?';
    const param =  [resObj.name, resObj.age, resObj.workId];
    console.log(param)
    let query = () => {
        return new Promise((resolve, reject) => {
            client.query(condition,param,function (err, result) {
              if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                resolve({
                  status: 200,
                  data: "error"
                })  
                return;
              }
              resolve({
                  status: 200,
                  msg: "success"
              })       
              console.log('-------UPDATE----------');
              console.log('UPDATE ID:',result);       
              console.log('#######################'); 
            });
        })
    }
    let result = await query()
    ctx.state.data = result
    client.end();
}