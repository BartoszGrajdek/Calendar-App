import { TasksList } from "./tasksList";
import { TasksBoard } from "./tasksBoard";
import { taskListJSON } from "../app";

export class TaskHandler {
  constructor() {
    this.taskBoardsList = [];
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
    let totalTasks = 0;

    taskListJSON.map(taskBoard => {
      totalTasks += taskBoard.tasks.length;
    })

    //ADDING HTML FOR EACH EVENTS LIST
    for (let taskBoard of taskListJSON) {
      this.taskBoardsList.push(new TasksBoard(taskBoard));

      const checked = taskBoard.isEnabled ? "checked" : "";
      const tasksRatio = taskBoard.tasks.length / totalTasks;
      const width = Math.ceil(tasksRatio * 100) + "%";
      const color = `categories__progress-bar--${taskBoard.color}`;

      contentHTML += `
        <div class="categories__item">
          <label class="categories__label checkbox__label" for="${taskBoard.id}">
            <input type="checkbox" id="${taskBoard.id}" class="categories__checkbox checkbox" name="category" ${checked}>
            <span class="categories__checkmark checkbox__checkmark checkbox__checkmark--${taskBoard.color}">&nbsp;</span>
            <span class="checkbox__text">${taskBoard.name}</span>
          </label>
          <span class="categories__progress-bar categories__progress-bar--${taskBoard.color}" id="${color}">&nbsp;</span>
          <style>
            .categories__progress-bar--${taskBoard.color}::after {
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

        this.taskBoardsList.find(element => element.id === parseInt(id)).isEnabled = !this.taskBoardsList.find(element => element.id === parseInt(id)).isEnabled;
        this.render();
      });
    });
  }

  render() {
    document.querySelector(".side-nav").innerHTML = "";

    //LOOP THROUGH ALL THE EVENT LISTS AND IF ENABLED RENDER THEM
    for (const taskHandler of this.taskBoardsList) {
      if (taskHandler.isEnabled) {
        taskHandler.render();
      }
    }

    //ADD EVENT LISTENERS TO ALL TASK LISTS IN THE SIDEBAR TO MAKE THEM LOAD AFTER CLICK
    const tasksEl = document.querySelectorAll(".side-nav__heading--sub");

    for (const el of tasksEl) {
      el.addEventListener("click", e => {
        this.taskBoardsList.find(element => element.id === parseInt(el.dataset.listId))
          .tasks.find(element => element.id === parseInt(el.dataset.taskId)).render(undefined);
      });
    }

    //RENDER FIRST TASK BOARD TO HAVE SOME CONTENT AFTER FIRST LOAD
    const taskEl = document.querySelector(".side-nav__heading--sub");
    const taskObj =
      taskListJSON.find(element => element.id === parseInt(taskEl.dataset.listId))
        .tasks.find(element => element.id === parseInt(taskEl.dataset.taskId));
    const task = new TasksList(taskObj, taskEl.dataset.color, taskEl.dataset.listId);
    task.render(undefined, true);

    if (((window.innerWidth > 0) ? window.innerWidth : screen.width) < 800) {
      document.querySelector(".popup").style.display = "none";
    }
  }
}