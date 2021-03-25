import { NoteHandler } from "../notes/noteHandler";

export class Notepad {
  constructor() {
    this.noteHandler = new NoteHandler();

    this.init();
  }

  init() {
    this.noteHandler.render();
  }
}