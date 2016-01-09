import React, {Component} from 'react';
import GameObject from './GameObject';
import { tileToPixel, distanceBetween } from 'utils';

class Human extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ai: this.props.ai,
    }
  }
  
  render() {
    let position = tileToPixel(this);
    return <GameObject left={position.x} top={position.y}><img src="images/human.png" /></GameObject>
  }
}

export default Human;