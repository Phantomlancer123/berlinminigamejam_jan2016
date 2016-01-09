import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Button from '../Button';
import Credits from '../Credits';
import Tilemap from '../Tilemap';

import World from 'store/World';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: 0,
    };
  }

  render() {

    return (
      <Scene name="game">
        <div className="world">
          <Tilemap tiles={World.state} />
        </div>
        <Credits />
        <Button type="food" left={264} top={10} />
        <Button type="wood" left={352} top={10} />
        <Button type="destroy" left={440} top={10} />
      </Scene>
    );
  }
}

export default Bar;
