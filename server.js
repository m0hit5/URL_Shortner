const express = require('express')
const mongoose=require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/urlShortner',{
    useNewUrlParser:true,useUnifiedTopology: true
})

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/',async (req,res)=> {
    const shortUrls = await shortUrls.find()
    res.render('index',{shortUrls:shortUrls})
})

app.post('/shortUrls', async(req,res) => {
    await ShortUrl.create({ full: req.body.fullUrl })

    res.redirect('/')
})

app.get('/:shortUrl', async (req,res) => {
    const shortUrl = await ShortUrl.findOne({short: req.param.ShortUrl })
    if(shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()    
})

app.listen(process.env.PORT || 8080);

