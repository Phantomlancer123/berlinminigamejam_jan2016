import React, {Component} from 'react';

class Button extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="button" style={{left: this.props.left, top: this.props.top}}>
        <div className={`icon icon-${this.props.type}`} />
        <div className="caption">{this.props.type}</div>
      </div>
    );
  }
}

export default Button;
