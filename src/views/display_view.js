const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(){

};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe("DisplayView:selected-planet", (event) => {
    const selectedPlanet = event;
    this.displayResult(selectedPlanet);
  });
};

DisplayView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector("section.planet-details");
  resultElement.textContent = `name: ${result.detail.name} | orbit: ${result.detail.orbit} | day: ${result.detail.day} | surface area: ${result.detail.surfaceArea} | volume: ${result.detail.volume} | gravity: ${result.detail.gravity} | moons: ${result.detail.moons}`;
};

module.exports = DisplayView;
