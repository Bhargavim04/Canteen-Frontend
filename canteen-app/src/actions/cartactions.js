import axios from "axios";

//  For add item to cart
export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    };
};

//  For delete item from cart
export const delFromCart = (foodId) => {
    return {
        type: "DEL_FROM_CART",
        payload: foodId
    };
};

//  For remove individual item from cart
export const decByOne = (item) => {
    return {
        type: "DEC_ONE",
        payload: item
    };
};




