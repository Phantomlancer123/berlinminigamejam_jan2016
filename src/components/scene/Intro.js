import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import World from 'store/World';

class Intro extends Component {
  switchToGame = () => {
    World.trigger('scene', 'Game');
  }

  render() {
    return (
      <Scene name="intro">
        <BackgroundImage onClick={this.switchToGame} src="images/intro.png" />
      </Scene>
    );
  }
}

export default Intro;
