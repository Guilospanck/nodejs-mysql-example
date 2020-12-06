#!/usr/bin/env nodejs

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fs = require('fs');
const barcodeFunc = require('./data');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/barcodes', (req, res) => {
    fs.readFile('./barcodes.txt', 'utf8', (err, data) => {
        if (err) {
            res.send(err);
            return
        }

        // get only the last entry
        let string = JSON.parse(data);
        string = string[string.length - 1];        

        barcodeFunc.GetBarcodesFromDBAndCompareBarcodes(string, (err, response) => {
            if (err) {
                console.log("ERROR : ", err);
            } else {
                res.json({ msg: "OK", data: response });
            }
        });
        
    })
})

const port = 7033;
app.listen(port, () => { console.log('We are live on ' + port); });