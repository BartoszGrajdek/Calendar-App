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
    let hourDifference = this.end.getHours() - this.start.getHours();
    const minutes = this.end.getMinutes() - this.start.getMinutes();
    let minuteDifference;
    if (minutes >= 0) {
      minuteDifference = minutes;
    } else {
      hourDifference += Math.floor(Math.abs(minutes) / 60);
      minuteDifference = minutes % 60;
    }

    return ((hourDifference * 60) + minutes) / 60;
  }
}