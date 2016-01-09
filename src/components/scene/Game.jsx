import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Button from '../Button';
import Credits from '../Credits';
import Tilemap from '../Tilemap';
import Human from '../Human';
import HumanAI from '../HumanAI';
import { tileToPixel } from 'utils';

import World from 'store/World';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: 0,
      placement: '',
      humanAIs: [],
      tiles: World.state,
    };
  }

  componentDidMount() {
    this.spawnNewHuman();

    World.on('place', (x, y, type) => {
      let newState = React.addons.update(this.state, {
        tiles: {
          [x]: {
            [y]: {
              $set: type,
            },
          },
        },
      });

      this.setState(newState);
    });
    
    setInterval(() => {
      //this.state.humans.forEach((human) => {
        // somehow human move
      //})
    }, 100);
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

  spawnNewHuman() {
    this.state.humanAIs.push(new HumanAI())
    this.forceUpdate();
    console.log("spawned new human. humans:")
    console.log(this.state.humanAIs);
  }

  render() {
    let humans = this.state.humanAIs.map((human) => {
      let position = tileToPixel(human);
      return <Human x={position.x} y={position.y} />
    });
    console.log(humans);
    return (
      <Scene name="game">
        <div className="world">
          <Tilemap tiles={this.state.tiles} placement={this.state.placement} />
          {humans}
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
