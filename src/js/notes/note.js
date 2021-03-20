export class Note {
  constructor(note, listColor = "") {
    this.id = note.id;
    this.categoryId = note.categoryId;
    this.name = note.name;
    this.listColor = listColor;
    this.textTitle = note.textTitle;
    this.text = note.text;
    this.toDoList = note.toDoList;
  }

  render() {
    const detailsEl = document.querySelector(".details");
    const titleEl = detailsEl.querySelector(".details__event");
    const textTitleEl = detailsEl.querySelector(".details__title");
    const textEl = detailsEl.querySelector(".details__text");
    const checklistEl = detailsEl.querySelector(".details__checklist");
    // const dateEl = detailsEl.querySelector(".details__date");
    // const timeEl = detailsEl.querySelector(".details__time");
    // const [notificationEl, navigationEl] = detailsEl.querySelectorAll(".details__icon--title");

    titleEl.textContent = this.name;
    textTitleEl.textContent = this.textTitle;
    textEl.textContent = this.text;

    let checklistHTML = `
      <h4 class="checklist__title">To be done</h4>
    `;

    for (const task of this.toDoList) {
      checklistHTML += `
        <div class="checklist__item ${task.isIndented ? "checklist__item--indent" : ""}">
            <label class="checklist__label checkbox__label" for="checklist-${task.taskId}">
              <input type="checkbox" id="checklist-${task.taskId}" class="checkbox checklist__checkbox" name="checklist" ${task.isDone ? "checked" : ""}>
              <span class="checkbox__checkmark checkbox__checkmark--${this.listColor}">&nbsp;</span>
              <span class="checklist__text checkbox__text">${task.name}</span>
            </label>
          </div>
      `;
    }

    checklistEl.innerHTML = checklistHTML;

    //CHECK IF IT'S MOBILE AND ADD POPUP FUNCTIONALITY
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const isMobile = width <= 1200;
    if (isMobile) {
      document.querySelector(".popup").style.display = "block";
      document.querySelector(".details__close").addEventListener("click", () => {
        document.querySelector(".popup").style.display = "none";
      });
    }
  }
}