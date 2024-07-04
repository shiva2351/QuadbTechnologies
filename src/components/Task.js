import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      {task.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;

