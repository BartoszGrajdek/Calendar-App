import {RenderHandler} from "../helpers/renderHandler";

export class MonthDisplay extends RenderHandler {
  constructor(mode) {
    super(mode);
  }

  render(date) {
    this.calendarRender(date);
  }
}