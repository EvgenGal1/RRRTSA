import React from "react";
// подкл Provider и store времмено здесь (чтоб раб в др, проектах)
import { Provider } from "react-redux";
import { store } from "./src/store/store";
// подкл. компоненты
import { UserList } from "./src/components/UserList";
import { TodoList } from "./src/components/TodoList";

export function RRTS_ULBITV() {
  // const [varlet, setvarlet] = useState(false);
  return (
    <Provider store={store}>
      <div className="RRTS_ULBITV">
        <div className="__descript">
          <p>
            По видео "React & Redux & TypeScript" -
            https://www.youtube.com/watch?v=ETWABFYv0GM&t
          </p>
        </div>
        <div className="__content">
          <UserList />
          <hr />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}
// export { RRTS_ULBITV };
