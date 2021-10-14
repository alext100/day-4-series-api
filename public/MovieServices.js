class MoviesServices {
  urlAPI = "http://localhost:3001/series/";

  async getSeries() {
    const response = await fetch(this.urlAPI);
    const series = await response.json();
    return series; // devuelve una promesa
  }

  async createSerie(serie) {
    const response = await fetch(`${this.urlAPI}`, {
      method: "POST",
      body: JSON.stringify(serie),
      header: {
        "Content-Type": "application/json",
      },
    });
    const newSerie = await response.json();
    return newSerie;
  }

  async updateSerie(id, serie) {
    fetch(`${this.urlAPI}${id}`, {
      method: "PUT",
      body: JSON.stringify(serie),
      header: {
        "Content-Type": "application/json",
      },
    });
  }

  async deleteSerie(id) {
    const response = await fetch(`${this.urlAPI}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("Can't delete it");
  }
}

export default MoviesServices;
