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

  render(popup = true, firstRender = false) {
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
    if (isMobile) {
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
        event.dataTransfer.setData("text/plain", taskItemEl.dataset.taskId);
        event.dataTransfer.effectAllowed = "move";
      });
    }

    if (firstRender) {
      for (const taskListEl of document.querySelectorAll(".todo-list__board")) {
        const rect = taskListEl.getBoundingClientRect();
        const leftOffset = rect.left;
        const rightOffset = rect.right;
        const topOffset = rect.top;
        const bottomOffset = rect.bottom;

        taskListEl.addEventListener("dragenter", event => {
          if (event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            if (taskListEl.querySelector(".todo-list__pointer") === null) {
              taskListEl.innerHTML += `
              <span class="todo-list__pointer" style="display: block; width: 100%; height: 1px; border-top: 1px solid blue; position: absolute; left: 0; top: 0;">&nbsp;</span>
            `;
              taskListEl.style.position = "relative";
            }
          }

          if (taskListEl.querySelector(".todo-list__pointer") !== null) {
            const pointer = taskListEl.querySelector(".todo-list__pointer");
            const cursorOffset = event.clientY;

            const taskEl = document.querySelector(".todo-list__item");
            const taskElHeight = taskEl.offsetHeight;
            const taskElMarginHeight = parseFloat(window.getComputedStyle(taskEl).marginBottom);

            let selectedTask = Math.round((cursorOffset - taskEl.getBoundingClientRect().top) / (taskElHeight + taskElMarginHeight) + .2);
            if (selectedTask > taskListEl.querySelectorAll(".todo-list__item").length) { selectedTask = taskListEl.querySelectorAll(".todo-list__item").length; }

            const top = Math.floor(selectedTask) * (taskElHeight + taskElMarginHeight);
            pointer.style.top = `${top}px`;
          }
        });

        taskListEl.addEventListener("dragover", event => {
          if (event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
          }
        });

        taskListEl.addEventListener("dragleave", event => {
          const clientX = event.clientX;
          const clientY = event.clientY;

          if (event.dataTransfer.types[0] === "text/plain" && (clientX < leftOffset || clientX > rightOffset) && (clientY < bottomOffset || clientY > topOffset)) {
            event.preventDefault();
            if (taskListEl.querySelector(".todo-list__pointer") !== null) { taskListEl.querySelector(".todo-list__pointer").remove(); }
          }
        });

        taskListEl.addEventListener("drop", event => {
          const taskElList = document.querySelectorAll(".todo-list__item");
          const dropTaskEl = Array.from(taskElList).find(element => event.dataTransfer.getData("text/plain") === element.dataset.taskId);
          const taskElHeight = dropTaskEl.offsetHeight;
          const taskElMarginHeight = parseFloat(window.getComputedStyle(dropTaskEl).marginBottom);

          if (taskListEl.querySelector(".todo-list__pointer") !== null) { taskListEl.querySelector(".todo-list__pointer").remove(); }

          const sourceList = dropTaskEl.parentElement.dataset.sourceList;
          const sourceIndex = dropTaskEl.dataset.taskIndex;
          const targetList = taskListEl.dataset.sourceList;

          const cursorOffset = event.clientY;

          const taskEl = document.querySelector(".todo-list__item");
          let selectedTask = Math.round((cursorOffset - taskEl.getBoundingClientRect().top) / (taskElHeight + taskElMarginHeight) + .2);
          if (selectedTask > taskListEl.querySelectorAll(".todo-list__item").length) { selectedTask = taskListEl.querySelectorAll(".todo-list__item").length; }

          this.moveTask(eval(`this.${sourceList}`), parseInt(sourceIndex), eval(`this.${targetList}`), selectedTask);
        });
      }
    }
  }

  moveTask(sourceList, sourceIndex, targetList, targetIndex) {
    console.log(targetIndex);
    const insertItem = sourceList[sourceIndex];
    if (sourceList === targetList) {
      if (sourceIndex === targetIndex || sourceIndex + 1 === targetIndex) {
        return;
      } else if (sourceIndex > targetIndex) {
        sourceList.splice(sourceIndex, 1);
        targetList.splice(targetIndex, 0, insertItem);
      } else {
        sourceList.splice(sourceIndex, 1);
        sourceList.splice(targetIndex - 1, 0, insertItem);
      }
    } else {
      // targetIndex -= 1;
      sourceList.splice(sourceIndex, 1);
      targetList.splice(targetIndex, 0, insertItem);
    }
    this.render();
  }
}