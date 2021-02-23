import { RenderHandler } from "../helpers/renderHandler";

export class DayDisplay extends RenderHandler {
  constructor(mode) {
    super(mode);
  }

  render(date) {
    //RENDER CALENDAR FOR DAY DISPLAY
    this.calendarRender(date);
  }
}