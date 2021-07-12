const service = require("../service/peopleData");
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require("http-status-codes");

const peopleData = async (req, res) => {
  const url = `https://swapi.dev/api/people/${req.params.id}`;
      const responseData = await service.getPeopleResponse(url);
      if (responseData.error) {
        //throw createError(404, JSON.stringify({ NOT_FOUND, message: finalPostsData.message }));
        return res.status(404).send("posts data is empty");
      }
      res.status(200).send(responseData);
    }

module.exports = {
  peopleData,
};
