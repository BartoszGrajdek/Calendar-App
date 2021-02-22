export class DateHandler {
  constructor() {
    this.todayDate = new Date();
    this.chosenDate = new Date(this.todayDate);
  }

  getDateString(options) {
    return this.chosenDate.toLocaleDateString(undefined, options);
  }

  weekHandler(today, date) {
    let days = [];
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    for (let i = date.getDate(); i <= lastDay && days.length < 7; i++) {
      days.push(i);
    }

    for (let i = 1; days.length < 7; i++) {
      days.push(i);
    }

    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      (today.getDate() - date.getDate()) < 7 &&
      (today.getDate() - date.getDate()) >= 0
    ) {
      days.push(today.getDay());
    } else {
      days.push(-1);
    }

    return days;
  }

  monthHandler(today, date) {
    //MAKE DATA FOR RENDERING MONTH CALENDARS
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    let nextDays = 7 - lastDayIndex;
    if (nextDays === 7) nextDays = 0;

    const week = Math.ceil((firstDayIndex + 1 + date.getDate()) / 7);

    return {
      lastD: lastDay,
      prevLastD: prevLastDay,
      firstDIndex: firstDayIndex,
      nextD: nextDays,
      w: week
    }
  }
}