import React from "react";

class HOC1 extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hovered{count}</h2>
      </div>
    )
  }
}

export default OriginalComp(HOC1)
