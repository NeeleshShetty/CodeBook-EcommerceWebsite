export const filterReducer = (state, action) => {
    
    const { type, payload } = action;
    switch (type) { 
        case "PRODUCT_LIST":
            return {
                productList:payload.products
            }
        
        case "SORT_BY":
            return
        
        case "BEST_SELLER_ONLY":
            return
        
        case "ONLY_IN_STOCK":
            return
        
        case "CLEAR_FILTER":
            return
        
        default:
            throw new Error("No case found")
    }
    
}