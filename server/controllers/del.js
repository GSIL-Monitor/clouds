const mysql = require("mysql")
const conf = require("../mysql-conf").test

module.exports = async (ctx) => {
    const client = mysql.createConnection(conf)
    const resId = ctx.query.id
    const condition = `DELETE FROM node_user WHERE id = ${resId}`
    let query = () => {
        return new Promise((resolve, reject) => {
            client.query(condition, function (err, result) {
              if(err){
                console.log('[DELETE ERROR] - ',err.message);
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
              console.log('-------DELETE----------');
              console.log('DELETE ID:',result);       
              console.log('#######################'); 
            });
        })
    }
    let result = await query()
    ctx.state.data = result
    client.end();
}