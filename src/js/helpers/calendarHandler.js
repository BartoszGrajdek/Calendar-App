import {DateHandler} from "./dateHandler";

export class CalendarHandler {
  constructor(mode) {
    this.date = new DateHandler;
    this.app = mode;
  }

  changeDate(dateDirection, render, headerElement, side) {
    //CALCULATE DIFFERENCE (0 IF THERE'S NO CHANGE)
    let difference = dateDirection;

    if (this.app.mode === "month" || side) {
      //DETERMINE IF YOU WANT TO GO A MONTH BACK OR FORWARD
      if (difference === -1) {
        this.date.chosenDate.setMonth(this.date.chosenDate.getMonth()-1);
      } else if (difference === 1) {
        this.date.chosenDate.setMonth(this.date.chosenDate.getMonth()+1);
      }
    } else if (this.app.mode === "day") {
      difference *= (1000*60*60*24);
      this.date.chosenDate = new Date(this.date.chosenDate.getTime() + difference);
    } else if (this.app.mode === "week") {
      difference *= (1000*60*60*24*7);
      this.date.chosenDate = new Date(this.date.chosenDate.getTime() + difference);
    }

    //RENDERING NEW DATES
    headerElement.innerHTML = this.date.getDateString((this.app.mode === "day" && !side ? { year: "numeric", month: "long", day: "numeric"} : {year: "numeric", month: "long"}));
  }
}