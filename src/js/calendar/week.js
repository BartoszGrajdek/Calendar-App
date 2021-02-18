import {RenderHandler} from "../helpers/renderHandler";

export class WeekDisplay extends RenderHandler {
  constructor(mode) {
    super(mode);
  }

  render(date) {
    this.calendarRender(date);
  }
}