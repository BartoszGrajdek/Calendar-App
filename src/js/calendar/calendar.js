import { CalendarHandler } from "../helpers/calendarHandler";
import { EventHandler } from "../event/eventHandler";
import {RenderHandler} from "../helpers/renderHandler";

export class Calendar extends CalendarHandler {
  constructor(mode) {
    super(mode);

    this.eventHandler = new EventHandler(this.date, this.app);
    this.init();

    this.render(this.app.mode, this.date);
    this.scroll();
  }

  init() {
    //SETUP ARROW BUTTONS + CHANGE MAIN CALENDAR HEADER DATE
    const leftArrow = document.querySelector("button.calendar__switch--left");
    const rightArrow = leftArrow.nextElementSibling;
    const calendarHeader = document.querySelector(".calendar__header");

    leftArrow.addEventListener("click", () => {
      this.changeDate(-1, true, calendarHeader);
      this.render();
      this.scroll();
    });
    rightArrow.addEventListener("click", () => {
      this.changeDate(1, true, calendarHeader);
      this.render();
      this.scroll();
    });

    this.changeDate(0, false, calendarHeader);
  }

  scroll() {
    const calendarTable = document.querySelector(".calendar__table-box");
    const pointer = document.querySelector(".calendar__pointer");
    if (pointer !== null) { pointer.style.top = (this.date.todayDate.getHours() * 5 + (this.date.todayDate.getMinutes() / 60 * 5)) + "rem"; }

    const calendarTableHeight = calendarTable.scrollHeight;
    calendarTable.scrollTop = ((this.date.todayDate.getHours() / 25 * calendarTableHeight) - (calendarTable.offsetHeight / 2));
  }

  render() {
    //CHECK WHICH DISPLAY MODE IS ENABLED, AND RENDER
    let renderHandler = new RenderHandler(this.app);

    //SET NEW DATE FORMAT ON CALENDAR HEADER AND RENDER CALENDAR
    this.changeDate(0, true, document.querySelector(".calendar__header"))
    renderHandler.calendarRender(this.date);

    //RENDER EVENTS
    this.eventHandler.render(this.date, this.app);
  }
}