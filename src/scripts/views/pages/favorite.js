/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
import FavoriteRestaurantsIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorites Resto</h2>
        <section id="list-rest"></section>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list-rest');
    if (restaurants.length === 0){
      restaurantContainer.innerHTML = `
      You don't have any favorite restaurant
      `;
    }
    const totalRest = restaurants.length;
    restaurants.forEach((restaurant, index) => {
      restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurant, index, totalRest);
    });
  },
};

export default Like;
