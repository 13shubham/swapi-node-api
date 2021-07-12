const fetch = require("node-fetch");

const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return {
      error: true,
      code: INTERNAL_SERVER_ERROR,
      message: err.message,
    };
  }
  //or can be done with traditional approach as below:
  /* console.log(url)
      return await fetch(url)
          .then(res => res.json())
          .then(data => data)
          .catch((err) => {res.status(404).send(err)}) */
};

module.exports = { fetchApi };
