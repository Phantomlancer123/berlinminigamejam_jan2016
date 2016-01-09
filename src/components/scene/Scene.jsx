import React, {Component} from 'react';

class Scene extends Component {
  render() {
    return (
      <div className={`scene ${this.props.name}`}>{this.props.children}</div>
    );
  }
}

export default Scene;
