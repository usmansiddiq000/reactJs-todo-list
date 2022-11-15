import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerRegistry from './modules/common/services/reducerRegistry';


const preserveStateNonLoadedReducers = (_reducers: any) => {
    const reducers = { ..._reducers };
    return combineReducers(reducers);
  };

const rootReducer = preserveStateNonLoadedReducers(reducerRegistry.getReducers());

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

reducerRegistry.setChangeListener((reducers: any) => {
    store.replaceReducer(preserveStateNonLoadedReducers(reducers));
});

export default store;