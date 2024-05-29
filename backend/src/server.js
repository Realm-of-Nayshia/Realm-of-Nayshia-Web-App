if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();

const indexRouter = require('./routes');
app.use('/', indexRouter);
const abilitiesRouter = require('./routes/abilities');
app.use('/abilities', abilitiesRouter);
const recipesRouter = require('./routes/recipes');
app.use('/recipes', recipesRouter);
const setBonusesRouter = require('./routes/setBonuses');
app.use('/setBonuses', setBonusesRouter);
const npcsRouter = require('./routes/npcs');
app.use('/npcs', npcsRouter);
const questsRouter = require('./routes/quests');
app.use('/quests', questsRouter);
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
