import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
