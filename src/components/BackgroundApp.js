import React, { useContext } from 'react';
import { AppContext } from '../store/appContext';

const BackgroundApp = ({ children }) => {
    const { store } = useContext(AppContext);
    return (
        <section className="w-100 h-100" style={{ background: store.selectedColor }}>
            {children}
        </section>
    )
}

export default BackgroundApp;