import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '../../common/components';
import { PageSize } from '../constants';
import { ITodo } from '../interfaces';
import TodoItem from './todo-item';

const ListTodo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const todolist = useSelector((state: any) => state.todo.todoList);

    const currentList = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return todolist.slice(firstPageIndex, lastPageIndex);
      }, [currentPage, todolist?.length]);

      const list = currentList.map((todo: ITodo, index: number)=> {
        return <TodoItem key = { index } { ... todo } />
    })

    return(
       <>
        { list }
        <Pagination
            currentPage={currentPage}
            totalCount={todolist.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)} 
            siblingCount={ 1 }        
        />
       </>
    )
}

export default ListTodo;