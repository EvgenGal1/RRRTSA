// les5. стрел. или обычная fn()
import { addManyCustomAction } from "../store/customReducer";

export const fetchManyCustomApi = () => {
  // чтоб потом было возможность использ данную fn как action, т.е. прокид её в dispatch, то из этой fn возвращ нов. fn котор парам-ом приним dispatch
  // return dispatch => {} | return function(dispatch){}
  return (dispatch: any) => {
    // return (dispatch: (arg0: { type: string; payload: any }) => any) => {
    // return (dispatch: any): void => {
    // return function(dispatch:any){
    // return (dispatch: (arg0: { type: string; payload: any }) => any) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((json) => console.log(json))
      // как данные получены, вызов dispatch переданого ч/з параметры. в него передать actionCreate addManyCustomAction который вернёт action (+ много польз-ей), и туда передаём json(массив польз-ей с сервера)
      .then((json) => dispatch(addManyCustomAction(json)));
  };
};
