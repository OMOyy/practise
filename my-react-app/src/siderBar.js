import React, { useState, useRef } from 'react';
import Items from './items';
import { menu } from "./menu";
const Sidebar = () => {	
//const divRef = useRef(null);  	
	return (
        <>
        <div  className='left' >       
        {menu.map((item) => (
						<div className="flex items-center cursor-pointer mb-5 text-lg">							
							<p className='p-3'>{item.icon}{item.title}</p>
						</div>
					))}
        </div>
        
				
        </>
	);
};

export default Sidebar;