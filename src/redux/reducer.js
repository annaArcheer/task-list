const initialState = [];

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'UPDATE_TASKS':
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, ...action.payload.updatedData };
                }
                return task;
            });
        default:
            return state;
    }
};

export default tasksReducer;