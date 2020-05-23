const express = require('express')
const router = express.Router()
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('./public/db.json')
const db = low(adapter)
const multer = require('multer')

const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2400000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/public/admin.html'))
})

router.post('', upload.single('photo'), function(req,res){
    try {
        console.log(req.body)
        var product = {
            titleVN: req.body.titleVN,
            titleENG: req.body.titleENG,
            descriptionVN: req.body.descriptionVN,
            descriptionENG: req.body.descriptionENG,
            price: req.body.price,
            image: req.file.originalname
        }
        if(req.body.isBurger=='Burger') {
            db.get('burgers').push(product).write()
        } else if(req.body.isHotdog=='Hotdog') {
            db.get('hotdogs').push(product).write()
        } else if(req.body.isGelato=='Gelato') {
            db.get('gelatos').push(product).write()
        } else db.get('pizzas').push(product).write()
        res.status(200).send(product)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router