import React from "react";
// подкл Provider и store времмено здесь (чтоб раб в др, проектах)
// import { Provider } from "react-redux";
// import { store } from "./src/store/store";
// Router
import { NavLink, Route, Routes } from "react-router-dom";
// подкл. компоненты
import { UserList } from "./src/pages/UserList";
import { TodoList } from "./src/pages/TodoList";

export function RRTS_ULBITV() {
  // const [varlet, setvarlet] = useState(false);
  return (
    // <Provider store={store}>
    <div className="RRTS_ULBITV">
      <div className="RRTS_ULBITV_body">
        <div className="__descript">
          <p>
            По видео "React & Redux & TypeScript" -
            https://www.youtube.com/watch?v=ETWABFYv0GM&t
          </p>
        </div>
        <div className="__content">
          {/* <UserList />
            <hr />
            <TodoList /> */}
        </div>
      </div>
      <hr />
      <div className="RR_ULBITV__nav">
        <nav>
          <NavLink to="/RRTS_UlbiTV/UserList">UserList</NavLink>
          <NavLink to="/RRTS_UlbiTV/TodoList">TodoList</NavLink>
          {/* <li>
            <NavLink to="/ThirdPage">Lesson4</NavLink>
          </li> */}
        </nav>
      </div>
      <hr />
      <div className="RR_ULBITV__lessons">
        <Routes>
          <Route path="UserList" element={<UserList />} />
          <Route path="TodoList" element={<TodoList />} />
        </Routes>
      </div>
    </div>
    // </Provider>
  );
}
// export { RRTS_ULBITV };
