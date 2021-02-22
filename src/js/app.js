import { Calendar } from './calendar/calendar';
import { SideCalendar } from './calendar/sideCalendar';

export let eventListJSON = [
  [1, "Work", [
    {date: new Date(), time: {from: "12:30am", to: "1:00pm"}, title: "Send mail"},
    {date: new Date(), time: {from: "2:00pm", to: "3:00pm"}, title: "Send mail"},
    {date: new Date(), time: {from: "4:25pm", to: "5:10pm"}, title: "Send mail"},
    {date: new Date(), time: {from: "5:30pm", to: "6:00pm"}, title: "Send mail"}
  ], true],
  [2, "Guitar", [
    {date: new Date(), time: {from: "12:30am", to: "1:00pm"}, title: "Guitar"},
    {date: new Date(), time: {from: "2:00pm", to: "3:00pm"}, title: "Guitar"},
    {date: new Date(), time: {from: "4:25pm", to: "5:10pm"}, title: "Guitar"},
    {date: new Date(), time: {from: "5:30pm", to: "6:00pm"}, title: "Guitar"}
  ], true],
  [3, "Home", [
    {date: new Date(), time: {from: "12:30am", to: "1:00pm"}, title: "Clean up"},
    {date: new Date(), time: {from: "2:00pm", to: "3:00pm"}, title: "Clean up"},
    {date: new Date(), time: {from: "4:25pm", to: "5:10pm"}, title: "Clean up"},
    {date: new Date(), time: {from: "5:30pm", to: "6:00pm"}, title: "Clean up"}
  ], true]
];

class App {
  static init() {
    this.app = { mode: "day" };

    const calendar = new Calendar(this.app);
    calendar.render(calendar.app.mode, calendar.date);

    const sideCalendar = new SideCalendar(this.app);

    this.render(calendar, sideCalendar);
  }

  static render(calendar, sideCalendar) {
    //SETUP SIDE-CALENDAR BUTTONS AND HEADER
    const buttonToday = document.querySelector(".side-calendar__button");
    const buttonWeek = buttonToday.nextElementSibling;
    const buttonMonth = buttonWeek.nextElementSibling;

    buttonToday.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--right");
      buttonToday.classList.add("side-calendar__button--active");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--active");
      buttonMonth.classList.add("side-calendar__button--left");

      this.app.mode = "day";
      calendar.render(this.app.mode);
      sideCalendar.render();
    });
    buttonWeek.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--right", "side-calendar__button--active");
      buttonWeek.classList.add("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--active", "side-calendar__button--left");

      this.app.mode = "week";
      calendar.date.chosenDate = new Date(
        calendar.date.chosenDate.getFullYear(),
        calendar.date.chosenDate.getMonth(),
        (calendar.date.chosenDate.getDate() - calendar.date.chosenDate.getDay() + 1)
      );

      calendar.render(this.app.mode);
      sideCalendar.render();
    });
    buttonMonth.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--active");
      buttonToday.classList.add("side-calendar__button--right");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--left");
      buttonMonth.classList.add("side-calendar__button--active");

      this.app.mode = "month";
      calendar.render(this.app.mode);
      sideCalendar.render();
    });
  }
}

App.init();

