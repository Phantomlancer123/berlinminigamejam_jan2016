import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Button from '../Button';
import Credits from '../Credits';
import Tilemap from '../Tilemap';

import World from 'store/World';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: 0,
      placement: '',
      tiles: World.state,
    };
  }

  componentDidMount() {
    
  }

  onChangeWorld = (what) => {
    return () => {
      if (this.state.placement) {
        this.setState({
          placement: '',
        });
      } else {
        this.setState({
          placement: what,
        });
      }
    };
  }

  render() {

    return (
      <Scene name="game">
        <div className="world">
          <Tilemap tiles={this.state.tiles} placement={this.state.placement} />
        </div>
        <Credits />
        <Button onClick={this.onChangeWorld('food')} type="food" left={264} top={10} />
        <Button onClick={this.onChangeWorld('wood')} type="wood" left={352} top={10} />
        <Button onClick={this.onChangeWorld('destroy')} type="destroy" left={440} top={10} />
      </Scene>
    );
  }
}

export default Game;
