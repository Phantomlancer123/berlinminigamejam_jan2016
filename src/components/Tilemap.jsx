import React, {Component} from 'react';
import Tile from './Tile';
import constants from 'constants';

class Tilemap extends Component {
  render() {
    const style = {
      left: constants.tileOffsetX,
      top: constants.tileOffsetY,
    };

    const tiles = this.props.tiles.map((x, y, type) => {
      return <Tile type={type} x={x} y={y} />;
    });

    return (
      <div className="tilemap" style={style}>{tiles}</div>
    );
  }
}

export default Tilemap;
