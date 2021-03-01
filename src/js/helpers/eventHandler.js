import { EventList} from "../calendar/eventList";
import { eventListJSON } from "../app";

export class EventHandler {
  constructor(date, mode) {
    this.date = date;
    this.mode = mode;
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
    const colors = ["green", "purple", "blue", "yellow"]
    let contentHTML = "";
    const categoriesList = categories.querySelector(".categories__list");
    let totalEvents = 0;

    eventListJSON.map(eventList => {
      totalEvents += eventList.events.length;
    })

    //ADDING HTML FOR EACH EVENTS LIST
    for (let eventList of eventListJSON) {
      this.eventLists.push(new EventList(eventList, colors[eventList.id-1]));
      const checked = eventList.isEnabled ? "checked" : "";
      const eventsRatio = eventList.events.length / totalEvents;
      const width = Math.ceil(eventsRatio * 100) + "%";
      const color = `categories__progress-bar--${colors[eventList.id-1]}`;

      contentHTML += `<div class="categories__item">
          <label class="categories__label checkbox__label" for="${eventList.id}">
            <input type="checkbox" id="${eventList.id}" class="categories__checkbox checkbox" name="category" ${checked}>
            <span class="categories__checkmark checkbox__checkmark checkbox__checkmark--${colors[eventList.id-1]}">&nbsp;</span>
            <span class="checkbox__text">${eventList.name}</span>
          </label>
          <span class="categories__progress-bar categories__progress-bar--${colors[eventList.id-1]}" id="${color}">&nbsp;</span>
          <style>
            .categories__progress-bar--${colors[eventList.id-1]}::after {
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

  render(date = this.date, mode = this.mode) {
    for (const td of document.querySelectorAll(".calendar__table .calendar__row td")) {
      td.innerHTML = "";
    }

    //LOOP THROUGH ALL THE EVENT LISTS AND IF ENABLED RENDER THEM
    for (const eventHandler of this.eventLists) {
      if (eventHandler.isEnabled) {
        eventHandler.render(date, mode);
      }
    }
  }
}