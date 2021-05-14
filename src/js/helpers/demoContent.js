export let contentJSON = [[
  {
    id: 1,
    noteListId: 4,
    name: "Work",
    color: "green",
    events: [
      {
        id: 1,
        start: new Date(2021, new Date().getMonth(), new Date().getDate()-5, 1, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()-5, 2, 0),
        title: "Send mail",
        noteId: 1
      },
      {
        id: 2,
        start: new Date(2021, new Date().getMonth()+1, new Date().getDate(), 7, 0),
        end: new Date(2021, new Date().getMonth()+1, new Date().getDate(), 9, 20),
        title: "Send mail",
        noteId: 2
      },
      {
        id: 3,
        start: new Date(2021, new Date().getMonth(), new Date().getDate()+3, 18, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()+3, 18, 40),
        title: "Send mail",
        isSecond: true,
        noteId: 3
      },
      {
        id: 4,
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 6, 30),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 8, 0),
        title: "Send mail",
        isSecond: false,
        noteId: 4
      }
    ],
    isEnabled: true
  },
  {
    id: 2,
    noteListId: 5,
    name: "Guitar",
    color: "purple",
    events: [
      {
        id: 1,
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 10, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 11, 50),
        title: "Learn new chords",
        noteId: 1
      },
      {
        id: 2,
        start: new Date(2021, new Date().getMonth(), new Date().getDate()+14, 14, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()+14, 18, 15),
        title: "Learn new chords",
        noteId: 2
      },
      {
        id: 3,
        start: new Date(2021, new Date().getMonth(), new Date().getDate()+30, 20, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()+30, 21, 50),
        title: "Learn new chords",
        noteId: 3
      }
    ],
    isEnabled: true
  },
  {
    id: 3,
    noteListId: 6,
    name: "Home",
    color: "blue",
    events: [
      {
        id: 1,
        start: new Date(2021, new Date().getMonth(), new Date().getDate()-1, 9, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate()-1, 12, 30),
        title: "Clean up",
        isSecond: true,
        noteId: 1
      },
      {
        id: 2,
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 15, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 16, 20),
        title: "Clean up",
        isSecond: true,
        noteId: 2
      },
      {
        id: 3,
        start: new Date(2021, new Date().getMonth(), new Date().getDate(), 22, 0),
        end: new Date(2021, new Date().getMonth(), new Date().getDate(), 23, 0),
        title: "Clean up",
        noteId: 3
      }
    ],
    isEnabled: true
  }
], [
  {
    id: 1,
    name: "Work",
    color: "green",
    notes: [
      {
        id: 1,
        categoryId: 1,
        name: "Mailing list",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 2,
        categoryId: 1,
        name: "Appointments",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 3,
        categoryId: 1,
        name: "Our products",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 4,
        categoryId: 2,
        name: "Meals plan",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      }
    ],
    isEnabled: true,
    mode: "notepad"
  },
  {
    id: 2,
    name: "Guitar",
    color: "purple",
    notes: [
      {
        id: 1,
        categoryId: 2,
        name: "House work",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 2,
        categoryId: 2,
        name: "Things to work on",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 3,
        categoryId: 3,
        name: "Dentist",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 4,
        categoryId: 4,
        name: "Monthly bills",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 5,
        categoryId: 4,
        name: "Subscriptions",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      }
    ],
    isEnabled: true,
    mode: "notepad"
  },
  {
    id: 3,
    name: "Home",
    color: "blue",
    categories: ["Work", "Home", "Reminders"],
    notes: [
      {
        id: 1,
        categoryId: 4,
        name: "Furniture",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 2,
        categoryId: 4,
        name: "Computers",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 3,
        categoryId: 5,
        name: "Places to go to",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 4,
        categoryId: 5,
        name: "Hotels",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 5,
        categoryId: 6,
        name: "Dr Appointments",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      }
    ],
    isEnabled: true,
    mode: "notepad"
  },
  {
    id: 4,
    notes: [
      {
        id: 1,
        name: "House work",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 2,
        name: "Things to work on",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 3,
        name: "Dentist",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 4,
        name: "Monthly bills",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 5,
        name: "Subscriptions",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      }
    ],
    mode: "event"
  },
  {
    id: 5,
    notes: [
      {
        id: 1,
        name: "House work",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 2,
        name: "Things to work on",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 3,
        name: "Dentist",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 4,
        name: "Monthly bills",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 5,
        name: "Subscriptions",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      }
    ],
    mode: "event"
  },
  {
    id: 6,
    notes: [
      {
        id: 1,
        name: "House work",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 2,
        name: "Things to work on",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 3,
        name: "Dentist",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 4,
        name: "Monthly bills",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      },
      {
        id: 5,
        name: "Subscriptions",
        textTitle: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. ",
        toDoList: [
          {
            taskId: 1,
            name: "Empty dishwasher",
            isDone: true,
            isIndented: false
          },
          {
            taskId: 2,
            name: "Clean up fridge",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 3,
            name: "Put in groceries",
            isDone: true,
            isIndented: true
          },
          {
            taskId: 4,
            name: "Wash clothes",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 5,
            name: "Clean the floors",
            isDone: false,
            isIndented: false
          },
          {
            taskId: 6,
            name: "Vacuum",
            isDone: false,
            isIndented: false
          },
        ]
      }
    ],
    mode: "event"
  }
], [
  {
    categoryId: 1,
    name: "Work",
    isEnabled: true
  },
  {
    categoryId: 2,
    name: "Home",
    isEnabled: true
  },
  {
    categoryId: 3,
    name: "Reminders",
    isEnabled: false
  },
  {
    categoryId: 4,
    name: "Payments",
    isEnabled: false
  },
  {
    categoryId: 5,
    name: "Vacation",
    isEnabled: true
  },
  {
    categoryId: 6,
    name: "Healthcare",
    isEnabled: false
  }
], [
  {
    id: 1,
    name: "Work",
    color: "green",
    tasks: [
      {
        id: 1,
        categoryId: 1,
        name: "Mailing list",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 2,
        categoryId: 1,
        name: "Appointments",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 3,
        categoryId: 1,
        name: "Our products",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 4,
        categoryId: 2,
        name: "Meals plan",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      }
    ],
    isEnabled: true
  },
  {
    id: 2,
    name: "Guitar",
    color: "purple",
    tasks: [
      {
        id: 1,
        categoryId: 2,
        name: "House work",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 2,
        categoryId: 2,
        name: "Things to work on",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 3,
        categoryId: 3,
        name: "Dentist",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 4,
        categoryId: 4,
        name: "Monthly bills",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 5,
        categoryId: 4,
        name: "Subscriptions",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      }
    ],
    isEnabled: true
  },
  {
    id: 3,
    name: "Home",
    color: "blue",
    categories: ["Work", "Home", "Reminders"],
    tasks: [
      {
        id: 1,
        categoryId: 4,
        name: "Furniture",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 2,
        categoryId: 4,
        name: "Computers",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 3,
        categoryId: 5,
        name: "Places to go to",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 4,
        categoryId: 5,
        name: "Hotels",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      },
      {
        id: 5,
        categoryId: 6,
        name: "Dr Appointments",
        pending: [
          "Electricity",
          "Water",
          "Gas"
        ],
        doing: [
          "New bed",
          "Computer for Jane",
          "Bedroom renovation",
          "Gym subscription",
          "New furniture for dining room"
        ],
        done: [
          "House rent",
          "Car debt",
          "Roof repair",
          "New house heating"
        ]
      }
    ],
    isEnabled: true
  }
], [
  {
    categoryId: 1,
    name: "Work",
    isEnabled: true
  },
  {
    categoryId: 2,
    name: "Home",
    isEnabled: true
  },
  {
    categoryId: 3,
    name: "Reminders",
    isEnabled: false
  },
  {
    categoryId: 4,
    name: "Payments",
    isEnabled: false
  },
  {
    categoryId: 5,
    name: "Vacation",
    isEnabled: true
  },
  {
    categoryId: 6,
    name: "Healthcare",
    isEnabled: false
  }
]]