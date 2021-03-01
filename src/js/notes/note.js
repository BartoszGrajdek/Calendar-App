export class Note {
  constructor(note, listId) {
    this.id = note.id;
    this.categoryId = note.categoryId;
    this.name = note.name;
    this.listId = listId;
  }

  render() {
    console.log("Hi", this.name);
  }
}