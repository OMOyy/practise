import React, { useState, useRef } from 'react';
import './App.css';
import ContentBox from './contentBox';
import Sidebar from './siderBar';
import './index.css';
function App() {
  const [width, setWidth] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const startResize = (e) => {
    e.preventDefault();
    //const rect = divRef.current.getBoundingClientRect();
    const handleMouseMove = (e) => {
      if(e.clientX < 500){ //500隨便設的，要再思考一下
        const newWidth = e.clientX ;
        setWidth(newWidth);
      }        
    }
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
  };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }; 
  return (
    <div className=' d-flex flex-column h-100' style={{height: '100%'}}>
      <div className='top'>
        <div className='p-3 siderBarIcon'><svg  onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className ="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></div>
      </div>
      <div  className='middle d-flex'>
        <div className={`d-flex sidebar ${isSidebarOpen  ? 'collapsed' : 'close' }`} style={isSidebarOpen ?  { flex: `1 0 ${width}px`,} :{} } >
          {isSidebarOpen && (
          <>
          <Sidebar/> 
          <div className='bar'onMouseDown={startResize}style={{cursor: 'ew-resize', width: '10px'}}></div>         
          </>
          )}
           </div>
        <ContentBox />  
        </div>                   
      <div className='bottom'></div>
    </div>
  );
}

export default App;
