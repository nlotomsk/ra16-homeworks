import React from 'react';

function IconSwitch(props) {
    return (
        <span className="material-icons-round">
      <button onClick={props.onSwitch}><i className='material-icons'>{props.icon}</i></button>
    </span>
        
    )
}

export default IconSwitch