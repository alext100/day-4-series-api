import MovieServices from "./MovieServices.js";
import Component from "./Component.js";

const parentContainer = document.querySelector(".container");

// const getMoviesSeries = new MovieServices();
const formComponent = new Component(parentContainer);

// formComponent.selectContainer();
// formComponent.generateForm();

console.log(formComponent);
