    import { PRODUCT_LIST } from "./constant";

    const initialState = {
        productData: [],
    };

    export const productData = (state= initialState, action) => {
        switch (action.type) {
            case PRODUCT_LIST: 
                console.log("Product Reducer called --> ", action)
                return [action.productData.data]
            default: 
            return []
        }
    }