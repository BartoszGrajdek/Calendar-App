import {dayDisplay} from "./day";
import {weekDisplay} from "./week";
import {monthDisplay} from "./month";
import {DateHandler} from "../helpers/dateHandler";

export class Calendar {
  constructor() {
    this.date = new DateHandler;
    this.mode = "day";
    this.init();
  }

  init() {
    //SETUP SIDE-CALENDAR BUTTONS
    const buttonToday = document.querySelector(".side-calendar__button");
    const buttonWeek = buttonToday.nextElementSibling;
    const buttonMonth = buttonWeek.nextElementSibling;

    buttonToday.addEventListener('click', () => {
      this.mode = "day";
      this.render(this.mode, this.date);
    });
    buttonWeek.addEventListener('click', () => {
      this.mode = "week";
      this.render(this.mode, this.date);
    });
    buttonMonth.addEventListener('click', () => {
      this.mode = "month";
      this.render(this.mode, this.date);
    });

    //SETUP ARROW BUTTONS + CHANGE MAIN CALENDAR HEADER DATE
    const leftArrow = document.querySelector("button.calendar__switch--left");
    const rightArrow = leftArrow.nextElementSibling;

    leftArrow.addEventListener('click', () => {
      this.date.editChosenDate(-86400000);
      this.changeDate();
    });

    rightArrow.addEventListener('click', () => {
      this.date.editChosenDate(86400000);
      this.changeDate();
    });

    this.changeDate();
  }

  render(calendarMode, date) {
    //CHECK WHICH DISPLAY MODE IS ENABLED, AND RENDER
    let display;

    if (calendarMode === "day") {
      display = new dayDisplay;
    } else if (calendarMode === "week") {
      display = new weekDisplay();
    } else if (calendarMode === "month") {
      display = new monthDisplay();
    } else {
      console.log("Wrong calendar mode!");
      return;
    }

    display.render(date);
  }

  changeDate() {
    const calendarHeader = document.querySelector(".calendar__header");
    calendarHeader.innerHTML = this.date.getDateString(this.date.chosenDate);
  }
}