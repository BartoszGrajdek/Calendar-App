export class RenderHandler {
  constructor(mode) {
    this.calendar = document.querySelector(".calendar");
    this.calendarTable = this.calendar.querySelector(".calendar__table");
    this.calendarTableBox = this.calendar.querySelector(".calendar__table-box");

    this.app = mode;

    this.initRender(this.app);
  }

  initRender() {
    //BASIC CHANGES TO HTML CLASSES WHEN SWITCHING MODES
    function changeMode(el, className, mode) {
      el.classList.remove(`${className}--day`, `${className}--week`, `${className}--month`);
      el.classList.add(`${className}--${mode}`);
    }

    changeMode(this.calendar, 'calendar', this.app.mode);
    changeMode(this.calendarTable, 'calendar__table', this.app.mode);
  }

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
      let week = data.weekHandler(data.chosenDate, data.todayDate);
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

      contentHTML += "</table>\n" +
        "<!-- CALENDAR TABLE -->";

    } else if (this.app.mode === "month") {

    }

    this.calendarTableBox.innerHTML = contentHTML;
  }
}