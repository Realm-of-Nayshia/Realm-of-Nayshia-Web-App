const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('npcs');
});

module.exports = router;