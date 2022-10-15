// 0.41. хук для удобн. раб. с action
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { githubActions } from "../store/github/github.slice";

// 0.42. actions объ. Пока один action (набор и изранным из slice)
const actions = {
  ...githubActions,
};

export const useActions = () => {
  // получ. объ. despatch
  const dispatch = useDispatch();
  // возвращ. метод bindAct... с передач. объ. всех actions из проекта и связывываем его с dispatch
  return bindActionCreators(actions, dispatch);
};
