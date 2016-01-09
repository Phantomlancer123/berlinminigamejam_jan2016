import React, {Component} from 'react';

class Button extends Component {
  render() {
    return (
      <div className="button" style={{left: this.props.left, top: this.props.top}}>{this.props.type}</div>
    );
  }
}

export default Button;
