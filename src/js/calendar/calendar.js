import {DayDisplay} from "./day";
import {WeekDisplay} from "./week";
import {MonthDisplay} from "./month";
import {CalendarHandler} from "../helpers/calendarHandler";

export class Calendar extends CalendarHandler {
  constructor() {
    super();
    this.mode = "day";
    this.init();
  }

  init() {
    //SETUP SIDE-CALENDAR BUTTONS
    const buttonToday = document.querySelector(".side-calendar__button");
    const buttonWeek = buttonToday.nextElementSibling;
    const buttonMonth = buttonWeek.nextElementSibling;
    const weekPointer = document.querySelector('.side-calendar__week');

    buttonToday.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--right");
      buttonToday.classList.add("side-calendar__button--active");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--active");
      buttonMonth.classList.add("side-calendar__button--left");

      this.mode = "day";
      this.render(this.mode, this.date);

      weekPointer.style.display = "none";
    });
    buttonWeek.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--right", "side-calendar__button--active");
      buttonWeek.classList.add("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--active", "side-calendar__button--left");

      this.mode = "week";
      this.render(this.mode, this.date);

      weekPointer.style.display = "block";
    });
    buttonMonth.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--active");
      buttonToday.classList.add("side-calendar__button--right");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--left");
      buttonMonth.classList.add("side-calendar__button--active");

      this.mode = "month";
      this.render(this.mode, this.date);

      weekPointer.style.display = "block";
    });

    //SETUP ARROW BUTTONS + CHANGE MAIN CALENDAR HEADER DATE
    const leftArrow = document.querySelector("button.calendar__switch--left");
    const rightArrow = leftArrow.nextElementSibling;
    const calendarHeader = document.querySelector(".calendar__header");

    leftArrow.addEventListener('click', () => {
      this.changeDate(-1, true, calendarHeader);
    });
    rightArrow.addEventListener('click', () => {
      this.changeDate(1, true, calendarHeader);
    });

    this.changeDate(0, false, calendarHeader);
  }

  render(calendarMode, date) {
    //CHECK WHICH DISPLAY MODE IS ENABLED, AND RENDER
    let display;

    if (calendarMode === "day") {
      display = new DayDisplay;
    } else if (calendarMode === "week") {
      display = new WeekDisplay();
    } else if (calendarMode === "month") {
      display = new MonthDisplay();
    } else {
      console.log("Wrong calendar mode!");
      return;
    }

    display.render(date.chosenDate);
  }
}