import { Event } from "./event";

export class EventList {
  constructor(eventList, color) {
    this.id = eventList.id;
    this.name = eventList.name;
    this.isEnabled = eventList.isEnabled;
    this.color = color;
    this.events = [];

    this.init(eventList);
  }

  init(eventList) {
    //LOAD ALL THE EVENTS INTO EVENTS LIST
    for (const event of eventList.events) {
      this.events.push(new Event(event))
    }
  }

  render(date, mode) {
    const calendarTable = document.querySelector(".calendar__table");
    const chosenDate = date.chosenDate;

    if (mode === "day") {
      console.log("It's day mode!");
      let chosenEvents = [];

      const chosenYear = chosenDate.getFullYear();
      const chosenMonth = chosenDate.getMonth();
      const chosenDay = chosenDate.getDate();

      for (const event of this.events) {
        if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth && event.start.getDate() === chosenDay) {
          chosenEvents.push(event);
        }
      }

      const rows = calendarTable.querySelectorAll(".calendar__row");
      const height = rows[0].offsetHeight;
      let i = 0;

      for (const event of chosenEvents) {
        const eventDurationString =
          event.start.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"}) + " - " +
          event.end.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"});

        const startRate = event.start.getMinutes() / 60;
        const differenceRate = event.getDifference();

        const elTop = `${height * startRate}px`;
        const elHeight = `${height * differenceRate}px`;

        let secondaryClass = "";
        if (event.isSecond) secondaryClass = "event--second";

        let hoursHTML = "";

        if (differenceRate >= 1) {
          hoursHTML = "<h5 class='event__hours'>" + eventDurationString + "</h5>";
        }

        rows[event.start.getHours()].querySelector("td").innerHTML += `
          <div class="event event--day event--${this.color} ${secondaryClass}" style="top: ${elTop}; height: ${elHeight}">
            ${hoursHTML}
            <h3 class="event__title">${event.title}</h3>
          </div>
        `;

        i++;
      }
    } else if (mode === "week") {
      console.log("It's week mode!");
    } else if (mode === "month") {
      console.log("It's month mode!");
    }
  }
}