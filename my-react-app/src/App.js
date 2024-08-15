import React, { useState, useRef } from "react";
import "./App.css";
import ContentBox from "./contentBox";
import Sidebar from "./siderBar";
import "./index.css";
import { flushSync } from "react-dom";
function App() {
  const [width, setWidth] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarOpen2, setSidebarOpen2] = useState(false);
  const [isOnMove, setISOnMove] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const startResize = (e) => {
    e.preventDefault();
    setISOnMove(true);
    setSidebarOpen2(!isSidebarOpen2);
    //const rect = divRef.current.getBoundingClientRect();
    const handleMouseMove = (e) => {
      const newWidth = e.clientX;
      setWidth(newWidth);
      console.log(newWidth);
    };
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      setISOnMove(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className=" d-flex flex-column h-100" style={{ height: "100%" }}>
      <div className="top">
        <div className="p-3 siderBarIcon">
          <svg
            onClick={toggleSidebar}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
      <div className="middle d-flex">
        {isSidebarOpen && (
          <>
            <Sidebar
              isOnMove={isOnMove}
              isSidebarOpen={isSidebarOpen}
              isSidebarOpen2={isSidebarOpen2}
              width={width}
            />

            <div
              className="bar"
              onMouseDown={startResize}
              style={{
                flex: "0 0 10px",
                cursor: "ew-resize",
                width: "10px",
              }}
            ></div>
          </>
        )}
        <ContentBox />
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
