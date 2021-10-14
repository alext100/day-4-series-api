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