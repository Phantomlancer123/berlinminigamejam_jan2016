import React, {Component} from 'react';
import Tile from './Tile';

class Tilemap extends Component {
  render() {
    const tiles = this.props.tiles.map((x, y, type) => {
      return <Tile tpye={type} x={x} y={y} />;
    });

    return (
      <div className="tilemap">{tiles}</div>
    );
  }
}

export default Tilemap;
