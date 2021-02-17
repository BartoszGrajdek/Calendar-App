import {DayDisplay} from "./day";
import {WeekDisplay} from "./week";
import {MonthDisplay} from "./month";
import {CalendarHandler} from "../helpers/calendarHandler";

export class Calendar extends CalendarHandler {
  constructor(mode) {
    super(mode);
    this.init();
  }

  init() {
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

    display.render(this.date.chosenDate);
  }
}