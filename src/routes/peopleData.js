const router = require('express').Router();
const { celebrate: validator } = require('celebrate');
const asyncHandler = require('express-async-handler')
const { peopleSchema } = require('../validation/peopleSchema');
const { peopleData } = require('../controllers/peopleData')
const cacheService = require("express-api-cache");

const cache = cacheService.cache

router.get('/api/people/:id',cache("20 minutes"),
    validator(peopleSchema),
    asyncHandler(peopleData)
    );
module.exports = router;