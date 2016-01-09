import constants from 'constants';

export default function({x, y}) {
  return {
    x: (x * constants.tileWidth) + constants.tileOffsetX,
    y: (y * constants.tileHeight) + constants.tileOffsetY,
  };
}
