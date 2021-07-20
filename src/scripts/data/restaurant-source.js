/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log('list', responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log('detail', responseJson);
    return responseJson.restaurant;
  }
}

export default RestaurantsSource;
