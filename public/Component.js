class Component {
  parentContainer;
  mainHeader;
  formSection;

  constructor(parentContainer) {
    this.parentContainer = parentContainer;
    this.generateHeader();
    this.generateForm();
  }

  generateHeader() {
    this.mainHeader = document.createElement("header");
    this.mainHeader.className = "main-header";
    this.mainHeader.innerHTML = `<h1 class="main-title">My Series</h1>`;
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

    this.parentContainer.appendChild(this.formSection);
  }
}

export default Component;
