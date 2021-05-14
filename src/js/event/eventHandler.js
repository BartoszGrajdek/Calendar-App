import { EventList} from "./eventList";
import { eventListJSON, noteListJSON } from "../app";
import { Note } from "../note/note";

export class EventHandler {
  constructor(date, mode) {
    this.date = date;
    this.app = mode;
    this.eventLists = [];
    this.init();
  }

  init() {
    //CHECK IF IT'S MOBILE OR DESKTOP DEVICE, AND SELECT PROPER CATEGORIES CONTAINER
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const isMobile = width < 800;
    let categories;
    if (isMobile) {
      categories = document.querySelector(".categories--mobile");
    } else {
      categories = document.querySelector(".categories--desktop");
    }

    //RENDER CHECKBOXES FOR ALL CATEGORIES
    let contentHTML = "";
    const categoriesList = categories.querySelector(".categories__list");
    let totalEvents = 0;

    eventListJSON.map(eventList => {
      totalEvents += eventList.events.length;
    })

    //ADDING HTML FOR EACH EVENTS LIST
    for (let eventList of eventListJSON) {
      this.eventLists.push(new EventList(eventList));
      const checked = eventList.isEnabled ? "checked" : "";
      const eventsRatio = eventList.events.length / totalEvents;
      const width = Math.ceil(eventsRatio * 100) + "%";
      const color = `categories__progress-bar--${eventList.color}`;

      contentHTML += `<div class="categories__item">
          <label class="categories__label checkbox__label" for="${eventList.id}">
            <input type="checkbox" id="${eventList.id}" class="categories__checkbox checkbox" name="category" ${checked}>
            <span class="categories__checkmark checkbox__checkmark checkbox__checkmark--${eventList.color}">&nbsp;</span>
            <span class="checkbox__text">${eventList.name}</span>
          </label>
          <span class="categories__progress-bar categories__progress-bar--${eventList.color}" id="${color}">&nbsp;</span>
          <style>
            .categories__progress-bar--${eventList.color}::after {
              width: ${width};
            }
          </style>
        </div>`;
    }

    //ADD RENDERED CONTENT
    contentHTML += `<button class="categories__button"><span>+</span> Add more</button>`;
    categoriesList.innerHTML = contentHTML;

    //CHECKBOXES CHANGE EVENT LIST STATE
    const categoriesCheckbox = categoriesList.querySelectorAll(".categories__item");

    categoriesCheckbox.forEach(checkbox => {
      checkbox.addEventListener('change', e => {
        const id = e.target.id;

        this.eventLists[id-1].isEnabled = !this.eventLists[id-1].isEnabled;
        this.render();
      });
    });
  }

