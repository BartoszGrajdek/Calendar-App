export class Task {
  constructor(task, listColor = "", listId) {
    this.id = task.id;
    this.categoryId = task.categoryId;
    this.name = task.name;

    this.listId = listId;
    this.listColor = listColor;

    this.pending = task.pending;
    this.doing = task.doing;
    this.done = task.done;
  }

  render(mode = "", event, popup = true) {
    const content = document.querySelector(".content");
    const header = content.querySelector(".todo-list__header");
    const [pendingEl, doingEl, doneEl] = content.querySelectorAll(".todo-list__board");

    header.textContent = this.name;

    for (const task of this.pending) {
      pendingEl.innerHTML += `
        <div class="todo-list__item">
          <h5 class="todo-list__title">${task}</h5>
        </div>
      `;
    }

    for (const task of this.doing) {
      doingEl.innerHTML += `
        <div class="todo-list__item">
          <h5 class="todo-list__title">${task}</h5>
        </div>
      `;
    }

    for (const task of this.done) {
      doneEl.innerHTML += `
        <div class="todo-list__item">
          <h5 class="todo-list__title">${task}</h5>
        </div>
      `;
    }

    pendingEl.innerHTML += `<button class="todo-list__button"><span>+</span> Add more</button>`;
    doingEl.innerHTML += `<button class="todo-list__button"><span>+</span> Add more</button>`;
    doneEl.innerHTML += `<button class="todo-list__button"><span>+</span> Add more</button>`;

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