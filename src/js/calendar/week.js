import { RenderHandler } from "../helpers/renderHandler";

export class WeekDisplay extends RenderHandler {
  constructor(mode) {
    super(mode);
  }

  render(date) {
    //RENDER CALENDAR FOR WEEK DISPLAY
    this.calendarRender(date);
  }
}