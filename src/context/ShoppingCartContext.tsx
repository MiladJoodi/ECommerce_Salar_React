import React, { createContext, useContext, useState } from "react";

interface ShoppingCartProvider{
    children: React.ReactNode;
}

interface CartItem{
    id: number,
    qty: number
}

interface ShoppingCartContext{
    cartItems: CartItem[];
    handleIncreaseProductQty: (id: number)=> void;
    handleDecreaseProductQty: (id: number)=> void;
    getProductQty: (id: number)=> number;
    handleRemoveProduct: (id: number)=> void;
    cartQty: number;
    
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

// Custom Hook
export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProvider){

    // state
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Increase Function
    const handleIncreaseProductQty = (id: number)=>{
        setCartItems(currentItems=> {
            let selectedItem = currentItems.find(item=> item.id == id)

            if(selectedItem == null){
                return [...currentItems, {id: id, qty: 1}]
            }
            else{
                return currentItems.map(item=> {
                    if(item.id == id){
                        return {...item, qty: item.qty + 1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }

    // Decrease Function
    const handleDecreaseProductQty = (id: number)=>{
        setCartItems(currentItems=> {
            let selectedItem = currentItems.find((item)=> item.id == id);
            if(selectedItem?.qty === 1){
                return currentItems.filter(item => item.id !== id)
            }
            else{
                return currentItems.map((item)=> {
                    if(item.id == id){
                        return {...item, qty: item.qty - 1}
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    }

    // qty
    const getProductQty = (id: number)=>{
        return cartItems.find(item => item.id == id)?.qty || 0
    }

    // Remove Function
    const handleRemoveProduct = (id: number)=> {
        setCartItems(currentItems => currentItems.filter(item=> item.id != id))
    }

    // all count
    const cartQty = cartItems.reduce((totalQty, item)=> totalQty + item.qty , 0)


    return (
        <ShoppingCartContext.Provider value={{cartItems, handleIncreaseProductQty, handleDecreaseProductQty, getProductQty, handleRemoveProduct, cartQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}