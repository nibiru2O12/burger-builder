export const NEW_ORDER = "NEW_ORDER";

export function addNewOrder(order){
    return{
        type:NEW_ORDER,
        order
    }
}