import EventMap from 'eventmap';
import TileLogic from 'tilelogic';

const world = new EventMap();
world.state = new TileLogic(7, 3, ['tree', 'house', 'church', 'berries', 'tree', 'tree', 'house']);

export default world;
