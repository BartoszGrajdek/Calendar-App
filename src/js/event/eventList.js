import { Event } from "./event";
import { Note } from "../note/note";
import { noteListJSON } from "../app";

export class EventList {
  constructor(eventList) {
    this.id = eventList.id;
    this.name = eventList.name;
    this.isEnabled = eventList.isEnabled;
    this.noteListId = eventList.noteListId;
    this.color = eventList.color;
    this.events = [];

    this.init(eventList);
  }

  init(eventList) {
    //LOAD ALL THE EVENTS INTO EVENTS LIST
    for (const event of eventList.events) {
      this.events.push(new Event(event, this.noteListId))
    }
  }

  render(date, app) {
    //SETUP VARIABLES
    const calendarTable = document.querySelector(".calendar__table");
    const chosenDate = date.chosenDate;
    let chosenEvents = [];
    const chosenYear = chosenDate.getFullYear();
    const chosenMonth = chosenDate.getMonth();
    const chosenDay = chosenDate.getDate();

    //CHECK WHAT CALENDAR DISPLAY MODE IS TURNED ON AND RENDER CALENDAR EVENTS
    if (app.mode === "day") {
      //CHECK AND LOAD WHAT EVENTS ARE NEEDED FOR CALENDAR
      for (const event of this.events) {
        //CONVERT STRINGS TO DATE OBJECTS BECAUSE OF LOCAL STORAGE JSON CONVERSION
        const startDateString = event.start;
        event.start = new Date(startDateString);

        const endDateString = event.end;
        event.end = new Date(endDateString);

        if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth && event.start.getDate() === chosenDay) {
          chosenEvents.push(event);
        }
      }

      const rows = calendarTable.querySelectorAll(".calendar__row");
      const height = rows[0].offsetHeight;

      //LOOP THROUGH NEEDED EVENTS AND RENDER THEM
      for (const event of chosenEvents) {
        //EVENT DURATION
        const eventDurationString =
          event.start.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"}) + " - " +
          event.end.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"});

        //SETUP FOR EVENT POSITIONING
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

        //ADD HTML TO CALENDAR
        rows[event.start.getHours()].querySelector("td").innerHTML += `
          <div class="event event--day event--${this.color} ${secondaryClass}" style="top: ${elTop}; height: ${elHeight}" data-event-list-id="${this.id}" data-event-id="${event.id}" data-color="${this.color}" data-note-list-id="${event.noteListId}" data-note-id="${event.noteId}">
            ${hoursHTML}
            <h3 class="event__title">${event.title}</h3>
          </div>
        `;
      }
    } else if (app.mode === "week") {
      //LOAD DATA NEEDED FOR WEEKLY DISPLAY
      const data = date.weekHandler(date.todayDate, chosenDate);
      data.pop();

      const prevMonthDays = [data[0]];
      const nextMonthDays = [];

      //LOAD EVENTS NEEDED, AND CHECK IF THERE ARE DAYS FROM DIFFERENT MONTHS DISPLAYED
      for (let i = 1; i <= data.length; i++) {
        if (prevMonthDays[i-1] < data[i] && nextMonthDays.length === 0) {
          prevMonthDays.push(data[i])
        } else {
          nextMonthDays.push(data[i]);
        }
      }

      for (const event of this.events) {
        if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth && prevMonthDays.includes(event.start.getDate())) {
          chosenEvents.push(event);
        } else if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth + 1 && nextMonthDays.includes(event.start.getDate())) {
          chosenEvents.push(event);
        }
      }

      //CHECK ROW HEIGHT FOR STYLING AND GET ALL ROWS
      const rows = calendarTable.querySelectorAll(".calendar__row");
      const height = rows[0].offsetHeight;

      for (const event of chosenEvents) {
        const eventDurationString =
          event.start.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"}) + " - " +
          event.end.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"});

        const startRate = event.start.getMinutes() / 60;
        const differenceRate = event.getDifference();

        //STYLING HTML COMPONENTS
        const elTop = `${height * startRate}px`;
        const elHeight = `${height * differenceRate}px`;

        let hoursHTML = "";

        if (differenceRate >= 1) {
          hoursHTML = "<h5 class='event__hours'>" + eventDurationString + "</h5>";
        }

        const row = rows[event.start.getHours()].querySelectorAll("td");

        //INSERT EVENT INTO CALENDAR TABLE
        row[event.start.getDay() === 0 ? 6 : event.start.getDay() - 1].innerHTML += `
          <div class="event event--week event--${this.color}" style="top: ${elTop}; height: ${elHeight}" data-event-list-id="${this.id}" data-event-id="${event.id}" data-color="${this.color}" data-note-list-id="${event.noteListId}" data-note-id="${event.noteId}">
            ${hoursHTML}
            <h3 class="event__title">${event.title}</h3>
          </div>
        `;
      }
    } else if (app.mode === "month") {
      //CHECK AND LOAD WHAT EVENTS ARE NEEDED FOR CALENDAR FOR MONTHLY DISPLAY
      for (const event of this.events) {
        if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth) {
          chosenEvents.push(event);
        }
      }

      //GET ALL CALENDAR TABLE CELLS
      const cells = calendarTable.querySelectorAll(".calendar__table div:not(.event)");
      const firstDayIndex = new Date(
        chosenDate.getFullYear(),
        chosenDate.getMonth(),
        0
      ).getDay();

      //INSERT EVENTS INTO CALENDAR TABLE
      for (const event of chosenEvents) {
        const eventEl = document.createElement("div");
        eventEl.classList.add("event", "event--month", `event--${this.color}`);

        eventEl.dataset.eventId = event.id;
        eventEl.dataset.eventListId = this.id;
        eventEl.dataset.color = this.color;
        eventEl.dataset.noteId = event.noteId;
        eventEl.dataset.noteListId = event.noteListId;

        eventEl.innerHTML = `
          <h3 class="event__title">${event.title}</h3>
        `;

        cells[event.start.getDate()+firstDayIndex-1].appendChild(eventEl);
      }
    }

    //ADD EVENT LISTENERS TO ALL EVENTS IN CALENDAR TABLE TO MAKE THEM LOAD DETAILS THROUGH GETTING NOTE LINKED
    for (const eventEl of document.querySelectorAll(`.event[data-note-list-id="${this.noteListId}"]`)) {
      eventEl.addEventListener("click", () => {
        //FIND CORRESPONDING NOTE
        const noteObj =
          noteListJSON.find(element => element.id === parseInt(eventEl.dataset.noteListId))
          .notes.find(element => element.id === parseInt(eventEl.dataset.noteId));

        //RENDER EVENT DETAILS
        const note = new Note(noteObj, eventEl.dataset.color, eventEl.dataset.noteListId);
        note.render(app.mode, chosenEvents.find(element => element.id === parseInt(eventEl.dataset.eventId)));
      });
    }
  }
}