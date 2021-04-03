import { Task } from "./task";
import { TasksList } from "./tasksList";
import { taskListJSON } from "../app";

export class TaskHandler {
  constructor() {
    this.taskListsListing = [];
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

    taskListJSON.map(taskList => {
      totalTasks += taskList.tasks.length;
    })

    //ADDING HTML FOR EACH EVENTS LIST
    for (let taskList of taskListJSON) {
      this.taskListsListing.push(new TasksList(taskList));

      const checked = taskList.isEnabled ? "checked" : "";
      const tasksRatio = taskList.tasks.length / totalTasks;
      const width = Math.ceil(tasksRatio * 100) + "%";
      const color = `categories__progress-bar--${taskList.color}`;

      contentHTML += `
        <div class="categories__item">
          <label class="categories__label checkbox__label" for="${taskList.id}">
            <input type="checkbox" id="${taskList.id}" class="categories__checkbox checkbox" name="category" ${checked}>
            <span class="categories__checkmark checkbox__checkmark checkbox__checkmark--${taskList.color}">&nbsp;</span>
            <span class="checkbox__text">${taskList.name}</span>
          </label>
          <span class="categories__progress-bar categories__progress-bar--${taskList.color}" id="${color}">&nbsp;</span>
          <style>
            .categories__progress-bar--${taskList.color}::after {
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

        this.taskListsListing.find(element => element.id === parseInt(id)).isEnabled = !this.taskListsListing.find(element => element.id === parseInt(id)).isEnabled;
        this.render();
      });
    });
  }

  render() {
    document.querySelector(".side-nav").innerHTML = "";

    //LOOP THROUGH ALL THE EVENT LISTS AND IF ENABLED RENDER THEM
    for (const taskHandler of this.taskListsListing) {
      if (taskHandler.isEnabled) {
        taskHandler.render();
      }
    }

    const tasksEl = document.querySelectorAll(".side-nav__heading--sub");

    for (const el of tasksEl) {
      el.addEventListener("click", e => {
        for (const todoEl of document.querySelectorAll(".todo-list__board")) {
          todoEl.innerHTML = "";
        }

        this.taskListsListing.find(element => element.id === parseInt(el.dataset.listId))
          .tasks.find(element => element.id === parseInt(el.dataset.taskId)).render();
      });
    }

    const taskEl = document.querySelector(".side-nav__heading--sub");
    const taskObj =
      taskListJSON.find(element => element.id === parseInt(taskEl.dataset.listId))
        .tasks.find(element => element.id === parseInt(taskEl.dataset.taskId));
    const task = new Task(taskObj, taskEl.dataset.color);
    task.render(undefined, true);
  }
}