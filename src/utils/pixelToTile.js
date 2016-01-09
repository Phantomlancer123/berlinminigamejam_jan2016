import constants from 'constants';

export default function({x, y}) {
  return {
    x: ~~((x - constants.tileOffsetX) / constants.tileWidth),
    y: ~~((y - constants.tileOffsetY) / constants.tileHeight),
  };
}
