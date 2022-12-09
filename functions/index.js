import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { userLogin, addNewUser, updateUsers } from './src/user.js'
import { isUserReallyUser } from './src/middleware.js';

import { getAllList } from './src/toGet.js';
import { createList } from './src/toPost.js';
// import { deleteItem } from './src/toDelete.js';

const app = express() // to call the express app
app.use(express.json()) // To enable express

app.use(cors()) // To enable cors

app.get('/tasks', getAllList) // To read/get to my ToDo list
app.post('/login', userLogin)
app.post('/tasks', createList) // To post/add to my ToDo list
app.post('/users', addNewUser)
app.patch('/users/:uid', isUserReallyUser, updateUsers)

// app.delete('/tasks/:docId', isUserReallyUser, deleteItem) // To delete item from my ToDo list

export const api = functions.https.onRequest(app) 
// to connect to my api
// onRequest creates an api endpoint 

