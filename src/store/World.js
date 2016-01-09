import EventMap from 'eventmap';
import TileLogic from 'tilelogic';

const world = new EventMap();
world.state = new TileLogic(11, 5);

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
