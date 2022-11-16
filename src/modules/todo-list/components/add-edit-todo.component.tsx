import React, { SyntheticEvent, useEffect, useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../store'


const AddEditTodo = () => {
    const dispatch = useDispatch();
    const itemToEdit = useSelector((state: any) => state.todo.todoItemToEdit);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        setTitle(itemToEdit?.title);
        setDescription(itemToEdit?.description )
    }, [itemToEdit])


    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if(itemToEdit?.id) {
            dispatch(todoActions.editTodoItem({title: title, description: description, id: itemToEdit.id}));
        }
        else {
            dispatch(todoActions.addTodoItem({title: title, description: description, id: shortid.generate()}));
        }
        setTitle('');
        setDescription('');
    }

    return(
        <form onSubmit={handleSubmit} className = 'form-inline'>
            <div className='form-group mb-2'>
                <label>Title</label>
                <input 
                    className='form-control m-2'
                    type="title" 
                    value={title || ''}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-group mb-2'>
                <label>Description</label>
                <input 
                    className='form-control m-2'
                    type="description" 
                    value={description || ''}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            { !itemToEdit &&  <button className='btn btn-primary float-right' type="submit" value="Submit">Add Task</button> }
            { itemToEdit &&  <button className='btn btn-primary float-right' type="submit" value="Submit">Edit Task</button> }
        </form>
    )
}

export default AddEditTodo;