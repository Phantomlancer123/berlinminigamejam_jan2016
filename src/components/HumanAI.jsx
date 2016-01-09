import { tileToPixel, distanceBetween } from 'utils';

class HumanAI {
  constructor(x, y, world) {
    this.x = x;
    this.y = y;
    this.world = world;
    this.movementSpeed = 0.05;
    this.needsFood = new Need();
    this.needsHouse = new Need();
    this.hasHouse = false;
    this.food = new Resource();
    this.wood = new Resource();
    this.isAlive = true;
    this.action = null; 
  }
  
  moveTowards(tile) {
    if (this.x < tile.x) x += this.movementSpeed;
    else if (this.x > tile.x) x -= this.movementSpeed;
    if (this.y < tile.y) y += this.movementSpeed;
    else if (this.y > tile.y) y -= this.movementSpeed;
  }
  
  tick() {
    if (!this.isAlive) {
      return;
    }
    if (!this.needsFood.tick() || !(this.needsHouse.tick())) {
      this.alive = false;
      return;
    }
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
        if (Math.random() > 0.9) {
          this.world.spawnNewHuman();
        }
        this.action = new ActionGoPray(this, this.world);
      }
    }
    this.action.perform(this, this.world);
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
      this.value = this.max;
      return false;
    }
    return true;
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
    if (nearestFood == null) {
      human.action = null;
    }
    if (distanceBetween(human, nearestFood) < 1) {
      human.action = new ActionCollectFood(nearestFood);
    } else {
      human.moveTowards(nearestFood);
    }
  }
}

class ActionCollectFood extends Action {
  constructor(food) {
    super();
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
    if (nearestTree == null) {
      human.action = null;
    }
    if (distanceBetween(human, nearestTree) < 1) {
      human.action = new ActionCollectWood(nearestTree);
    } else {
      human.moveTowards(nearestTree);
    }
  }
}

class ActionCollectWood extends Action {
  constructor(tree) {
    super();
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
    super();
    this.desiredTile = world.getEmptyTileForHouse();
  }
  perform(human, world) {
    if (distanceBetween(human, this.desiredTile) < 1) {
      human.action = new ActionBuildHouse(this.desiredTile);
    } else {
      human.moveTowards(this.desiredTile);
    }
  }
}

class ActionBuildHouse extends Action {
  constructor(tile) {
    super();
    this.tile = tile;
  }
  perform(human, world) {
    world.buildHouse(tile);
    human.action = null;
  }
}

class ActionGoPray extends Action {
  perform (human, world) {
    if (distanceBetween(human, world.churchTile) < 1) {
      world.pray();
    } else {
      human.moveTowards(world.churchTile);
    }
    human.action = null;
  }
}

export default HumanAI;