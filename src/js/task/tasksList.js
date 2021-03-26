import { Task } from "./task";
import { taskCategoriesListJSON } from "../app";

export class TasksList {
  constructor(taskList) {
    this.id = taskList.id;
    this.name = taskList.name;
    this.isEnabled = taskList.isEnabled;
    this.color = taskList.color;
    this.tasks = [];

    this.init(taskList);
  }

  init(taskList) {
    for (const task of taskList.tasks) {
      this.tasks.push(new Task(task, this.color, this.id));
    }
  }

  render() {
    const navigation = document.querySelector(".side-nav");
    const categoriesList = taskCategoriesListJSON;

    for (const task of this.tasks) {
      //CHECK IF THERE'S CATEGORY ITEM FOR THIS NOTE
      if (!navigation.querySelector(`div[data-category-id="${task.categoryId}"]`)) {
        //LOOP TROUGH CATEGORIES LIST TO FIND APPROPRIATE CATEGORY FOR SPECIFIED ID
        for (let i = 0; i <= categoriesList.length; i++) {
          //CHECK IF ID'S MATCH
          if (categoriesList[i].categoryId === task.categoryId) {
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

      navigation.querySelector(`div[data-category-id="${task.categoryId}"] .side-nav__notes`).innerHTML += `
        <span class="side-nav__heading--sub" data-color="${this.color}" data-list-id="${task.listId}" data-task-id="${task.id}">${task.name}</span>
      `;
    }
  }
}