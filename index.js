import fs from 'fs';
import express from 'express';
import config from './config.json' assert { type: 'json' };
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;

app.use(express.static('assets'));

//get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//make get request
app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs', { config });
})

app.listen(port, () => {
  console.log('website is running');
})