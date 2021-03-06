// const { response } = require("express")
const { v4 } = require('uuid')

module.exports = (db) => {
    // console.log(db)
    return async (request, response) => {
        // response.json({
        //     message: 'It works.'
        // })
        const data = {
            _id: v4(),
            title: request.body.title,
            choices: request.body.choices.map(choice => ({
                name: choice,
                count: 0,
                _id: v4()
            }))
        }

        await db.collection('polls').insertOne(data)

        return response.json({
            message: 'Poll created.',
            pollId: data._id,
            data
        })
    }
}



