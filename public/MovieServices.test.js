import MoviesServices from "./MovieServices.js";
import "isomorphic-fetch";

describe("Given a getSeries function", () => {
  describe("When it recives response from API with url 'http://localhost:3001/series/'", () => {
    test("Then it should return an object", () => {
      const expected = {};

      const getSeries = new MoviesServices();
      const expectResponse = getSeries.getSeries();

      return expect(typeof expected).toEqual(typeof expectResponse);
    });
  });
});

describe("Given a deleteSerie function", () => {
  describe("When it recives id propertie of an object", () => {
    test("Then it should return the empty object", () => {
      const expected = true;
      const id = 2;

      const getSeries = new MoviesServices();
      const result = getSeries.deleteSerie(id);

      return expect(result).resolves.toEqual(expected);
    });
  });
});

describe("Given a updateSerie function", () => {
  describe("When it recives id propertie of an object and this object", () => {
    test("Then it should return this object with id as a propertie", () => {
      const expected = {
        "id": 4,
        "name": "Atypical",
        "creator": "Robia Rashid",
        "year": 2017,
        "poster": "https://www.cine.com/media/series/2711.jpg",
        "watched": true,
        "score": 0,
        "emmies": 0
      };
      const serie = {
        "name": "Atypical",
        "creator": "Robia Rashid",
        "year": 2017,
        "poster": "https://www.cine.com/media/series/2711.jpg",
        "watched": true,
        "score": 0,
        "emmies": 0
      };
      const id = 4;

      const getSeries = new MoviesServices();
      const result = getSeries.updateSerie(id, serie);

      return expect(result).resolves.toEqual(expected);
    });
  });
});

describe("Given a createSerie function", () => {
  describe("When it recives an object", () => {
    test("Then it should add this object to series API and return the new id of this object", () => {
      const serie = {
        "id": 26,
        "name": "Atypical",
        "creator": "Robia Rashid",
        "year": 2017,
        "poster": "https://www.cine.com/media/series/2711.jpg",
        "watched": true,
        "score": 0,
        "emmies": 0,
      };
      const getSeries = new MoviesServices();
      const idOfReturnedobject = getSeries.createSerie(serie).id;

      const responsedArrayLength = getSeries.getSeries().length;

      return expect(idOfReturnedobject).toBe(responsedArrayLength);
    });
  });
});