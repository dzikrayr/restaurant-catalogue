/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantsIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantsIdb,
    restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
