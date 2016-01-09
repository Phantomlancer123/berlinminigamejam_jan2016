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
    return <GameObject left={this.props.x} top={this.props.y}><img src="images/human.png" /></GameObject>
  }
}

export default Human;