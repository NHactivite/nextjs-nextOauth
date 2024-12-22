"use client"

import { addToCart, removeFromCart } from "@/store/slices/cart-slice"
import { useDispatch, useSelector } from "react-redux"

const { Button } = require("../button")

export const AddToCartButton=({productItem})=>{
    const {cart}=useSelector(state=>state)
    const dispatch=useDispatch()
    
    const handleAddToCart=()=>{
        dispatch(addToCart(productItem))
    }
    const handleRemoveFromCart=()=>{
        dispatch(removeFromCart(productItem.id))
    }

    return(
        <div className="mt-8 max-w-md">
                  <Button type="button" onClick={cart?.cartItems.some(item=>item.id===productItem.id)? handleRemoveFromCart:handleAddToCart}>
                    {
                        cart?.cartItems.some(item=>item.id===productItem.id)?"Remove from cart":"Add To Cart"
                    }
                  </Button>
        </div>
    )
}