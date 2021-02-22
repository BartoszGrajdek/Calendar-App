import {DayDisplay} from "./day";
import {WeekDisplay} from "./week";
import {MonthDisplay} from "./month";
import {CalendarHandler} from "../helpers/calendarHandler";
import { eventListJSON } from "../app";
import {EventList} from "./eventList";

export class Calendar extends CalendarHandler {
  constructor(mode) {
    super(mode);
    this.eventLists = [];
    this.init();
  }

  init() {
    //SETUP ARROW BUTTONS + CHANGE MAIN CALENDAR HEADER DATE
    const leftArrow = document.querySelector("button.calendar__switch--left");
    const rightArrow = leftArrow.nextElementSibling;
    const calendarHeader = document.querySelector(".calendar__header");

    leftArrow.addEventListener('click', () => {
      this.changeDate(-1, true, calendarHeader);
      this.render();
    });
    rightArrow.addEventListener('click', () => {
      this.changeDate(1, true, calendarHeader);
      this.render();
    });

    this.changeDate(0, false, calendarHeader);

    //MAKE CHECKBOXES FOR EVENT LISTS AND CONNECT THEM WITH LISTS
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const isMobile = width < 800;
    let categories;
    const colors = ["green", "purple", "blue", "yellow"]
    let contentHTML = "";

    if (isMobile) {
      categories = document.querySelector(".categories--mobile");
    } else {
      categories = document.querySelector(".categories--desktop");
    }

    const categoriesList = categories.querySelector(".categories__list");

    for (let eventList of eventListJSON) {
      this.eventLists.push(new EventList(eventList[0], eventList[1], eventList[2], eventList[3]));

      contentHTML += `<div class="categories__item">
          <label class="categories__label checkbox__label" for="${eventList[0]}">
            <input type="checkbox" id="${eventList[0]}" class="categories__checkbox checkbox" name="category">
            <span class="categories__checkmark checkbox__checkmark checkbox__checkmark--${colors[eventList[0]-1]}">&nbsp;</span>
            <span class="checkbox__text">${eventList[1]}</span>
          </label>
          <span class="categories__progress-bar categories__progress-bar--${colors[eventList[0]-1]}">&nbsp;</span>
        </div>`;
    }

    contentHTML += `<button class="categories__button"><span>+</span> Add more</button>`;
    categoriesList.innerHTML = contentHTML;

    //CHECKBOXES CHANGE EVENT LIST STATE
    const categoriesCheckbox = categoriesList.querySelectorAll(".categories__item");

    categoriesCheckbox.forEach(checkbox => {
      checkbox.addEventListener('change', e => {
        const id = e.target.id;

        this.eventLists[id-1].isDisabled = !this.eventLists[id-1].isDisabled;
        this.render();
      });
    });
  }

  render() {
    //CHECK WHICH DISPLAY MODE IS ENABLED, AND RENDER
    let display;

    if (this.app.mode === "day") {
      display = new DayDisplay(this.app);
    } else if (this.app.mode === "week") {
      display = new WeekDisplay(this.app);
    } else if (this.app.mode === "month") {
      display = new MonthDisplay(this.app);
    } else {
      console.log("Wrong calendar mode!");
      return;
    }

    //SET NEW DATE FORMAT ON CALENDAR HEADER AND RENDER CALENDAR
    this.changeDate(0, true, document.querySelector(".calendar__header"))
    display.render(this.date);
  }
}