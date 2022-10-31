import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions"; // связь actCreat с dispatch
import { useTypedSelector } from "../hooks/useTypedSelector"; // получ.данн.сост. с типами
// не нужны после хуков useTypedSelector (получ.данн.сост. с типами) и useAction (связь actCreat с dispatch)
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../store/actionCreators/usersActCreat";

// указ. что FnComp
export const UserList: React.FC = () => {
  // данные из сост. берез ч/з хук useSelector
  const state = useSelector((state) => state);
  // при необход. получ. отд. поле из state выдаст ошб. Причина в useSelector (плохо знает типы). Необходим свой хук с основой useSelector + типы своего общего reducera. При подсказке к =>state.(ctrl+пробел) вывод возм.полей. + при дуиструкторизации - взамен const state, фигур.скобк, подсказка - видно что можем вызвать(удобн. при больш. кол-ве reducerов,actionов,разрабов и пр.)
  const { users, loading, error } = useTypedSelector((state) => state.usersR);

  // получ dispatch ч/з хук
  // const dispatch: any = useDispatch();
  // упрощ. записи с actCreat ч/з хук useAction
  const { fetchUsers } = useActions();

  useEffect(() => {
    // использ. actCreat fetchUsers для запроса на сервер при 1ой загруз.стр.
    // dispatch(fetchUsers());
    // упрощ. записи с actCreat ч/з хук useAction
    fetchUsers();
  }, []);

  // вывод при загрузке поль-ей
  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  // вывод ошб. при загрузке поль-ей
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="UserList">
      <div className="UserList__descript"></div>
      <div className="UserList__content">
        {/* отрисовка польз-ей из массива */}
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

function useAction() {
  throw new Error("Function not implemented.");
}
// export { UserList };
