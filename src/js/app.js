import { Calendar } from './calendar/calendar';

class App {
  static init() {
    const calendar = new Calendar;
    calendar.render(calendar.mode, calendar.date);
  }
}

App.init();