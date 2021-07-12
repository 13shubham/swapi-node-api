const router = require('express').Router();

router.get(
  '/api/ping', (req, res) => res.send({ "success": true })
);

module.exports = router