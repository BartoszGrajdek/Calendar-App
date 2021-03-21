import { DayDisplay } from "./day";
import { WeekDisplay } from "./week";
import { MonthDisplay } from "./month";
import { CalendarHandler } from "../helpers/calendarHandler";
import { EventHandler } from "../helpers/eventHandler";

export class Calendar extends CalendarHandler {
  constructor(mode) {
    super(mode);
    this.init();
    this.eventHandler = new EventHandler(this.date, this.app);
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

    //RENDER EVENTS
    this.eventHandler.render(this.date, this.app);
  }
}