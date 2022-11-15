import React from 'react';
import { useSelector } from 'react-redux';
import { ITodo } from '../interfaces';
import TodoItem from './todo-item';

const ListTodo = () => {

    const todolist = useSelector((state: any) => state.todo.todoList);

    const list = todolist.map((todo: ITodo, index: number)=> {
        return <TodoItem key = { index } { ... todo } />
    })

    return(
       <>
        { list }
       </>
    )
}

export default ListTodo;