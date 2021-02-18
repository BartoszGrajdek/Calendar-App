import {RenderHandler} from "../helpers/renderHandler";

export class DayDisplay extends RenderHandler {
  constructor(mode) {
    super(mode);
  }

  render(date) {
    this.calendarRender(date);
  }
}