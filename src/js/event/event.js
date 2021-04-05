export class Event {
  constructor(event, noteListId) {
    //ASSIGN EVENT PROPERTIES
    this.id = event.id;
    this.start = event.start;
    this.end = event.end;
    this.title = event.title;
    this.isSecond = event.isSecond;
    this.noteListId = noteListId;
    this.noteId = event.noteId;
  }

  getDifference() {
    const hourDifference = this.end.getHours() - this.start.getHours();
    const minutes = this.end.getMinutes() - this.start.getMinutes();

    return ((hourDifference * 60) + minutes) / 60;
  }
}