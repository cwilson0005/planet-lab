const PubSub = require('../helpers/pub_sub.js');

const MenuView = function(element){
  this.element = element;
};

MenuView.prototype.bindEvents = function (){
  const menu = document.querySelector('.planets-menu');
  menu.addEventListener('click', (event) => {
    const clickedItem = event.target.id;
    console.log(clickedItem);
    PubSub.publish('MenuView:clicked-planet', clickedItem);
  });
};

module.exports = MenuView;
