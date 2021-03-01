import { NoteHandler } from "../helpers/noteHandler";

export class Notepad {
  constructor() {
    this.noteHandler = new NoteHandler();

    this.init();
  }

  init() {
    this.noteHandler.render();
  }
}