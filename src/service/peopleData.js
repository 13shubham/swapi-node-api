const { fetchApi } = require("../util/commonApi");
const { INTERNAL_SERVER_ERROR, TECHNICAL_ERROR } = require("http-status-codes");

const getPeopleResponse = async (url) => {
  const data = await fetchApi(url);
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    birth_year,
    gender,
    homeworld,
    species,
    films,
  } = data;
  const filmsData = await getFilmsData(films);
    const updatedFilms = filmsData.map((film) => {
    const { title, director, producer, release_date, url } = film;
    return { title, director, producer, release_date, url};
  });

  const speciesData = await getSpeciesData(species);
  console.log(speciesData)
  const updatedSpecies = speciesData.map((film) => {
    const {  name, average_lifespan, classification, language, url } = film;
    return {  name, average_lifespan, classification, language, url };
  });
  const updatedData = {
    Person: {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      birth_year,
      gender,
      homeworld: await getHomeworld(homeworld),
      species: updatedSpecies,
      films: updatedFilms,
    },
  };
  return updatedData;
};

const getHomeworld = async (url) => {
  const planet = await fetchApi(url);
  const planetData = {
    title: planet.name,
    terrain: planet.terrain,
    population: planet.population,
  };
  return planetData;
};

const getFilmsData = async (filmUrls) => {
  const filmsData = Promise.all(
    filmUrls.map(async (url) => await fetchApi(url))
  );
  return filmsData;
};

const getSpeciesData = async (speciesUrls) => {
    const speciesData = Promise.all(
        speciesUrls.map(async (url) => await fetchApi(url))
    );
    return speciesData;
  };

module.exports = {
  getPeopleResponse,
};
