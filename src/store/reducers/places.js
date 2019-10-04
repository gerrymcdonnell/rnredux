import {ADD_PLACE,
DELETE_PLACE,
SELECT_PLACE,
DESELECT_PLACE}
from '../actions/actionTypes'

//root redeucer
const initalState={
    places:[],
    selectedPlace:null
}

const reducer=(state=initalState,action)=>{
    switch(action.type){
        case ADD_PLACE:
        //ended vid 3 1.49    
        return{};

        default:
            return state;
    }
}
export default reducer;