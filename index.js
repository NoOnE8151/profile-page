import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import config from './config.json' assert { type: 'json' };
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT;

app.use(express.static('assets'));

//get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//make get request
app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs', { config });
})

/* create music api */
const musicDirectory = path.join(__dirname, 'assets/music');
const musicList = fs.readdirSync(musicDirectory);

//create response object 
const musicObj = musicList.map(file => {
  const name = file.slice(0, -4);
  const url = `../music/${file}`;
  return { name, url };
});

app.get('/api/music', (req, res) => {
  res.json(musicObj);
});

app.listen(port, () => {
  console.log('website is running');
})
