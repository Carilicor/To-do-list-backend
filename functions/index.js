import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

import { getAllList } from './src/toGet.js';
import { createList } from './src/toPost.js';
import { updateList } from './src/toPatch.js';

const app = express()
app.use(express.json()) // To enable express

app.use(cors()) // To enable cors

app.get('/toGet', getAllList) // To read/get to my ToDo list
app.post('/toPost', createList) // To post/add to my ToDo list
app.patch('/toPatch', updateList) // To update/change to my ToDo list

export const api = functions.https.onRequest(app)

