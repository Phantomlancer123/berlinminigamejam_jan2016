import React, {Component} from 'react';
import Tile from './Tile';
import constants from 'constants';
import World from 'store/World';

class Tilemap extends Component {
  clickTile = (x, y, type) => {
    return () => {
      World.trigger('add', {x, y, type});
    };
  }

  render() {
    const style = {
      left: constants.tileOffsetX,
      top: constants.tileOffsetY,
    };

    const tiles = this.props.tiles.map((x, y, type) => {
      return <Tile onClick={this.clickTile(x, y, type)} key={`tile-x${x}-y${y}`} type={type} x={x} y={y} />;
    });

    let className = 'tilemap';
    if (this.props.placement) {
      className += ` placement placement-${this.props.placement}`;
    }

    return (
      <div className={className} style={style}>{tiles}</div>
    );
  }
}

export default Tilemap;
