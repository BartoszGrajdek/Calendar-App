import { Calendar } from './calendar/calendar';
import { SideCalendar } from './calendar/sideCalendar';

//DEMO CONTENT FOR EVENT LISTS
export let eventListJSON = [
  {
    id: 1,
    name: "Work",
    events: [
        {
          start: new Date(2021, new Date().getMonth(), new Date().getDate(), 1, 0),
          end: new Date(2021, new Date().getMonth(), new Date().getDate(), 2, 0),
          title: "Send mail"
        },
        {
          start: new Date(2021, new Date().getMonth(), new Date().getDate(), 7, 0),
          end: new Date(2021, new Date().getMonth(), new Date().getDate(), 9, 20),
          title: "Send mail"
        },
        {
          start: new Date(2021, new Date().getMonth(), new Date().getDate(), 18, 0),
          end: new Date(2021, new Date().getMonth(), new Date().getDate(), 18, 40),
          title: "Send mail",
          isSecond: true
        },
        {
          start: new Date(2021, new Date().getMonth(), new Date().getDate(), 20, 0),
          end: new Date(2021, new Date().getMonth(), new Date().getDate(), 21, 30),
          title: "Send mail",
          isSecond: true
        }
      ],
    isEnabled: true
  },
  {
    id: 2,
    name: "Guitar",
    events: [
      {
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 10, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 11, 50),
        title: "Learn new chords"
      },
      {
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 14, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 18, 15),
        title: "Learn new chords"
      },
      {
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 20, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 21, 50),
        title: "Learn new chords"
      }
    ],
    isEnabled: true
  },
  {
    id: 3,
    name: "Home",
    events: [
      {
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 9, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 12, 30),
        title: "Clean up",
        isSecond: true
      },
      {
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 15, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 16, 20),
        title: "Clean up",
        isSecond: true
      },
      {
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 22, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 23, 0),
        title: "Clean up"
      }
    ],
    isEnabled: true
  }
];


class App {
  static init() {
    this.app = { mode: "day" };

    //INITIALIZE MAIN CALENDAR AND RENDER IT
    const calendar = new Calendar(this.app);
    calendar.render(calendar.app.mode, calendar.date);

    //INITIALIZE SIDE CALENDAR
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

//RUN WHOLE APP
App.init();