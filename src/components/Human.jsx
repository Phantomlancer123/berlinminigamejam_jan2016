import React, {Component} from 'react';
import GameObject from './GameObject';

class Human extends Component {
  constructor(props) {
    super(props);
    this.needsFood = new Need();
    this.needsHouse = new Need();
    this.hasHouse = false;
    this.food = new Resource();
    this.wood = new Resource();
    this.isAlive = true;
    this.readyForNewAction = true;
  }
  
  tick() {
    if (!this.isAlive) {
      return;
    }
    this.needsFood.tick();
    this.needsHouse.tick();
    if (this.readyForNewAction) {
      if (this.needsFood.isCritical()) {
        // get food
      } else if (this.needsHouse.isCritical()) {
        // get house
      } else if (this.needsFood.isImportant()) {
        // get food
      } else if (this.needsHouse.isImportant()) {
        // get house
      } else {
        // pray
      }
    }
  }
  
  render() {
    return <GameObject />
  }
}

class Need {
  constructor() {
    this.min = 0;
    this.max = 100;
    this.value = 20;
    this.importantLevel = 50;
    this.criticalLevel = 85;
  }
  
  tick() {
    this.value++;
    if (this.value > this.max) {
      this.value = this.max);
    }
  }
  
  isImportant() {
    return this.value >= this.importantLevel && this.value < this.criticalLevel;
  }
  
  isCritical() {
    return this.value >= this.criticalLevel;
  }
}

class Resource {
  constructor() {
    this.min = 0;
    this.max = 10;
    this.value = 0;
  }
}

export default Human;