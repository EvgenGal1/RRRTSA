// хук для удобн. раб. с action (связь actCreat с dispatch)
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
// принми из общ.объедтн.actionCreators
import ActionCreators from "../store/actionCreators/actionCreators";

export const useActions = () => {
  // получ. объ. despatch
  const dispatch = useDispatch();
  // возвращ. метод bindAct... с передач. объ. всех actions из проекта и связывываем его с dispatch
  return bindActionCreators(ActionCreators, dispatch);
};
