import React from 'react';

function Room(props) {
  return (
    <>
      <div className="room" style={{top: props.y + "px", left: props.x + "px"}} />
      <RoomCard />
    </>
  );
}

function RoomCard() {
    return <div className="roomcard">A room a room a room</div>;
}

export default Room;
