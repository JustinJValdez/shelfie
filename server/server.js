const express = require('express'),
    cors = require('cors'),
    bodyparser = require('body-parser'),
    massive = require('massive'),
    axios = require('axios'),
    controller = require('./controller')
require('dotenv').config();



const app = express();


massive(process.env.CONNECTION_STRING)
    .then(db => {
    app.set('db', db)
    console.log(app.get('db'))
    console.log(`DB is Running`)
    })


app.use(cors());
app.use(bodyparser.json());

//endpoint=''
//CB function that acts as DB, db.PR.find = .then() gets inven.. from products_table and res.send it back to front end
app.get(`/api/inventory`, controller.getProductsTable)

app.post(`/api/product`, controller. postProductsTable)


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})