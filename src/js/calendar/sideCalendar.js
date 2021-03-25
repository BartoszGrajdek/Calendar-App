import { CalendarHandler } from "../helpers/calendarHandler";

export class SideCalendar extends CalendarHandler {
  constructor(mode, calendar) {
    super(mode);

    this.calendar = calendar;
    this.init();
  }

  init() {
    //SETUP ARROW BUTTONS + CHANGE SIDE CALENDAR HEADER DATE
    const leftArrowSidebar = document.querySelector("button.side-calendar__switch--left");
    const rightArrowSidebar = leftArrowSidebar.nextElementSibling;
    const calendarHeaderSidebar = document.querySelector(".side-calendar__month");

    leftArrowSidebar.addEventListener("click", () => {
      this.changeDate(-1, true, calendarHeaderSidebar, true);
      this.render();
    });
    rightArrowSidebar.addEventListener("click", () => {
      this.changeDate(1, true, calendarHeaderSidebar, true);
      this.render();
    });

    this.changeDate(0, true, calendarHeaderSidebar, true);
    this.render();
  }

  render() {
    //CHECK WHICH DISPLAY MODE IS ENABLED, AND RENDER
    const calendarTable = document.querySelector(".side-calendar__table");
    const weekPointer = document.querySelector(".side-calendar__week");

    //DEFINE DATES
    const date = this.date.chosenDate;
    const today = this.date.todayDate

    //VARIABLES NEEDED TO RENDER CALENDAR
    const month = this.date.monthHandler(date);
    const lastDay = month.lastD;
    const prevLastDay = month.prevLastD;
    const firstDayIndex = month.firstDIndex;
    const nextDays = month.nextD;
    const week = month.w;

    //LABELS FOR CALENDAR
    let contentHTML =
      "<div class=\"side-calendar__day--name\">Mon</div>\n" +
      "<div class=\"side-calendar__day--name\">Tue</div>\n" +
      "<div class=\"side-calendar__day--name\">Wed</div>\n" +
      "<div class=\"side-calendar__day--name\">Thu</div>\n" +
      "<div class=\"side-calendar__day--name\">Fri</div>\n" +
      "<div class=\"side-calendar__day--name\">Sat</div>\n" +
      "<div class=\"side-calendar__day--name\">Sun</div>";

    //RENDER HTML FOR PREVIOUS MONTH DAYS
    for (let i = firstDayIndex; i > 0; i--) {
      contentHTML += `<div class="side-calendar__day--additional side-calendar__day--listener" 
        data-day="${prevLastDay - i + 1}" 
        data-month="${new Date(date.getFullYear(), date.getMonth() - 1).getMonth()}" 
        data-year="${new Date(date.getFullYear(), date.getMonth() - 1).getFullYear()}">${prevLastDay - i + 1}</div>`;
    }

    //RENDER HTML FOR CURRENT MONTH DAYS
    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        contentHTML += `<div class="side-calendar__day--active side-calendar__day--listener" 
          data-day="${i}" 
          data-month="${date.getMonth()}" 
          data-year="${date.getFullYear()}">${i}</div>`;
      } else {
        contentHTML += `<div class="side-calendar__day--listener"
          data-day="${i}" 
          data-month="${date.getMonth()}" 
          data-year="${date.getFullYear()}">${i}</div>`;
      }
    }

    //RENDER HTML FOR NEXT MONTH DAYS
    for (let i = 1; i <= nextDays; i++) {
      contentHTML += `<div class="side-calendar__day--additional side-calendar__day--listener" 
        data-day="${i}" 
        data-month="${new Date(date.getFullYear(), date.getMonth() + 1).getMonth()}" 
        data-year="${new Date(date.getFullYear(), date.getMonth() + 1).getFullYear()}">${i}</div>`;
    }

    //LOAD HTML INTO DOM
    calendarTable.innerHTML = contentHTML;

    //CHECK IF IT'S WEEK/MONTH DISPLAY AND DISPLAY WEEK POINTER IF NEEDED
    if ((this.app.mode === "week" || this.app.mode === "month") && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
      weekPointer.style.display = "block";
      weekPointer.style.top = `${((week) * 3.5)}rem`;
    } else {
      weekPointer.style.display = "none";
    }

    for (const day of document.querySelectorAll(".side-calendar__day--listener")) {
      day.addEventListener("click", () => {
        let chosenDate = new Date(day.dataset.year, day.dataset.month, day.dataset.day);
        if (this.app.mode === "week") {
          console.log(chosenDate.getDay());
          chosenDate = new Date(day.dataset.year, day.dataset.month, day.dataset.day - (chosenDate.getDay() - 1));
        } else if (this.app.mode === "month") {
          chosenDate = new Date(day.dataset.year, day.dataset.month, 1);
        }
        this.calendar.date.chosenDate = chosenDate;
        this.calendar.render();
      });
    }
  };
}