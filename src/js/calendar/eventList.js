import { Event } from "./event";

export class EventList {
  constructor(id, name, eventList, isEnabled) {
    this.id = id;
    this.name = name;
    this.isEnabled = isEnabled;
    this.events = [];

    this.init(eventList);
  }

  init(eventList) {
    //LOAD ALL THE EVENTS INTO EVENTS LIST
    for (const event of eventList) {
      this.events.push(new Event(event.date, event.time, event.title))
    }
  }

  render(date, mode) {

  }
}