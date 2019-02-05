const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('MenuView:clicked-planet', (clickedItem) => {
    const planetObject = this.findByName(clickedItem.detail);
    PubSub.publish("DisplayView:selected-planet", planetObject);
    console.log(planetObject);
  });
};

SolarSystem.prototype.findByName = function(planetName) {
  // loop through this.planets and return the correct planet object
  for (let planet of this.planets){
    if (planet.name === planetName){
      console.log(planet);
      return planet;
    }
  }
};

module.exports = SolarSystem;
