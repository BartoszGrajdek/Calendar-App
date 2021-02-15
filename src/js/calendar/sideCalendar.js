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
      this.changeDate(-1, true, calendarHeaderSidebar, true);
      this.render();
    });
    rightArrowSidebar.addEventListener('click', () => {
      this.changeDate(1, true, calendarHeaderSidebar, true);
      this.render();
    });

    this.changeDate(0, true, calendarHeaderSidebar, true);
    this.render();
  }

  render() {
    //CHECK WHICH DISPLAY MODE IS ENABLED, AND RENDER
    const calendarTable = document.querySelector('.side-calendar__table');
    const weekPointer = document.querySelector('.side-calendar__week');
    const date = this.date.chosenDate;
    const today = this.date.todayDate;

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const week = Math.floor((nextDays + date.getDate()) / 7);

    let contentHTML =
      "<div class=\"side-calendar__day--name\">Mon</div>\n" +
      "<div class=\"side-calendar__day--name\">Tue</div>\n" +
      "<div class=\"side-calendar__day--name\">Wed</div>\n" +
      "<div class=\"side-calendar__day--name\">Thu</div>\n" +
      "<div class=\"side-calendar__day--name\">Fri</div>\n" +
      "<div class=\"side-calendar__day--name\">Sat</div>\n" +
      "<div class=\"side-calendar__day--name\">Sun</div>";

    for (let i = firstDayIndex; i > 0; i--) {
      contentHTML += `<div class="side-calendar__day--additional">${prevLastDay - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        contentHTML += `<div class="side-calendar__day--active">${i}</div>`;
      } else {
        contentHTML += `<div>${i}</div>`;
      }
    }

    for (let i = 1; i <= nextDays; i++) {
      contentHTML += `<div class="side-calendar__day--additional">${i}</div>`;
    }

    calendarTable.innerHTML = contentHTML;
    weekPointer.style.display = "none";

    if ((this.mode === "week" || this.mode === "month") && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
      console.log(this.mode, true);
      weekPointer.style.display = "block";
      weekPointer.style.top = `${((week) * 3.5)}rem`;
    }
  };
}