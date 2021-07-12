const { Joi } = require('celebrate');

/*
* Validating data based on the defined schema. This allows to use this middleware in any single route, 
* or globally, and ensure that all of inputs are correct before any handler function.
*/
const peopleSchema = {
    params: {
        id: Joi.number().required()
}
};

module.exports = {
    peopleSchema,
};
