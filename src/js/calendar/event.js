export class Event {
  constructor(event) {
    //ASSIGN EVENT PROPERTIES
    this.start = event.start;
    this.end = event.end;
    this.title = event.title;
    this.isSecond = event.isSecond;
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