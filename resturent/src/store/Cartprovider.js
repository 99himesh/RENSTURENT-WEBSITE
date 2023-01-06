import React,{useState} from "react";
import CartContext from "./cart-context";


const CartProvider=props=>{
   const [items,setItems]=useState([]);
 console.log(items);

 const addItemToCartHandler=item=>{
       const updateItem=[{...item} ,...items];
       console.log(updateItem);
        setItems(updateItem);
        
      
 };
 const removeItemToCardHAndler=id=>{

 };

const cartContext={
    item:items,
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemToCardHAndler
    
};

    return  (<CartContext.Provider value={cartContext} >
      {props.children}
    </CartContext.Provider>);
}

export default CartProvider;