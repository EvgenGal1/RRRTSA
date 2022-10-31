import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions"; // связь actCreat с dispatch
import { useTypedSelector } from "../hooks/useTypedSelector"; // получ.данн.сост. с типами

// указ. что FnComp
export const TodoList: React.FC = () => {
  // статичная пагинация (без высчета стр.)
  const pages = [1, 2, 3, 4, 5];

  // данные из сост. берез ч/з хук свой useTypedSelector. Улучшеный useSelector с типами
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todosR
  );

  // получ dispatch ч/з хук
  // const dispatch: any = useDispatch();
  // упрощ. записи с actCreat ч/з хук useAction
  // загружаем ч/з свой хук useActions(связь actCreats с dispatch)
  const { fetchTodos, setTodosPage } = useActions();

  // использ. actCreat fetchTodos для запроса на сервер при 1ой загруз.стр.
  useEffect(() => {
    // в парам передаём №стр. и лимит
    fetchTodos(page, limit);
    // page в зависимость
  }, [page]);

  // вывод при загрузке дел
  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  // вывод ошб. при загрузке дел
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="TodoList">
      <div className="TodoList__descript"></div>
      <div className="TodoList__content">
        <>
          {/* отрисовка списка из массива */}
          {todos.map((todo) => (
            <div key={todo.id}>
              {todo.id} - {todo.title}
            </div>
          ))}
          {/* оборач в disFlex для корректн отраж.эл-ов в dive */}
          <div style={{ display: "flex" }}>
            {/* добавл.цифры из масс. ч/з перебор */}
            {pages.map((p) => (
              <div
                key={p}
                // стили по условию. е/и итерац. = сост. то зелён рамка
                style={{
                  border: p === page ? "2px solid green" : "1px solid gray",
                  padding: "10px",
                }}
                // при клак измен стр.сост по вызов actCr fetchUsers
                onClick={() => setTodosPage(p)}
              >
                {p}
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

function useAction() {
  throw new Error("Function not implemented.");
}
// export { TodoList };
