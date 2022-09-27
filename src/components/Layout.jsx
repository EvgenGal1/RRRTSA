import { Link, Outlet, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Navigation } from "./Navigation.jsx";

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
  return (
    <>
      <Navigation />
      <main
        className="container"
        style={{ position: "relative", height: "150vmax", overflow: "hidden" }}
      >
        {/* // ^ зараб - после добавления обёртки transitions.animated.location, при наведение на .menu-top__items, блоки .m-t-items__ul видны только в header. е/и курсор уйдёт с header, то hover откл - исправл. доав. к .m-t-items__ul z-индекса в css */}
        {transitions((props, item) => (
          <animated.div style={props}>
            {/* <animated.div style={{position: "absolute", ${props}}}> */}
            <div style={{ position: "absolute", width: "100%" }}>
              {/* <Routes location={item}> */}
              <Outlet location={item} />
              {/* </Routes> */}
            </div>
          </animated.div>
        ))}
      </main>
      <footer>2022</footer>
    </>
  );
};
export { Layout };
