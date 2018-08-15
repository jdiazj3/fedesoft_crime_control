module.exports={
    'secretKey': '12345-678910-1112',
    'mongoUrl' : process.env.MONGO_DEV || process.env.MONGO_MASTER|| 'mongodb://localhost:27017/claseServidor',
    'facebook': {
        clientId: '705408146460968',
        clientSecret: '8c7340a325b5099f292cbc116abc3419'
    }

}