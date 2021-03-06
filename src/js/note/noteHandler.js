import { Note } from "./note";
import { NotesList } from "./notesList";
import { noteListJSON } from "../app";

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
    let contentHTML = "";
    const categoriesList = categories.querySelector(".categories__list");
    let totalNotes = 0;

    noteListJSON.map(noteList => {
      totalNotes += noteList.notes.length;
    })

    //ADDING HTML FOR EACH EVENTS LIST
    for (let noteList of noteListJSON) {
      if (noteList.mode === "event") break;
      this.noteListsListing.push(new NotesList(noteList));

      const checked = noteList.isEnabled ? "checked" : "";
      const notesRatio = noteList.notes.length / totalNotes;
      const width = Math.ceil(notesRatio * 100) + "%";
      const color = `categories__progress-bar--${noteList.color}`;

      contentHTML += `
        <div class="categories__item">
          <label class="categories__label checkbox__label" for="${noteList.id}">
            <input type="checkbox" id="${noteList.id}" class="categories__checkbox checkbox" name="category" ${checked}>
            <span class="categories__checkmark checkbox__checkmark checkbox__checkmark--${noteList.color}">&nbsp;</span>
            <span class="checkbox__text">${noteList.name}</span>
          </label>
          <span class="categories__progress-bar categories__progress-bar--${noteList.color}" id="${color}">&nbsp;</span>
          <style>
            .categories__progress-bar--${noteList.color}::after {
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

        this.noteListsListing.find(element => element.id === parseInt(id)).isEnabled = !this.noteListsListing.find(element => element.id === parseInt(id)).isEnabled;
        this.render();
      });
    });
  }

  render() {
    //RESET SIDEBAR NAVIGATION CONTENT (NEEDED WHEN DISABLING SOME NOTEPADS)
    document.querySelector(".side-nav").innerHTML = "";

    //LOOP THROUGH ALL THE EVENT LISTS AND IF ENABLED RENDER THEM
    for (const noteHandler of this.noteListsListing) {
      if (noteHandler.isEnabled) {
        noteHandler.render();
      }
    }

    //ADD EVENT LISTENERS TO ALL NOTES IN THE SIDEBAR TO MAKE THEM LOAD AFTER CLICK
    const notesEl = document.querySelectorAll(".side-nav__heading--sub");

    for (const el of notesEl) {
      el.addEventListener("click", e => {
        this.noteListsListing.find(element => element.id === parseInt(el.dataset.listId))
            .notes.find(element => element.id === parseInt(el.dataset.noteId)).render();
      });
    }

    //RENDER FIRST NOTE TO HAVE SOME CONTENT AFTER FIRST LOAD
    const noteEl = document.querySelector(".side-nav__heading--sub");
    const noteObj =
      noteListJSON.find(element => element.id === parseInt(noteEl.dataset.listId))
        .notes.find(element => element.id === parseInt(noteEl.dataset.noteId));
    const note = new Note(noteObj, noteEl.dataset.color, parseInt(noteEl.dataset.listId));
    note.render();

    if (((window.innerWidth > 0) ? window.innerWidth : screen.width) < 800) {
      document.querySelector(".popup").style.display = "none";
    }
  }
}