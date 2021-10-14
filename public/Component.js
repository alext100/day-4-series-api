class Component {
  parentContainer;
  mainHeader;
  mainContainer;
  formSection;
  seriesSection;
  seriesPendingSection;
  seriesPendingList;
  serieItem;

  constructor(parentContainer) {
    this.parentContainer = parentContainer;
    this.generateMain();
    this.generateHeader();
    this.generateForm();
    this.generateSeriesSection();
    this.generateSerieItem();
  }

  generateMain() {
    this.mainContainer = document.createElement("main");
    this.mainContainer.className = "main";
    this.parentContainer.appendChild(this.mainContainer);
  }
  generateHeader() {
    this.mainHeader = document.createElement("header");
    this.mainHeader.className = "main-header";
    this.mainHeader.innerHTML = `<h1 class="main-title">My Series</h1>`;
    this.mainHeader.appendChild(this.mainContainer);
  }
  generateForm() {
    this.formSection = document.createElement("section");
    this.formSection.className = "form";
    this.formSection.innerHTML = `
        <form>
          <div class="form-block">
            <label for="title">Title:</label>
            <input type="text" id="title" />
          </div>
          <div class="form-block">
            <label for="creator">Creator:</label>
            <input type="text" id="creator" />
          </div>
          <div class="form-block">
            <label for="image">Image URL:</label>
            <input type="url" id="image" />
          </div>
          <div class="form-block">
            <label for="emmies">Emmies:</label>
            <input type="number" id="emmies" />
          </div>
          <div class="form-block">
            <button type="submit">Create</button>
          </div>
        </form>`;

    this.mainContainer.appendChild(this.formSection);
  }
  generateSeriesSection() {
    this.seriesSection = document.createElement("section");
    const title = document.createElement("h2");
    const plusIcon = document.createElement("i");
    this.seriesSection.className = "series";
    title.className = "section-title";
    plusIcon.className = "icon--add fas fa-plus-circle";
    this.seriesPendingSection = document.createElement("section");
    this.seriesPendingSection.className = "series-pending";
    this.seriesPendingSection.innerHTML = `<h3 class="subsection-title">Pending series</h3>
        <p class="info">You have 4 series pending to watch</p>`;
    this.seriesPendingList = document.createElement("ul");
    this.seriesPendingList.className = "series-list";
    this.mainContainer.appendChild(this.seriesPendingList);
  }

  generateSerieItem() {
    this.serieItem = document.createElement("li");
    this.serieItem.className = "serie";
    this.serieItem.innerHTML = `
              <img class="serie__poster"
                src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                alt="The Sopranos poster" />
              <h4 class="serie__title">The Sopranos</h4>
              <p class="serie__info">David Chase (1999)</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>`;

    this.seriesPendingList.appendChild(this.serieItem);
  }
}

export default Component;
