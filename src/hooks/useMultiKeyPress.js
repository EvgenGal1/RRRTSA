import React, { useState, useEffect } from "react";

// `нажаты клавиши`.
// function areKeysPressed(keys = [], keysPressed = []) {
// const AreKeysPressed = (keys = [], keysPressed = []) => {
function areKeysPressed(keys = [], keysPressed = []) {
  // Set - множество для хран. уник. значен. Элем. после итерации(перебора) добавл в нов. Set без возврата или пустой. Записали клвш по умолч.
  const required = new Set(keys);
  // перебор keysPressed(useMultiKeyPress - хз, не понятно)
  for (var elem of keysPressed) {
    // ~~~ не понятно - в клавш.по умолч удал. эл. из перребора
    required.delete(elem);
  }
  // возвращ. (true?) если размер 0
  return required.size === 0;
}
export { areKeysPressed };

// `Нажатие нескольких клавиш`
// ~~~ не понятно - выводит "emoji" е/и зажаты все keys + в keysPressed(ч/з useMultiKeyPress) получ. (хз что?true?) + передали emoji
const MultiKeysPressed = ({ keys, keysPressed, emoji }) => {
  const arePressed = areKeysPressed(keys, keysPressed);

  if (arePressed) {
    return emoji;
  }
  return null;
};
export { MultiKeysPressed };

// `использовать многоклавишное нажатие`.
// ??? не знаю правильно ли раб. - при зажатых неск опред клвщ. е/и нажать одинарные опред. клвш. то вйдет контент
// function useMultiKeyPress() {
const useMultiKeyPress = () => {
  // состояние для отслеж нажат клвш
  const [isKeyPressed, setIsKeyPressed] = useState(new Set([]));

  // function downHandler({ key }): void {
  function downHandler({ key }) {
    // console.log("key Mult Down 0: " + key);
    // `установить нажатую клавишу``клавиши нажаты``добавить``ключ`
    setIsKeyPressed(isKeyPressed.add(key));
    // console.log("key Mult Down 1: " + key);
  }

  const upHandler = ({ key }) => {
    // console.log("key Mult Up 0: " + key);
    isKeyPressed.delete(key);
    setIsKeyPressed(isKeyPressed);
    // console.log("key Mult Up 1: " + key);
  };

  // console.log("Mult isKeyPressed 0: " + isKeyPressed);
  // console.log("Mult setIsKeyPressed 0: " + setIsKeyPressed);
  useEffect(() => {
    // console.log("Mult isKeyPressed 1: " + isKeyPressed);
    // console.log("Mult setIsKeyPressed 1: " + setIsKeyPressed);
    window.addEventListener("keydown", downHandler);
    // отрисовка мигает т.к. есть слушатель отжатия. е/и убрать то будет нажата. t|b оставить то
    window.addEventListener("keyup", upHandler);
    // возвращ return для откл от слушателей
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Пустой массив гарантирует, что эффект работает только при монтаже и демонтаже

  return isKeyPressed;
};

export { useMultiKeyPress };
