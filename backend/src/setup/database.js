const Mongodb = require('mongodb')
const Config = require('../config')

const uri = Config.databaseUri;

module.exports = async ()=>{
    const client = new Mongodb.MongoClient(uri, {
        useUnifiedTopology: true
    })

    await client.connect();

    //console.log(client.db())

    return client.db()
}