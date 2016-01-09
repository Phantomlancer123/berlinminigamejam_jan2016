import React, {Component} from 'react';
import GameObject from '../GameObject';

class Tree extends Component {
  constructor(props, world) {
    super(props);
    this.world = world;
    this.woodLeft = 3;
  }
  
  render() {
    return <GameObject />;
  }
  
  wasCollected() {
    this.woodLeft--;
    if (this.woodLeft > 0) {
      this.world.destroyTile(this);
    }
  }
}

export default Tree;
