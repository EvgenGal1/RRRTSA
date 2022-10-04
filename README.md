<h1 align="center">Изучение React.Redux.Router.TypeScript</h1>

<h2 align="center">"Быстрый" старт</h2>

```js
# на готовый проект
npm install @reduxjs/toolkit react-redux
# новый проект
## Redux + JS шаблон
npx create-react-app my-app --template redux
или
## Redux + TypeScript шаблон
npx create-react-app my-app --template redux-typescript
или
## TypeScript шаблон
npx create-react-app my-app --template typescript
```

<hr>
<h2 align="center">ПРОЕКТЫ</h2>

- [React Redux Doc](#React-Redux-Doc)
- [React & Redux & TypeScript](#React-&-Redux-&-TypeScript)
- [React++ steak 2022](#React++-steak-2022)
<!-- - [ReactTransitionGroup](#ReactTransitionGroup) -->

<hr>
<h2 align="center">Архитектура проекта</h2>

```
│
src/
├─ projects/
| ├─ RR_Doc/                  ──  Доки от React-Redux
| ├─ RR_UlbiTV/               ──  основы React и Redux от UlbiTV
| ├─ RRTS_UlbiTV/             ──  полный курс React & Redux & TypeScript от UlbiTV
| │ ├─ src/
| | | ├─ components/          ──  компоненты
| | | ├─ types/               ──  описание типов
│ │ | └─ store/               ──  взаимодействие с Redux
│ │ |   ├─ reducers/          ──  reduSers reduCers ???
│ │ |   | ├─ useReducer.ts    ──  взаимодействие со списком пользователя приложения
│ │ |   └─ index.ts           ──  инициализация store приложения
│ │ └─ RRTS_UlbiTV.jsx        ──  сбора проекта
│ ├─ App.css                  ──  общие стили
│ ├─ App.tsx                  ──  сборка всех проектов
│ └─ App.test.tsx             ──  тесты ???




│ ├─ html/              ──  многостраничный проект HTML
│ │ │─ views/         ──  одностраничные проекты HTML
│ │ └─ includes/      ──  подкл. блоки к проектам HTML
│ ├─ styles/            ──  стили проекта
│ │  ├─ css/           ──  CSS стили + разбор
│ │  └─ scss/          ──  SCSS стили + разбор
│ ├─ js/                ──  доп. JS приложения, + включ. + разбор
│ ├─ img/               ──  изображения проекта
│ ├─ fonts/             ──  шрифты проекта
│ ├─ index.html         ──  начальный файл HTML приложения
│ ├─ index.js           ──  основной файл JS приложения, + включ.
│ └─ webpack.config.js  ──  настройка webpack


РАССМОТРЕТЬ АРХИТЕКТУРУ ПРИЛОЖЕНИЯ
https://webformyself.com/arxitektura-react-kak-strukturirovat-i-nastroit-prilozhenie/

└── /src
    ├── /assets           - глоб.статич.ресурсы (изо, SVG, лого)
    ├── /components       - глоб. общ/повтор. компон, (формы, кнп, оболочки, навигация)
    ├── /services         - модули JS
    ├── /store            - глоб.хран. Redux
    ├── /utils            - утилиты, помощники, константы
    ├── /pages(views)     - станицы (осн.части приложений)
    ├── /types            - проект TypeScript
    ├── index.js          - точкой входа
    └── App.jsx           - настр. аутентификации и маршрутизации
```

<hr>
<h3 align="center">React Redux Doc</h3>
<p align="center">Разбор React Redux TypeScript по офицальной документации</p>

<!-- <hr> -->
<h4 align="center">Основные моменты:</h4>

<!-- <hr> -->
<h4><b>Концепции и Термины</b></h4>

<h4>Концепция одностороннего потока данных</р>

- <p>State - источник правды, который управляет нашим приложением (описывает состояние приложения в определенный момент времени);</p>
- <p>View - декларативное описание пользовательского интерфейса на основе текущего состояния (перерисовывается на основе нового состояния).</p>
- <p>Actions - события, которые происходят в приложении на основе пользовательского ввода, и инициируют обновления в состоянии.</p>

<h4>Терминология</h4>

- <p>State - Хранилище/банк</p>
- <p>Actions - Действие/собятия. Описание событий в приложении</p>
- <p>Dispatch - Диспетчер/запуск. Передаёт Action в Reducer</p>
- <p>Reducer - Прослушиватель/обработчик/передатчик. Принимает stete и action. Созд.нов. state. Логика работы(Система).</p>

<p><b>State</b> - Текущее состояние приложения Redux</p>
<p><b>Actions</b> - Простой объ. JS с полем type(описание - fn|категор. действия/произошедшее событие), payload(доп.инфо).</p>
<p><b>Reducer<b> - fn получ. <b>state<b> и <b>action<b>. Опред. как обнов. сост. е/и надо, возвращ. нов. сост.</p>
<p><b>Dispatch</b> - метод для единств-го обновл. сост. и передачи action</p>
<p><b>Selectors<b> - fn для извлеч. опред. сост из store</p>

```js
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

- <p><b>Action Creators</b> - функция, создает и возвращает объект действия</p>

```js
const addTodo = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
```

- <p>Dispatch - Диспетчер/сотрудник. Передаёт Action и state в Reducer</p>

* <p>Reducer - fn принимает текущий состояние и экшен (state и action), может обновл. state, возвращает новый state (раб как прослуш.событ. - обраб.событ. на основ.получ.действ.).
  - <p>Правила:</p>
    - <p>только вычисляет новое сост. на основе арг. state и action</p>
    -  <p>не измен существ.state. копир существ. внося измен. в копию</p>
    -  <p>не выполн. асинхр., др.вычислен</p>
  - <p>Логика:</p>
      - <p>проверка Reducerа на Actions</p>
      - <p>при Actions, + копия, обновление, возврат</p>
      - <p>если нет Actions, возврат сущест.state</p>

```js
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Проверьте, заботится ли reducer об этом action
  if (action.type === "counter/increment") {
    // Если так, сделайте копию state
    return {
      ...state,
      // и обновить копию с новым значением
      value: state.value + 1,
    };
  }
  // в противном случае вернуть существующее состояние без изменений
  return state;
}
```

- <p>Любая Логика - if/else, switch, циклы и так далее</p>

<!-- <hr> -->
<h5>Порядок написания из Доков</h5>

- Создаем папку и файл src/app/store.js - Хранилище Redux и его экспорт
- Иморт Хранилище и Provider(Поставщик) в главные компонент.
- Обёртка основного компонента в Provider. Хранилище передаём как св-во
- Создаём папку и файл src/features/counter/counterSlice.js - срез состояния Redux
- Создаём папку и файл src/features/counter/Counter.js - Используйте состояние Redux и действия в компонентах

Общее

- Создайте хранилище Redux сconfigureStore
  - configureStore принимает функцию reducer в качестве именованного аргумента
  - configureStore автоматически настраивает магазин с хорошими настройками по умолчанию
- Предоставьте хранилище Redux компонентам приложения React.
  - Поместите компонент React Redux <`Provider`> вокруг вашего <`App` />
  - Передайте магазин Redux как <`Provider store={store}`>
- Создайте редуктор Redux «slice» с помощью createSlice
  - Вызов createSlice со строковым именем, начальным состоянием и именованными функциями редуктора
  - Функции редуктора могут «мутировать» состояние, используя Immer.
  - Экспортируйте сгенерированный редуктор фрагментов и создателей действий.
- Используйте useSelector/useDispatchхуки React Redux в компонентах React
  - Чтение данных из хранилища с помощью хука useSelector
  - Получите функцию dispatch с хуком useDispatch и отправьте действия по мере необходимости

<!-- <hr> -->
<h5>Архитектура приложения</h5>

```
RR_Doc/                    ──  Проект по Докам от React-Redux
├─ src/
| ├─ store/                ──  взаимодействие с Redux(Хранилище Redux и его экспорт)
| | └─ store.js            ──  хранилище Redux и его экспорта
| └─ features              ──  особености
|   └─ counter/            ──  компоненты
|     ├─ counterSlice.js   ──  срез состояния Redux
|     └─ Counter.js        ──  Используйте состояние Redux и действия в компонентах
└─ RR_Doc.jsx              ──  Основной компонент Приложения с обёрткой
```

<!------------------------------------ ПРОЕКТ R3TS22_VM ------------------------------------>
<hr>
<h3 align="center">React стек 2022. TypeScript, Redux Toolkit, RTKQuery, Tailwind</h3>
<!-- <hr> -->
<p align="center">Продвинутый React. В видео технологии: TypeScript, Redux Toolkit, RTKQuery, Tailwind</p>

<h4>Подключение доп. зависимостей</h4>
<p>0.1.</p>

<p>Tailwin - CSS-фреймворк со встроенными классами для стилей прямо в коде</p>

```js
# Установка CSS Tailwin
npm install -D tailwindcss postcss autoprefixer
# Запуск для генерации 2х файлов tailwind.config.js и postcss.config.js
npx tailwindcss init -p
```

<p>index.css и tailwind.config.js добавили код с сайта</p>

```css
# index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<p>Так же - redux toolkit, react-redux(связь м/у ними), react-router-dom(навигация)</p>

<h4>Добавил Router</h4>
<p>0.2.</p>

- в ./index.tsx + {BrowserRouter} и оборачивание App
- ++ страниц в pages/ и projects/
- в ./App.tsx + {Routes, Route}, + importы страниц
- ++ components/Header.tsx, + {Link}, + структура nav с ссылками страниц
- в App.tsx + структура маршрутов/путей/элементов

<h4>Добавил store от Reduxe</h4>
<p>0.3.</p>

- ++ store/index.ts, + {configureStore} + reducer
- в ./index.tsx + {Provider, store} и оборачивание BrowserRouter/App

<h4>Добавил API</h4>
<p>0.4.</p>

- ++ store/github/ - логика/сущности раб. с github
- ++ github/github.api.ts, + {createApi, fetchBaseQuery} - настройка API для раб. с поиском
- ++ созд. API с настр. reducerPath(адрес кэш), baseQuery(базовый url), endpoints(конечные точки)
- в store/index.ts reducer соед./регистр. API githubApi со store. ключя:значение
- в github.api.ts при обращ. к `const {} = githubApi` в скобках есть авто.кастом.хуки
- export хука useSearchUsersQuery

<h4>Используем кастомные hookи</h4>
<p>0.5.</p>

- в HomePage.tsx пропис хук. `const {} = useSearchUsersQuery()`
- смотрим подсказку (ctrl+пробел) полей в фигурных скобках
- пропис поля {isLoading,isError,data} (загрузка,ошибки,данные)
- в хук TS ошибка т.к. не передали 2 параметра, исправ в github.api.ts
- в github.api.ts указ. типизацию в endpoints:searchUser:query 2 джейнерика
- дженерик — возможность созд. компоненты раб. с неск-ми типами
- 1ый - ответ от сервера(врем. any), 2ой - принимаемый параметр для осущест. запроса(string)
- указ. тип поиска, парам. запроса, св-во

<h4>Запрос по API и интерфейсы</h4>
<p>0.6.</p>

- в HomePage.tsx в хук пропис. строку для поиска userov (например EvGen)
- в браузере DevTools.Network видим асинхр запрос
- типизацация в TS: из поля Response копир все и генерируем в JSON? на http://json2ts.com
- ++ modals/modals.ts вставл. из сайти, убираем наружн. объ. оставляя 2 export interface
- в modals.ts переименов оба interface в IUser и ServerResponse + джейнерик &lt;T&gt;

<h4>Доработка API</h4>
<p>0.7.</p>

- в github.api.ts указ. типизацию 1джейнермка - ServerResponse + передача ожидания &lt;IUser&gt;
- пропис. лимит ответа с сервера в params - per_page
- в DevTools.Preview, помимо прочего, в items приходит лимит
- после query пропис колбэк для трансформ. данных из ответа - transformResponse только items
- в query, после transformResponse, меняем ожидание на массив IUsers
- проверка данных console.log(data); в HomePage.tsx

<h4>Доработка store ПО middleware</h4>
<p>0.8.</p>

- в console должен быть Warning от RTK-Query по отсутствию middleware (кэш, авто обновление, )
- middleware - fn послед-но вызыв. в процессе обновления данных в хранилище
- в store/index.ts + парам middleware (промежуточное ПО) где ч/з метод getDefaultMiddleware, получаем массив, конкатенируем с middleware от githubApi

<h4>Визуализация полученных данных</h4>
<p>0.</p> 26:22

<h4>Настройки ввода поиска</h4>
<p>0.9. - 0.19.</p>
<p>Описание в файлах. Сюда, возможно, залью позже</p>

<p>По видео "React стек 2022. TypeScript, Redux Toolkit, RTKQuery, Tailwind" - https://www.youtube.com/watch?v=lkbm-zlcFvs</p>

<!------------------------------------ ПРОЕКТ RR_MN ------------------------------------>
<hr>
<h3 align="center">React Router 6 - базовый роутинг React</h3>
<!-- <hr> -->
<p align="center">мини-курсе с пошаговым разбором</p>

<h4>Подключение доп. зависимостей</h4>
<h4>Добавил Router</h4>

<div>Многие процессы работы отражены в projects/RR_MN</div>
<p>Основные моменты внесу после изучения.</p>

<p>По видео "React Router 6 - базовый роутинг React-приложения" - https://www.youtube.com/watch?v=0auS9DNTmzE&list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE</p>

<!------------------------------------ ПРОЕКТ RRTS-UlbiTV ------------------------------------>
<hr>
<h3 align="center">React & Redux & TypeScript</h3>
<!-- <hr> -->
<p align="center">???</p>

### Подключение доп. зависимостей

<p>(типы react-reduxe, сам redux, связь react-reduxe, redux-thiunk для асинхр экшенов, axios для запросов на сервер)</p>
```js
npm install @types/react-redux redux react-redux redux-thunk axios
```

#### Подкл. необходимые importы.

#### Структура кода.

#### Проекты

##### React Redux Doc

##### UlbiTV

- По YT видео [Redux и React](https://www.youtube.com/watch?v=5Qtqzeh5FeM)
- По YT видео [React & Redux & TypeScript](https://www.youtube.com/watch?v=ETWABFYv0GM&t)
- По YT видео [React++ steak 2022](https://www.youtube.com/watch?v=lkbm-zlcFvs)
