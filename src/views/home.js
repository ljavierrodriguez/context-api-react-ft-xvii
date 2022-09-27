import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { AppContext } from '../store/appContext';

const Home = () => {

    const { store, actions } = useContext(AppContext);
    const { setUser } = useContext(UserContext);

    useEffect(() => {

    }, [])

    return (
        <>
            <h1>Home {store.name}</h1>
            <button className="btn btn-primary btn-sm" onClick={() => setUser("Luis")}>
                Asignar Luis
            </button>

            <button className="btn btn-warning btn-sm" onClick={actions.saludo}>
                Saludo
            </button>
        </>
    )
}

export default Home;