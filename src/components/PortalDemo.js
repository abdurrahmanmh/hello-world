import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    //https://codesandbox.io/p/sandbox/00254q4n6p?file=%2Fsrc%2Findex.js
    <h1>Portal Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
