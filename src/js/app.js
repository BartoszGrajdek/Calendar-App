import { Calendar } from './calendar/calendar';
import { SideCalendar } from './calendar/sideCalendar';
import { Notepad } from "./notes/notepad";

//DEMO CONTENT FOR EVENT LISTS
export let eventListJSON = [
  {
    id: 1,
    name: "Work",
    events: [
        {
          start: new Date(2021, new Date().getMonth(), new Date().getDate()-5, 1, 0),
          end: new Date(2021, new Date().getMonth(), new Date().getDate()-5, 2, 0),
          title: "Send mail"
        },
        {
          start: new Date(2021, new Date().getMonth()+1, new Date().getDate(), 7, 0),
          end: new Date(2021, new Date().getMonth()+1, new Date().getDate(), 9, 20),
          title: "Send mail"
        },
        {
          start: new Date(2021, new Date().getMonth(), new Date().getDate()+3, 18, 0),
          end: new Date(2021, new Date().getMonth(), new Date().getDate()+3, 18, 40),
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
        start: new Date(2021, new Date().getMonth(), new Date().getDate()+14, 14, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()+14, 18, 15),
        title: "Learn new chords"
      },
      {
        start: new Date(2021, new Date().getMonth(), new Date().getDate()+30, 20, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()+30, 21, 50),
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
        start: new Date(2021, new Date().getMonth(), new Date().getDate()-1, 9, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()-1, 12, 30),
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

export let categoriesListJSON = [
  {
    categoryId: 1,
    name: "Work",
    isEnabled: true
  },
  {
    categoryId: 2,
    name: "Home",
    isEnabled: true
  },
  {
    categoryId: 3,
    name: "Reminders",
    isEnabled: false
  },
  {
    categoryId: 4,
    name: "Payments",
    isEnabled: false
  },
  {
    categoryId: 5,
    name: "Vacation",
    isEnabled: true
  },
  {
    categoryId: 6,
    name: "Healthcare",
    isEnabled: false
  }
];

export let noteListJSON = [
  {
    id: 1,
    name: "Work",
    notes: [
      {
        id: 1,
        categoryId: 1,
        name: "Mailing list"
      },
      {
        id: 2,
        categoryId: 1,
        name: "Appointments"
      },
      {
        id: 3,
        categoryId: 1,
        name: "Our products"
      },
      {
        id: 4,
        categoryId: 2,
        name: "Meals plan"
      }
    ],
    isEnabled: true
  },
  {
    id: 2,
    name: "Guitar",
    notes: [
      {
        id: 1,
        categoryId: 2,
        name: "House work"
      },
      {
        id: 2,
        categoryId: 2,
        name: "Things to work on"
      },
      {
        id: 3,
        categoryId: 3,
        name: "Dentist"
      },
      {
        id: 4,
        categoryId: 4,
        name: "Monthly bills"
      },
      {
        id: 5,
        categoryId: 4,
        name: "Subscriptions"
      }
    ],
    isEnabled: true
  },
  {
    id: 3,
    name: "Home",
    categories: ["Work", "Home", "Reminders"],
    notes: [
      {
        id: 1,
        categoryId: 4,
        name: "Furniture"
      },
      {
        id: 2,
        categoryId: 4,
        name: "Computers"
      },
      {
        id: 3,
        categoryId: 5,
        name: "Places to go to"
      },
      {
        id: 4,
        categoryId: 5,
        name: "Hotels"
      },
      {
        id: 5,
        categoryId: 6,
        name: "Dr Appointments"
      }
    ],
    isEnabled: true
  }
];


class App {
  static init() {
    //DEPENDING ON PAGE USER'S ON LOAD ACCORDING JS TO IT
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      //SET DEFAULT DISPLAY MODE FOR CALENDAR
      this.app = { mode: "day" };

      //INITIALIZE MAIN CALENDAR AND RENDER IT
      const calendar = new Calendar(this.app);
      calendar.render(calendar.app.mode, calendar.date);

      //INITIALIZE SIDE CALENDAR
      const sideCalendar = new SideCalendar(this.app);

      this.renderCalendar(calendar, sideCalendar);
    } else if (window.location.pathname === "/notes.html") {
      const notepad = new Notepad();
    } else if (window.location.pathname === "/todo.html") {

    }
  }

  static renderCalendar(calendar, sideCalendar) {
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