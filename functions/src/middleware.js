import jwt from 'jsonwebtoken';
import { secretKey } from '../secrets.js'

export function isUserReallyUser(req, res, next,) {
    const token = req.headers.authorization
    //verify and decode the correct token
    const decodedToken = jwt.verify(token, secretKey)
    // now check that the uid they're requesting to patch is the one in their token 
    const requestedUid = req.params.uid
    if (decodedToken.uid !== requestedUid) {
        res.status(401).send({ message: 'Not Authorized' })
        return
    }
    // all is good... go on in
    req.decoded = decodedToken
    next()
}

