import React, { useEffect, useRef } from "react";

// from https://www.youtube.com/watch?v=eWO1b6EoCnQ&t=330s
const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let refHandler = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", refHandler);
    return () => {
      document.removeEventListener("mousedown", refHandler);
    };
  });
  return domNode;
};

export default useClickOutside;
