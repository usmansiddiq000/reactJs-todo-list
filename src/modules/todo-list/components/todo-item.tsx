import React, { memo, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../interfaces';
import { todoActions } from '../store';


const TodoItem = (todo: ITodo) => {
    const dispatch = useDispatch();

    const removeTodoItem = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(todoActions.removeTodoItem(todo));
    }

    const editTodoItem = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(todoActions.itemToEdit(todo));
    }

    return(
       <>
        <div className="card mt-2" style= {{ "width": "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{ todo.title }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">{ todo.description } </p>
                <button type="button" onClick={editTodoItem} className="btn btn-outline-primary m-2">Edit</button>
                <button type="button" onClick={removeTodoItem} className="btn btn-outline-danger">Delete</button>
            </div>
        </div>
       </>
    )
}

export default memo(TodoItem);

