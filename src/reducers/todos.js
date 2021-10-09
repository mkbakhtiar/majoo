import {
    GET_TODO_LIST,
} from "../actions/todoActions";

let initialState = {
    getTodoList: false,
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
  
      default:
        return state;
    }
  };

export default todos
