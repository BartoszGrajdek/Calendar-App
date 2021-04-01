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
    pendingEl.innerHTML = "";
    doingEl.innerHTML = "";
    doneEl.innerHTML = "";
    let i = 0;

    header.textContent = this.name;

    for (const task of this.pending) {
      pendingEl.innerHTML += `
        <div class="todo-list__item" draggable="true" data-task-id="${i}" data-task-index="${i}">
          <h5 class="todo-list__title">${task}</h5>
        </div>
      `;
      i++;
    }
    let j = i;

    for (const task of this.doing) {
      doingEl.innerHTML += `
        <div class="todo-list__item" draggable="true" data-task-id="${i}" data-task-index="${i-j}">
          <h5 class="todo-list__title">${task}</h5>
        </div>
      `;
      i++;
    }
    j = i;

    for (const task of this.done) {
      doneEl.innerHTML += `
        <div class="todo-list__item" draggable="true" data-task-id="${i}" data-task-index="${i-j}">
          <h5 class="todo-list__title">${task}</h5>
        </div>
      `;
      i++;
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

    for (const taskItemEl of document.querySelectorAll(".todo-list__item")) {
      taskItemEl.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", taskItemEl.dataset.taskId)
      });
    }

    for (const taskListEl of document.querySelectorAll(".todo-list__board")) {
      taskListEl.addEventListener("dragenter", event => {
        event.preventDefault();
      });

      taskListEl.addEventListener("dragover", event => {
        event.preventDefault();
        taskListEl.style.backgroundColor = "red";
      });

      taskListEl.addEventListener("dragleave", event => {
        event.preventDefault();
        taskListEl.style.backgroundColor = "transparent";
      });

      taskListEl.addEventListener("drop", event => {
        console.log(event.dataTransfer.getData("text/plain"));
        taskListEl.style.backgroundColor = "transparent";

        const taskElList = document.querySelectorAll(".todo-list__item");
        const taskEl = Array.from(taskElList).find(element => event.dataTransfer.getData("text/plain") === element.dataset.taskId);

        const sourceList = taskEl.parentElement.dataset.sourceList;
        const sourceIndex = taskEl.dataset.taskIndex;
        const targetList = taskListEl.dataset.sourceList;


        this.moveTask(eval(`this.${sourceList}`), parseInt(sourceIndex), eval(`this.${targetList}`));
      });
    }
  }

  moveTask(sourceList, sourceIndex, targetList, targetIndex) {
    console.log("HI");
    console.log(sourceList[sourceIndex]);
    targetList.push(sourceList[sourceIndex]);
    sourceList.splice(sourceIndex, 1);
    this.render();
  }
}