import React from "react";

const Hello = () => {
    //return (
     //   <div>
     //       <h1>Hello Zaya</h1>
      //  </div>
    //)
    return React.createElement('div',null,React.createElement('h1',null,'hello zaya'))
}
export default Hello