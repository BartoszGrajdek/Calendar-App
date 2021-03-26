import { Note } from "./note";
import { noteCategoriesListJSON } from "../app";

export class NotesList {
  constructor(noteList) {
    this.id = noteList.id;
    this.name = noteList.name;
    this.isEnabled = noteList.isEnabled;
    this.color = noteList.color;
    this.notes = [];

    this.init(noteList);
  }

  init(noteList) {
    for (const note of noteList.notes) {
      this.notes.push(new Note(note, this.color, this.id));
    }
  }

  render() {
    const navigation = document.querySelector(".side-nav");
    const categoriesList = noteCategoriesListJSON;

    for (const note of this.notes) {
      //CHECK IF THERE'S CATEGORY ITEM FOR THIS NOTE
      if (!navigation.querySelector(`div[data-category-id="${note.categoryId}"]`)) {
        //LOOP TROUGH CATEGORIES LIST TO FIND APPROPRIATE CATEGORY FOR SPECIFIED ID
        for (let i = 0; i <= categoriesList.length; i++) {
          //CHECK IF ID'S MATCH
          if (categoriesList[i].categoryId === note.categoryId) {
            navigation.innerHTML += `
              <div class="side-nav__category" data-category-id="${categoriesList[i].categoryId}">
                <input type="checkbox" class="side-nav__checkbox" id="sidenav-${categoriesList[i].categoryId}" ${categoriesList[i].isEnabled ? "checked" : ""}>
        
                <label for="sidenav-${categoriesList[i].categoryId}" class="side-nav__label">
                  <span class="side-nav__checkmark">&nbsp;</span>
                  <span class="side-nav__heading--label">${categoriesList[i].name}</span>
                </label>
        
                <div class="side-nav__notes"></div>
              </div>
            `;
            break;
          }
        }
      }

      navigation.querySelector(`div[data-category-id="${note.categoryId}"] .side-nav__notes`).innerHTML += `
        <span class="side-nav__heading--sub" data-color="${this.color}" data-list-id="${note.listId}" data-note-id="${note.id}">${note.name}</span>
      `;
    }
  }
}