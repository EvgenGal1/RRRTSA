// хук для удобн. раб. с action (связь actCreat с dispatch)
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as UserActionCreators from "../store/actionCreators/usersActCreat";

export const useActions = () => {
  // получ. объ. despatch
  const dispatch = useDispatch();
  // возвращ. метод bindAct... с передач. объ. всех actions из проекта и связывываем его с dispatch
  return bindActionCreators(UserActionCreators, dispatch);
};
