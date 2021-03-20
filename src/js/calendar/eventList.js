import { Event } from "./event";
import { noteListJSON } from "../app";
import {Note} from "../notes/note";

export class EventList {
  constructor(eventList, color) {
    this.id = eventList.id;
    this.name = eventList.name;
    this.isEnabled = eventList.isEnabled;
    this.noteListId = eventList.noteListId;
    this.color = color;
    this.events = [];

    this.init(eventList);
  }

  init(eventList) {
    //LOAD ALL THE EVENTS INTO EVENTS LIST
    for (const event of eventList.events) {
      this.events.push(new Event(event, this.noteListId))
    }
  }

  render(date, mode) {
    const calendarTable = document.querySelector(".calendar__table");
    const chosenDate = date.chosenDate;
    let chosenEvents = [];
    const chosenYear = chosenDate.getFullYear();
    const chosenMonth = chosenDate.getMonth();
    const chosenDay = chosenDate.getDate();

    if (mode === "day") {
      // console.log("It's day mode!");

      for (const event of this.events) {
        if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth && event.start.getDate() === chosenDay) {
          chosenEvents.push(event);
        }
      }

      const rows = calendarTable.querySelectorAll(".calendar__row");
      const height = rows[0].offsetHeight;

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
          <div class="event event--day event--${this.color} ${secondaryClass}" style="top: ${elTop}; height: ${elHeight}" data-color="${this.color}" data-note-list-id="${event.noteListId}" data-note-id="${event.noteId}">
            ${hoursHTML}
            <h3 class="event__title">${event.title}</h3>
          </div>
        `;
      }
    } else if (mode === "week") {
      // console.log("It's week mode!");

      const data = date.weekHandler(date.todayDate, chosenDate);
      data.pop();

      const prevMonthDays = [data[0]];
      const nextMonthDays = [];

      for (let i = 1; i <= data.length; i++) {
        if (prevMonthDays[i-1] < data[i] && nextMonthDays.length === 0) {
          prevMonthDays.push(data[i])
        } else {
          nextMonthDays.push(data[i]);
        }
      }

      const weekFirstDay = chosenDay;
      const weekLastDay = chosenDay + 7;

      for (const event of this.events) {
        if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth && prevMonthDays.includes(event.start.getDate())) {
          chosenEvents.push(event);
        } else if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth + 1 && nextMonthDays.includes(event.start.getDate())) {
          chosenEvents.push(event);
        }
      }

      const rows = calendarTable.querySelectorAll(".calendar__row");
      const height = rows[0].offsetHeight;

      for (const event of chosenEvents) {
        const eventDurationString =
          event.start.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"}) + " - " +
          event.end.toLocaleTimeString(undefined, {hourCycle: "h12", hour: "numeric", minute: "2-digit"});

        const startRate = event.start.getMinutes() / 60;
        const differenceRate = event.getDifference();

        const elTop = `${height * startRate}px`;
        const elHeight = `${height * differenceRate}px`;

        let hoursHTML = "";

        if (differenceRate >= 1) {
          hoursHTML = "<h5 class='event__hours'>" + eventDurationString + "</h5>";
        }

        const row = rows[event.start.getHours()].querySelectorAll("td");

        row[event.start.getDay() === 0 ? 6 : event.start.getDay() - 1].innerHTML += `
          <div class="event event--week event--${this.color}" style="top: ${elTop}; height: ${elHeight}" data-color="${this.color}" data-note-list-id="${event.noteListId}" data-note-id="${event.noteId}">
            ${hoursHTML}
            <h3 class="event__title">${event.title}</h3>
          </div>
        `;
      }
    } else if (mode === "month") {
      // console.log("It's month mode!");

      for (const event of this.events) {
        if (event.start.getFullYear() === chosenYear && event.start.getMonth() === chosenMonth) {
          chosenEvents.push(event);
        }
      }

      const cells = calendarTable.querySelectorAll(".calendar__table div:not(.event)");
      const firstDayIndex = new Date(
        chosenDate.getFullYear(),
        chosenDate.getMonth(),
        0
      ).getDay();

      for (const event of chosenEvents) {
        cells[event.start.getDate()+firstDayIndex-1].innerHTML += `
          <div class="event event--month event--${this.color}" data-color="${this.color}" data-note-list-id="${event.noteListId}" data-note-id="${event.noteId}">
            <h3 class="event__title">${event.title}</h3>
          </div>
        `;
      }
    }

    for (const eventEl of document.querySelectorAll(".event")) {
      eventEl.addEventListener("click", e => {
        const noteObj = noteListJSON.find(element => element.id === parseInt(eventEl.dataset.noteListId)).notes.find(element => element.id === parseInt(eventEl.dataset.noteId));
        const note = new Note(noteObj, eventEl.dataset.color);
        console.log(note);
      });
    }
  }
}