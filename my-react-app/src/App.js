import React, { useState, useRef, useEffect  } from 'react';
import './App.css';
import ContentBox from './contentBox';
import Items from './items';
import './index.css';
function App() {
  const [isResizing, setResizing] = useState(false);
  const [width, setWidth] = useState(50);
  const [startX, setStartX] = useState(0);
  const divRef = useRef(null);
  let isStartResize = false;
  
  useEffect(() => {
    // Just run the first time
    setResizing(true);
    console.log('render')
  }, [isStartResize])  
   
  const startResize = (e) => {
    e.preventDefault();
    const rect = divRef.current.getBoundingClientRect();
    const rightEdge = rect.left + rect.width;
    const isMouseNearRightEdge = (e) => {    
      const mouseX = e.clientX; console.log("oxo");
      return mouseX > rightEdge - 5 && mouseX < rightEdge + 5; 
      
    };
    if (isMouseNearRightEdge(e)) {
        isStartResize = true;
        setStartX(e.clientX);console.log(startX);      
      };
      const handleMouseMove = (e) => {
        if (isResizing) {console.log("owo");
          const newWidth = width + (e.clientX - startX);
          setWidth(newWidth);console.log(e.clientX - startX);
        }          

      }
      const handleMouseUp = () => {
        //setResizing(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    
  };
  return (
    <div className='container d-flex flex-column h-100' style={{height: '100%'}}>
      <div className='top'></div>
      <div className='middle d-flex'>
        <div ref={divRef} className='left'style={{ flex: `1 0 ${width}px`,cursor: 'ew-resize'}}
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
