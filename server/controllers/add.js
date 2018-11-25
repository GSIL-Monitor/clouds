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
    const resObj = ctx.request.body
    const condition = 'INSERT INTO node_user(id,name,age) VALUES(0,?,?)'
    const param = [resObj.name, resObj.age]
    console.log(param)
    let query = () => {
        return new Promise((resolve, reject) => {
            client.query(condition,param,function (err, result) {
              if(err){
                console.log('[INSERT ERROR] - ',err.message);
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
              console.log('-------INSERT----------');
              console.log('INSERT ID:',result);       
              console.log('#######################'); 
            });
        })
    }
    let result = await query()
    ctx.state.data = result
    client.end();
}