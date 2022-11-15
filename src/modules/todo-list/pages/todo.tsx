import React from 'react';

import { AddEditTodo, ListTodo } from '../components';
import { ErrorBoundary } from '../containers';

const Todo = () => {
    return (
        <ErrorBoundary>
            <div className='row text-center'>
                <div className="col-md-6">
                    <AddEditTodo />
                    <ListTodo />
                </div>
            </div>
        </ErrorBoundary>
       
    )
}

export default Todo;