  render(date = this.date, mode = this.app) {
    //RESET CURRENT CALENDAR CONTENT
    for (const td of document.querySelectorAll(".calendar__table .calendar__row td")) {
      if (td.querySelector(".calendar__pointer") !== null) {
        if (this.app.mode === "day" && !(date.todayDate.getDate() === date.chosenDate.getDate() && date.todayDate.getMonth() === date.chosenDate.getMonth() && date.todayDate.getFullYear() === date.chosenDate.getFullYear())) {
          td.innerHTML = "";
          continue;
        }

        td.innerHTML = `
          <span class="calendar__pointer">&nbsp;</span>
        `;
        continue;
      }
      td.innerHTML = "";
    }

    //LOOP THROUGH ALL THE EVENT LISTS AND IF ENABLED RENDER THEM
    let nextEvent;
    let nextEventListId;
    let nextEventColor;

    for (const eventHandler of this.eventLists) {
      if (eventHandler.isEnabled) {
        eventHandler.render(date, mode);
      }

      //SETUP FOR NEXT EVENT
      const today = new Date();
      const event = eventHandler.events.find(element =>
        element.start.getFullYear() === today.getFullYear() &&
        element.start.getMonth() === today.getMonth() &&
        element.start.getDate() === today.getDate() &&
        (element.start.getHours() > today.getHours() ||
          (
            element.start.getHours() === today.getHours() &&
            element.start.getMinutes() > today.getMinutes()
          )
        )
      )

      //CHECK IF THIS LIST'S NEXT EVENT IS HAPPENING EARLIER THAN CURRENT ONE
      if (nextEvent === undefined) {
        nextEvent = event;
        nextEventListId = eventHandler.id;
        nextEventColor = eventHandler.color;
      } else if (event === undefined) {
      } else if (event.start.getHours() < nextEvent.start.getHours() || (event.start.getHours() === nextEvent.start.getHours() && event.start.getMinutes() < nextEvent.start.getHours())) {
        nextEvent = event;
        nextEventListId = eventHandler.id;
        nextEventColor = eventHandler.color;
      }
    }

    //RENDER NEXT UP EVENT
    if (nextEvent !== undefined) {
      const nextEventEl = document.querySelector(".recent__event");
      const nextEventHours = nextEventEl.querySelector(".event__hours");
      const nextEventTitle = nextEventEl.querySelector(".event__title");
      const nextEventButton = nextEventEl.querySelector(".event__button");
      const nextEventDuration = nextEventEl.querySelector(".event__duration");

      nextEventHours.innerHTML = `
        ${nextEvent.start.getHours() <= 12 ? nextEvent.start.getHours() 
        + ":" 
        + (nextEvent.start.getMinutes() === 0 ? "00" : nextEvent.start.getMinutes())
        + "am" : (nextEvent.start.getHours() - 12) + ":" 
        + (nextEvent.start.getMinutes() === 0 ? "00" : nextEvent.start.getMinutes())
        + "pm"}
         - 
         ${nextEvent.end.getHours() <= 12 ? nextEvent.end.getHours() 
        + ":" 
        + (nextEvent.end.getMinutes() === 0 ? "00" : nextEvent.end.getMinutes()) 
        + "am" : (nextEvent.end.getHours() - 12) 
        + ":" 
        + (nextEvent.end.getMinutes() === 0 ? "00" : nextEvent.end.getMinutes()) 
        + "pm"}
      `;
      nextEventTitle.innerHTML = nextEvent.title;

      let hours = nextEvent.end.getHours() - nextEvent.start.getHours();
      let minutes = nextEvent.end.getMinutes() - nextEvent.start.getMinutes();

      if (minutes < 0) {
        minutes += 60;
        hours -= 1;
      } else if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
      }

      nextEventDuration.innerHTML = `
        ${hours === 0 ? "" : hours + "h"}${minutes === 0 ? "" : " " + minutes + " min"}
      `;

      //SET DATASET FOR NEXT UP EVENT'S EVENT LISTENER
      nextEventButton.dataset.eventListId = nextEventListId;
      nextEventButton.dataset.eventId = nextEvent.id;
      nextEventButton.dataset.color = nextEventColor;
      nextEventButton.dataset.noteListId = nextEvent.noteListId;
      nextEventButton.dataset.noteId = nextEvent.noteId;

      //EVENT LISTENER TO MAKE IT LOAD IN DETAILS
      nextEventButton.addEventListener("click", e => {
        const noteObj =
          noteListJSON.find(element => element.id === parseInt(nextEventButton.dataset.noteListId))
            .notes.find(element => element.id === parseInt(nextEventButton.dataset.noteId));
        const note = new Note(noteObj, nextEventButton.dataset.color, nextEventButton.dataset.noteListId);
        note.render(this.app.mode, this.eventLists.find(element => element.id = nextEventListId).events.find(element => element.id === parseInt(nextEventButton.dataset.eventId)));
      });
    }

    //LOAD FIRST EVENT OF THE DAY TO HAVE SOME CONTENT IN DETAILS
    if (document.querySelector(".event:not(.recent__event)") !== null) {
      const eventEl = document.querySelector(".event");
      const noteObj = noteListJSON
        .find(element => element.id === parseInt(eventEl.dataset.noteListId)).notes
        .find(element => element.id === parseInt(eventEl.dataset.noteId));
      const note = new Note(noteObj, eventEl.dataset.color, eventEl.dataset.noteListId);
      const event = this.eventLists.find(element => element.id === parseInt(eventEl.dataset.eventListId)).events.find(element => element.id === parseInt(eventEl.dataset.eventId));
      note.render(this.app.mode, event, false);
    }
  }
}