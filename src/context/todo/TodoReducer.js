import { CHANGE_STATE, TODO_ADD, TODO_REMOVE, TODO_UPDATE } from "./TodoAction"

const todoReducer = (state,action) =>{
    switch(action.type){
        case TODO_ADD:
            return {};
        case TODO_UPDATE:
            return {};
        case TODO_REMOVE:
            return {};
        case CHANGE_STATE:
            return {};
    }
}
export default todoReducer