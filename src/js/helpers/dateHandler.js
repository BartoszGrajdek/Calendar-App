export class DateHandler {
  constructor() {
    this.todayDate = new Date();
    this.chosenDate = new Date(this.todayDate);
  }

  getDateString(options) {
    return this.chosenDate.toLocaleDateString(undefined, options);
  }
}