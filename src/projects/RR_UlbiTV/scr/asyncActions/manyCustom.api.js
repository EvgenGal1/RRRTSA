// les5. стрел. или обычная fn()
import { addManyCustomAction } from "../store/customReducer";

export const fetchManyCustomApi = () => {
  // чтоб потом было возможность использ данную fn как action, т.е. прокид её в dispatch, то из этой fn возвращ нов. fn котор парам-ом приним dispatch
  // return dispatch => {} | return function(dispatch){}
  return (dispatch) => {
    // в fetch можно сделать ограничение в выгрузке - ?_limit=5
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      // .then((response) => response.json())
      // .then((json) => console.log(json))

      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // this.setState({ isLoading: false });
        return response.json();
      })
      // как данные получены, вызов dispatch переданого ч/з параметры. в него передать actionCreate addManyCustomAction который вернёт action (+ много польз-ей), и туда передаём json(массив польз-ей с сервера)
      .then((json) => dispatch(addManyCustomAction(json)));
  };
};
