const router = require('express').Router();
const healthRoutes = require('./health');
const peopleData = require('./peopleData')

/*
* Define multiple routes based on rest APIs
 */

router.use(healthRoutes);
router.use(peopleData);

module.exports = router;