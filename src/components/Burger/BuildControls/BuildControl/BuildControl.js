import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button className='Add'>ADD</button>
    <button className='Remove'>REMOVE</button>
  </div>
);

export default buildControl;
