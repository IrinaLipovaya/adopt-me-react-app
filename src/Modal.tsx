import React, { FunctionComponent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current); // clean-up function on unmounting
    };
  }, []); // run only once after the first rendering

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
