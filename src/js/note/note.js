import {noteListJSON} from "../app";

export class Note {
  constructor(note, listColor = "", listId) {
    this.id = note.id;
    this.categoryId = note.categoryId;
    this.name = note.name;

    this.listId = listId;
    this.listColor = listColor;

    this.textTitle = note.textTitle;
    this.text = note.text;
    this.toDoList = note.toDoList;

    this.notification = (note.notification !== undefined) ? note.notification : "TBD";
    this.navigation = (note.navigation !== undefined) ? note.navigation : "TBD";
  }

  render(mode = "", event, popup = true) {
    //GET ALL DOM OBJECTS NEEDED
    const detailsEl = document.querySelector(".details");
    const titleEl = detailsEl.querySelector(".details__event");
    const textTitleEl = detailsEl.querySelector(".details__title");
    const textEl = detailsEl.querySelector(".details__text");
    const checklistEl = detailsEl.querySelector(".details__checklist");

    //RENDER BASIC NOTE CONTENT
    titleEl.textContent = this.name;
    textTitleEl.textContent = this.textTitle;
    textEl.textContent = this.text;

    //LOAD NOTE'S CHECKLIST
    let checklistHTML = `
      <h4 class="checklist__title">To be done</h4>
    `;

    if (this.toDoList !== undefined) {
      for (const task of this.toDoList) {
        checklistHTML += `
          <div class="checklist__item ${task.isIndented ? "checklist__item--indent" : ""}">
              <label class="checklist__label checkbox__label" for="checklist-${task.taskId}">
                <input type="checkbox" id="checklist-${task.taskId}" class="checkbox checklist__checkbox" name="checklist" ${task.isDone ? "checked" : ""} 
                  data-note-id="${this.id}"
                  data-note-list-id="${this.listId}"
                  data-task-id="${task.taskId}"
                >
                <span class="checkbox__checkmark checkbox__checkmark--${this.listColor}">&nbsp;</span>
                <span class="checklist__text checkbox__text">${task.name}</span>
              </label>
            </div>
        `;
      }
    }

    checklistEl.innerHTML = checklistHTML;

    //CHECK WHETHER IT'S BEING DISPLAYED IN CALENDAR
    if (mode !== "") {
      //GET DOM OBJECTS
      const dateEl = detailsEl.querySelector(".details__date");
      const timeEl = detailsEl.querySelector(".details__time");
      const [notificationEl, navigationEl] = detailsEl.querySelectorAll(".details__icon--title");

      //DISPLAY TIME STAMPS FOR DURATION
      timeEl.innerHTML = event.start.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"}) + " - " +
        event.end.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"});

      //FILL REST OF THE INFORMATION
      dateEl.innerHTML = event.start.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric"});
      notificationEl.innerHTML = this.notification;
      navigationEl.innerHTML = this.navigation;
    }

    //MAKE CHANGES IN OBJECT WHEN CHANGING SOMETHING IN CHECKLIST TO SAVE EVERYTHING
    for (const taskEl of checklistEl.querySelectorAll(".checklist__checkbox")) {
      taskEl.addEventListener('change', () => {
        const task = noteListJSON
          .find(element => element.id === parseInt(taskEl.dataset.noteListId)).notes
          .find(element => element.id === parseInt(taskEl.dataset.noteId)).toDoList
          .find(element => element.taskId === parseInt(taskEl.dataset.taskId));
        task.isDone = !task.isDone;
      });
    }

    //CHECK IF IT'S MOBILE AND ADD POPUP FUNCTIONALITY
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const isMobile = width <= 1200;
    if (isMobile || mode === "week" || mode === "month") {
      if (popup) {
        document.querySelector(".popup").style.display = "block";
      }
      document.querySelector(".details__close").addEventListener("click", () => {
        document.querySelector(".popup").style.display = "none";
      });
      document.querySelector(".popup").addEventListener("click", () => {
        document.querySelector(".popup").style.display = "none";
      });
      document.querySelector(".popup > .details").addEventListener("click", e => e.stopPropagation());
    }
  }
}