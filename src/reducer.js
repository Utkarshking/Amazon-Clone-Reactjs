export const initialState={
    basket: [],
};
const reducer =(state,action)=>{

    switch(action.type){
        //  ADD TO BASKET WILL DISPATCH A ACTION TO THE CURRENT ACTION TYPE 
        case 'ADD TO BASKET':
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
            default:
                return state;
    }
}