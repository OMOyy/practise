import React, { useState, useRef } from "react";
import Items from "./items";
import { menu } from "./menu";
const Sidebar = ({ width, isSidebarOpen, isSidebarOpen2, isOnMove }) => {
  //const divRef = useRef(null);
  return (
    <div
      className={`left ${isSidebarOpen ? "collapsed " : "close"}`}
      style={isSidebarOpen2 ? { flex: `0 0 ${width}px` } : {}}
    >
      {menu.map((item) => (
        <div className="flex items-center cursor-pointer mb-5 text-lg">
          <p className="p-3">
            {item.icon}
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
