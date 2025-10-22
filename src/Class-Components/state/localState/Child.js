import React from "react";

class Child extends React.Component{
  render() {
    console.log(this)
    return <div>
      <h1>Child component:{this.props.count}</h1>
     </div>
   }
}

export default Child