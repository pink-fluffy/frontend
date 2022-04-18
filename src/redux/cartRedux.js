import { alertClasses } from "@mui/material"
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state, action) =>{
            state.total = 0
            const cartItems = state.products.filter(
                cartItem => cartItem.short_id === action.payload.short_id
            )
            if(cartItems.length === 0){
                state.products.push(action.payload)
            } else {
                state.products.map( product => {
                    if(product.short_id === action.payload.short_id){
                        
                        product.quantity += action.payload.quantity
                    }
                })
            }
            state.quantity += action.payload.quantity
            
            state.products.map(product => {
                
                state.total += product.price * product.quantity
            })
        },
        productDec:(state, action) =>{
                state.products.map( product => {
                    if(product.short_id === action.payload.short_id){
                        state.quantity -= 1
                        product.quantity -= 1
                        state.total -= action.payload.price
                    }
                })
                   
        },
        productInc:(state, action) =>{
            state.products.map( product => {
                if(product.short_id === action.payload.short_id){
                    state.quantity += 1
                    state.total += action.payload.price
                    product.quantity += 1
                }
            })
                
    },
        delProduct:(state, action) =>{
            const preCartItems = state.quantity
            const nextCartItems = state.products.filter(
                cartItem => cartItem.short_id !== action.payload.short_id
            )
            state.products = nextCartItems
            state.quantity -= action.payload.quantity
            state.total -= (action.payload.price *action.payload.quantity)
        },
        delAllProduct:(state) =>{
            
            state.products = []
            state.quantity = 0
            state.total = 0
        },
        decQuantity:(state, action) =>{
                state.products.map(
                    
                )
        },
        incQuantity:(state, action) =>{
            state.products.quantity -= 1
        }
    }, 
})

export const {addProduct, delProduct, decQuantity, incQuantity, delAllProduct, productDec, productInc} = cartSlice.actions
export default cartSlice.reducer;