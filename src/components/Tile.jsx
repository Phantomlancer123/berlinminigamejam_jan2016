import React, {Component} from 'react';

class Tile extends Component {
  render() {
    if (!this.props.type) {
      return null;
    }

    return <div className={`tile tile-${this.props.type}`} />;
  }
}

export default Tile;
