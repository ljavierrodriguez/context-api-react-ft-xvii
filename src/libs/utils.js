export const generateColor = () => {
    let color = "#";
    let chars = "0123456789ABCDEF"; // - todos los posibles caracteres

    for (let i = 0; i < 6; i++) { // genero el color dinamicamente y aleatoriamente
        color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    color += "33"; // Agrago el alpha al color
    
    return color;
}