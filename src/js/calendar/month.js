import { RenderHandler } from "../helpers/renderHandler";

export class MonthDisplay extends RenderHandler {
  constructor(mode) {
    super(mode);
  }

  render(date) {
    //RENDER CALENDAR FOR MONTH DISPLAY
    this.calendarRender(date);
  }
}