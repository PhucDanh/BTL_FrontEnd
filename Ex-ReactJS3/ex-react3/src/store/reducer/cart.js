const initialCart = {
    cart: [],
    totalQuantity: 0
}

const reducer = (state=initialCart, action) => {
    const cloneCart = [...state.cart];
    const foundIndex = cloneCart.findIndex((item) => {
        return item.product.id === action.payload.id;
    })
    switch (action.type) {
        case "ADD_TO_CART":
            state.totalQuantity++;
            if(foundIndex === -1) {
                cloneCart.push({ product:action.payload, quantity:1});
            } else {
                cloneCart[foundIndex].quantity++;
            }
            state.cart = [...cloneCart];
            return {...state};
        case "INCREASE_ITEM_QUANTITY":
            if(foundIndex === -1) {
                return;
            } else {
                cloneCart[foundIndex].quantity++;
                state.totalQuantity++;
            }
            state.cart = [...cloneCart];
            return {...state};
        case "DECREASE_ITEM_QUANTITY":
            if(foundIndex === -1) {
                return;
            } else {
                cloneCart[foundIndex].quantity--;
                state.totalQuantity--;
            }
            if(cloneCart[foundIndex].quantity === 0) {
                cloneCart.splice(foundIndex,1);
            }
            state.cart = [...cloneCart];
            return {...state};
        case "DELETE_ITEM":
            state.totalQuantity -= cloneCart[foundIndex].quantity;
            cloneCart.splice(foundIndex,1);
            state.cart = [...cloneCart];
            return {...state};
        default:
            return {...state};
    }
}

export default reducer;