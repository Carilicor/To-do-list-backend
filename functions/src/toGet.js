import dbConnect from "./dbConnect.js";


export function getAllList(req, res) {
    const db = dbConnect() // Connect to Firestore 
    db.collection('tasks').get() //Get entire list of ToDo's
    .then(collection => {
        const listOfToDo = collection.docs.map(doc => doc.data())
        res.send(listOfToDo)
    })
    .catch(err => res.status(501).send({ success: false, message: 'Unable to get!'}))
}