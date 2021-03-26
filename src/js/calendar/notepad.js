import { NoteHandler } from "../note/noteHandler";

export class Notepad {
  constructor() {
    this.noteHandler = new NoteHandler();
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
      popup.classList.add("popup");
      popup.innerHTML += `
          <div class="details details--popup">
            <div class="details__header">
              <div class="details__headings">
                <h2 class="details__event"></h2>
              </div>
              <span class="details__close">&nbsp;</span>
            </div>
            <div class="details__description">
              <h4 class="details__title"></h4>
              <p class="details__text"></p>
            </div>
            <div class="details__checklist checklist">
            </div>
          </div>
          <!-- DETAILS POPUP-->
        `;
      document.querySelector("body").append(popup);
      document.querySelector(".popup").style.display = "none";
    }

    this.noteHandler.render();
  }
}