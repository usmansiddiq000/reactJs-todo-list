import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reducerRegistry } from '../../common/services';
import { ITodo } from '../interfaces';


type TodoState = {
    todoList: ITodo[],
    todoItemToEdit: ITodo | null
}


const name = 'todo';

const createInitialState = (): TodoState => {
    return {
        todoList: [],
        todoItemToEdit: null
    }
}

const createActions = () => {
    return {}
};

const createReducers = () => {
    const addTodoItem = (state: TodoState,  action: PayloadAction<ITodo> ) => {
        state.todoList.push(action.payload);
        state.todoItemToEdit = null;
    }

    const editTodoItem = (state: TodoState,  action: PayloadAction<ITodo> ) => {
        state.todoList = state.todoList.map(todo => {
            if(todo.id === action.payload.id) {
                todo = action.payload;
            }
            return todo;
        })
        state.todoItemToEdit = null;
    }

    const removeTodoItem = (state: TodoState,  action: PayloadAction<ITodo> ) => {
        state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id);
        state.todoItemToEdit = null;
    }

    const itemToEdit = (state: TodoState,  action: PayloadAction<ITodo> ) => {
        state.todoItemToEdit = action.payload;
        
    }
    return {
        addTodoItem,
        editTodoItem,
        removeTodoItem,
        itemToEdit
    }
}

const createExtraReducers = () => {
    return {}
};

const initialState = createInitialState();
const reducers = createReducers()
const extraActions = createActions();
const extraReducers = createExtraReducers();

const slice = createSlice({ name, initialState, reducers , extraReducers });
const todoReducer = slice.reducer;


export const todoActions = { ...slice.actions, ...extraActions };


reducerRegistry.save(name, todoReducer);






