const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Classdb'
const id = new Object();
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('connect to database!')
    }
    const db = client.db(databaseName)

    // Start to interact with the database

    db.collection('Classcol').insertOne({
        Name_of_student: 'Ramesh Kumar',
        Roll_No: 2
    })

    db.collection('Classcol').insertMany([
        {
            Name_of_student: 'Gyan',
            Roll_No: 3
        }, {
            Name_of_student: 'Renew',
            Roll_No: 4
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }
        //  console.log(result.ops)
    })
    db.collection('Classcol').findOne({
        _id: new
            ObjectID("622077cd33c7a765d8ef18c9")
    }, (error, task) => {
        console.log(task)
    })
    const doWorkPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([7, 4, 1])
            // reject('Things went wrong!')
        }, 2000)
    })
    doWorkPromise.then((result) => {
        console.log('Success!', result)
    }).catch((error) => {
        console.log('Error!', error)
    })
    db.collection('Classcol').updateOne({
        _id: new ObjectID("62206f545ae2f5d0b2586d58")
    }, {
        $inc: {
            Roll_No: 30
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    db.collection('Classcol').updateMany({
        Roll_No: 1
    }, {
        $inc: {
            Roll_No: 100
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
    db.collection('Classcol').deleteMany({
        Roll_No: 172
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    db.collection('Classcol').deleteOne({
        Name_of_student: "Ram Kumar"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})