const CONF = {
    port: '5757',
    rootPathname: '',

    serverHost: 'localhost',
    tunnelServerUrl: '',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1258125543',
    qcloudSecretId: 'AKID78yd8SPXM5qX7YAsmW5TfhXCg3KQl8xb',
    qcloudSecretKey: 'c4LRUXPFEHB6GRYVIuOpUCvcULGB1gMs',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000,

    // 微信小程序 App ID
    appId: '',

    // 微信小程序 App Secret
   // appSecret: 'wx2a7abf0ac75cfb79',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    // 本地测试
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '1989810',
        char: 'utf8mb4'
    },

    // 开发环境
    // mysql: {
    //     host: 'localhost',
    //     port: 3306,
    //     user: 'root',
    //     db: 'cAuth',
    //     pass: 'wx2a7abf0ac75cfb79',
    //     char: 'utf8mb4'
    // },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
