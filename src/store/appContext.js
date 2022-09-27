import React, { createContext, useEffect, useState } from 'react';
import useGenerateColors from '../hooks/useGenerateColors';
import getState from './flux';

export const AppContext = createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {

        const [state, setState] = useState(getState({
            getStore: () => state.store, // devuleve todo lo que esta en el store
            getActions: () => state.actions, // devuelve todo lo que esta en los actions
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            state.actions.getSelectedColor();
            state.actions.getUsers("https://jsonplaceholder.typicode.com/users")
        }, [])

        return (
            <AppContext.Provider value={state}>
                <PassedComponent {...props} />
            </AppContext.Provider>
        )
    }


    return StoreWrapper;
}

export default injectContext;