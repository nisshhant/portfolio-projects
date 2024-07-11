import React from 'react';
import pfp from '../assets/pfp.jpg';
import './Nishant.css' ;

function Nishant() {
  return (<>
      <div id="context" className='flex items-center justify-center'>
      <img
          src={pfp}
          alt="Profile"
          className="w-60 h-60 rounded-full object-cover border-2 border-black mr-8"
        />
        <h1>Hello,<br></br> I'm Nishant Paliwal</h1>
        
    </div>


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    
    <div className="flex h-screen items-center justify-center bg-gray-100">
    <div className="flex items-center">
        <img
          src={pfp}
          alt="Profile"
          className="w-60 h-60 rounded-full object-cover border-2 border-black mr-8"
        />
        <div>
          <h1 className="text-3xl font-serif text-gray-800 mb-4">
            Hello, I'm Nishant Paliwal
          </h1>
          <p className="text-lg text-gray-700">
            This is some additional text or description.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Nishant;
