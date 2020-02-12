import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button className='Add'
      onClick={props.added}>ADD</button>
    <button className='Remove'
      onClick={props.removed}
      disabled={props.disabled}>REMOVE</button>
  </div>
);

export default buildControl;
