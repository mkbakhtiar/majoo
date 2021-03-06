import axios from "axios";

export const GET_TODO_LIST = "GET_TODO_LIST";
export const DELETE_ITEM = "DELETE_ITEM";


export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  }
}
export const getTodoList  = () => {
    return (dispatch) => {
        axios
          .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
          .then(function (response) {
            
            dispatch({
              type: GET_TODO_LIST,
              payload: {
                data: response,
                errorMessage: false,
              },
            });
          })
          .catch(function (error) {
            dispatch({
              type: GET_TODO_LIST,
              payload: {
                data: false,
                errorMessage: error.message,
              },
            });
          });
      };
}
