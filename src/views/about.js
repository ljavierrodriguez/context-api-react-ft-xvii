import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { AppContext } from '../store/appContext';

const About = () => {
    const { store, actions } = useContext(AppContext);
    const { user } = useContext(UserContext);

    return (
        <>
        <h1>About {user}</h1>
            <ul className="list-group">
                {
                   !!store.users &&
                   store.users.map((user) => {
                        return <li className="list-group-item list-group-item-action bg-transparent" key={user.id}>{user.name}</li>
                   })
                }
            </ul>
        </>
    )
}

export default About;