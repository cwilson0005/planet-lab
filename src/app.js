const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const MenuView = require('./views/menu_view.js');
const DisplayView = require('./views/display_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  
  const planetNav = document.querySelector('.planets-menu');
  const menu = new MenuView(planetNav);
  menu.bindEvents();

  const displayPlanet = new DisplayView();
  displayPlanet.bindEvents();
});
