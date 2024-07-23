const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const shortUrl = require('./models/shortUrl')

const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
    full:{
        type:String,
        required: true
    },
    short: {
        type:String,
        required: true,
        default: shortId.generate
    },
    clicks:{
        type: Number,
        required: true,
        default: 0 

    }
})