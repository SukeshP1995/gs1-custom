import express from 'express';
import * as fs from "fs";

const app = express()

app.set('view engine', 'ejs');

app.get('/*', function (req, res) {
  res.render('index', {
    url: req.path,
  });
})
 
app.listen(process.env.PORT || 3000)