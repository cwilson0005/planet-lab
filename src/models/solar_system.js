const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('MenuView:clicked-planet', (clickedItem) => {
    const planet = clickedItem.detail;
    PubSub.publish("DisplayView:selected-planet", planet);
  });
};

module.exports = SolarSystem;
