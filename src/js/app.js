import { Calendar } from './calendar/calendar';
import { SideCalendar } from './calendar/sideCalendar';
import { Notepad } from "./notes/notepad";

//DEMO CONTENT FOR EVENT LISTS
export let eventListJSON = [
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
          start: new Date(2021, new Date().getMonth(), new Date().getDate(), 20, 0),
          end: new Date(2021, new Date().getMonth(), new Date().getDate(), 21, 30),
          title: "Send mail",
          isSecond: true,
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
];

export let categoriesListJSON = [
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
];

export let noteListJSON = [
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
];

class App {
  static init() {
    //DEPENDING ON PAGE USER'S ON LOAD ACCORDING JS TO IT
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      //SET DEFAULT DISPLAY MODE FOR CALENDAR
      this.app = { mode: "day" };

      //INITIALIZE MAIN CALENDAR AND RENDER IT
      const calendar = new Calendar(this.app);
      calendar.render(calendar.app.mode, calendar.date);

      //INITIALIZE SIDE CALENDAR
      const sideCalendar = new SideCalendar(this.app);

      this.renderCalendar(calendar, sideCalendar);
    } else if (window.location.pathname === "/notes.html") {
      //CHECK IF IT'S MOBILE AND DELETE DETAILS PC HTML
      const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      const isMobile = width <= 1200;
      if (isMobile) {
        const content = document.querySelector(".content");
        content.remove();

        //ADD POPUP TO APP
        let popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML += `
          <div class="details details--popup">
            <div class="details__header">
              <div class="details__headings">
                <h2 class="details__event"></h2>
              </div>
              <span class="details__close">&nbsp;</span>
            </div>
            <div class="details__description">
              <h4 class="details__title"></h4>
              <p class="details__text"></p>
            </div>
            <div class="details__checklist checklist">
            </div>
          </div>
          <!-- DETAILS POPUP-->
        `;
        document.querySelector("body").append(popup);
        document.querySelector(".popup").style.display = "none";
      }
      const notepad = new Notepad();
    } else if (window.location.pathname === "/todo.html") {

    }
  }

  static renderCalendar(calendar, sideCalendar) {
    //SETUP SIDE-CALENDAR BUTTONS AND HEADER
    const buttonToday = document.querySelector(".side-calendar__button");
    const buttonWeek = buttonToday.nextElementSibling;
    const buttonMonth = buttonWeek.nextElementSibling;

    buttonToday.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--right");
      buttonToday.classList.add("side-calendar__button--active");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--active");
      buttonMonth.classList.add("side-calendar__button--left");

      let content = document.createElement("div");
      content.classList.add("details");
      content.innerHTML = `
        <div class="details__header">
            <div class="details__headings">
              <h2 class="details__event">Clean up the house</h2>
              <h4 class="details__date">7 November 2020</h4>
            </div>
            <h5 class="details__time">10:00am - 1:00pm</h5>
          </div>
    
          <div class="details__description">
            <h4 class="details__title">Lorem ipsum</h4>
            <p class="details__text">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. </p>
          </div>
    
          <div class="details__checklist checklist">
    
          </div>
    
          <div class="details__info">
            <div class="details__info--item">
              <img src="assets/icons/svg/bell.svg" alt="Notification bell" class="details__icon">
              <h4 class="details__icon--title">30 minutes before</h4>
            </div>
            <div class="details__info--item">
              <img src="assets/icons/svg/pin.svg" alt="Place pin" class="details__icon">
              <h4 class="details__icon--title">Warsaw, Poland</h4>
            </div>
          </div>
      `;
      document.querySelector(".content").append(content);
      if (document.querySelector(".popup") !== null) document.querySelector(".popup").remove();

      this.app.mode = "day";
      calendar.render(this.app.mode);
      sideCalendar.render();
    });
    buttonWeek.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--right", "side-calendar__button--active");
      buttonWeek.classList.add("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--active", "side-calendar__button--left");

      document.querySelector(".details").remove();
      if (document.querySelector(".popup") !== null) document.querySelector(".popup").remove();

      let popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerHTML = `
        <div class="details details--popup">
      
          <div class="details__header">
            <div class="details__headings">
              <h2 class="details__event"></h2>
              <h4 class="details__date"></h4>
            </div>
            <h5 class="details__time"></h5>
            <span class="details__close">&nbsp;</span>
          </div>
      
          <div class="details__description">
            <h4 class="details__title"></h4>
            <p class="details__text"></p>
          </div>
      
          <div class="details__checklist checklist">
      
          </div>
      
          <div class="details__info">
            <div class="details__info--item">
              <img src="assets/icons/svg/bell.svg" alt="Notification bell" class="details__icon">
              <h4 class="details__icon--title">30 minutes before</h4>
            </div>
            <div class="details__info--item">
              <img src="assets/icons/svg/pin.svg" alt="Place pin" class="details__icon">
              <h4 class="details__icon--title">Warsaw, Poland</h4>
            </div>
          </div>
      
        </div>
        <!-- DETAILS POPUP-->
      `;
      document.querySelector(".content").append(popup);
      document.querySelector(".popup").style.display = "none";

      this.app.mode = "week";
      calendar.date.chosenDate = new Date(
        calendar.date.chosenDate.getFullYear(),
        calendar.date.chosenDate.getMonth(),
        (calendar.date.chosenDate.getDate() - calendar.date.chosenDate.getDay() + 1)
      );

      calendar.render(this.app.mode);
      sideCalendar.render();
    });
    buttonMonth.addEventListener('click', () => {
      buttonToday.classList.remove("side-calendar__button--active");
      buttonToday.classList.add("side-calendar__button--right");
      buttonWeek.classList.remove("side-calendar__button--active");
      buttonMonth.classList.remove("side-calendar__button--left");
      buttonMonth.classList.add("side-calendar__button--active");

      document.querySelector(".details").remove();
      if (document.querySelector(".popup") !== null) document.querySelector(".popup").remove();

      let popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerHTML = `
        <div class="details details--popup">
      
          <div class="details__header">
            <div class="details__headings">
              <h2 class="details__event"></h2>
              <h4 class="details__date"></h4>
            </div>
            <h5 class="details__time"></h5>
            <span class="details__close">&nbsp;</span>
          </div>
      
          <div class="details__description">
            <h4 class="details__title"></h4>
            <p class="details__text"></p>
          </div>
      
          <div class="details__checklist checklist">
      
          </div>
      
          <div class="details__info">
            <div class="details__info--item">
              <img src="assets/icons/svg/bell.svg" alt="Notification bell" class="details__icon">
              <h4 class="details__icon--title">30 minutes before</h4>
            </div>
            <div class="details__info--item">
              <img src="assets/icons/svg/pin.svg" alt="Place pin" class="details__icon">
              <h4 class="details__icon--title">Warsaw, Poland</h4>
            </div>
          </div>
      
        </div>
        <!-- DETAILS POPUP-->
      `;
      document.querySelector(".content").append(popup);
      document.querySelector(".popup").style.display = "none";

      this.app.mode = "month";
      calendar.render(this.app.mode);
      sideCalendar.render();
    });
  }
}

//RUN WHOLE APP
App.init();