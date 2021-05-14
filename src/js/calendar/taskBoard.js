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
      popup.classList.add("popup", "popup--task");
      popup.innerHTML += `
        <div class="content content--noFlex">
      
          <span class="task-list__close">&nbsp;</span>
      
          <h2 class="task-list__header">Payments</h2>
      
          <div class="task-list__container">
      
            <div class="task-list">
              <h3 class="task-list__name">Pending</h3>
              <div class="task-list__board" data-source-list="pending">

              </div>
            </div>
            <!-- TO-DO BOARD -->
      
            <div class="task-list">
              <h3 class="task-list__name">Doing</h3>
              <div class="task-list__board" data-source-list="doing">
                
              </div>
            </div>
            <!-- TO-DO BOARD -->
      
            <div class="task-list">
              <h3 class="task-list__name">Done</h3>
              <div class="task-list__board" data-source-list="done">
                
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