import dbConnect from "./dbConnect.js";

export function updateList() {
    const db = dbConnect()
    db.collection('/').patch()
    .then()
    .catch()
}