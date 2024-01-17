import { v4 as uuidv4 } from 'uuid';

export const addTask = (title) => ({
    type: 'ADD_TASK',
    payload: {
        id: uuidv4(),
        title,
        status: false
    }
});

export const updateTasks = (tasks) => ({
    type: 'UPDATE_TASKS',
    payload: tasks
});