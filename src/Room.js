import React from 'react';

function Room(props) {
  return (
    <div className="room" style={{top: props.y + "px", left: props.x + "px"}}>
    </div>
  );
}

export default Room;
