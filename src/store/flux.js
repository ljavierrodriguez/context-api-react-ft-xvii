const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Unknown',
            lastname: 'Doe',
            users: null,
            colors: [],
            selectedColor: "#ffffffff",
        },
        actions: {
            saludo: () => {
                const { name } = getStore();
                //const { getUsers } = getActions();
                console.log("Hola desde el flux " + name);
                //getUsers("");
            },
            getUsers: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ users: data })
                    })
            },
            setColors: (colors = []) => {
                setStore({ colors: colors });
            },
            setSelectedColor: color => {
                setStore({ selectedColor: color });
                localStorage.setItem('selectedColor', color);
            },
            getSelectedColor: () => {
                const { selectedColor } = getStore();
                const { setSelectedColor } = getActions();
                setSelectedColor(localStorage.getItem('selectedColor') || selectedColor)
            }
        }
    }
}

export default getState;