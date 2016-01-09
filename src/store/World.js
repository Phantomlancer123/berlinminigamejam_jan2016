import EventMap from 'eventmap';
import TileLogic from 'tilelogic';
import { distanceBetween, randomInt } from 'utils';

const worldWidth = 11;
const worldHeight = 5;
const world = new EventMap();
world.state = new TileLogic(worldWidth, worldHeight);

world.getChurchTile = function() {
  return {x: 5, y: 2};
}

world.pray = function() {
  this.prayerPoints++;
}

world.nearestFoodTo = function(human) {
  let nearestFood = null;
  let minDistance = 99999;
  world.state.each(function(x, y, tile) {
    if (tile != 'berries') return;
    let distance = distanceBetween(human, {x, y});
    if (distance < minDistance) {
      distance = minDistance;
      nearestFood = {x: x, y: y};
    }
  });
  return nearestFood;
}

world.nearestTreeTo = function(human) {
  let nearestTree = null;
  let minDistance = 99999;
  world.state.each(function(x, y, tile) {
    if (tile != 'tree') return;
    let distance = distanceBetween(human, {x, y});
    if (distance < minDistance) {
      distance = minDistance;
      nearestTree = {x: x, y: y};
    }
  });
  return nearestTree;
}

world.getEmptyTileForHouse = function() {
  let emptyTile = world.state.tile[0][0]
  while (emptyTile != 'empty') {
    let x = randomInt(0, worldWidth);
    let y = randomInt(0, worldHeight);
    emptyTile = {x: x, y: y};
  }
  return emptyTile;
}

world.placeTile = function(x, y, type) {
  world.state.tile[x][y] = type;
}

// Diamond shape
// Top half
world.state.tile[0][0] = 'blocked';
world.state.tile[0][1] = 'blocked';
world.state.tile[1][0] = 'blocked';
world.state.tile[1][1] = 'blocked';
world.state.tile[2][0] = 'blocked';
world.state.tile[3][0] = 'blocked';
world.state.tile[7][0] = 'blocked';
world.state.tile[8][0] = 'blocked';
world.state.tile[9][0] = 'blocked';
world.state.tile[10][0] = 'blocked';
world.state.tile[9][1] = 'blocked';
world.state.tile[10][1] = 'blocked';

// Bottom half
world.state.tile[0][3] = 'blocked';
world.state.tile[0][4] = 'blocked';
world.state.tile[1][3] = 'blocked';
world.state.tile[1][4] = 'blocked';
world.state.tile[2][4] = 'blocked';
world.state.tile[3][4] = 'blocked';
world.state.tile[4][4] = 'blocked';
world.state.tile[6][4] = 'blocked';
world.state.tile[7][4] = 'blocked';
world.state.tile[8][3] = 'blocked';
world.state.tile[8][4] = 'blocked';
world.state.tile[9][3] = 'blocked';
world.state.tile[9][4] = 'blocked';
world.state.tile[10][3] = 'blocked';
world.state.tile[10][4] = 'blocked';

world.state.tile[5][2] = 'church';

export default world;
