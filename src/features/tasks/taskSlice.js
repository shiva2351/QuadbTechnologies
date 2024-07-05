import { createSlice } from '@reduxjs/toolkit';

let tasks=localStorage.getItem("QTasks") 

if (tasks !== null) {
  tasks = JSON.parse(tasks)
}else{
  
const r= [{id:Date.now(),text:"dfsda"},{id:343,text:"dfsdfb"}]
localStorage.setItem("QTasks",JSON.stringify(r))
  tasks = JSON.parse(localStorage.getItem("QTasks"))
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState:tasks,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
      tasks=[...tasks,{id: Date.now(), text: action.payload}]

      localStorage.setItem("QTasks",JSON.stringify(tasks))

      console.log(state,tasks,"t")
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

console.log(taskSlice,"slice")
export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
