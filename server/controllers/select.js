const mysql = require("mysql")
const conf = require("../mysql-conf").test
// sql查询
module.exports = async (ctx) => {
    const TEST_TABLE = 'node_user'
    const client = mysql.createConnection(conf)
    const condition = `SELECT * FROM ${TEST_TABLE}`;
    let query = () => {
        return new Promise((resolve, reject) => {
            client.query(condition,function (err, result) {
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                }       
                resolve({
                    status: 200,
                    msg: result
                })
                console.log('-------INSERT----------');
                console.log('INSERT ID:',result);       
                console.log('#######################'); 
            });
        })
    }
    let result = await query()
    ctx.state.data = result
}