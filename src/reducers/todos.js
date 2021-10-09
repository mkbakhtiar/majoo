import {
    GET_TODO_LIST,
    DELETE_ITEM,
} from "../actions/todoActions";

let initialState = {
  getTodoList: false,
  deleteTodo: false,
  errorTodoList: false,
}

const todos = (state = initialState, action) => {
    switch (action.type) {
      case GET_TODO_LIST:
        return {
          ...state,
          getTodoList: action.payload.data,
          errorTodoList: action.payload.errorMessage,
        };

        case DELETE_ITEM:
        return {
          ...state,
          deleteTodo: state.items.filter(deleteTodo => deleteTodo !== action.payload)
        };
  
      default:
        return state;
    }
  };

export default todos
