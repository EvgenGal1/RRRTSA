# Изучение React.Redux.TypeScript

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

<h2 align="center">ПРОЕКТЫ</h2>

- [React & Redux & TypeScript](#React-&-Redux-&-TypeScript)
<!-- - [ReactTransitionGroup](#ReactTransitionGroup) -->

<h3 align="center">RReact & Redux & TypeScript</h3>
<!-- <hr> -->
<p align="center">???</p>

### Подключение доп. зависимостей

<p>(типы react-reduxe, сам redux, связь react-reduxe, redux-thiunk для асинхр экшенов, axios для запросов на сервер)</p>
```js
npm install @types/react-redux redux react-redux redux-thunk axios
```

#### Структура проекта

```
│
src/
├─ project/
| ├─ RRTS_UlbiTV/
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
```

#### Подкл. необходимые importы.

#### Структура кода.

- По YT видео [React & Redux & TypeScript](https://www.youtube.com/watch?v=ETWABFYv0GM&t)

<!--
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->
