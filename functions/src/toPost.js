import dbConnect from "./dbConnect.js";


export function createList(req, res) {
    const db = dbConnect()  // Connect to Firestore 
    db.collection('tasks').add(req.body)  // Add new item to ToDo Collection
    // Send back a response (err/not)
    .then(doc => res.status(201).send({success: true, message: 'Added item'}))  // is a promise
    .catch(doc => res.status(501).send({success: false, message: err}))
}