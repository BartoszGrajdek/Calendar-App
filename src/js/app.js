import { Calendar } from './calendar/calendar';
import { SideCalendar } from './calendar/sideCalendar';
import { Notepad } from "./calendar/notepad";
import { TaskBoard } from "./calendar/taskBoard";
import { contentJSON } from "./helpers/demoContent";

//DEMO CONTENT FOR EVENT LISTS
if (window.localStorage.getItem("eventList") === null ||
    window.localStorage.getItem("noteList") === null ||
    window.localStorage.getItem("noteCategoriesList") === null ||
    window.localStorage.getItem("taskList") === null ||
    window.localStorage.getItem("taskCategoriesList") === null) {
  window.localStorage.setItem("eventList", JSON.stringify(contentJSON[0]));
  window.localStorage.setItem("noteList", JSON.stringify(contentJSON[1]));
  window.localStorage.setItem("noteCategoriesList", JSON.stringify(contentJSON[2]));
  window.localStorage.setItem("taskList", JSON.stringify(contentJSON[3]));
  window.localStorage.setItem("taskCategoriesList", JSON.stringify(contentJSON[4]));
}

export let eventListJSON = JSON.parse(window.localStorage.getItem("eventList"));
export let noteListJSON = JSON.parse(window.localStorage.getItem("noteList"));
export let noteCategoriesListJSON = JSON.parse(window.localStorage.getItem("noteCategoriesList"));
export let taskListJSON = JSON.parse(window.localStorage.getItem("taskList"));
export let taskCategoriesListJSON = JSON.parse(window.localStorage.getItem("taskCategoriesList"));

class App {
  static init() {
    //DEPENDING ON PAGE USER'S ON LOAD ACCORDING JS TO IT
    if (window.location.pathname.match(".*\/$") || window.location.pathname.match(".*\/index.html")) {
      //SET DEFAULT DISPLAY MODE FOR CALENDAR
      this.app = { mode: "day" };

      //MOBILE SETUP
      const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      const isMobile = width < 800;

      if (isMobile) {
        //ADD POPUP
        document.querySelector(".details").remove();
        if (document.querySelector(".popup") !== null) document.querySelector(".popup").remove();

        if (document.querySelector(".popup") === null) {
          let popup = document.createElement("div");
          popup.classList.add("popup");
          popup.innerHTML = `
        <div class="details details--popup">
      
          <div class="details__header">
            <div class="details__headings">
              <h2 class="details__event"></h2>
              <h4 class="details__date"></h4>
            </div>
            <h5 class="details__time"></h5>
            <span class="details__close">&nbsp;</span>
          </div>
      
          <div class="details__description">
            <h4 class="details__title"></h4>
            <p class="details__text"></p>
          </div>
      
          <div class="details__checklist checklist">
      
          </div>
      
          <div class="details__info">
            <div class="details__info--item">
              <img src="assets/icons/svg/bell.svg" alt="Notification bell" class="details__icon">
              <h4 class="details__icon--title">30 minutes before</h4>
            </div>
            <div class="details__info--item">
              <img src="assets/icons/svg/pin.svg" alt="Place pin" class="details__icon">
              <h4 class="details__icon--title">Warsaw, Poland</h4>
            </div>
          </div>
      
        </div>
        <!-- DETAILS POPUP-->
      `;
          document.querySelector(".content").append(popup);
        }
        document.querySelector(".popup").style.display = "none";
      }

      //INITIALIZE MAIN CALENDAR
      const calendar = new Calendar(this.app);

      //INITIALIZE SIDE CALENDAR
      const sideCalendar = new SideCalendar(this.app, calendar);

      this.renderCalendar(calendar, sideCalendar, isMobile);
    } else if (window.location.pathname.match(".*\/notes.html")) {
      const notepad = new Notepad();
    } else if (window.location.pathname.match(".*\/tasks.html")) {
      const taskBoard = new TaskBoard();
    }
  }

