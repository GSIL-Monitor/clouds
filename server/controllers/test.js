const mysql = require("mysql")
const conf = require("../mysql-conf").test
const appConf = require("../mysql-conf").appData
const axios = require("axios")

module.exports = async (ctx) => {
    // const client = mysql.createConnection(conf)
    // client.connect()
    // const getSql = 'SELECT * FROM cSessionInfo'
    // client.query(getSql, function (err, result) {
    //     if(err){
    //         console.log('[SELECT ERROR] - ',err.message);
    //         return;
    //     }     
    //     console.log('---------------SELECT----------------');
    //     console.log(result);       
    //     console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'); 
    // })
    // client.end()
    const ref = {
        jscode: ctx.request.body.code,
        appid: appConf.appId,
        secret: appConf.appSecret
    }
    const getUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${ref.appid}&secret=${ref.secret}&js_code=${ref.jscode}&grant_type=authorization_code`;
    axios({
        url: getUrl,
        method: 'get'
    }).then(function (res) {
        const openId = res.data.openid
        
    })
    
    ctx.state = {
        code: 200,
        data: 'hello koa'
    }
}