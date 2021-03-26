import { TaskHandler } from "../task/taskHandler";

export class TaskBoard {
  constructor() {
    this.taskHandler = new TaskHandler();
    this.init();
  }

  init() {
    //CHECK IF IT'S MOBILE AND DELETE DETAILS PC HTML
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const isMobile = width <= 1200;
    if (isMobile) {
      const content = document.querySelector(".content");
      content.remove();

      //ADD POPUP TO APP
      let popup = document.createElement("div");
      popup.classList.add("popup", "popup--todo");
      popup.innerHTML += `
        <div class="content content--noFlex">
      
          <span class="todo-list__close">&nbsp;</span>
      
          <h2 class="todo-list__header">Payments</h2>
      
          <div class="todo-list__container">
      
            <div class="todo-list">
              <h3 class="todo-list__name">Pending</h3>
              <div class="todo-list__board">

              </div>
            </div>
            <!-- TO-DO BOARD -->
      
            <div class="todo-list">
              <h3 class="todo-list__name">Doing</h3>
              <div class="todo-list__board">
                
              </div>
            </div>
            <!-- TO-DO BOARD -->
      
            <div class="todo-list">
              <h3 class="todo-list__name">Done</h3>
              <div class="todo-list__board">
                
              </div>
            </div>
            <!-- TO-DO BOARD -->
      
          </div>
          <!-- TO-DO CONTAINER -->
      
        </div>
        <!-- CONTENT -->
        `;
      document.querySelector("body").append(popup);
      document.querySelector(".popup").style.display = "none";
    }

    this.taskHandler.render();
  }
}