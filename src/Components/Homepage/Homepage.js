import React from 'react';
import './Homepage.css'
import Questions from '../Questions/Questions';


function Homepage(prop) {
 
  return <div className='HomeContent'>
      <h3 className='title'>{prop.title} </h3>
         <Questions/> 
  </div>;
}

export default Homepage;
