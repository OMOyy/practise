import React, { useState, useRef } from 'react';
import './App.css';
import ContentBox from './contentBox';
import Items from './items';
import './index.css';
function App() {
  const [isResizing, setResizing] = useState(false);
  const [width, setWidth] = useState(10);
  const [startX, setStartX] = useState(0);
  const divRef = useRef(null);

  const startResize = (e) => {
    console.log('owo');
    e.preventDefault();
    const handleMouseDown = (e) =>{
      setResizing(true);
      setStartX(e.clientX);
    }  
    const handleMouseMove = (e) => {
      if (isResizing && divRef.current) {
        const newWidth = width + (e.clientX - startX);
        console.log(newWidth);
        setWidth(newWidth);

        // 获取左边界位置
        const leftBoundary = divRef.current.getBoundingClientRect().left;
        console.log('Left Boundary:', leftBoundary);
      }
    };

    const handleMouseUp = () => {
      setResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
  };
  return (
    <div className='container d-flex flex-column h-100' style={{height: '100%'}}>
      <div className='top'></div>
      <div className='middle d-flex'>
        <div ref={divRef} className='left'style={{ flex: `1 0 ${width}%`,cursor: 'ew-resize'}}
      onMouseDown={startResize}>
        <Items/>  
        <Items/>  
        <Items/>  
        <Items/>  
        <Items/>  
        <Items/>  
        <Items/>  
        <Items/>  
        </div>
        <ContentBox />        
        </div>                 
      <div className='bottom'></div>
    </div>
  );
}

export default App;
