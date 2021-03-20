import { noteListJSON } from "../app";
import { NotesList } from "../notes/notesList";

export class NoteHandler {
  constructor() {
    this.noteListsListing = [];
    this.init();
  }

  init() {
    //CHECK IF IT'S MOBILE OR DESKTOP DEVICE, AND SELECT PROPER CATEGORIES CONTAINER
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const isMobile = width < 800;
    let categories;
    if (isMobile) {
      categories = document.querySelector(".categories--mobile");
    } else {
      categories = document.querySelector(".categories--desktop");
    }

    //RENDER CHECKBOXES FOR ALL CATEGORIES
    const colors = ["green", "purple", "blue", "yellow"]
    let contentHTML = "";
    const categoriesList = categories.querySelector(".categories__list");
    let totalNotes = 0;

    noteListJSON.map(noteList => {
      totalNotes += noteList.notes.length;
    })

    //ADDING HTML FOR EACH EVENTS LIST
    for (let noteList of noteListJSON) {
      if (noteList.mode === "event") return;
      this.noteListsListing.push(new NotesList(noteList, colors[noteList.id-1]));

      const checked = noteList.isEnabled ? "checked" : "";
      const notesRatio = noteList.notes.length / totalNotes;
      const width = Math.ceil(notesRatio * 100) + "%";
      const color = `categories__progress-bar--${colors[noteList.id-1]}`;

      contentHTML += `
        <div class="categories__item">
          <label class="categories__label checkbox__label" for="${noteList.id}">
            <input type="checkbox" id="${noteList.id}" class="categories__checkbox checkbox" name="category" ${checked}>
            <span class="categories__checkmark checkbox__checkmark checkbox__checkmark--${colors[noteList.id-1]}">&nbsp;</span>
            <span class="checkbox__text">${noteList.name}</span>
          </label>
          <span class="categories__progress-bar categories__progress-bar--${colors[noteList.id-1]}" id="${color}">&nbsp;</span>
          <style>
            .categories__progress-bar--${colors[noteList.id-1]}::after {
              width: ${width};
            }
          </style>
        </div>
      `;
    }

    //ADD RENDERED CONTENT
    contentHTML += `<button class="categories__button"><span>+</span> Add more</button>`;
    categoriesList.innerHTML = contentHTML;

    //CHECKBOXES CHANGE EVENT LIST STATE
    const categoriesCheckbox = categoriesList.querySelectorAll(".categories__item");

    categoriesCheckbox.forEach(checkbox => {
      checkbox.addEventListener('change', e => {
        const id = e.target.id;

        this.noteListsListing[id-1].isEnabled = !this.noteListsListing[id-1].isEnabled;
        this.render();
      });
    });
  }

  render() {
    document.querySelector(".side-nav").innerHTML = "";

    //LOOP THROUGH ALL THE EVENT LISTS AND IF ENABLED RENDER THEM
    for (const noteHandler of this.noteListsListing) {
      if (noteHandler.isEnabled) {
        noteHandler.render();
      }
    }

    const notesEl = document.querySelectorAll(".side-nav__heading--sub");

    for (const el of notesEl) {
      el.addEventListener("click", () => {
        this.noteListsListing[el.dataset.listId-1].notes[el.dataset.noteId-1].render();
      });
    }
  }
}