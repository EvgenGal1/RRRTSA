import { Link, Outlet, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Navigation } from "./Navigation";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

const Layout = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translateX(100%)",
      // transitionTimingFunction: "cubic-bezier(0.5, -0.3, 0.51, 1.32)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s"
      // transform: 'translateY(50%)'
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
      transitionTimingFunction: "ease",
      // transform: 'translateY(50%)'
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
      transitionTimingFunction: "ease",
      // transform: 'translateY(50%)'
    },
  });

  //  -------------------------------------------------------------
  // const [height, setHeight] = useState();
  // const ref = useRef(null);

  // const ref = createRef(null);
  // useEffect(() => {
  //   var heightBlock = document.createElement("height--block").scrollHeight;
  //   // getElementsByClassName
  //   console.log("heightBlock : " + heightBlock);
  // }, []);
  // useEffect( () => {

  // useLayoutEffect(
  //   () => {
  //     setHeight(ref.current.clientHeight);
  //     if (ref.current.clientHeight) {
  //       // setTimeout(() => {
  //       // setHeight(ref.current.clientHeight);
  //       console.log(ref.current.clientHeight);
  //       console.log(setHeight(ref.current.clientHeight));
  //       // }, 5000);
  //     }

  //     // });
  //     // }, [setHeight]);
  //     //  --------------------------------
  //     // const element = document.getElementById("height--block");
  //     // if (element) {
  //     //   setHeight(element.getBoundingClientRect().height); // or height
  //     //   console.log("setHeight : " + setHeight());
  //     //   console.log("height : " + height);
  //     // }
  //   },
  //   [
  //     // setHeight,
  //     // height,
  //     // ref.current.clientHeight,
  //     // ref.current,
  //     // ref.current ? ref.current.clientHeight : 0,
  //   ]
  // );
  //  ---------------------
  // https://translated.turbopages.org/proxy_u/en-ru.ru.96ff9523-634892d5-cd63e7fa-74722d776562/https/stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
  // https://codesandbox.io/s/componentwithdimensions-5p44h?file=/src/ComponentWithDimensions.js
  // const [height, setHeight] = useState();
  // const ref = useRef(null);
  // const targetRef = useRef();
  // const [dimensions, setDimensions] = useState({});

  // // holds the timer for setTimeout and clearInterval
  // let movement_timer = null;

  // // the number of ms the window size must stay the same size before the
  // // dimension state variable is reset
  // const RESET_TIMEOUT = 100;

  // const test_dimensions = () => {
  //   // For some reason targetRef.current.getBoundingClientRect was not available
  //   // I found this worked for me, but unfortunately I can't find the
  //   // documentation to explain this experience
  //   if (targetRef.current) {
  //     setDimensions({
  //       width: targetRef.current.offsetWidth,
  //       height: targetRef.current.offsetHeight,
  //     });
  //   }
  // };

  // // This sets the dimensions on the first render
  // useLayoutEffect(() => {
  //   test_dimensions();
  // }, []);

  // // every time the window is resized, the timer is cleared and set again
  // // the net effect is the component will only reset after the window size
  // // is at rest for the duration set in RESET_TIMEOUT.  This prevents rapid
  // // redrawing of the component for more complex components such as charts
  // window.addEventListener("resize", () => {
  //   clearInterval(movement_timer);
  //   movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT);
  // });
  //  ---------------------
  //translated.turbopages.org/proxy_u/en-ru.ru.96ff9523-634892d5-cd63e7fa-74722d776562/https/github.com/wellyshen/react-cool-dimensions
  //  ---------------------
  // https://www.kindacode.com/article/react-get-the-width-height-of-a-dynamic-element/
  //  ---------------------
  // https://ru.stackoverflow.com/questions/1327654/%D0%9A%D0%B0%D0%BA-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B4%D0%B8%D1%82%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D0%B0-div-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0-react-js
  // const [height, setHeight] = useState();
  // const ref = useRef(null);
  // const [size, setSize] = React.useState({});
  // const ref = React.useRef();

  // const resizeHandler = () => {
  //   const { clientHeight, clientWidth } = ref.current || {};
  //   setSize({ clientHeight, clientWidth });
  // };

  // React.useEffect(() => {
  //   window.addEventListener("resize", resizeHandler);
  //   resizeHandler();
  //   console.log("size.clientHeight 1 : " + size.clientHeight);
  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //     console.log("size.clientHeight 2 : " + size.clientHeight);
  //   };
  // }, []);
  //  ---------------------
  // https://translated.turbopages.org/proxy_u/en-ru.ru.ef249d77-63489c16-58929d65-74722d776562/https/stackoverflow.com/questions/73247936/how-to-dynamically-track-width-height-of-div-in-react-js
  // const [width, setWidth] = useState();
  // const [height, setHeight] = useState();

  // // useRef allows us to "store" the div in a constant,
  // // and to access it via observedDiv.current
  // const observedDiv = useRef(null);

  // useEffect(() => {
  //   // the code in useEffect will be executed when the component
  //   // has mounted, so we are certain observedDiv.current will contain
  //   // the div we want to observe
  //   resizeObserver.observe(observedDiv.current);

  //   // if useEffect returns a function, it is called right before the
  //   // component unmounts, so it is the right place to stop observing
  //   // the div
  //   return function cleanup() {
  //     resizeObserver.disconnect();
  //   };
  //   // }, [])
  // });

  // const handleElementResized = () => {
  //   if (observedDiv.current.offsetWidth !== width) {
  //     setWidth(observedDiv.current.offsetWidth);
  //   }
  //   if (observedDiv.current.offsetHeight !== height) {
  //     setHeight(observedDiv.current.offsetHeight);
  //   }
  // };

  // // we also instantiate the resizeObserver and we pass
  // // the event handler to the constructor
  // const resizeObserver = new ResizeObserver(handleElementResized);
  // !!! не раб - TypeError: Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element'
  //  -------------------------------------------------------------
  return (
    <>
      <Navigation />
      <main
        className="main container"
        style={{
          position: "relative",
          // height: "160vmax",
          // overflow: "hidden",
        }}
      >
        {/* // ^ зараб - после добавления обёртки transitions.animated.location, при наведение на .menu-top__items, блоки .m-t-items__ul видны только в header. е/и курсор уйдёт с header, то hover откл - исправл. доав. к .m-t-items__ul z-индекса в css */}
        {transitions((props, item) => (
          <animated.div style={props}>
            {/* <animated.div style={{position: "absolute", ${props}}}> */}
            <div
              // ref={ref}
              // ref={observedDiv}
              // createRef={ref}
              // id="height--block"
              style={{
                position: "absolute",
                width: "100%",
              }}
            >
              {/* {height} */}
              {/* {dimensions.height} */}
              {/* 1 */}
              {/* {height} */}
              {/* 2 */}
              {/* <Routes location={item}> */}
              {/* ??? не раб - ошб при формате tsx - (property) location: Location. Тип "{ location: Location; }" не может быть назначен для типа "IntrinsicAttributes & OutletProps". Свойство "location" не существует в типе "IntrinsicAttributes & OutletProps" */}
              <Outlet location={item} />
              {/* </Routes> */}
            </div>
          </animated.div>
        ))}
      </main>
      <footer
        className="footer"
        style={{
          width: "100%",
          height: "50px",
          position: "absolute",
          // ~ временное решение
          top: "150%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          background: "#333",
        }}
      >
        2022
        <div
          style={{
            display: "block",
            width: "100%",
            height: "50px",
            textAlign: "center",
            // position: "absolute",
            // top: "100%",
            background: "#555",
          }}
        >
          2022
        </div>
      </footer>
    </>
  );
};
export { Layout };
