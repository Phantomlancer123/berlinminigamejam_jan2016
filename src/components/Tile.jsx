import React, {Component} from 'react';
import constants from 'constants';

class Tile extends Component {
  static defaultProps = {
    width: constants.tileWidth,
    height: constants.tileHeight,
  }

  render() {
    if (!this.props.type) {
      return null;
    }

    const style = {
      left: this.props.x * this.props.width,
      top: this.props.y * this.props.height,
      width: this.props.width,
      height: this.props.height,
    }

    return <div className={`tile tile-${this.props.type}`} style={style} />;
  }
}

export default Tile;