  static renderCalendar(calendar, sideCalendar) {
    //SETUP SIDE-CALENDAR BUTTONS AND HEADER
    const buttonDay = document.querySelector(".side-calendar__button");
    const buttonWeek = buttonDay.nextElementSibling;
    const buttonMonth = buttonWeek.nextElementSibling;

    //CALENDAR DAILY DISPLAY SETUP
    buttonDay.addEventListener('click', () => {
      buttonDay.classList.remove("side-calendar__button--right");
      buttonDay.classList.add("side-calendar__button--active");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--active");
      buttonMonth.classList.add("side-calendar__button--left");

      //POPUP & DETAILS
      if (document.querySelector(".content > .details") === null) {
        let content = document.createElement("div");
        content.classList.add("details");
        content.innerHTML = `
        <div class="details__header">
            <div class="details__headings">
              <h2 class="details__event">Clean up the house</h2>
              <h4 class="details__date">7 November 2020</h4>
            </div>
            <h5 class="details__time">10:00am - 1:00pm</h5>
          </div>
    
          <div class="details__description">
            <h4 class="details__title">Lorem ipsum</h4>
            <p class="details__text">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. </p>
          </div>
    
          <div class="details__checklist checklist">
    
          </div>
    
          <div class="details__info">
            <div class="details__info--item">
              <img src="assets/icons/svg/bell.svg" alt="Notification bell" class="details__icon">
              <h4 class="details__icon--title">30 minutes before</h4>
            </div>
            <div class="details__info--item">
              <img src="assets/icons/svg/pin.svg" alt="Place pin" class="details__icon">
              <h4 class="details__icon--title">Warsaw, Poland</h4>
            </div>
          </div>
      `;
        document.querySelector(".content").append(content);
      }
      if (document.querySelector(".popup") !== null) document.querySelector(".popup").remove();

      //LOAD EVERYTHING
      this.app.mode = "day";
      calendar.render(this.app.mode);
      calendar.scroll();
      sideCalendar.render();
    });

    //CALENDAR WEEKLY DISPLAY SETUP
    buttonWeek.addEventListener('click', () => {
      buttonDay.classList.remove("side-calendar__button--right", "side-calendar__button--active");
      buttonWeek.classList.add("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--left", "side-calendar__button--active");

      //POPUP & DETAILS
      document.querySelector(".details").remove();
      if (document.querySelector(".popup") !== null) document.querySelector(".popup").remove();

      if (document.querySelector(".popup") === null) {
        let popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
        <div class="details details--popup">
      
          <div class="details__header">
            <div class="details__headings">
              <h2 class="details__event"></h2>
              <h4 class="details__date"></h4>
            </div>
            <h5 class="details__time"></h5>
            <span class="details__close">&nbsp;</span>
          </div>
      
          <div class="details__description">
            <h4 class="details__title"></h4>
            <p class="details__text"></p>
          </div>
      
          <div class="details__checklist checklist">
      
          </div>
      
          <div class="details__info">
            <div class="details__info--item">
              <img src="assets/icons/svg/bell.svg" alt="Notification bell" class="details__icon">
              <h4 class="details__icon--title">30 minutes before</h4>
            </div>
            <div class="details__info--item">
              <img src="assets/icons/svg/pin.svg" alt="Place pin" class="details__icon">
              <h4 class="details__icon--title">Warsaw, Poland</h4>
            </div>
          </div>
      
        </div>
        <!-- DETAILS POPUP-->
      `;
        document.querySelector(".content").append(popup);
      }
      document.querySelector(".popup").style.display = "none";

      //LOAD EVERYTHING
      this.app.mode = "week";
      calendar.date.chosenDate = new Date(
        calendar.date.chosenDate.getFullYear(),
        calendar.date.chosenDate.getMonth(),
        (calendar.date.chosenDate.getDate() - calendar.date.chosenDate.getDay() + 1)
      );

      calendar.render();
      calendar.scroll();
      sideCalendar.render();
    });

    //CALENDAR MONTHLY DISPLAY SETUP
    buttonMonth.addEventListener('click', () => {
      buttonDay.classList.remove("side-calendar__button--active");
      buttonDay.classList.add("side-calendar__button--right");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--left");
      buttonMonth.classList.add("side-calendar__button--active");

      //POPUP & DETAILS
      document.querySelector(".details").remove();
      if (document.querySelector(".popup") !== null) document.querySelector(".popup").remove();

      if (document.querySelector(".popup") === null) {
        let popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
        <div class="details details--popup">
      
          <div class="details__header">
            <div class="details__headings">
              <h2 class="details__event"></h2>
              <h4 class="details__date"></h4>
            </div>
            <h5 class="details__time"></h5>
            <span class="details__close">&nbsp;</span>
          </div>
      
          <div class="details__description">
            <h4 class="details__title"></h4>
            <p class="details__text"></p>
          </div>
      
          <div class="details__checklist checklist">
      
          </div>
      
          <div class="details__info">
            <div class="details__info--item">
              <img src="assets/icons/svg/bell.svg" alt="Notification bell" class="details__icon">
              <h4 class="details__icon--title">30 minutes before</h4>
            </div>
            <div class="details__info--item">
              <img src="assets/icons/svg/pin.svg" alt="Place pin" class="details__icon">
              <h4 class="details__icon--title">Warsaw, Poland</h4>
            </div>
          </div>
      
        </div>
        <!-- DETAILS POPUP-->
      `;
        document.querySelector(".content").append(popup);
      }
      document.querySelector(".popup").style.display = "none";

      //LOAD EVERYTHING
      this.app.mode = "month";
      calendar.render();
      sideCalendar.render();
    });
  }
}

//RUN WHOLE APP
App.init();