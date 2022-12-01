import dbConnect from "./dbConnect.js";

export function updateList() {
    const db = dbConnect()
    db.collection('tasks').patch()
    .then()
    .catch()
}