const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(){

};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe("DisplayView:selected-planet", (event) => {
    const selectedPlanet = event.detail;
    this.displayResult(selectedPlanet);
  });
};

DisplayView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector("section.planet-details");
  resultElement.textContent = result;
};

module.exports = DisplayView;
