import React, { createContext, useEffect, useState } from 'react'

export const cartContext = createContext();

function CartProvider(props) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        (cart.length > 0) ? localStorage.setItem('cart', JSON.stringify(cart)) : localStorage.clear();
        
    }, [cart]);

    function addToCart(product){
        let newCart = [...cart];

        let index = cart.findIndex( element => element.id === product.id);
        (index !== -1) ? newCart[index].quantity += product.quantity : newCart.push(product);

        setCart(newCart);
    }

    function removeFromCart(id){
        let newCart = [...cart];

        let index = newCart.findIndex( element => element.id === id);
        if(index !== -1){
            (newCart[index].quantity > 1) ? newCart[index].quantity-- : newCart.splice(index, 1);
            setCart(newCart);
        }
    }

    function clearCart(){
        setCart([]);
    }

    function inCart(id){
        let index = cart.findIndex( element => element.id === id);
        let state = (index !== -1) ? true : false;

        return state;
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
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, inCart, clearCart, getTotalQuantity, getTotalPrice }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }
