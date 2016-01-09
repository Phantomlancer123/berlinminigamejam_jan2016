import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';

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
        <BackgroundImage src="images/world.png" />
        <Credits />
      </Scene>
    );
  }
}

export default Bar;
