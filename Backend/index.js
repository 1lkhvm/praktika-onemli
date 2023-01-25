const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const { application } = require('express');

const app = express();
const port = 3129;



app.use(cors());
app.use(express.json());

const CARDSCHEMA = new mongoose.Schema({
    title: String,
    name: String,
    imgURL: String,

});

const CARD = mongoose.model("3cugun", CARDSCHEMA)


///////////////GET//////////////////////
app.get('/', (req, res) => {
    CARD.find({}, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.send("Alınmır");

        }
    });
});
////////////////////////////////////////
///////////////GET FOR ID//////////////////////
app.get('/:id', (req, res) => {
    const { id } = req.params
    CARD.findById(id, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.send("Alınmır");

        }
    });
})

////////////////////////////////////////
///////////////POST//////////////////////
app.post('/', (req, res) => {
    const newcard = new CARD({
        title: req.body.title,
        name: req.body.name,
        imgURL: req.body.imgURL,
    });

    newcard.save();
    res.send(newcard);


})

////////////////////////////////////////
///////////////DELETE//////////////////////
app.delete('/:id', (req, res) => {
    const { id } = req.params
    CARD.findByIdAndRemove(id, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.send("Alınmır");

        }
    });
})

////////////////////////////////////////



mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://ilham3:ilham33@cluster0.1hqdf0d.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MEN BEZDIM HERSEYDEN BEZDIM'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})