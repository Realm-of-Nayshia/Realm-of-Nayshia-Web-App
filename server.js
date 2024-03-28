if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.render('index')
});