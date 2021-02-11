export class DateHandler {
  constructor() {
    this.todayDate = new Date();
    this.chosenDate = this.todayDate;
    console.log("Date made!");
  }

  getDateString(date) {
    const options = { year: "numeric", month: "long", day: "numeric"}

    return date.toLocaleDateString(undefined, options);
  }

  editChosenDate(difference) {
    const time = new Date(this.chosenDate);
    this.chosenDate = new Date(time.getTime() + difference);
  }
}