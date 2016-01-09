import React, {Component} from 'react';
import GameObject from './GameObject';

class Human extends Component {
  constructor(props, world) {
    super(props);
    this.world = world;
    this.needsFood = new Need();
    this.needsHouse = new Need();
    this.hasHouse = false;
    this.food = new Resource();
    this.wood = new Resource();
    this.isAlive = true;
    this.action = null;
  }
  
  distanceTo(tile) {
    return 2; // TODO
  }
  
  moveTowards(tile) {
    // TODO;
  }
  
  tick() {
    if (!this.isAlive) {
      return;
    }
    this.needsFood.tick();
    this.needsHouse.tick();
    if (this.action == null) {
      if (this.needsFood.isCritical()) {
        this.action = new ActionGoToFood(this, this.world);
      } else if (this.needsHouse.isCritical()) {
        this.action = new ActionGoToWood(this, this.world);
      } else if (this.needsFood.isImportant()) {
        this.action = new ActionGoToFood(this, this.world);
      } else if (this.needsHouse.isImportant()) {
        this.action = new ActionGoToWood(this, this.world);
      } else {
        this.action = new ActionGoPray(this, this.world);
      }
    }
    this.action.perform(this, this.world);
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
  
  collect() {
    this.value++;
    if (this.value > this.max) {
      this.value = this.max;
      return true;
    } else {
      return false;
    }
  }
  
  consume() {
    this.value--;
    if (this.value < this.min) {
      this.value = this.min;
      return true;
    } else {
      return false;
    }
  }
}

class Action {
  perform(human, world) {
    return;
  }
}

class ActionGoToFood extends Action {
  perform(human, world) {
    let nearestFood = world.nearestFoodTo(human);
    if (human.distanceTo(nearestFood) < 1) {
      human.action = new ActionCollectFood(nearestFood);
    } else {
      human.moveTowards(nearestFood);
    }
  }
}

class ActionCollectFood extends Action {
  constructor(food) {
    this.food = food;
  }
  perform(human, world) {
    if (!human.food.collect()) {
      this.food.wasCollected();
      human.action = new ActionEatFood();
    }
  }
}

class ActionEat extends Action {
  perform(human, world) {
    human.needsFood.value--;
    if (!human.food.consume()) {
      human.action = null;
    }
  }
}

class ActionGoToWood extends Action {
  perform (human, world) {
    let nearestTree = world.nearestTreeTo(human);
    if (human.distanceTo(nearestTree) < 1) {
      human.action = new ActionCollectWood(nearestTree);
    } else {
      human.moveTowards(nearestTree);
    }
  }
}

class ActionCollectWood extends Action {
  constructor(tree) {
    this.tree = tree;
  }
  perform(human, world) {
    if (!human.wood.collect()) {
      this.tree.wasCollected();
      human.action = new ActionGoToEmptyTile(world);
    }
  }
}

class ActionGoToEmptyTile extends Action {
  constructor(world) {
    this.desiredTile = world.getEmptyTileForHouse();
  }
  perform(human, world) {
    if (human.distanceTo(this.desiredTile) < 1) {
      human.action = new ActionBuildHouse(this.desiredTile);
    } else {
      human.moveTowards(this.desiredTile);
    }
  }
}

class ActionBuildHouse extends Action {
  constructor(tile) {
    this.tile = tile;
  }
  perform(human, world) {
    world.buildHouse(tile);
    human.action = null;
  }
}

class ActionPray extends Action {
  perform (human, world) {
    if (human.distanceTo(world.churchTile) < 1) {
      world.pray();
    } else {
      human.moveTowards(world.churchTile);
    }
    human.action = null;
  }
}

export default Human;