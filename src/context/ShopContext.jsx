import {createContext, useState } from "react";

export const ShopContext = createContext()

const ShopComponentContext = ({children}) =>{
    const [cart, setCart] = useState([]);

    const AgregarAlCarrito = (item, cantidad) => {
        const existe = cart.find((producto) => producto.id === item.id);
        if (existe) {
        const nuevoCarrito = cart.map((producto) =>
            producto.id === item.id
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto
        );
        setCart(nuevoCarrito);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const Contador = () =>{
        return cart.reduce((total, item) => total + item.cantidad, 0);
    }

    const LimpiarCarrito = () =>{
        setCart([])
    }

    const EliminarDelCarrito = (id) => {
        const nuevoCarrito = cart.filter((item) => item.id !== id);
        setCart(nuevoCarrito);
    };

    return(
        <ShopContext.Provider value={{AgregarAlCarrito, Contador, cart, LimpiarCarrito, EliminarDelCarrito}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopComponentContext