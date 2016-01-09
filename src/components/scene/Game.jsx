import React, {Component} from 'react/addons';

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
      world: World,
    };
  }

  componentDidMount() {
    this.spawnNewHuman();

    World.on('spawnNewHuman', () => {
      this.spawnNewHuman();
    });

    const placementToType = (placement) => {
      switch (placement) {
        case 'food': return 'berries';
        case 'wood': return 'tree';
        default: return 'empty';
      }
    };

    World.on('add', ({x, y, type}) => {
      if (type === 'church' || type === 'house') {
        return;
      }

      let newType = 'empty';

      if (this.state.placement === 'food' && type === 'empty') {
        newType = 'berries';
      }

      if (this.state.placement === 'wood' && type === 'empty') {
        newType = 'tree';
      }

      if (placementToType(this.state.placement) === type) {
        return;
      }

      if ((type === 'berries' || type === 'tree') && this.state.placement === 'destroy') {
        newType = 'empty';
      }

      let newState = React.addons.update(this.state, {
        world: {
          state: {
            tile: {
              [x]: {
                [y]: {
                  $set: newType,
                },
              },
            },
          },
        },
      });
      
      this.state.world.placeTile(x, y, newType);

      this.setState(newState, () => {
        this.setState({
          placement: '',
        });
      });
    });

    setInterval(() => {
      this.state.humanAIs.forEach((human) => {
        human.tick();
        this.forceUpdate();
      })
    }, 100);
  }

  onChangeWorld = (what) => {
    return () => {
      if (this.state.placement) {
        if (this.state.placement === what) {
          this.setState({
            placement: '',
          });
        } else {
          this.setState({
            placement: what,
          });
        }
      } else {
        this.setState({
          placement: what,
        });
      }
    };
  }

  spawnNewHuman() {
    this.state.humanAIs.push(new HumanAI(5, 2, this.state.world))
    this.forceUpdate();
    console.log("spawned new human, #" + this.state.humanAIs.length);
  }

  render() {
    let humans = this.state.humanAIs.map((human) => {
      let position = tileToPixel(human);
      return <Human x={position.x} y={position.y} image={human.getImage()}/>
    });
    return (
      <Scene name="game">
        <div className="world">
          <Tilemap tiles={this.state.world.state} placement={this.state.placement} />
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
