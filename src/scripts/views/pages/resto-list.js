/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
import RestaurantsSource from '../../data/restaurant-source';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const RestaurantsList = {
  async render() {
    return `
      <div class="content">
        <h2 tabindex="0" id="content__heading" class="content__heading">Restaurant List</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurants);
    });
  },
};

export default RestaurantsList;
