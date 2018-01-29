const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

let messageSchema = new mongoose.Schema(
    {
        user: {type: String, required: true},
        message: {type: String, required: true}
    }
);

let Message = mongoose.model('Message', messageSchema);

router.post('/', (req,res)=> {
    let messageToAdd = new Message(req.body);

    messageToAdd.save((error, message) => {
        if (error) {
            console.log('Error saving message', error);
            res.sendStatus(500);
        } else {
            console.log('Message saved', message);
            res.sendStatus(201);
        }
    })
});

module.exports = router;