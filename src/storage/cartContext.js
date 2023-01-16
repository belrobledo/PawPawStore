import React, { createContext, useState } from 'react'

export const cartContext = createContext();

function CartProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(product){
        let newCart = [...cart];

        let index = cart.indexOf( element => element.id === product.id);
        (index !== -1) ? newCart[index].quantity += product.quantity : newCart.push(product);

        setCart(newCart);
    }

    function removeFromCart(product, quantity){
        let newCart = [...cart];

        let index = cart.indexOf( element => element.id === product.id);
        if(index !== -1){
            (newCart[index].quantity > quantity) ? newCart[index].quantity -= quantity : newCart.splice(index, 1);
            setCart(newCart);
        }
    }

    function clearCart(){
        setCart([]);
    }

    function getTotalQuantity(){
        let totalQ = 0;
        for(const product of cart){
            totalQ += product.quantity;
        }

        return totalQ;
    }

    function getTotalPrice(){
        let totalP = 0;
        for(const product of cart){
            totalP += (product.price * product.quantity);
        }

        return totalP;
    }

    return(
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotalPrice }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }
