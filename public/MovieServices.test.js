import MoviesServices from "./MovieServices.js";

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
