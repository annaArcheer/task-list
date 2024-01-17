import {useState} from "react";

export default function Item({title, id, status}) {
    const [checked, setChecked] = useState();
    const classes = ['todo'];

    if (checked) {
        classes.push('status');
    }

    const [tasks, setTasks] = useState(() => {
        const storedTodos = localStorage.getItem('tasks');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const updateStatus = () => {
        setChecked(!checked)
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        storedTodos.map((el) => {
            if (el.id === id) {
                el.status = !checked;
            }
            return true
        })
        console.log(storedTodos + ' storedTodos 2');
        localStorage.setItem('tasks', JSON.stringify(storedTodos));
    }
    const [visible, setVisible] = useState(true);
    const removeElement = () => {
        setVisible(prev => !prev)
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        let removeTodos = storedTodos.filter(item => {
            if (item.id !== id) {
                return true
            }
            return false
        });
        console.log(removeTodos + 'removeTodos');
        localStorage.setItem('tasks', JSON.stringify(removeTodos));
    }
    return (
        <>{visible && (
            <li className={classes.join(' ')}>
                <label>
                    <input type="checkbox" checked={checked}
                           onChange={updateStatus}/>
                    <span>{title}</span>
                    <i className="material-icons red-text" onClick={removeElement}>
                        x
                    </i>
                </label>
            </li>
        )}
        </>
    )
}