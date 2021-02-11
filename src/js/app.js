import { Calendar } from './calendar/calendar';
import { SideCalendar } from './calendar/sideCalendar';

class App {
  static init() {
    const calendar = new Calendar;
    calendar.render(calendar.mode, calendar.date);

    const sideCalendar = new SideCalendar;
    sideCalendar.render();
  }
}

App.init();