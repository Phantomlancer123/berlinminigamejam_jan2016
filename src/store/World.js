import EventMap from 'eventmap';
import TileLogic from 'tilelogic';

const world = new EventMap();
world.state = new TileLogic();

export default world;
