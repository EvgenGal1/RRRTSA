import * as React from "react";

export function Lesson4() {
  return (
    <div className="RR_ULBITV--body__lesson4">
      <h2>Lesson4</h2>
      <h3>customReducer(массивы), Action creators.</h3>
      <div>
        <p>
          Изначально <b>customArrs[]</b> в customReducer.ts пуст. Прописываем
          логику.
        </p>
        <p>
          Созд <span>fn()addCustom</span> добавления польз-лей по клик,
          принимающая <b>name</b>
        </p>
        <p>
          В fn созд. объ. польз-ля <b>customer</b> с парам-ми name и id
        </p>
        <p>
          В dispatch передаём action с типом <b>ADD_CUSTOM</b> и данными
          <b>customer</b> для записи
        </p>
        <p>
          На кнп. прописываем onClick с вызовом fn()addCustom с парам.{" "}
          <b>prompt()</b>
        </p>
      </div>
      <div>
        <p>
          В перем. <span>customArrs</span> ч/з <b>useSelector</b> получ массив
          клиентов. обращ. к ключу reducerа и затем к перем. -{" "}
          <b>state.customR.customArrs</b>
        </p>
        <p>
          Созд. отрисовку блоков <b>по условию длины</b> customArrs
        </p>
        <p>
          Е/и длина &gt; 0, то перебор <b>customArrs ч/з map</b>, кажд. элем. в
          li + key + onClick <b>fn()removeCustom</b> - удаление по клик
        </p>
        <p>Е/и массив пуст, то заглушку</p>
        <p>
          Созд <span>fn()removeCustom</span> удален польз-ля из списка по клик,
          принимающая <b>customer</b>
        </p>
        <p>
          В dispatch передаем тип <b>REMOVE_CUSTOM</b> и перебраный <b>id</b>{" "}
          customer
        </p>
      </div>
      <div>
        <p>
          В customReducer в <span>type ADD_CUSTOM</span> добавл. нов.польз-ля
          переданого ч/з action
        </p>
        <p>
          ч/з спрет ...разворач.стар.масс., возвращ.нов.объ.: присваиваем
          нов.масс.[], где ...разворач.сущ-щий масс. + в конце объ.переданый ч/з
          action
        </p>
        <p>...state, customArrs: [...state.customArrs, action.payload]</p>
        <p>
          В <span>type REMOVE_CUSTOM</span> удаляем польз-ля переданого ч/з
          action.
        </p>
        <p>
          ...разворач.сост., получ.нов.объ.: масс. фильтруем(возвращ.нов.масс.)
          и получ. нов.объ. где id.кл. = id.переданого, не попадает в нов.масс.
        </p>
        <p>
          ...state, customArrs: state.customArrs.filter(customArr =&gt;
          customArr.id !== action.payload )
        </p>
      </div>
      <div>
        <p>
          <b>Оптимизация передачи action в dispatch</b>
        </p>
        <p>Export простых fn-й. Парамметром принимимающие данные.</p>
        <p>
          Вызов fn, передаём данные, возвращ.объ. с типом прописаного action и
          данными передаными в парам.
        </p>
        <p>
          Выносим из action <b>type в отдельные константы</b> от ошб. и контроля
        </p>
      </div>
      <div>
        <p>
          В обеих fn-иях записи addCustom | removeCustom прописывается{" "}
          <b>передача action ч/з fn() оптимизации</b>.
        </p>
        <p>
          Раньше передавали объ. Счас dispatch вызов fn() оптимизации которые
          возвращ.объ. куда передаём данные
        </p>
      </div>
    </div>
  );
}
