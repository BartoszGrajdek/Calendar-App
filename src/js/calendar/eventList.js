import { Event } from "./event";

export class EventList {
  constructor(id, name, eventList, isDisabled) {
    this.id = id;
    this.name = name;
    this.isDisabled = isDisabled;
    this.events = [];

    this.init(eventList);
  }

  init(eventList) {
    //FILL EVENT LIST
    for (const event of eventList) {
      this.events.push(new Event(event.date, event.time, event.title))
    }
  }
}