import {useEffect, useState} from 'react';
import List from './components/List';
import {v4 as uuidv4} from 'uuid';

function Main() {

    const [tasks, setTasks] = useState(() => {
        const storedTodos = localStorage.getItem('tasks');
        console.log(storedTodos + '  1storedTodos');
        if (!storedTodos) {
            return []
        }

        else {
            try {
                const parsedTodos = JSON.parse(storedTodos);

                if (Array.isArray(parsedTodos) && parsedTodos.length > 0 && parsedTodos[0] !== null) {
                    return parsedTodos;
                } else {
                    console.error('Невірний формат storedTodos');
                    return [];
                }
            } catch (error) {
                console.error('Помилка розбору JSON:', error);
                return [];
            }

        }




    });
    const [tasksTitle, setTasksTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log('useEffect');
    }, [tasks]);
    const addTask = (e) => {
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        if (e.key === 'Enter' && e.target.value !== '') {
            setTasks([
                ...storedTodos, {
                    id: uuidv4(),
                    title: tasksTitle,
                    status: false
                }
            ]);
            setTasksTitle('');
        }
    }

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
                <input type='text' value={tasksTitle}
                       onChange={event => setTasksTitle(event.target.value)}
                       onKeyDown={addTask}/>
                <label>Task name</label>
            </div>
            <List tasks={tasks}/>
        </div>
    )
}

export default Main;