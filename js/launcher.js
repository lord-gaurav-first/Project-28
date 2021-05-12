class Launcher {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.8,
      length: 10
    }
    this.launcher = Constraint.create(options);
    World.add(world, this.launcher);
  }
  fly() {
  this.launcher.bodyA = null;
  }
}
