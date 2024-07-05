import { createSlice } from '@reduxjs/toolkit';

let tasks=localStorage.getItem("QTasks")

if (tasks !== null) {
  tasks = JSON.parse(tasks)
}else{
  const r= [{id:Date.now(),text:"dfsda"},{id:Date.now(),text:"dfsdfb"}]
  localStorage.setItem("QTasks",JSON.stringify(r)) 
  tasks = JSON.parse(localStorage.getItem("QTasks"))
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState:tasks,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
      console.log(state,tasks,"t")
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
