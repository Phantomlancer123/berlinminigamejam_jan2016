import React, {Component} from 'react';

class Tile extends Component {
  static defaultProps = {
    width: 64,
    height: 64,
  }

  render() {
    if (!this.props.type) {
      return null;
    }

    const style = {
      x: this.props.x * this.props.width,
      y: this.props.y * this.props.height,
      width: this.props.width,
      height: this.props.height,
    }

    return <div className={`tile tile-${this.props.type}`} />;
  }
}

export default Tile;
