import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './components/List';
import { addTask, updateTasks } from './redux/actions';


function MainRedux() {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const [tasksTitle, setTasksTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (e) => {
        if (e.key === 'Enter' && tasksTitle !== '') {
            dispatch(addTask(tasksTitle));
            setTasksTitle('');
        }
    };

    const date = new Date();
    const monthNames = ['January', 'February', 'March', 'Aplril', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <div className='container'>
            <h1>Note your tasks</h1>
            <span>{month + ' ' + day + ', ' + year}</span>
            <div className='input-field'>
                <input type='text' value={tasksTitle} onChange={event => setTasksTitle(event.target.value)} onKeyDown={handleAddTask} />
                <label>Task name</label>
            </div>
            <List tasks={tasks} />
        </div>
    );
}

export default MainRedux;