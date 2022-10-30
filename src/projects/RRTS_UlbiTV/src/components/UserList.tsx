import React from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

// указ. что FnComp
export const UserList: React.FC = () => {
  // данные из сост. берез ч/з хук useSelector
  // const state = useSelector((state) => state);
  // при необход. получ. отд. поле из state выдаст ошб. Причина в useSelector (плохо знает типы). Необходим свой хук с основой useSelector + типы своего общего reducera. При подсказке к =>state.(ctrl+пробел) вывод возм.полей. + возмож. дуиструкторизации - убрать state, фигур.скобк, подсказка - видно что можем вызвать (удобн. при больш. кол-ве reducerов,actionов,разрабов и пр.)
  const { users, loading, error } = useTypedSelector((state) => state.usersR);

  return (
    <div className="UserList">
      <div className="UserList__descript"></div>
      <div className="UserList__content"></div>
    </div>
  );
};
// export { UserList };
