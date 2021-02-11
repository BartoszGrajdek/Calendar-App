import {CalendarHandler} from "../helpers/calendarHandler";

export class SideCalendar extends CalendarHandler {
  constructor() {
    super();
    this.mode = "month";
    this.init();
  }

  init() {
    //SETUP ARROW BUTTONS + CHANGE MAIN CALENDAR HEADER DATE
    const leftArrowSidebar = document.querySelector("button.side-calendar__switch--left");
    const rightArrowSidebar = leftArrowSidebar.nextElementSibling;
    const calendarHeaderSidebar = document.querySelector(".side-calendar__month");

    leftArrowSidebar.addEventListener('click', () => {
      this.changeDate(1, true, calendarHeaderSidebar, true);
    });
    rightArrowSidebar.addEventListener('click', () => {
      this.changeDate(-1, true, calendarHeaderSidebar, true);
    });

    this.changeDate(0, false, calendarHeaderSidebar, true);
  }

  render(calendarMode, date) {
    //CHECK WHICH DISPLAY MODE IS ENABLED, AND RENDER
    let display;

    if (calendarMode === "day") {
    } else if (calendarMode === "week") {
    } else if (calendarMode === "month") {
    } else {
      console.log("Wrong calendar mode!");
    }

  }
}