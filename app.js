let express = require('express');
let app = express();
const PORT = 3000;
require('dotenv').config();
const api_key = process.env.API_KEY;
const bodyParser = require('body-parser');
console.log(api_key);
app.use(express.static('public'));
app.get('/', function (req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log('App is running on PORT: ' + PORT);
});
