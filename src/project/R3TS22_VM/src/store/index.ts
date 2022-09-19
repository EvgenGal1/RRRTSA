// инициализация store приложения
import {  createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import {legacy_createStore as Createstore} from 'redux'
// Мы рекомендуем использовать метод Configurestore пакета @Reduxjs/Toolkit, который заменяет Createstore.

// Redux Toolkit - это наш рекомендуемый подход к написанию Redux Logic, включая настройку магазина, редукторы, извлечение данных и многое другое.

// Для получения более подробной информации, пожалуйста, прочитайте эту страницу Redux Docs: https://redux.js.org/introduction/why-rtk-is-redux-today

// Configurestore из Redux Toolkit - это улучшенная версия Createstore, которая упрощает настройку и помогает избежать общих ошибок.

// Вы не должны использовать пакет Redux Core сегодня, за исключением учебных целей. Метод Createstore из пакета Core Redux не будет удален, но мы рекомендуем всем пользователям перейти на использование Redux Toolkit для всего кода Redux.

// Если вы хотите использовать Createstore без этого предупреждения о визуальном смягчении, используйте импорт Legacy_Createstore:

// import {legacy_createStore as  Createstore} from 'redux'

// SwoйStvo "Createstore" Obъyalenos, no o to to to зnaheneee nabыlo proshytano.ts (6133)
// "Cretinestore" UStAre.TS (6385)
// export const store = Createstore({}, applyMiddleware(thunk))
