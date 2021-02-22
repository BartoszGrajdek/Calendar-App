export class RenderHandler {
  constructor(mode) {
    this.calendar = document.querySelector(".calendar");
    this.calendarTable = this.calendar.querySelector(".calendar__table");
    this.calendarTableBox = this.calendar.querySelector(".calendar__table-box");

    this.app = mode;

    this.initRender(this.app);
  }

  //WHEN ANYTHING CHANGES MODE, THIS INIT FUNCTION RUNS
  initRender() {
    //BASIC CHANGES TO HTML CLASSES
    function changeMode(el, className, mode) {
      el.classList.remove(`${className}--day`, `${className}--week`, `${className}--month`);
      el.classList.add(`${className}--${mode}`);
    }

    changeMode(this.calendar, 'calendar', this.app.mode);
    changeMode(this.calendarTable, 'calendar__table', this.app.mode);
  }

  //RENDER CALENDAR TABLE HTML
  calendarRender(data) {
    //RESET CURRENT CONTENT
    let contentHTML = "";
    this.calendarTableBox.innerHTML = '';
    this.calendarTable.innerHTML = '';

    if (this.app.mode === "day") {
      contentHTML += "<table class=\"calendar__table calendar__table--day\">";

      //ADD ROWS TO DAY TABLE
      for (let i = 1; i < 25; i++) {
        let hour = i <= 12 ? i + "am" : (i - 12) + "pm";
        contentHTML += `
        <tr class="calendar__row">
          <th>${hour}</th>
          <td></td>
        </tr>
        `;
      }

      contentHTML += "</table>" +
        "<!-- CALENDAR TABLE -->";
    } else if (this.app.mode === "week") {
      //ADD LABELS TO WEEK TABLE HEADER
      let week = data.weekHandler(data.todayDate, data.chosenDate);
      let weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      contentHTML += "<table class=\"calendar__labels\">" +
        "<tr class=\"calendar__row\">" +
        "<th>&nbsp;</th>";

      for (let i = 0; i < 7; i++) {
        contentHTML += `
          <td class="calendar__label"><span class="calendar__day--name">${weekNames[i]}</span><span class="calendar__day ${i === week[7] - 1 ? 'calendar__day--active' : ''}">${week[i]}</span></td>
        `;
      }

      contentHTML += "</tr>" +
        "</table>" +
        "<!-- CALENDAR LABELS -->" +
        "<table class=\"calendar__table calendar__table--week\">";

      //ADD ROWS TO WEEK TABLE
      for (let i = 1; i < 25; i++) {
        let hour = i <= 12 ? i + "am" : (i - 12) + "pm";
        contentHTML += `
        <tr class="calendar__row">
          <th>${hour}</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        `;
      }

      contentHTML += "</table>" +
        "<!-- CALENDAR TABLE -->";
    } else if (this.app.mode === "month") {
      //ADD LABELS TO WEEK TABLE HEADER
      let month = data.monthHandler(data.todayDate, data.chosenDate);

      const lastDay = month.lastD;
      const prevLastDay = month.prevLastD;
      const firstDayIndex = month.firstDIndex;
      const nextDays = month.nextD;

      contentHTML = "<div class=\"calendar__labels\">" +
        "<div class=\"calendar__table--day\">Mon</div>" +
        "<div class=\"calendar__table--day\">Tue</div>" +
        "<div class=\"calendar__table--day\">Wed</div>" +
        "<div class=\"calendar__table--day\">Thu</div>" +
        "<div class=\"calendar__table--day\">Fri</div>" +
        "<div class=\"calendar__table--day\">Sat</div>" +
        "<div class=\"calendar__table--day\">Sun</div>" +
        "</div>" +
        "<!-- CALENDAR LABELS -->" +
        "<div class=\"calendar__table\">";

      for (let i = firstDayIndex; i > 0; i--) {
        contentHTML += `<div class="calendar__table--additional">${prevLastDay - i + 1}</div>`;
      }

      for (let i = 1; i <= lastDay; i++) {
        if (i === data.todayDate.getDate() && data.chosenDate.getMonth() === data.todayDate.getMonth()) {
          contentHTML += `<div class="calendar__table--active"><span>${i}</span></div>`;
        } else {
          contentHTML += `<div>${i}</div>`;
        }
      }

      for (let i = 1; i <= nextDays; i++) {
        contentHTML += `<div class="calendar__table--additional">${i}</div>`;
      }

      contentHTML += "</div>\n" +
        "<!-- CALENDAR TABLE -->";
    }

    this.calendarTableBox.innerHTML = contentHTML;
  }
}